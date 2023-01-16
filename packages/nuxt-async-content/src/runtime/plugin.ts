import { MenuBuilder } from "@verlydotdev/async-content-lib";
import { defineNuxtPlugin } from "#imports";

export default defineNuxtPlugin(() => {
  const { asyncContent: options } = useRuntimeConfig().public;

  return {
    provide: {
      menu: new MenuBuilder().withURL(options.pocketbaseURL).build(),
    },
  };
});
