import { defineNuxtConfig } from "nuxt/config";
import AsyncContent from "..";

export default defineNuxtConfig({
  telemetry: false,
  modules: [AsyncContent],
  backendModule: {
    addPlugin: true,
  },
});
