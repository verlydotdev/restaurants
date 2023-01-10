import PocketBase from "pocketbase";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const pb: PocketBase = new PocketBase(config.public.pocketbase.url);

  return {
    provide: {
      pb,
    },
  };
});
