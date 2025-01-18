<template>
  <v-app>
    <v-app-bar>
      <template v-slot:image>
        <!-- <v-img
          gradient="to top right, rgba(10, 40, 80,.8), rgba(19,84,122,.8)"
        ></v-img> -->
      </template>

      <v-app-bar-title><v-btn to="/" icon="mdi-home"> </v-btn></v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn to="/blog/">Blog</v-btn>

      <v-btn to="/what-even-is-this/"> What even is this? </v-btn>
    </v-app-bar>

    <v-main>
      <slot />
    </v-main>

    <v-footer class="text-center d-flex flex-column">
      <social-icons></social-icons>

      <div class="pt-0">Carpe Diem</div>

      <v-divider></v-divider>

      <div>{{ new Date().getFullYear() }} — <strong>Matt Gould</strong></div>
    </v-footer>
  </v-app>
</template>
