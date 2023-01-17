import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: ["src/index", "src/domain"],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
});
