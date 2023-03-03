---
title: "Creating Full Text Search With Firestore"
description: "I recently recreated full text search using Firestore. I did this ."
tags:
  - code
  - firebase
  - serverless
createdDate: March 3, 2023
---

# Creating Full Text Search With Firestore

I needed to create a locations database that would allow my users to search for countries and cities using the name of the place. I used an open source database [https://github.com/dr5hn/countries-states-cities-database](https://github.com/dr5hn/countries-states-cities-database) which is rather good. It's not 100% accurate nor has all cities but is it open source, the accuracy is being improved and is actively maintained.

## Thinking of the API

The API for this service is straight forward and it looks similar to

```js
const results = await Axios.request({
  baseURL: "https://someUrl.com",
  url: "/locations",
  headers: {
    ["api-key"]: "value",
  },
  method: "GET",
  params: {
    search: "United",
  },
});
```

The result of the API is a mixture of countries and cities (not actual data, just my thoughts as of now).

```js
[
  { country_id: 1, name: "United Kingdom" },
  { country_id: 2, name: "United States" },
  { country_id: 3, name: "United Arab Emirates" },
  { country_id: 1, name: 'United Kingdom', city_id: 1, city_name: 'Kingston', }
  ...etc,
];
```

## Implementing the search

The hard part was actually the search. I'm cheap, I wanted this service to be free. I could have signed up to the various 12 month free AWS, Azure, GCP etc packages but those are only free for 12 months. Services within the 12 month free tier often include Elasticsearch (Opensearch in AWS) and Angolia. Instead I decided to use services that are marked as "always free".

I ended up settling with Firebase and using Firestore and Firebase functions. First on the functions, nothing too special here they are simple serverless functions. The documentation for Firebase is good and getting started with the functions was super straight forward. The Firebase CLI is great for developing locally as well - overall good experience.

The interesting part is Firestore. I needed to be able to do a full text search, which isn't offered out of the box with Firestore.

Currently as of writing this (March 3rd, 2023) Firestore offers the following query operators

- < less than
- <= less than or equal to
- == equal to
- > greater than
- > = greater than or equal to
- != not equal to
- array-contains
- array-contains-any
- in
- not-in

No full text search options :(, at least not without additional work.

Given a country name like `United Kingdom` we need to be able to search and find the country with search terms similar to

- `united`
- `king`
- `ed king`
- etc...

All of these `terms` should return at least `United Kingdom` and potentially other results.

## Creating terms from location names

To be able to search with terms, the location names need to become terms as well. In my firebase collection I created an object called `searchFields` which contains `terms` and other fields not applicable to this blog. `terms` is an array of terms created using the location name.

Let's take a location with a small name as an example: `Iran`. Before we begin to think about breaking this location name down into search terms we need to normalize the data. Our process is 1. perform ascii folding, remove spaces and lowercase the string. This turns `Iran` into `iran`. Case sensitivity matters in Firestore queries.

```ts
// https://www.npmjs.com/package/fold-to-ascii
import * as foldToAscii from "fold-to-ascii";

const asciiFolder = (str: string): string =>
  foldToAscii
    // foldMaintaining maintains ascii characters that have no replace e.g. 🤧
    .foldMaintaining(str)
    // Remove all spaces to create one long string
    .replace(/\s/g, "")
    // Lowercase
    .toLocaleLowerCase() as string;

export default asciiFolder;
```

Okay cool, now with this utility function we have our location name ready to be split into terms. We need to create every combination that the user might search for. Given our example of `iran` the terms should be

```js
["i", "ir", "r", "ira", "ra", "a", "iran", "ran", "an", "n"];
```

This means if I search for

- ran
- an
- ira
- etc...

I will find at least `Iran`

```ts
const createSearchTerms = (str: string): Array<string> => {
  const terms: Array<string> = [];

  /**
   * Pass through the string one character at a time
   */
  for (let i = 0; i <= str.length; i++) {
    const termsLength = i + 1;
    if (i === str.length) break;

    /**
     * At each step of the string, generate the next set of terms. e.g.
     *
     * str: 'hey'
     * set one: 'h', 'e', 'y',
     * set two: 'he', 'ey',
     * set three: 'hey'
     * outcome: ['h', 'e', 'y', 'he', 'ey', 'hey']
     */
    generateTermsLoop: for (let n = 0; n <= str.length; n++) {
      if (n >= termsLength) break generateTermsLoop;
      terms.push(str.slice(n, termsLength));
    }
  }

  return Array.from(new Set(terms));
};

export default createSearchTerms;
```

The function `createSearchTerms` will take a location name and turn it into search terms to be stored within Firestore.

## Firebase functions

Great, at this point we've got how our API should look, we have a way to normalize our data and then create the search terms for full text search. Now we need to create some Firebase functions to add locations and then implement a Firebase function to act as our API.

### Adding Locations

```ts
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as countries from "./data/countries.json";
import createSearchTerms from "./utils/createSearchTerms";
import asciiFolder from "./utils/asciiFolder";

admin.initializeApp();

export const addLocation = functions.https.onRequest(async (_, response) => {
  for (const location of locations) {
    const data = {
      id: location.id,
      name: location.name,
    };
    const searchFields = {
      terms: createSearchTerms(asciiFolder(location.name)),
    };

    await admin.firestore().collection("locations").add({
      data,
      searchFields,
    });
  }

  response.json({ result: "Added Locations" });
});
```

In my case adding locations was a one time deal. If I need to apply updates etc, I will need to `get` the location first and update the record if it exists. Anyway, the import part is that we have a collection name `locations` and inside of this we store documents that have `data` and `searchFields`. I split these up so that when querying the data I can select only `data` excluding any data used to search with.

### Retrieving locations

Now we need our API. All of our location names are normalized, this means we need to do the same for searching. This is useful as it lets the user input upper case, various ascii characters etc and still get relevant results. Then we use the `searchFields.terms` that was created earlier along with the `array-contains` query operator giving us our full text search.

`array-contains` will return every document where the search key has a value that matches the search value. In our case, we create an array of terms that covers how users will search for data.

```ts
export const getLocation = functions.https.onRequest(
  async (request, response) => {
    const asciiFoldedSearch = asciiFolder(
      request.query.search?.toString() ?? ""
    );

    const results = await admin
      .firestore()
      .collection("locations")
      .where("searchFields.terms", "array-contains", asciiFoldedSearch)
      .select("data")
      .get();

    response.json({ result: results.docs });
  }
);
```

## Limitations

### Document size

The biggest limitation to this method is that longer strings (paragraphs) will create search terms that are too long to store in Firestore. Firestore has a maximum limit to the document size which is 1mb.

### Word order

We create search terms by concating the location name into one long string and removing spaces. That means searching for `Kingdom United` will not return `United Kingdom`.

If we wanted to support finding location names by using words in any order, we might think about using `array-contains-any`. We need to modify things slightly, rather than removing spaces in a location name, we would split the location name on spaces and create search terms for each individual word. We would need to do the same to the search query.

The reason I didn't go with this approach is that `array-contains-any` uses a logical OR. That means If I search for `United France` I would find `United Kingdom`, `United States` and `France` and more. I didn't want this, user will be forced to search for the location in the correct word order.

There is an additional limit to this approach and that is `array-contains-any` allows a maximum of 30 comparisons which quickly get eaten up when searching for even a short string like `United`.

## Conclusion

I don't know how well (if at all) my approach is going to work, but as of now it's giving me exactly what I had hoped for. The response times are very fast, the results are relevant and the price is free.
