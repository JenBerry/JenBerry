<template lang="pug">
  section.mt-16
    h3.text-h4.mb-8.pt-4.text-center.text-md-left Projects
    div.d-flex.ga-4.flex-column.flex-md-row.align-md-center.d-print-none
      span Filter By:
      div
        v-btn(variant="tonal" @click="category == 'Coding' ? setCategory('') : setCategory('Coding')" :active="category == 'Coding'" active-color='orange' block) Coding Projects
      div
        v-btn(variant="tonal" @click="category == 'Web Builder' ? setCategory('') : setCategory('Web Builder')" :active="category == 'Web Builder'" active-color="orange" block) Web Builder Projects
      div
        v-btn(variant="tonal" @click="setCategory('')" :active="category == ''" active-color="orange" block) Show All
    
    ProjectCard(
      v-for="project in filteredProjects"
      :key="project.id"
      v-bind="project"
    )
</template>

<script lang="ts" setup>
interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string[];
  content: string;
  imageDesktop?: string;
  imageMobile?: string;
  videoDesktop?: string;
  videoMobile?: string;
  animate?: boolean;
  logo?: string;
  buttonUrl?: string;
  buttonText?: string;
}

const projects: Project[] = [
  {
    id: "ista",
    title: "International School of Temple Arts",
    subtitle: "Full Stack Development 2019 - present",
    imageDesktop: "/img/ista/home_desktop_1440.webp",
    imageMobile: "/img/ista/home_mobile_390.webp",
    category: ["Coding", "Nuxt3.js", "Flask.py"],
    animate: true,
    logo: "/img/logos/ISTA_Logo.svg",
    buttonUrl: "https://ista.life",
    buttonText: "View Live Website",
    content: `
Developing and maintaining a full-featured content management platform with a Nuxt 3 web app and a Flask-based REST API.

*   ***Nuxt 3 (Vue 3) Frontend:*** Authentication system, content management, rich text editing (TipTap), image optimization, security enhancements, and analytics integration.
*   ***Flask API Backend:*** Role-based authentication, database management (PostgreSQL), file storage (Google Cloud), newsletter/email integrations, caching, and CI/CD (GitHub Actions).
*   ***Infrastructure:*** Dockerized, deployed on Google Cloud, with separate production and development environments.

This project showcases my expertise in full-stack development, API design, security best practices, and scalable cloud deployments.

***Technical Skills:***

*   **Frontend Development:** Nuxt 3, Vue 3, Pinia, TypeScript, SCSS
*   **Backend Development:** Flask, Python, PostgreSQL
*   **API Development:** RESTful API design, authentication & authorization, caching, rate limiting
*   **Security:** Role-based access control (RBAC), JWT Authentication, nuxt-security, secure headers, API security best practices
*   **Cloud & Infrastructure:** Google Cloud Platform (GCP), Google Cloud Storage, Docker, CI/CD with GitHub Actions
*   **Testing & QA:** Vitest (frontend), pytest (backend)
*   **Third-Party Integrations:** Mailchimp, Mandrill (email), Google Analytics, Umami, Simple Analytics
*   **Performance & Optimization:** Image processing (@nuxt/image), server-side compression
*   **Content Management & UI Components:** TipTap (rich text editor), dynamic dashboards, authentication panel
`,
  },
  {
    id: "eros",
    title: "Eros As Medicine",
    subtitle: "Full Web Design and Build in SquareSpace - 2025",
    videoDesktop: "/img/ErosAsMedicine/ErosAsMedicine-desktop.mp4",
    videoMobile: "/img/ErosAsMedicine/ErosAsMedicine-mobile.mp4",
    category: ["Web Builder", "SquareSpace"],
    buttonUrl: "https://erosasmedicine.com",
    buttonText: "View Live Website",
    content: `
*   Full design including colour palette, typography, and layout.
*   Copy writing.
*   Created graphics with PhotoShop
*   Built the website in SquareSpace
*   Integrated with Mailchimp for email marketing and Google Forms for sign-ups`,
  },
  {
    id: "cyrus",
    title: "Cyrus Wild",
    subtitle: "Built website in Kajabi - 2024",
    imageDesktop: "/img/cyrus/cyrus_home_desktop_1440.webp",
    imageMobile: "/img/cyrus/cyrus_home_mobile_390.webp",
    category: ["Web Builder", "Kajabi"],
    animate: true,
    logo: "/img/logos/Cyrus_Wild_Logo.png",
    buttonUrl: "https://cyruswild.com",
    buttonText: "View Live Website",
    content: `
*   Designed and developed a mobile-friendly website using *Kajabi*.
*   Collaborating with a designer and brand manager to meet aesthetic and functional requirements.
*   Creating personality quiz with *Typeform* and automating results with *Zapier*.
`,
  },
  {
    id: "the-field",
    title: "The Field",
    subtitle: "Built festival website in Squarespace - 2023",
    videoDesktop: "/img/the_field/The_Field_Desktop.webm",
    videoMobile: "/img/the_field/The_Field_Mobile.webm",
    category: ["Web Builder", "SquareSpace"],
    logo: "/img/logos/The_Field_Logo.png",
    content: `
*   Designed and developed a mobile-friendly website using *Squarespace*.
*   Designed web graphics in *Photoshop* to display festival facilitators
*   integrated with *Ticket Tailor* to sell tickets`,
  },
  {
    id: "blueheart",
    title: "Blueheart",
    subtitle: "Animated website in Webflow - 2021 & 2022",
    videoDesktop: "/img/blueheart/blueheart-desktop.webm",
    videoMobile: "/img/blueheart/blueheart-mobile-trim.webm",
    category: ["Coding", "Web Builder", "Webflow"],
    logo: "/img/logos/Blueheart_Logo.png",
    buttonUrl: "https://blueheart.io",
    buttonText: "View Live Website",
    content: `
*   Updated and enhanced the web interface using *Webflow*.
*   Leveraging advanced *CSS* knowledge for complex designs and animations.`,
  },
  {
    id: "agora",
    title: "Agora",
    subtitle: "Virtual Event Platform (Vue.js & Node.js) - 2021 & 2022",
    videoDesktop: "/img/agora/agora_short.mp4",
    category: ["Coding", "Vue.js", "Node.js"],
    logo: "/img/logos/Agora_Logo.png",
    buttonUrl: "https://hello.atypiclabs.com/",
    buttonText: "View Live Website",
    content: `
Developed a **Vue.js-based web application** for hosting virtual events with real-time user interaction and video conferencing.

*   ***Vue.js (v2) Frontend:*** Virtual event spaces, real-time user presence, dynamic UI components.
*   ***Node.js Backend:*** Express API, MySQL database, authentication, and event configuration via JSON.
*   ***Real-Time Features:*** Integrated Socket.IO for live user interaction and Jitsi for video conferencing.

This project demonstrates my ability to build interactive real-time applications, integrate live communication tools, and create scalable event-based platforms.

***Technical Skills:***

*   **Frontend Development:** Vue.js (v2), Vuex, SCSS
*   **Backend Development:** Node.js, Express, MySQL
*   **Real-Time Communication:** WebSockets, Socket.IO
*   **Third-Party Integrations:** Jitsi (video conferencing)
*   **Configuration Management:** JSON-based event customization`,
  },
  {
    id: "flicks",
    title: "Flicks",
    subtitle: "Movie & Entertainment Platform - 2019-2020",
    videoDesktop: "/img/Flicks/flicks-desktop.webm",
    videoMobile: "/img/Flicks/flicks-mobile.webm",
    category: ["Coding", "Pug.js", "Node.js"],
    logo: "/img/logos/Flicks_Logo.jpg",
    content: `
Developed features for Flicks, a multi-region movie platform serving New Zealand, Australia, South Africa, and the UK. Built with Node.js (Express.js) and Pug templating, the platform delivers movie listings, streaming service integrations, and user watchlists. Enhanced user experience with a mobile-first, responsive design.

***Technical Skills:***

*   Frontend: Pug (templating), HTML, SCSS, JavaScript, Responsive/Mobile-First Design
*   Backend: Node.js, Express.js
*   Streaming & Content: Movie Listings, Streaming Service Integrations (Netflix, Stan), Sports Content
*   Design: Zeplin
*   Project Management: Asana`,
  },
  {
    id: "lv",
    title: "LV=",
    subtitle: "React.js frontend & Sitecore CMS - 2018",
    imageDesktop: "/img/LV/LV_desktop_original.jpg",
    imageMobile: "/img/LV/LV_mobile.jpg",
    category: ["Coding", "React.js"],
    logo: "/img/logos/LV_Logo.png",
    buttonUrl: "https://www.lv.com",
    buttonText: "View Live Website",
    content: `
*   Front-end development for one of the UK's largest insurance companies.
*   Utilised *React.js* and *ES6* for interactive web features integrated with *Sitecore CMS*.
*   Delivered high-quality *SVG animations* and ensured cross-browser compatibility.`,
  },
  {
    id: "wolf-and-badger",
    title: "Wolf & Badger",
    subtitle: "E-Commerce Platform Frontend Development 2016 - 2018",
    videoDesktop: "/img/wolf_and_badger/wolf-and-badger-desktop.mp4",
    videoMobile: "/img/wolf_and_badger/wolf-and-badger-mobile.webm",
    category: ["Coding", "HTML/CSS/JS", "Django.py"],
    logo: "/img/logos/Wolf_and_Badger_Logo.png",
    content: `
Worked on Wolf & Badger's e-commerce platform, a Django-based marketplace for designer products. Built with Mezzanine CMS, the platform supported multi-currency transactions, international shipping, and custom dashboards for designers and store management. Contributed to frontend development, ensuring a responsive, visually polished user experience.

***Technical Skills:***

*   Frontend: HTML, CSS, JavaScript, jQuery, LESS, Responsive Design, Bootstrap
*   Backend: Django (Python), Mezzanine CMS, PostgreSQL
*   Third-Party Integrations: Cloudinary`,
  },
  {
    id: "bond-and-coyne",
    title: "Bond & Coyne",
    subtitle: "Responsive Website Development - 2016",
    videoDesktop: "/img/bond_and_coyne/bndandcoyne.webm",
    videoMobile: "/img/bond_and_coyne/bond-and-coyne-mobile.webm",
    category: ["Coding"],
    logo: "/img/logos/Bond_and_coyne.png",
    buttonUrl: "https://github.com/JenBerry/bondandcoynewebsite",
    buttonText: "View Code on Github",
    content: `
Developed a responsive website for a branding agency using modern frontend and templating technologies.

*   ***Frontend:*** Built with Foundation 6 for responsive UI components and grid-based layouts for pixel perfection.
*   ***Templating & Backend:*** Structured PHP rendering with Twig for modular and maintainable templates.
*   ***Build System:*** Used Gulp for SASS compilation, asset processing, and frontend automation.
*   ***Dependency Management:*** Integrated Bower (frontend) and Composer (PHP) for package management.
*   ***Collaboration:*** Developed as a freelance project to be later integrated into Craft CMS by the agency's backend team.

This project showcases my ability to build responsive, modular, and scalable frontend solutions with modern tooling and templating engines.

***Technical Skills:***

*   Frontend Development: Foundation 6, SCSS, HTML, JavaScript
*   Templating & Backend: PHP, Twig
*   Build & Automation: Gulp, Node.js
*   Dependency Management: Composer (PHP), Bower (Frontend)
*   Responsive Design & UI: Grid-based layouts, mobile-first development`,
  },
  {
    id: "huawei",
    title: "Huawei",
    subtitle: "Huawei Consumer Website – Front-End Development 2016",
    imageDesktop: "/img/huawei/Huawei-1.png",
    category: ["Coding"],
    logo: "/img/logos/Huawei-Logo.png",
    content: `
Developed responsive, multi-language product pages for Huawei's consumer website, for the launch of flagship devices: the P9 and P9 Plus. Built a component-based template system using Node.js (Express.js) and SCSS, with a Gulp-powered build pipeline for live development, asset optimization, and minified production builds.

***Technical Skills:***

*   Frontend: SCSS, JavaScript, Component-Based Architecture
*   (Development Environment): Node.js, Express.js
*   Build & Optimization: Gulp (Live Reload, SCSS Compilation, Minification, Image Optimization)
*   Localization: Multi-Language Support (page-builder.js)`,
  },
  {
    id: "bonhams",
    title: "Bonhams",
    subtitle: "Bonhams Auction Platform – Full-Stack Development 2014-2015",
    imageDesktop: "/img/bonhams/bonhams-desktop.jpg",
    imageMobile: "/img/bonhams/bonhams-mobile.jpg",
    category: ["Coding", "Angular.js", "Django.py"],
    logo: "/img/logos/Bonhams_Logo.png",
    content: `
Worked on the Bonhams.com auction platform, designing the responsive site based on the existing desktop site. It was a Django and Angular.js-based application supporting sales, auctions, valuations, and payments. The platform used Dockerized microservices, a PostgreSQL database, REST APIs, Redis caching, Celery for background tasks, and Sphinx for search.

***Technical Skills:***

*   Frontend: Angular.js (version 1.2), JavaScript, Responsive Design, Mootools, SASS/SCSS, Compass
*   Backend: Django (Python), PostgreSQL`,
  },
];

const route = useRoute();
const router = useRouter();

const category = ref<"" | "Coding" | "Web Builder">("");
const setCategory = (cat: "" | "Coding" | "Web Builder") => {
  if (["Coding", "Web Builder", ""].includes(cat)) {
    category.value = cat;
    router.push({ query: { cat: cat } });
  }
};

const filteredProjects = computed(() =>
  projects.filter(
    (p) => category.value === "" || p.category.includes(category.value),
  ),
);

onMounted(() => {
  const categoryQ = ["Coding", "Web Builder"].includes(
    route.query.cat as string,
  )
    ? (route.query.cat as "Coding" | "Web Builder")
    : "";
  setCategory(categoryQ);
});
</script>

<style lang="scss"></style>
