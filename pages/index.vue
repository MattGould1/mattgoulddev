<script setup lang="ts">
definePageMeta({
  layout: "home",
});

const stars = 200;
const waves = 5;

const icons = [
  { link: "https://github.com/MattGould1", icon: "mdi-github" },
  { link: "https://gitlab.com/MatthewGould123", icon: "mdi-gitlab" },
  {
    link: "https://www.linkedin.com/in/matt-g-05248910b/",
    icon: "mdi-linkedin",
  },
];
</script>

<template>
  <main class="fill-height">
    <v-container class="bg fill-height" fluid>
      <v-container class="on-top">
        <v-row class="pt-8 text-center">
          <v-col cols="12">
            <h1>Matt Gould</h1>
            <h4>Software Engineer - Father - Based In Thailand</h4>
            <v-btn
              v-for="icon in icons"
              :key="icon.icon"
              class="mx-4"
              :icon="icon.icon"
              :href="icon.link"
              target="_blank"
              variant="text"
              size="large"
            ></v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="12" md="8" lg="8">
            <v-row>
              <v-col cols="12">
                <h2>About Me</h2>
                <p>
                  I've always enjoyed using computers and playing games and
                  that's how I got started with programming. The first programs
                  I created were for a game called RuneScape. The programs were
                  very simple, along the lines of ways to keep track of your
                  in-game drops and then workout how common drops were. I coded
                  these first programs in
                  <a href="https://en.wikipedia.org/wiki/Visual_Basic_(.NET)"
                    >Visual Basic</a
                  >, which was the first language I ever used. From that point
                  on I was hooked, whenever I ran into a problem I wanted to
                  solve, I just taught myself how to do it.
                </p>
              </v-col>
              <v-col cols="12">
                <p>
                  I'm currently working on a project called
                  <a target="_blank" href="https://spicy.dating">Spicy Dating</a
                  >. I've been working on Spicy Dating since march 2023. Dating
                  is seriously saturated there's tons of competition but having
                  met my wife online using the competition, I believe online
                  dating can be done better. I want to improve on the relevancy
                  of matches. I want to improve on communication and I want to
                  reduce the cost to open online dating up to millions. That's
                  the goal anyway.
                </p>
              </v-col>
              <v-col cols="12">
                <p>
                  I'm not on social media. I love having discussions but only if
                  the goal is to be genuine and listen and try to understand
                  where people are coming from. I don't think those types of
                  discussions happen regularly on social media.
                </p>
              </v-col>
              <v-col cols="12">
                <p>
                  When I'm not at the computer, you'll find me biking up hills,
                  running, lifting weights, swimming and stretching. I'm very
                  into fitness.
                </p>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="12" md="4" lg="4">
            <v-btn class="mb-1" to="/blog" variant="tonal" block>Blog</v-btn>
            <v-btn class="mb-1" to="/experience" variant="tonal" block>
              Experience
            </v-btn>
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
    $animeSpeed: random(15) * 2s;
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
</style>
