import { MenuBuilder } from "../lib";
import { defineNuxtPlugin } from "#imports";

export default defineNuxtPlugin((nuxt) => {
  const { asyncContent: options } = useRuntimeConfig().public;

  return {
    provide: {
      asyncContent: new MenuBuilder().withURL(options.pocketbaseURL).build(),
    },
  };
});
