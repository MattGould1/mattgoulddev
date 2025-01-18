<script setup lang="ts">
definePageMeta({
  layout: "home",
});

const stars = 200;
const waves = 5;
</script>

<template>
  <main class="fill-height">
    <v-container class="bg fill-height" fluid>
      <v-container class="on-top">
        <v-row class="pt-8 text-center">
          <v-col cols="12">
            <custom-header> </custom-header>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="12" md="8" offset-md="2" lg="8" offset-lg="2">
            <v-row>
              <v-col cols="12">
                <h1>Latest Projects</h1>
              </v-col>
              <v-col cols="12">
                <h2>Pump Fun AI Bot</h2>
                <p>
                  Pump Fun AI Bot is a bot created using Node, Python, PG and
                  Tensorflow. The goal of the project is to be able to make real
                  world predictions about the
                  <a href="https://pump.fun" target="_blank">Pump.fun</a>
                  trading platform. Take a look at the links below for more
                  information.
                </p>
                <ul>
                  <li>
                    <a
                      href="https://github.com/MattGould1/pumpdotfun"
                      target="_blank"
                    >
                      PumpDotFun (client)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/MattGould1/pumpai"
                      target="_blank"
                    >
                      PumpAI (Tensorflow)
                    </a>
                  </li>
                </ul>
              </v-col>

              <v-col cols="12">
                <h2>LSWR CRM</h2>
                <p>
                  Full disclosure, my family run
                  <a href="https://londonsashwindows.com/" target="_blank"
                    >LSWR</a
                  >
                  and they asked me if I could build them an app that would
                  allow them to create digital surveys for their business. For
                  them, creating a survey involves going to a customers house
                  and walking from room to room, detailing what work needs to be
                  carried out on each window. Essentially, that's the core of
                  the system. They had obviously tried available CRMs and while
                  those helped manage contacts, it wouldn't help carrying out
                  surveys and couldn't be used to generate quotes and invoices
                  from surveys as these were not digitalized, which for them was
                  the main time sync of their admin, and could also be error
                  prone.
                </p>

                <p>
                  I built the system with AWS serverless architecture (Lambda,
                  DDB, AppSync, SQS (for data aggregation from DDB streams), S3,
                  CF, Cognito) and used NuxtJS for the frontend. Below is a link
                  to the development site, please send me an email for access.
                </p>
                <ul>
                  <li>
                    <a
                      href="https://d3ijcs47agcxxc.cloudfront.net/"
                      target="_blank"
                    >
                      https://d3ijcs47agcxxc.cloudfront.net/
                    </a>
                  </li>
                </ul>
              </v-col>
              <v-col cols="12">
                <div class="d-flex justify-center">
                  <v-btn width="200px" class="mb-1" color="pink" to="/about-me">
                    About Me
                  </v-btn>
                </div>
                <div class="d-flex justify-center">
                  <v-btn
                    width="200px"
                    class="mb-1"
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
                    >Substack</v-btn
                  >
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>

      <div class="wave-wrap">
        <div v-for="i in waves" :key="i" :class="`wave wave-${i}`"></div>
      </div>

      <div class="star-wrap">
        <div v-for="i in stars" :key="i" :class="`star star-${i}`"></div>
      </div>
    </v-container>
  </main>
</template>

<style lang="scss">
$COLOR_BG_DARK: hsl(200, 50%, 10%);
$COLOR_STAR: hsl(200, 100%, 90%);
$COLOR_SKY_TOP: hsla(200, 80%, 10%, 0.2);
$COLOR_SKY_BOTTOM: hsla(180, 50%, 35%, 0.3);

@mixin graduation($angle, $color1, $color2) {
  background: linear-gradient($angle, $color1, $color2);
}

@function boxShadow($color, $size1, $size2, $size3) {
  @return $color $size1 $size2 $size3;
}

@keyframes waveAnime {
  0% {
    transform: translate(-50%, -25%) rotateZ(0);
  }
  100% {
    transform: translate(-50%, -25%) rotateZ(var(--rotation));
  }
}

h4 {
  font-family: Tangerine;
}

.bg {
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 0;
  overflow: hidden;
  // padding: percentage(calc(3 / 16)) 0;
  @include graduation(180deg, $COLOR_SKY_TOP, $COLOR_SKY_BOTTOM);
}

.wave-wrap {
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.wave {
  position: absolute;
  width: 1000px;
  height: 600px;
  border-radius: 50%;

  $waveLength: 10;
  $waveBlur: 0;
  $borderWidth: 0;
  $animeSpeed: 0;

  &:nth-of-type(2n) {
    --rotation: 360deg;
    box-shadow: boxShadow(hsla(50, 50%, 60%, 0.2), 300px, 50px, 50px),
      boxShadow(hsla(110, 50%, 50%, 0.2), 25px, 200px, 50px),
      boxShadow(hsla(25, 50%, 40%, 0.3), -50px, 25px, 50px);
    transform: translate(-50%, -50%);
  }
  &:nth-of-type(2n + 1) {
    --rotation: -360deg;
    box-shadow: boxShadow(hsla(0, 50%, 60%, 0.3), 100px, 100px, 50px),
      boxShadow(hsla(160, 50%, 50%, 0.2), -25px, 100px, 150px),
      boxShadow(hsla(90, 50%, 40%, 0.3), 200px, -25px, 100px);
    transform: translate(-50%, -50%);
  }

  @for $i from 0 through $waveLength {
    $borderWidth: random(10) * 2;
    $animeSpeed: random(150) * 2s;
    &.wave-#{$i} {
      left: percentage(calc(random(75) / 100));
      top: percentage(calc(random(25) / 100));
      opacity: percentage(calc(random(4) / 10));
      border: $borderWidth + px solid transparent;
      animation: waveAnime $animeSpeed ease infinite;
    }
  }
}

.star-wrap {
  position: absolute;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.star {
  position: absolute;
  background: $COLOR_STAR;
  border-radius: 50%;

  $starLength: 100;
  $leftPosition: 0;
  $topPosition: 0;
  $starSize: 4px;
  $starOpacity: 0.2;
  @for $i from 0 through $starLength {
    $leftPosition: percentage(calc(random(100) / 100));
    $topPosition: percentage(calc(random(100) / 100));
    $starSize: random(3) + px;
    $starOpacity: percentage(calc(random(6) / 10));

    &.star-#{$i} {
      left: $leftPosition;
      top: $topPosition;
      width: $starSize;
      height: $starSize;
      opacity: $starOpacity;
    }
  }
}

.on-top {
  position: relative;
  z-index: 3;
}

p {
  margin-bottom: 16px;
}
</style>
