<template lang="pug">
  section.mt-16
    h3.text-h4.mb-8.pt-4.text-center.text-md-left Recent Projects
    div.d-flex.ga-4.flex-column.flex-md-row.align-md-center.d-print-none
      span Filter By:
      div
        v-btn(variant="tonal" @click="category = category == 'Coding' ? '' : 'Coding'" :active="category == 'Coding'" active-color='orange' block) Coding Projects
      div
        v-btn(variant="tonal" @click="category = category == 'Web Builder' ? '' : 'Web Builder'" :active="category == 'Web Builder'" active-color="orange" block) Web Builder Projects
    ProjectCard(
      v-if="category === '' || category === 'Coding'",
      title="International School of Temple Arts"
      subtitle="Full Stack Development 2019 - present"
      imageDesktop="/img/ista/home_desktop_1440.webp"
      imageMobile="/img/ista/home_mobile_390.webp"
      category="Coding"
      :animate="true"
      logo="/img/logos/ISTA_Logo.svg"
    )
      p Developing and maintaining a full-featured content management platform with a Nuxt 3 web app and a Flask-based REST API.
      ul.pl-4
        li 
          strong.text-orange-accent-1 Nuxt 3 (Vue 3) Frontend: 
          | Authentication system, content management, rich text editing (TipTap), image optimization, security enhancements, and analytics integration.
        li 
          strong.text-orange-accent-1 Flask API Backend: 
          | Role-based authentication, database management (PostgreSQL), file storage (Google Cloud), newsletter/email integrations, caching, and CI/CD (GitHub Actions).
        li 
          strong.text-orange-accent-1 Infrastructure: 
          | Dockerized, deployed on Google Cloud, with separate production and development environments.
      p.mt-2 This project showcases my expertise in full-stack development, API design, security best practices, and scalable cloud deployments.
      p.mt-2
        strong.text-orange-accent-1 Technical Skills:
      ul.pl-4
        li 
          strong Frontend Development: 
          | Nuxt 3, Vue 3, Pinia, TypeScript, SCSS
        li 
          strong Backend Development: 
          | Flask, Python, PostgreSQL
        li 
          strong API Development: 
          | RESTful API design, authentication & authorization, caching, rate limiting
        li 
          strong Security: 
          | Role-based access control (RBAC), JWT Authentication, nuxt-security, secure headers, API security best practices
        li 
          strong Cloud & Infrastructure: 
          | Google Cloud Platform (GCP), Google Cloud Storage, Docker, CI/CD with GitHub Actions
        li 
          strong Testing & QA: 
          | Vitest (frontend), pytest (backend)
        li 
          strong Third-Party Integrations: 
          | Mailchimp, Mandrill (email), Google Analytics, Umami, Simple Analytics
        li 
          strong Performance & Optimization: 
          | Image processing (@nuxt/image), server-side compression
        li 
          strong Content Management & UI Components: 
          | TipTap (rich text editor), dynamic dashboards, authentication panel
        v-btn.mt-4(href="https://ista.life" target="_blank" rounded="xl" color="orange" variant="flat")  View Live Website

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
        v-btn.mt-4(href="https://cyruswild.com" target="_blank" rounded="xl" color="orange" variant="flat")  View Live Website
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
        li Designed web graphics in 
          span.text-orange-accent-1 Photoshop 
          | to display festival facilitators
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
        v-btn.mt-4(href="https://blueheart.io" target="_blank" rounded="xl" color="orange" variant="flat")  View Live Website
    ProjectCard(
      v-if="category === '' || category === 'Coding'",
      title="Agora"
      subtitle="Virtual Event Platform (Vue.js & Node.js) - 2021 & 2022"
      videoDesktop="/img/agora/agora_short.mp4"
      category="Coding"
      logo="/img/logos/Agora_Logo.png"
    )
      p Developed a 
        strong Vue.js-based web application 
        | for hosting virtual events with real-time user interaction and video conferencing.
      ul.pl-4
        li
          strong.text-orange-accent-1 Vue.js (v2) Frontend: 
          | Virtual event spaces, real-time user presence, dynamic UI components.
        li
          strong.text-orange-accent-1 Node.js Backend: 
          | Express API, MySQL database, authentication, and event configuration via JSON.
        li
          strong.text-orange-accent-1 Real-Time Features: 
          | Integrated Socket.IO for live user interaction and Jitsi for video conferencing.
      p.mt-2 This project demonstrates my ability to build interactive real-time applications, integrate live communication tools, and create scalable event-based platforms.
      p.mt-2
        strong.text-orange-accent-1 Technical Skills:
      ul.pl-4
        li 
          strong Frontend Development: 
          | Vue.js (v2), Vuex, SCSS
        li 
          strong Backend Development: 
          |  Node.js, Express, MySQL
        li 
          strong Real-Time Communication: 
          | WebSockets, Socket.IO
        li 
          strong Third-Party Integrations: 
          | Jitsi (video conferencing)
        li 
          strong Configuration Management: 
          |JSON-based event customization
        v-btn.mt-4(href="https://hello.atypiclabs.com/" target="_blank" rounded="xl" color="orange" variant="flat")  View Live Website
    
    ProjectCard(
      v-if="category === '' || category === 'Coding'",
      title="Flicks"
      subtitle="Movie & Entertainment Platform - 2019-2020"
      videoDesktop="/img/flicks/flicks-desktop.webm"
      videoMobile="/img/flicks/flicks-mobile.webm"
      category="Coding"
      logo="/img/logos/Flicks_Logo.jpg"
    )
      p Developed features for Flicks, a multi-region movie platform serving New Zealand, Australia, South Africa, and the UK. Built with Node.js (Express.js) and Pug templating, the platform delivers movie listings, streaming service integrations, and user watchlists. Enhanced user experience with a mobile-first, responsive design.
      p.mt-2
        strong.text-orange-accent-1 Technical Skills:
      ul.pl-4
        li Frontend: Pug (templating), HTML, SCSS, JavaScript, Responsive/Mobile-First Design
        li Backend: Node.js, Express.js
        li Streaming & Content: Movie Listings, Streaming Service Integrations (Netflix, Stan), Sports Content
        li Design: Zeplin
        li Project Management: Asana

    
    ProjectCard(
      v-if="category === '' || category === 'Coding'",
      title="LV="
      subtitle="React.js frontend & Sitecore CMS - 2018"
      imageDesktop="/img/LV/LV_desktop_original.jpg"
      imageMobile="/img/LV/LV_mobile.jpg"
      category="Coding"
      logo="/img/logos/LV_Logo.png"
    )
      ul.pl-4
        li Front-end development for one of the UK’s largest insurance companies.
        li Utilised 
          span.text-orange-accent-1 React.js 
          | and 
          span.text-orange-accent-1 ES6 
          | for interactive web features integrated with 
          span.text-orange-accent-1 Sitecore CMS.
        li Delivered high-quality 
          span.text-orange-accent-1 SVG animations 
          | and ensured cross-browser compatibility.
        v-btn.mt-4(href="https://www.lv.com" target="_blank" rounded="xl" color="orange" variant="flat")  View Live Website

    ProjectCard(
      v-if="category === '' || category === 'Coding'",
      title="Wolf & Badger"
      subtitle="E-Commerce Platform Frontend Development 2016 - 2018"
      category="Coding"
      logo="/img/logos/Wolf_and_Badger_Logo.png"
      videoDesktop="/img/wolf_and_badger/wolf-and-badger-desktop.mp4"
      videoMobile="/img/wolf_and_badger/wolf-and-badger-mobile.webm"
    )
      p Worked on Wolf & Badger’s e-commerce platform, a Django-based marketplace for designer products. Built with Mezzanine CMS, the platform supported multi-currency transactions, international shipping, and custom dashboards for designers and store management. Contributed to frontend development, ensuring a responsive, visually polished user experience.
      p.mt-2
        strong.text-orange-accent-1 Technical Skills:
      ul.pl-4
        li Frontend: HTML, CSS, JavaScript, jQuery, SCSS, Responsive Design
        li Backend: Django (Python), Mezzanine CMS, PostgreSQL
        li Third-Party Integrations:  Cloudinary
    ProjectCard(
      v-if="category === '' || category === 'Coding'",
      title="Bond & Coyne"
      subtitle="Responsive Website Development - 2016"
      videoDesktop="/img/bond_and_coyne/bndandcoyne.webm"
      videoMobile="/img/bond_and_coyne/bond-and-coyne-mobile.webm"
      category="Coding"
      logo="/img/logos/Bond_and_coyne.png"
    )
      p Developed a responsive website for a branding agency using modern frontend and templating technologies.
      ul.pl-4
        li 
          strong.text-orange-accent-1 Frontend: 
          | Built with Foundation 6 for responsive UI components and grid-based layouts.
        li 
          strong.text-orange-accent-1 Templating & Backend: 
          | Structured PHP rendering with Twig for modular and maintainable templates.
        li 
          strong.text-orange-accent-1 Build System: 
          | Used Gulp for SASS compilation, asset processing, and frontend automation.
        li 
          strong.text-orange-accent-1 Dependency Management: 
          | Integrated Bower (frontend) and Composer (PHP) for package management.
        li 
          strong.text-orange-accent-1 Collaboration: 
          | Developed as a freelance project to be later integrated into Craft CMS by the agency’s backend team.
      p.mt-2 This project showcases my ability to build responsive, modular, and scalable frontend solutions with modern tooling and templating engines.
      p.mt-2
        strong.text-orange-accent-1 Technical Skills:
      ul.pl-4
        li Frontend Development: Foundation 6, SCSS, HTML, JavaScript
        li Templating & Backend: PHP, Twig
        li Build & Automation: Gulp, Node.js
        li Dependency Management: Composer (PHP), Bower (Frontend)
        li Responsive Design & UI: Grid-based layouts, mobile-first development
      v-btn.mt-4(href="https://github.com/JenBerry/bondandcoynewebsite" target="_blank" rounded="xl" color="orange" variant="flat")  View Code on Github
    ProjectCard(
      v-if="category === '' || category === 'Coding'",
      title="Huawei"
      subtitle="Huawei Consumer Website – Front-End Development 2016"
      category="Coding"
      logo="/img/logos/Huawei-Logo.svg"
      imageDesktop="/img/huawei/Huawei-1.png"
    )
      p Developed responsive, multi-language product pages for Huawei’s consumer website, for the launch of flagship devices: the P9 and P9 Plus. Built a component-based template system using Node.js (Express.js) and SCSS, with a Gulp-powered build pipeline for live development, asset optimization, and minified production builds.
      p.mt-2
        strong.text-orange-accent-1 Technical Skills:
      ul.pl-4
        li Frontend: SCSS, JavaScript, Component-Based Architecture
        li (Development Environment): Node.js, Express.js
        li Build & Optimization: Gulp (Live Reload, SCSS Compilation, Minification, Image Optimization)
        li Localization: Multi-Language Support (page-builder.js)
    ProjectCard(
      v-if="category === '' || category === 'Coding'",
      title="Bonhams"
      subtitle="Bonhams Auction Platform – Full-Stack Development 2014-2015"
      category="Coding"
      logo="/img/logos/Bonhams_Logo.png"
      imageDesktop="/img/bonhams/bonhams-desktop.jpg"
      imageMobile="/img/bonhams/bonhams-mobile.jpg"
    )
      p Worked on the Bonhams.com auction platform, designing the responsive site based on the existing desktop site. It was a Django and Angular.js-based application supporting sales, auctions, valuations, and payments. The platform used Dockerized microservices, a PostgreSQL database, REST APIs, Redis caching, Celery for background tasks, and Sphinx for search.
      p.mt-2
        strong.text-orange-accent-1 Technical Skills:
      ul.pl-4
        li Frontend: Angular.js, JavaScript, Responsive Design
        li Backend: Django (Python), PostgreSQL


</template>

<script lang="ts" setup>
const category = ref("Coding");
</script>

<style lang="scss"></style>
