// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "@nuxtjs/i18n"],
  i18n: {},
  tailwindcss: {
    cssPath: "@verlydotdev/tailwind-preset/globals.css",
  },
  nitro: {
    preset: "netlify",
  },
  srcDir: "src",
});
