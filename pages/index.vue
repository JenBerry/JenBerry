<template lang="pug">
  v-sheet
    v-container
      section.d-flex.flex-column.justify-center.align-center(style="min-height:100vh")
  
        div
   
          h1.text-h4.text-md-h2.mb-2.text-center.pt-16 Jen Berry
          h2.text-h5.text-md-h3.mb-4.text-center.text-orange Web Development

        div
          v-img.rounded-circle.mx-auto(v-if="hdr" src="/public/img/JJMB_kalisti_sm-hdr.avif" alt="Jennifer Berry" aspect-ratio="1" cover width="300")
          v-img.rounded-circle.mx-auto(v-else src="/public/img/JJMB_kalisti_sm.jpg" alt="Jennifer Berry" aspect-ratio="1" cover width="300")

        div.text-center.w-lg-66.mx-auto
          p.text-h5.text-md-h4.pt-8.pb-8 Building Modern Reactive Web Applications.

        div.text-center.w-75.w-md-100.pb-8
          v-row.d-flex.justify-center.flex-wrap
            v-col.d-flex.flex-column.justify-space-between.align-center(cols="3" md="2" lg="1")
              v-img.w-75.mb-3(src="/public/img/skills/vue.svg")
              span.text-body-2 Vue.js
            v-col.d-flex.flex-column.justify-space-between.align-center(cols="3" md="2" lg="1")
              v-img.w-75.mb-3(src="/public/img/skills/nuxt.svg")
              span.text-body-2 Nuxt.js
            v-col.d-flex.flex-column.justify-space-between.align-center(cols="3" md="2" lg="1")
              v-img.w-75.mb-3(src="/public/img/skills/typescript.svg")
              span.text-body-2 Type Script
            v-col.d-flex.flex-column.justify-space-between.align-center(cols="3" md="2" lg="1")
              v-img.w-75.mb-3(src="/public/img/skills/gsap.svg")
              span.text-body-2 GSAP.js
            v-col.d-flex.flex-column.justify-space-between.align-center(cols="3" md="2" lg="1")
              v-img.w-75.mb-3(src="/public/img/skills/sass.svg")
              span.text-body-2 Sass
            v-col.d-flex.flex-column.justify-space-between.align-center(cols="3" md="2" lg="1")
              v-img.w-75.mb-3(src="/public/img/skills/python.svg")
              span.text-body-2 Python
            v-col.d-flex.flex-column.justify-space-between.align-center(cols="3" md="2" lg="1")
              v-img.w-75.mb-3(src="/public/img/skills/flask.png")
              span.text-body-2 Flask
            v-col.d-flex.flex-column.justify-space-between.align-center(cols="3" md="2" lg="1")
              v-img.w-75.mb-3(src="/public/img/skills/postgres.svg")
              span.text-body-2 Postgres
            v-col.d-flex.flex-column.justify-space-between.align-center(cols="3" md="2" lg="1")
              v-img.w-75.mb-3(src="/public/img/skills/gcp.svg")
              span.text-body-2 GCP
            v-col.d-flex.flex-column.justify-space-between.align-center(cols="3" md="2" lg="1")
              v-img.w-75.mb-3(src="/public/img/skills/docker.svg")
              span.text-body-2 Docker



        div.text-center.mt-8
            p.d-flex.flex-column.flex-md-row.ga-md-4.justify-center.align-center
              span
                a.text-orange-accent-1(href="mailto:jenberrymail@gmail.com") jenberrymail@gmail.com

              span.d-none.d-md-inline | 

            
              span
                a.text-orange-accent-1(href="tel:00447999298382") +44 7999 298 382

            p.d-flex.flex-column.flex-md-row.ga-md-4
              span Located near Exeter, UK 
          
              span (Remote & Hybrid ready)
        
      section
        div.text-center.text-md-left.mt-16
          h2.text-orange.mb-4.mt-16 Experience:
          p.text-h4 15+ years
        div.text-center.text-md-left
          h2.text-orange.mb-4.mt-16 Education:
          v-img.mx-auto.mx-md-0.d-print-none(src="/public/img/logos/Cambridge_Logo.png" alt="University of Cambridge Logo" width="300")
          p Cambridge University.
          p 2.1 B.A. Hons. Cantab. - Natural Sciences 2009

        SkillsSection

        


      a#projects
      ProjectSection
      a#clients
      section.mt-16
        h3.text-h4.mb-4 More clients
        v-row(dense)
          v-col
            v-card.d-flex.align-center(theme="light" height="100%")
              template(#text)
                v-img(src="/img/logos/Disney_Store_Logo.svg" alt="Disney Store Logo")
          v-col
            v-card.d-flex.align-center(theme="light" height="100%")
              template(#text)
                v-img(src="/img/logos/quru-logo.png" alt="Quru Logo")
          v-col 
            v-card.d-flex.align-center(theme="light" height="100%")
              template(#text)
                v-img(src="/img/logos/Defected_Logo.png" alt="Access Pay Logo")
        v-row(dense)
          v-col 
            v-card.d-flex.align-center(theme="light" height="100%")
              template(#text)
                v-img(src="/img/logos/Access_Pay_Logo.jpg" alt="Access Pay Logo")
          v-col 
            v-card.d-flex.align-center(theme="light" height="100%")
              template(#text)
                v-img(src="/img/logos/Think_Logo.svg" alt="Think Pay Logo")
      a#references
      section.my-16
        h3.text-h4.mb-4 References 
        p.text-orange Available on request:
        ul.ml-8
          li ISTA
          li Flicks
          li Agora
          li Blueheart
          li LV=
          li Bonhams
          li Quru
          li Wolf & Badger
      a#interests
      section.my-16
        h3.text-h4.mb-4 Other Interests 
        p To give you more of a rounded idea of who I am as a person.
        div.d-flex.flex-wrap.ga-2.mt-2
          v-chip 
            code Conscious Intimacy Festivals & Retreats
          v-chip
            code Spiritual development & Shamanism
          v-chip 
            code Painting
          v-chip 
            code Travelling 
          v-chip 
            code Forests & Rivers
          v-chip 
            code Off grid communities
      div.mb-16
        p Looking for a skilled web developer for your next project? 
          span.text-orange-accent-1 Let’s chat!
        p.pb-16 Contact Me: 
          a.text-orange-accent-1(href="mailto:jenberrymail@gmail.com") jenberrymail@gmail.com 
          | | 
          a.text-orange-accent-1(href="tel:00447999298382") +44 7999 298 382


</template>
<script setup lang="ts">
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

// const data = useFetch("https://craft.ddev.site/api", {
//   method: "post",
//   body: { query: graphqlQuery, vairables: { id: "test_id" } },
// });
</script>
