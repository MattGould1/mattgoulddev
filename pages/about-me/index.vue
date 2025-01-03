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
          <v-col offset-lg="2" offset-md="2" cols="12" sm="12" md="8" lg="8">
            <v-row>
              <v-col cols="12">
                <h2>About Me</h2>
                <p>
                  I've always found it challenging to write about myself. I'm
                  never sure what it is that others would really want to know.
                  I'll keep this short and sweet.
                </p>
                <p>
                  I was born in the United Kingdom (just), at the time that my
                  mum was pregnant, my parents were living in France. I believe
                  that my mum wanted to return to the UK to give birth. I spent
                  some time in France as a baby but I don't have any
                  recollection of this time and my French language skills are
                  non-existent :).
                </p>
                <p>
                  My parents returned to the UK in my early childhood and I had
                  a pretty typical upbringing in a middle class family.
                </p>
                <p>
                  As I got a little older I got more into computers which was
                  when I reflect on it, probably a contributing reason to me
                  gaining weight as a child and teenager. It wasn't until my 20s
                  that I figured out how to lose weight. In my case, since I
                  have a huge appetite the short and sweet of it was finding low
                  calorie foods that I enjoyed and could eat lots of and feel
                  satisfied.
                </p>
                <p>
                  As my passion for computers grew, I slowly found out that I
                  could create my own applications. I forget exactly how I
                  learnt that I could program applications but I do remember
                  that the first real application that I created was a drop
                  tracker for an MMORPG game that I was playing. Overtime I
                  learnt more languages, typically higher level languages and
                  usually what languages and tools I picked were simply suited
                  to the task at hand.
                </p>

                <p>
                  Nowadays I still love computers but I've found a balance
                  between computers and getting outside and I've found myself
                  become addicted to exercise. When I'm not at the computer
                  there's a very good chance that I'm doing exercise and as my
                  son is getting older, playing with my son.
                </p>
              </v-col>
              <v-col cols="12">
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
                  <v-btn width="200px" color="white" to="/blog" variant="tonal"
                    >Blog</v-btn
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
