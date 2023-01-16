import { defineNuxtConfig } from "nuxt/config";
import AsyncContent from "..";

export default defineNuxtConfig({
  telemetry: false,
  modules: [AsyncContent],
  asyncContent: {
    pocketbaseURL: process.env.POCKETBASE_URL,
  },
});
