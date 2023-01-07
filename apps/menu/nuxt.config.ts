// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    cssPath: "@verlydotdev/tailwind-preset/globals.css",
  },
  nitro: {
    preset: "netlify",
  },
});
