import { defineNuxtConfig } from "nuxt/config";
import BackendModule from "..";

export default defineNuxtConfig({
  telemetry: false,
  modules: [BackendModule],
  backendModule: {
    addPlugin: true,
  },
});
