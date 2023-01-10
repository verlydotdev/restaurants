import { fileURLToPath } from "url";
import { addPlugin, createResolver, defineNuxtModule } from "@nuxt/kit";

export interface ModuleOptions {
  addPlugin: boolean;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "ui-service",
    configKey: "uiService",
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
      // eslint-disable-next-line no-console
      console.log("✔ Loaded @verlydotdev/ui-service module successfully");
    });
  },
});
