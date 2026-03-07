<template lang="pug">
  <div>
    v-app.App
      a#home
      v-app-bar.d-print-none(density="compact")
        v-toolbar-title
          div
            v-img(v-if="hdr" :src="'/img/jjmb-hdr.avif'" alt="JJMB" aspect-ratio="2/1" cover height="2rem" width="4rem")
            v-img(v-else :src="'/img/jjmb.png'" alt="JJMB" aspect-ratio="2/1" cover height="2rem" width="4rem")
        v-spacer
        v-btn(v-for="item in menu" v-show="mdAndUp" :href="item.link") {{ item.name }}
        v-row.flex-grow-0.h-100.mx-4
          v-col.h-100.pa-3
            a.h-100(href="https://www.linkedin.com/in/jen-berry" target="_blank" rel="noopener noreferrer")
                img.h-100(src="/public/img/skills/linkedin.svg" alt="LinkedIn")
          v-col.h-100.pa-3
            a.h-100(href="https://github.com/jenberry" target="_blank" rel="noopener noreferrer")
                img.h-100(src="/public/img/skills/github.svg" alt="GitHub")
        v-app-bar-nav-icon(v-show="smAndDown" @click="showMenu = !showMenu")
      v-navigation-drawer.d-print-none(v-model="showMenu" location="right" temporary)
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

const hdr = ref(false);
let hdrQuery: MediaQueryList;

const handleHdrChange = (e: MediaQueryListEvent) => {
  hdr.value = e.matches;
};

onMounted(() => {
  hdrQuery = window.matchMedia("(dynamic-range: high)");
  hdr.value = hdrQuery.matches;
  hdrQuery.addEventListener("change", handleHdrChange);
});

onBeforeUnmount(() => {
  if (hdrQuery) {
    hdrQuery.removeEventListener("change", handleHdrChange);
  }
});

const menu = [
  { name: "Home", link: "#home" },
  { name: "Projects", link: "#projects" },
  { name: "More Clients", link: "#clients" },
  { name: "Other Interests", link: "#interests" },
];
</script>

<style lang="scss" scoped></style>
