<template lang="pug">
  <div>
    v-app.App
      a#home
      v-app-bar.d-print-none(density="compact")
        v-toolbar-title
          div
            v-img(v-if="hdr" :src="'/img/jjmb-hdr-sm.avif'" alt="JJMB" aspect-ratio="2/1" cover height="2rem" width="4rem")
            v-img(v-else :src="'/img/jjmb-sm.png'" alt="JJMB" aspect-ratio="2/1" cover height="2rem" width="4rem")
        v-spacer
        v-btn(v-for="item in menu" v-show="mdAndUp" :href="item.link") {{ item.name }}
        v-row.flex-grow-0.h-100.mx-4.contact-icons
          v-col.h-100.pa-3
            a.h-100(href="https://www.linkedin.com/in/jen-berry" target="_blank" rel="noopener noreferrer")
                img(src="/img/linkedin.svg" alt="LinkedIn" width="24px" height="24px" )
          v-col.h-100.pa-3
            a.h-100(href="https://github.com/jenberry" target="_blank" rel="noopener noreferrer")
                img(src="/img/github.svg" alt="GitHub" width="24px" height="24px")
          v-col.h-100.pa-3
            a.h-100(href="https://wa.me/447999298382" target="_blank" rel="noopener noreferrer")
                img(src="/img/whatsapp.svg" alt="WhatsApp" width="24px" height="24px")
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

const description =
  "Experienced Full-Stack Web Developer specializing in Vue/Nuxt, Flask, and Node.js. Building high-performance, scalable web applications with pixel-perfect design and secure architectures. Available for short-term contracts.";

useSeoMeta({
  title: "Jen Berry - Freelance Web Developer",
  description: description,
  ogDescription: description,
  ogTitle: "Jen Berry - Freelance Web Developer",
  ogImage: "https://jjmb.dev/img/jen-berry-web-developer.jpg",
  ogType: "website",
  ogUrl: "https://jjmb.dev",
  ogSiteName: "Jen Berry - Freelance Web Developer",
  ogLocale: "en_GB",
  twitterCard: "summary_large_image",
});

useSchemaOrg([
  definePerson({
    name: "Jen Berry",
    jobTitle: "Freelance Web Developer",
    description: description,
    url: "https://jjmb.dev",
    image: "https://jjmb.dev/img/JJMB_kalisti_sm.jpg",
    sameAs: [
      "https://github.com/jenberry",
      "https://www.linkedin.com/in/jen-berry",
    ],
  }),
]);
</script>

<style lang="scss" scoped>
.contact-icons {
  a img {
    transition: filter 0.1s;
  }
  a:hover {
    img {
      filter: drop-shadow(0px 0px 5px rgb(255, 209, 128));
    }
  }
}
</style>
