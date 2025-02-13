<template lang="pug">
  v-sheet
    v-container
      section.mt-16
   
        h1.text-h4.text-md-h2.mb-2.text-center.pt-8 Jennifer J.M. Berry
        h2.text-h5.text-md-h3.mb-4.text-center.text-orange Senior Freelance Web Developer
        v-row.d-md-flex.flex-row-reverse.mt-8
          v-col(cols="12" md="4")
            v-img.rounded-circle.mx-auto(src="/public/img/JJMB_kalisti_sm.jpg" alt="Jennifer Berry" aspect-ratio="1" cover width="300")
            div.text-center.mt-8
              p
                span
                  a.text-orange-accent-1(href="mailto:jenberrymail@gmail.com") jenberrymail@gmail.com
              p
                span
                  a.text-orange-accent-1(href="tel:07999298382") 07999 298 382
              p
                span 
                  a.text-orange-accent-1(href="https://www.linkedin.com/in/jen-berry") LinkedIn
                span  | 
                span 
                  a.text-orange-accent-1(href="https://github.com/jenberry") Github
              p
                span Located near Exeter, UK
                br
                | (Remote & Hybrid ready)
          v-col(cols="12" md="8")
            div.text-center.text-md-left.pr-md-16
              p {{ description }}
            SkillsSection
            div.text-center.text-md-left
              h2.text-orange.mb-4.mt-16 Availability:
              p Available from 
                span.text-orange-accent-1 February 10th 2025 
                | onwards.
              p.mt-2 Seeking short-term contracts (up to 3 months).
              p.mt-2 Located near Exeter, UK (Remote & Hybrid ready)
              p.mt-8.text-uppercase
                | Note: 
                span.text-orange-accent-1 Not available for permanent or long-term full-time roles.
        
            div.text-center.text-md-left
              h2.text-orange.mb-4.mt-16 Education:
              v-img.mx-auto.mx-md-0(src="/public/img/logos/Cambridge_Logo.png" alt="University of Cambridge Logo" width="300")
              p 2.1 B.A. Hons. Cantab.
              p Natural Sciences 2009

      a#projects
      ProjectSection
      a#clients
      section.mt-16
        h3.text-h4.mb-4 More clients
        v-row(dense)
          v-col
            v-card.d-flex.align-center(theme="light" height="100%")
              template(#text)
                v-img(src="/img/logos/Wolf_and_Badger_Logo.jpg" alt="Wolf & Badger Logo")
          v-col
            v-card.d-flex.align-center(theme="light" height="100%")
              template(#text)
                v-img(src="/img/logos/Disney_Store_Logo.svg" alt="Disney Store Logo")
          v-col
            v-card.d-flex.align-center(theme="light" height="100%")
              template(#text)
                v-img(src="/img/logos/Bonhams_Logo.png" alt="Bonhams Logo")
        v-row(dense)
          v-col
            v-card.d-flex.align-center(theme="light" height="100%")
              template(#text)
                v-img(src="/img/logos/quru-logo.png" alt="Quru Logo")
          v-col
            v-card.d-flex.align-center(theme="light" height="100%")
              template(#text)
                v-img(src="/img/logos/Flicks_Logo.jpg" alt="Flicks Logo")
          v-col
            v-card.d-flex.align-center(theme="light" height="100%")
              template(#text)
                v-img(src="/img/logos/Huawei_Logo.png" alt="Huawei Logo")
        v-row(dense)
          v-col 
            v-card.d-flex.align-center(theme="light" height="100%")
              template(#text)
                v-img(src="/img/logos/Access_Pay_Logo.jpg" alt="Access Pay Logo")
          v-col 
            v-card.d-flex.align-center(theme="light" height="100%")
              template(#text)
                v-img(src="/img/logos/Defected_Logo.png" alt="Access Pay Logo")
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
          //- v-chip(href="https://joymittens.life" color="orange" append-icon="mdi-launch") JoyMittens.life


</template>
<script setup lang="ts">
const description =
  "Experienced Full-Stack Web Developer with expertise in Vue.js (Nuxt 3, Vue 2), Python (Flask), and Node.js (Express), with over a decade of international freelance expertise. Intelligent, quick to learn, and especially adept at bridging technical and graphical teams (left-brain / right-brain integration).";

useSeoMeta({
  title: "JJMB - Freelance Web Developer",
  description: description,
  ogDescription: description,
  ogTitle: "JJMB - Freelance Web Developer",
  ogImage: "https://jjmb.dev/img/JJMB_kalisti_sm.jpg",
  ogType: "website",
});
</script>
