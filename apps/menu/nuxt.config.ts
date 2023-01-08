// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt"],
  tailwindcss: {
    cssPath: "@verlydotdev/tailwind-preset/globals.css",
  },
  nitro: {
    preset: "netlify",
  },
  srcDir: "src",
});
