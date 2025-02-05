<template lang="pug">
  v-sheet
    v-container
      section.mt-16
   
        h1.text-h4.text-md-h2.mb-2.text-center.pt-8 Jennifer J.M. Berry
        h2.text-h5.text-md-h3.mb-4.text-center.text-orange Freelance Web Developer
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
            div.text-center.text-md-left.mt-16
              h2.text-orange.mb-4.mt-8 Key Skills:
              h3
                code Node
              div.d-flex.flex-wrap.ga-2.justify-center.justify-md-start.mt-2
                v-chip 
                  code TypeScript
                v-chip 
                  code Vue3
                v-chip
                  code Nuxt3
                v-chip 
                  code SPA
                v-chip 
                  code SSR
              h3.mt-4
                code Python
              div.d-flex.flex-wrap.ga-2.justify-center.justify-md-start.mt-2
                v-chip 
                  code Flask
                v-chip
                  code SQLAlchemy
                v-chip
                  code API
                v-chip
                  code Security
                v-chip
                  code Pytest
              h3.mt-4
                code Front End
              div.d-flex.flex-wrap.ga-2.justify-center.justify-md-start.mt-2
                v-chip 
                  code HTML
                v-chip
                  code CSS
                v-chip
                  code SASS
                v-chip
                  code JavaScript
                v-chip
                  code Responsive Design
                v-chip
                  code GDPR
                v-chip
                  code SEO
                v-chip
                  code SVG Animations
              h3.mt-4
                code Web Builders
              div.d-flex.flex-wrap.ga-2.justify-center.justify-md-start.mt-2
                v-chip 
                  code Kajabi
                v-chip
                  code Webflow
                v-chip
                  code Squarespace
                v-chip
                  code Wix
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
      section.mt-16
        h3.text-h4.mb-8.pt-4.text-center.text-md-left Recent Projects
        div.d-flex.ga-4.flex-column.flex-md-row.align-md-center
          span Filter By:
          div
            v-btn(variant="tonal" @click="category = category == 'Coding' ? '' : 'Coding'" :active="category == 'Coding'" active-color='orange' block) Coding Projects
          div
            v-btn(variant="tonal" @click="category = category == 'Web Builder' ? '' : 'Web Builder'" :active="category == 'Web Builder'" active-color="orange" block) Web Builder Projects
        ProjectCard(
          v-if="category === '' || category === 'Coding'",
          title="International School of Temple Arts"
          subtitle="Ongoing part-time/ad-hoc work 2019 - present"
          imageDesktop="/img/ista/home_desktop_1440.webp"
          imageMobile="/img/ista/home_mobile_390.webp"
          category="Coding"
          :animate="true"
          logo="/img/logos/ISTA_Logo.svg"
        )
          ul.pl-4
            li Built and maintained a fully responsive web app 
              span.text-orange-accent-1 SPA 
              | using
              span.text-orange-accent-1 Vue3 
              | / 
              span.text-orange-accent-1 Nuxt3
              | .
            li And a 
              span.text-orange-accent-1 Python 
              | / 
              span.text-orange-accent-1 Flask API 
              | connected to a 
              span.text-orange-accent-1 Postgres 
              | database.
            li Including a 
              span.text-orange-accent-1 custom CMS 
              | for managing events, website content and user accounts.
            li Implemented 
              span.text-orange-accent-1 JWT 
              | authentication.
            li Optimised server-side rendering (
              span.text-orange-accent-1 SSR
              | ) for performance.
            li Enhanced web security by addressing 
              span.text-orange-accent-1 OWASP 
              | top 10 vulnerabilities and 
              span.text-orange-accent-1 GDPR
              |.
            li Deployed the application on 
             span.text-orange-accent-1 Google Cloud Services 
             | (Cloud Run and Cloud SQL).
            li Integrated self-hosted 
             span.text-orange-accent-1 Umami analytics 
             | for cookiless user tracking.
        ProjectCard(
          v-if="category === '' || category === 'Web Builder'",
          title="Cyrus Wild"
          subtitle="Built website in Kajabi - 2024"
          imageDesktop="/img/cyrus/cyrus_home_desktop_1440.webp"
          imageMobile="/img/cyrus/cyrus_home_mobile_390.webp"
          category="Web Builder"
          :animate="true"
          logo="/img/logos/Cyrus_Wild_Logo.png"
        )
          ul.pl-4
            li Designed and developed a mobile-friendly website using 
              span.text-orange-accent-1 Kajabi
              | .
            li Collaborating with a designer and brand manager to meet aesthetic and functional requirements.
            li Creating personality quiz with 
              span.text-orange-accent-1 Typeform 
              | and automating results with 
              span.text-orange-accent-1 Zapier
              | .
        ProjectCard(
          v-if="category === '' || category === 'Web Builder'",
          title="The Field"
          subtitle="Built festival website in Squarespace - 2023"
          videoDesktop="/img/the_field/The_Field_Desktop.webm"
          videoMobile="/img/the_field/The_Field_Mobile.webm"
          category="Web Builder"
          logo="/img/logos/The_Field_Logo.png"
        )
          ul.pl-4
            li Designed and developed a mobile-friendly website using 
              span.text-orange-accent-1 Squarespace
              | .
            li Designed web graphics to display festival facilitators
            li integrated with 
              span.text-orange-accent-1 Ticket Tailor 
              | to sell tickets
        ProjectCard(
          v-if="category === '' || category === 'Web Builder'",
          title="Blueheart"
          subtitle="Animated website in Webflow - 2021 & 2022"
          videoDesktop="/img/blueheart/blueheart-desktop.webm"
          videoMobile="/img/blueheart/blueheart-mobile-trim.webm"
          category="Web Builder"
          logo="/img/logos/Blueheart_Logo.png"
        )
          ul.pl-4
            li Updated and enhanced the web interface using 
              span.text-orange-accent-1 Webflow
              | .
            li Leveraging advanced 
              span.text-orange-accent-1 CSS 
              | knowledge for complex designs and animations.
        ProjectCard(
          v-if="category === '' || category === 'Coding'",
          title="Agora"
          subtitle="Video conferencing web app - 2021 - 2022"
          videoDesktop="/img/agora/agora_short.mp4"
          category="Coding"
          logo="/img/logos/Agora_Logo.png"
        )
          ul.pl-4
            li Developed the user interface for an interactive video conferencing platform (Agora).
            li Using 
              span.text-orange-accent-1 Jitsi 
              | video conferencing API, 
              span.text-orange-accent-1 Vue.js
              |, 
              span.text-orange-accent-1 Node.js
              |, 
              span.text-orange-accent-1 Express.js
              |, and 
              span.text-orange-accent-1 Sockets
              |.
            li Allowing highly customisable video chat rooms including a "caberet" mode where multiple chat rooms or "tables" can be watching the same broadcast, while interacting only with the people on their "table" - for example to discuss the show. This allows for a more personal and connecting experience.
            li Cusomisable appearance with background and video overlay images for an immersive experience.
        ProjectCard(
          v-if="category === '' || category === 'Coding'",
          title="LV="
          subtitle="Web development - 2018"
          imageDesktop="/img/LV/LV_desktop_original.jpg"
          imageMobile="/img/LV/LV_mobile.jpg"
          category="Coding"
          logo="/img/logos/LV_Logo.png"
        )
          ul.pl-4
            li Contributed to a front-end development team for one of the UK’s largest insurance companies.
            li Utilised 
              span.text-orange-accent-1 React.js 
              | and 
              span.text-orange-accent-1 ES6 
              | for interactive web features integrated with 
              span.text-orange-accent-1 Sitecore CMS.
            li Delivered high-quality 
              span.text-orange-accent-1 SVG animations 
              | and ensured cross-browser compatibility.
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
                v-img(src="/img/logos/Bond_and_coyne_logo.jpg" alt="Bond & Coyne Logo")
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
const category = ref("");
const description =
  "Experienced front-end-focussed full-stack web developer with over a decade of international freelance expertise. Intelligent, quick to learn, and especially adept at bridging technical and graphical teams (left-brain / right-brain integration).";

useSeoMeta({
  title: "JJMB - Freelance Web Developer",
  description: description,
  ogDescription: description,
  ogTitle: "JJMB - Freelance Web Developer",
  ogImage: "/public/img/JJMB_kalisti_sm.jpg",
  ogType: "website",
});
</script>
