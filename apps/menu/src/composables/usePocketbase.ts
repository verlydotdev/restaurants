import PocketBase from "pocketbase";

export const usePocketbase = () => {
  const config = useRuntimeConfig();
  const client = new PocketBase(config.public.pocketbase.url);

  return client;
};
