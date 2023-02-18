import { NuxtModule } from "@nuxt/schema";
import { defineNuxtConfig } from "nuxt/config";
import AsyncContent from "..";

export default defineNuxtConfig({
  telemetry: false,
  modules: [AsyncContent as unknown as NuxtModule],
  asyncContent: {
    pocketbaseURL: process.env.POCKETBASE_URL,
  },
});
