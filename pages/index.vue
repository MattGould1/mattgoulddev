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
            <h4>Software Engineer - Based In Thailand</h4>
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
                  Ever since a kid I've loved using computers and playing games,
                  which is how I got started with programming. As a kid I played
                  a lot of games but got heavily into a game called RuneScape,
                  an MMORPG and I began to create small programs, I guess you
                  could say plugins, to improve the game. Most of the plugins
                  were very simple for example ways to track drops from monsters
                  and such. I coded these first programs in
                  <a href="https://en.wikipedia.org/wiki/Visual_Basic_(.NET)"
                    >Visual Basic</a
                  >. From that point on, whenever I ran into a problem I'd try
                  to write a program to help fix it.
                </p>
              </v-col>
              <v-col cols="12">
                <p>
                  I have a few aspirations in life that I'd like to help people
                  with. First on the list is that I'd like to create something
                  that would help people get healthy. Be that physically by
                  losing weight, gaining weight, exercising more or eating a
                  better diet or mentally. Next on my list is education, I'd
                  like to teach people what I know (computers) and finally I
                  want to help people find a partner in life. It's a bit of a
                  random list and if you want to learn a bit about each, read
                  here.
                </p>
                <p>
                  Currently I'm working on a project called
                  <a target="_blank" href="https://spicy.dating">Spicy Dating</a
                  >. I've been working on Spicy Dating since March 2023. Dating
                  is saturated, there's tons of competition but having met my
                  wife online using the competition, I believe that online
                  dating can be done better. Right now, I think online dating is
                  almost a scam. You have to pay obscene amounts of money and
                  data suggests that there's only a few winners. I want to
                  reduce the cost to open online dating up to millions and
                  create an algorithm that actually matches people who might get
                  along, with no funny business in the middle. That's the goal
                  anyway.
                </p>
              </v-col>
              <v-col cols="12">
                <p>
                  You won't find me on social media. I love having discussions
                  but only when the goal of the discussion is to be honest,
                  listen and try to learn something from each other. Most online
                  conversations seem to be about `winning` and in the end, those
                  conversations are a waste of time.
                </p>
              </v-col>
              <v-col cols="12">
                <p>
                  I love to exercise. When I'm not at the computer, there's a
                  good chance I'll be on my bike, running, lifting weights,
                  swimming or stretching. I'm probably a little too
                  <a
                    target="_blank"
                    href="https://en.wikipedia.org/wiki/Neurobiological_effects_of_physical_exercise#Euphoria"
                    >addicted</a
                  >, when I miss a day I feel quite depressed.
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
