import { fileURLToPath } from "url";
import {
  addPlugin,
  addTemplate,
  createResolver,
  defineNuxtModule,
  useLogger,
} from "@nuxt/kit";

export interface ModuleOptions {
  pocketbaseURL: string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@verlydotdev/nuxt-async-content",
    configKey: "asyncContent",
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);
    const runtimeDir = fileURLToPath(new URL("./runtime", import.meta.url));
    nuxt.options.build.transpile.push(runtimeDir);

    // Add module options to runetime config so they can be accessed in the plugin
    nuxt.options.runtimeConfig.public.asyncContent = options;

    // Add the pligin that will provide the asyncContent helper to the nuxtapp context
    addPlugin(resolve(runtimeDir, "plugin"));

    nuxt.hook("ready", () => {
      const logger = useLogger();
      logger.success(
        "Loaded @verlydotdev/nuxt-async-content module successfully"
      );
    });
  },
});
