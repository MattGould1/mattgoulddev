---
title: "Enabling GitLab VS Code Suggestions"
description: "A quick guide to enabling GitLab code suggestions (and why it's worth your time to enable)"
tags:
  - code
createdDate: July 2, 2023
---

# Why Should You Enable Code Suggestions?

I've been using GitLab code suggestions for a while now and I have to admit, I was a late adopter because I was skeptical as to whether the code suggestions would be useful. I had a bit of spare time though and just decided, why not set it up? I would say that was a great investment and I've been genuinely surprised by how good the code suggestions are.

I've tried to write what the feeling of having code suggestions is and the term that comes to mind is `pair programmer` but it's not quite that. There's two ways that code suggestion seems to be useful, as you're writing your code if you pause for a second code suggestions will suggest a way to continue. I find these suggestions to be a lot more patchy, it's hard for the AI to know what the end goal is. The second and I think most useful way to use code suggestion is by writing a comment.

A simple example of how comments work would be a simple function to capitalize the first letter of a string using JS code suggestions. My comment was `// Capitalize string` - pretty vague. The suggestion was:

```js
export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(
```

As you can see, it's not perfect because it's missing the key ingredient of `.slice(1)` but it was pretty trivial for me to finish the function off.

```js
export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
```

Yes, it isn't a complex function and yes the suggestion wasn't perfect but this was just a simple example I created while writing this article.

Which leads me to the second reason you probably want code suggestions. It's great at boilerplate code. Yeah sure there's keyboard shortcuts for stuff, some stuff is just easy to type but anything that removes the monotony of boilerplate code gets a win from me.

# Requirements for GitLab Code Suggestions

You'll need a few things got GitLab code suggestions

- A [GitLab account](https://gitlab.com/)
- [VS Code](https://code.visualstudio.com/)
- [GitLab Workflow VS code extension](https://docs.gitlab.com/ee/user/project/repository/vscode.html)

Note: GitLab code suggestions ONLY works within GitLab repositories. You can't enable the code suggestions and then use a GitHub, BitBucket etc project (they probably have their own tools though).

# Getting Started

We're making the assumption that you know how to install a VS code extension and update the settings of that extension. If you are totally new to VS code, you probably want to learn some of the basics and then come back after.

## Generate a GitLab Personal Access Token

Open a browser and

- Log into [GitLab](https://gitlab.com/)
- Navigate to [Access Tokens](https://gitlab.com/-/profile/personal_access_tokens)
- Enter a name for your token, probably code_suggestions
- Set an expiration date (or not) for your token
- Give the token `read_api` and `read_user` permissions
- Click `Create personal access token`
- Copy your access token, and you won't be able to view or access the token again, but if you ever do lose it, delete this one and create a new one

## Install the GitLab Workflow Extension

Open VS code and

- Navigate to VS code extensions and search for GitLab Workflow and hit install
- Use the command palette to add an access token to your GitLab account (command + shift + p) and search for `GitLab: Add Account to VS Code`.
- Enter your GitLab instance, unless you're running your own GitLab instance, this will be `https://gitlab.com/`
- Enter your personal access token

Your GitLab Workflow extension will now be connected with your GitLab account.

## Enabling Code Suggestions

Code suggestions as of writing is in beta and you need to enable the setting in the GitLab Workflow extension. To enable the setting

- Open the extensions tab (command + shift + x)
- Find GitLab WorkFlow extensions an click the cog icon and choose `extension settings`
- In the extensions page find `Gitlab › Ai Assisted Code Suggestions: Enabled` and sure the checkbox is tick

## Testing Code Suggestions

Okay we're done. Open up a project that uses GitLab as the repository and open a file with a [supported language](https://docs.gitlab.com/ee/user/project/repository/code_suggestions.html).

Code suggestions will appear after you stop typing for a second or so. Write a simple comment like `// Multiply numbers` and you will be suggested a solution in a second or so. To accept the suggestion hit the `tab` key. Hit any other key to ignore the suggestion. In my case the suggestion was

```js
export const multiply = (a: number, b: number) => {
  return a * b;
};

// Sum
```

Really simple comment but pretty decent solution, not sure why it added the `// Sum` comment after but I guess it will get better with time :)
