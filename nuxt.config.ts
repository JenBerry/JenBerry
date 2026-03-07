// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["vuetify-nuxt-module", "@vueuse/nuxt", "nuxt-umami"],
  css: ["~/assets/styles/global.scss"],
  umami: {
    id: "f30f3a35-6820-419b-ba98-7902dbce9baa",
    host: "https://cloud.umami.is",
    domains: ["jjmb.dev"],
    urlOptions: {
      trailingSlash: "never",
      excludeHash: true,
    },
  },
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: "dark",
      },
    },
  },
});
