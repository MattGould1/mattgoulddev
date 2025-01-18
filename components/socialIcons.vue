<template>
  <div>
    <v-btn
      v-for="icon in icons"
      :key="icon.icon"
      :icon="icon.icon"
      :href="icon.link"
      target="_blank"
      variant="text"
      size="large"
    ></v-btn>
  </div>
</template>

<script lang="ts" setup>
const icons = ref([
  { link: "https://github.com/MattGould1", icon: "mdi-github" },
  { link: "https://gitlab.com/MatthewGould123", icon: "mdi-gitlab" },
  {
    link: "https://www.linkedin.com/in/matt-g-05248910b/",
    icon: "mdi-linkedin",
  },
  {
    link: "https://matthewfg.substack.com/p/",
    icon: "mdi-post",
  },
]);
</script>
