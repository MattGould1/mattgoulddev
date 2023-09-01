<script setup lang="ts">
const router = useRouter();

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
  <v-app>
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>
