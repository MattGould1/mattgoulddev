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
            <custom-header></custom-header>
          </v-col>
        </v-row>
        <v-row>
          <v-col offset-lg="2" offset-md="2" cols="12" sm="12" md="8" lg="8">
            <v-row>
              <v-col cols="12">
                <h2>About Me</h2>
                <p>
                  I love computers, my first passion with computers was playing
                  games. The first times I remember using a computer were to
                  play the very amazing (at the time at least) games on Windows
                  2000. When I truly fell in love with the computer was when I
                  inserted my brothers Red Alert 1 floppy disk and started
                  building bases, it would be an understatement to say that I
                  was obsessed.
                </p>
                <p>
                  This obsession continued as a child but it wasn't until I was
                  around 12 years old that I learnt you could create
                  applications for a computer yourself. I was playing an MMORPG
                  game called RuneScape, I won't bother explaining more most of
                  you know what that means. I ended up creating a drop tracker
                  for the game. It was a fairly simple program, every time you
                  received a drop it would log which drop it was and began to
                  workout the probability of receiving any particular drop. From
                  this point on, any time I had a problem that I thought could
                  be solved with a computer program, I would try to solve it.
                </p>
                <p>
                  My first job was completely unrelated to programming, my dad
                  was the owner of a construction company so I began working
                  with my dad. I still didn't realise at the time that I had any
                  actual skills in programming and didn't know it was an actual
                  job path. It wasn't until I was around 18 years old that I was
                  introduced to web development and found out that people would
                  pay for websites. I did a few small jobs for friends and
                  family but I knew this wasn't my path, the design aspect just
                  wasn't for me.
                </p>
                <p>
                  The first "proper" job I had relating to programming was was
                  working with a company called ITMarine LTD in 2015. They were
                  a fairly small company that had created in house tools for
                  ship brokerage firms. The technology was very dated but the
                  idea was cool. It was the first time that I thought to myself
                  that I could do this job forever. I loved working on data, for
                  me it was far easier to visualize than creating a UI/UX.
                </p>
                <p>
                  Since then I've worked with various companies picking up new
                  skills, and forgetting a ton of old skills. Now I'm looking to
                  take the next step. I want to find a startup that I can work
                  with and build the system from the ground up, with all the
                  risks that come with that.
                </p>
              </v-col>
              <v-col cols="12">
                <div class="d-flex justify-center">
                  <v-btn width="200px" class="mb-1" to="/" variant="tonal">
                    Home
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
