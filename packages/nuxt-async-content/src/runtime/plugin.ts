import { MenuBuilder } from "../lib";
import { defineNuxtPlugin } from "#imports";

export default defineNuxtPlugin(() => {
  const { asyncContent: options } = useRuntimeConfig().public;

  return {
    provide: {
      menu: new MenuBuilder().withURL(options.pocketbaseURL).build(),
    },
  };
});
