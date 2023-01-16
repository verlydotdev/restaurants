import { fileURLToPath } from "url";
import {
  addPlugin,
  createResolver,
  defineNuxtModule,
  useLogger,
} from "@nuxt/kit";

export interface ModuleOptions {
  addPlugin: boolean;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "async-content",
    configKey: "asyncContent",
  },
  defaults: {
    addPlugin: true,
  },
  setup(options, nuxt) {
    if (options.addPlugin) {
      const { resolve } = createResolver(import.meta.url);
      const runtimeDir = fileURLToPath(new URL("./runtime", import.meta.url));
      nuxt.options.build.transpile.push(runtimeDir);
      addPlugin(resolve(runtimeDir, "plugin"));
    }

    nuxt.hook("ready", () => {
      const logger = useLogger();
      logger.success(
        "Loaded @verlydotdev/nuxt-async-content module successfully"
      );
    });
  },
});
