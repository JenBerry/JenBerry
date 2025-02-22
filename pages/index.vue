<template lang="pug">
  v-sheet
    v-container
      section.mt-16
   
        h1.text-h4.text-md-h2.mb-2.text-center.pt-8 Jennifer J.M. Berry
        h2.text-h5.text-md-h3.mb-4.text-center.text-orange Full Stack Web Developer
        
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
              p Full-Stack Web Developer with with over a decade of international freelance expertise specialising in JavaScript/TypeScript (Nuxt 3, Vue 3), Python (Flask), and Node.js (Express) as well as pixel perfect responsive HTML and CSS.
              p.mt-4 As an adaptable, self-sufficient developer with a proven ability to quickly master new technologies and deliver results in dynamic environments, I thrive in fast-paced, high-impact projects—delivering quality code, seamless user experiences, and strong collaboration within agile teams.
              p.mt-4 Intelligent, quick to learn, and especially adept at bridging technical and creative teams (left-brain / right-brain integration). 

            SkillsSection
            div.text-center.text-md-left
              h2.text-orange.mb-4.mt-16 Availability:
              p.text-uppercase
                span.text-orange-accent-1 Available Immediately
              p.mt-2 Seeking
              ul.ml-8
                li Short-term / intermittent contracts (up to 3 months).
                li Or long term part-time remote contracts.
              p.mt-2 📍 Located near Exeter, UK (Remote & Hybrid ready)
              p.mt-8
                span.text-uppercase Note: 
                span.text-orange-accent-1 Contract only via my Ltd Company - Not open to PAYE or salaried roles.
        
            div.text-center.text-md-left
              h2.text-orange.mb-4.mt-16 Education:
              v-img.mx-auto.mx-md-0.d-print-none(src="/public/img/logos/Cambridge_Logo.png" alt="University of Cambridge Logo" width="300")
              p Cambridge University.
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


</template>
<script setup lang="ts">
const description =
  "Experienced Full-Stack Web Developer specializing in Vue/Nuxt, Flask, and Node.js. Building high-performance, scalable web applications with pixel-perfect design and secure architectures. Available for short-term contracts.";

useSeoMeta({
  title: "JJMB - Freelance Web Developer",
  description: description,
  ogDescription: description,
  ogTitle: "JJMB - Freelance Web Developer",
  ogImage: "https://jjmb.dev/img/JJMB_kalisti_sm.jpg",
  ogType: "website",
  ogUrl: "https://jjmb.dev",
  ogSiteName: "JJMB - Freelance Web Developer",
  ogLocale: "en_GB",
});
</script>
