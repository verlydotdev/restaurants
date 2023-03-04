// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    // "@nuxtjs/i18n",
    "unplugin-icons/nuxt",
    "@verlydotdev/nuxt-async-content",
  ],
  // i18n: {
  //   baseUrl: process.env.BASE_URL,
  //   langDir: "locales",
  //   locales: [
  //     { code: "es", name: "Esp", iso: "es-ES", file: "es.json", dir: "ltr" },
  //   ],
  //   lazy: true,
  //   defaultLocale: "es",
  // },
  tailwindcss: {
    cssPath: "@verlydotdev/tailwind-preset/globals.css",
  },
  srcDir: "src",
  runtimeConfig: {
    public: {
      pocketbase: {
        url: process.env.POCKETBASE_URL,
      },
    },
  },
});
