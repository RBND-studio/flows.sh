import { defineConfig } from "@pandacss/dev";
import { theme, conditions, utilities } from "ui/theme";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["../../packages/ui/src/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  theme,

  utilities,

  // The output directory for your css system
  outdir: "pandacss-generated",

  jsxFramework: "react",

  minify: true,

  conditions,

  // TODO: create a const out of this and apply it to all apps
  globalCss: {
    html: {
      // cspell:disable-next-line
      "--global-font-mono": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
    },
  },
});
