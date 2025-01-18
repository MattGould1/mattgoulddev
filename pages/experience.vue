<template>
  <main class="fill-height">
    <v-container class="bg fill-height" fluid>
      <v-row class="on-top text-center">
        <v-col cols="12">
          <custom-header> </custom-header>
        </v-col>
      </v-row>

      <v-row class="on-top">
        <v-col cols="12" sm="12" md="9">
          <h2>Experience</h2>
          <v-timeline side="end" align="start" density="compact">
            <v-timeline-item dot-color="pink" size="small">
              <div class="d-flex">
                <strong class="me-4"> Nov 2023 - </strong>
                <div>
                  <div><strong>Software Engineer (remote)</strong></div>
                  <strong
                    ><a href="https://bestreview.asia" target="_blank">
                      BestReview
                    </a></strong
                  >
                  <div class="text-caption">
                    <p>
                      My role at BR was to solve scaling issues and create an
                      external community review platform that could be bolted
                      onto their existing website but essentially, would become
                      its own entity later.
                    </p>
                    <p>
                      The scaling issues BR were facing were due to a mix of
                      code and infrastructure architecture. Code wise, their
                      website is a WP site with (many) plugins. These additional
                      plugins and theme being used meant that a single post page
                      would run as many as 150 queries to load. At peak time
                      this would often cause issues with their MySQL DB. The
                      solution here was to implement an effective caching
                      strategy. We moved from DO to AWS and began using
                      CloudFront, RDS, EC2 and ELB. The biggest impact was using
                      CloudFront and the implementation of a good cache
                      invalidation strategy that would only invalidate the
                      affected pages of an admin update.
                    </p>
                    <p>
                      The review platform was built with serverless
                      architecture. The backend used EC2, Lambda, Cognito, SQS,
                      SNS, DDB, CW, AppSync and API Gateway. I chose these
                      technologies for speed of development and lack of needing
                      a devops team to help maintain the system. The frontend
                      was integrated into the website using an IFrame and was
                      hosted using S3 and CF.
                    </p>
                  </div>
                </div>
              </div>
            </v-timeline-item>

            <v-timeline-item dot-color="pink" size="small">
              <div class="d-flex">
                <strong class="me-4">
                  Mar 2023
                  <br />
                  -
                  <br />
                  Jan 2020
                </strong>
                <div>
                  <div><strong>Software Engineer (remote)</strong></div>
                  <strong
                    ><a target="_blank" href="https://dathuis.nl"
                      >DatHuis</a
                    ></strong
                  >
                  <div class="text-caption">
                    <p>
                      DatHuis is an automation tool for real estate brokers
                      focusing on the Dutch real estate market.
                    </p>
                    <p>
                      At DatHuis I helped sign a no code filter language that
                      would allow brokers to create filters with boolean logic.
                      This was achieved with using ElasticSearch and GraphQL.
                    </p>
                    <p>
                      I created a transformation layer between our database
                      (DDB) and ElasticSearch that kept our ES models in sync
                      with our DB models that also allowed for custom mappings
                      on DB models on a DB model type basis. The outcome was
                      that we had full typescript support for ES and DDB models,
                      our ES models were prepared for mapping updates if and
                      when we wanted to include them. We could update a mapping
                      automatically using ES reindexing and multiple indexes.
                    </p>
                  </div>
                </div>
              </div>
            </v-timeline-item>

            <v-timeline-item dot-color="pink" size="small">
              <div class="d-flex">
                <strong class="me-4">
                  Nov 2020
                  <br />
                  -
                  <br />
                  Nov 2018
                </strong>
                <div>
                  <div><strong>Full Stack Developer (remote)</strong></div>
                  <strong>Saavu</strong>
                  <div class="text-caption">
                    <p>
                      When I joined Saavu in November 2018, Saavu was working on
                      an events management solution focusing at the time on
                      corporate events. However, we shortly pivoted from events
                      manage into micro payments. The idea was really good. I
                      watch YouTube, I want to support the creators I watch but
                      I do not want to give them all 1$ per month, maybe I want
                      to share 10$ over 100 creators. To do this, Saavu would
                      allow me to donate 10$ per month, and have this amount
                      equally divided over my selected creators.
                    </p>
                    <p>
                      Saavu was a small team and I had a lot of freedom to
                      choose technologies and learn new skills. I got my first
                      real professional experience setting up CI/CD pipelines in
                      GitLab, learning from some amazingly talented Frontend
                      developers. On a day to day basis, the core tech stack was
                      NodeJS (Express) in a microservices architecture, PG,
                      Zeit, Docker and NuxtJS.
                    </p>
                  </div>
                </div>
              </div>
            </v-timeline-item>

            <v-timeline-item dot-color="pink" size="small">
              <div class="d-flex">
                <strong class="me-4">
                  Oct 2018
                  <br />
                  -
                  <br />
                  Aug 2017
                </strong>
                <div>
                  <div><strong>Full Stack Developer (remote)</strong></div>
                  <strong>SailChecker</strong>
                  <div class="text-caption">
                    <p>
                      My role at SailChecker was to build an integration to
                      combine third party APIs to find yachts for rent. The core
                      tech stack at SailChecker when I joined was PHP (drupal),
                      MySQL and bare metal servers. As a team we created a
                      platform where customers could search the entire market to
                      find the best deals on yachts.
                    </p>
                    <p>
                      We built the third party API integration with Node, MySQL
                      and Vue for the frontend.
                    </p>
                  </div>
                </div>
              </div>
            </v-timeline-item>

            <v-timeline-item dot-color="pink" size="small">
              <div class="d-flex">
                <strong class="me-4">
                  Jul 2017
                  <br />
                  -
                  <br />
                  Mar 2016
                </strong>
                <div>
                  <div>
                    <strong>Full Stack Web Developer (remote/hybrid)</strong>
                  </div>
                  <strong>Dental Departures</strong>
                  <div class="text-caption">
                    <p>
                      I joined Dental Departures in March 2016. My role was
                      primarily as a backend web developer however I found
                      myself working on the frontend at times as well. I worked
                      on 3 large features during my time with Dental Departures.
                      I improved their existing search functionality by reducing
                      load times, and second to that, at the time you could only
                      search by clinic. I added the ability to search for
                      doctors and the clinics they worked in. This involved some
                      changes to their in house CRM as we did not want to
                      include all doctors by default, only selected doctors.
                    </p>
                    <p>
                      Next I helped work on SEO functionality, this was guided
                      by our in house SEO guru, I followed his lead and
                      implemented his plans for content.
                    </p>
                    <p>
                      I also worked on an in-house analytics program to workout
                      the cost of a lead. We had very long lead times ~6 months
                      and wanted to make sure we could attribute a lead back to
                      the correct source.
                    </p>
                    <p>
                      The core tech stack at DD were PHP (symfony), MySQL and
                      Ember.js
                    </p>
                  </div>
                </div>
              </div>
            </v-timeline-item>

            <v-timeline-item dot-color="pink" size="small">
              <div class="d-flex">
                <strong class="me-4">
                  Feb 2018
                  <br />
                  -
                  <br />
                  Dec 2015
                </strong>
                <div>
                  <div><strong>Web Developer (remote/hybrid)</strong></div>
                  <strong>The E-Commerce Workroom</strong>
                  <div class="text-caption">
                    <p>
                      E-Commerce Workroom was a web development agency, although
                      they took on other projects from time to time as well. My
                      role at E-Commerce Workroom ended up being very varied. I
                      ended up working on mobile projects involving Ionic
                      (Cordova at the time), web projects and even some embedded
                      engineering projects involving Arduinos.
                    </p>
                    <p>
                      I continued to collaborate with E-Commerce Workroom for
                      many years, I'd usually be getting paid to learn new
                      skills which was always an amazing opportunity :)
                    </p>
                  </div>
                </div>
              </div>
            </v-timeline-item>

            <v-timeline-item dot-color="pink" size="small">
              <div class="d-flex">
                <strong class="me-4">
                  Oct 2015
                  <br />
                  -
                  <br />
                  Aug 2015
                </strong>
                <div>
                  <div><strong>PHP Developer</strong></div>
                  <strong>ITMarine Ltd</strong>
                  <div class="text-caption">
                    <p>
                      ITMarine Ltd is a communication service for ship brokerage
                      companies. I joined ITM Ltd with a short term contract to
                      build a REST API in PHP. The goal of this API was to
                      intake market data from various sources and provide close
                      to real time aggregation of the different sources. The API
                      had to be designed in such a way that it could be consumed
                      by many frontend clients including Java, web and mobile.
                    </p>
                  </div>
                </div>
              </div>
            </v-timeline-item>

            <v-timeline-item dot-color="pink" size="small">
              <div class="d-flex">
                <strong class="me-4">
                  Jul 2014
                  <br />
                  -
                  <br />
                  Jan 2013
                </strong>
                <div>
                  <strong>
                    South Eastern Box Sash Windows - Full Stack Web Developer
                  </strong>
                  <div class="text-caption">
                    I joined South Eastern Box Sash Windows to create a network
                    of WordPress websites. The goal was to create a template
                    that would enable us to create a new website with ease. We
                    wanted to be able to start a Digital Ocean droplet and run a
                    single command to setup our desired WP configuration (themes
                    and plugins). We achieved the functionality mostly through a
                    bash script that would download resources and configure on
                    the fly.
                  </div>
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-col>

        <v-col cols="12" sm="12" md="3">
          <h1>Matt Gould</h1>

          <h2>Skills</h2>

          <v-chip-group column>
            <v-chip>AWS</v-chip>
            <v-chip>ElasticSearch </v-chip>
            <v-chip>DynamoDB</v-chip>
            <v-chip>Lambda</v-chip>
            <v-chip>AppSync</v-chip>
            <v-chip>Cognito</v-chip>
            <v-chip>SNS</v-chip>
            <v-chip>SQS</v-chip>
            <v-chip>CloudFront</v-chip>
            <v-chip>S3</v-chip>
            <v-chip>Serverless Framework</v-chip>
            <v-chip>NodeJS</v-chip>
            <v-chip>VueJS</v-chip>
            <v-chip>CapacitorJS</v-chip>
            <v-chip>Vuetify</v-chip>
            <v-chip>Nuxt</v-chip>
            <v-chip>Docker</v-chip>
            <v-chip>Bash</v-chip>
          </v-chip-group>

          <h2>Links</h2>
          <div class="d-flex justify-center">
            <v-btn width="200px" class="mb-1" color="pink" block to="/about-me">
              About Me
            </v-btn>
          </div>
          <div class="d-flex justify-center">
            <v-btn
              width="200px"
              class="mb-1"
              block
              to="/experience"
              variant="tonal"
            >
              Experience
            </v-btn>
          </div>
          <div class="d-flex justify-center">
            <v-btn
              width="200px"
              color="white"
              href="https://matthewfg.substack.com/p/"
              target="_blank"
              variant="tonal"
              block
              >Substack</v-btn
            >
          </div>
        </v-col>
      </v-row>

      <div class="wave-wrap">
        <div v-for="i in waves" :key="i" :class="`wave wave-${i}`"></div>
      </div>

      <div class="star-wrap">
        <div v-for="i in stars" :key="i" :class="`star star-${i}`"></div>
      </div>
    </v-container>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "home",
});

const stars = 200;
const waves = 5;
</script>
