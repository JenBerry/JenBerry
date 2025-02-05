<template lang="pug">
  <div>
    v-app.App
      a#home
      v-app-bar(density="compact")
        v-toolbar-title
          div
            v-img(:src="'/img/jjmb.png'" alt="JJMB" aspect-ratio="2/1" cover height="2rem" width="4rem")
        v-spacer
        v-btn(v-for="item in menu" v-show="mdAndUp" :href="item.link") {{ item.name }}
        v-app-bar-nav-icon(v-show="smAndDown" @click="showMenu = !showMenu")
      v-navigation-drawer(v-model="showMenu" location="right" temporary)
        v-list
          v-list-item(v-for="item in menu" :href="item.link")
            v-list-item-title {{item.name}}
  
      NuxtPage
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";
import { ref } from "vue";
const { mdAndUp, smAndDown } = useDisplay();
const showMenu = ref(false);

const menu = [
  { name: "Home", link: "#home" },
  { name: "Recent Projects", link: "#projects" },
  { name: "More Clients", link: "#clients" },
  { name: "Other Interests", link: "#interests" },
];
</script>

<style lang="scss" scoped></style>
