import { defineConfig } from "@pandacss/dev";
import { theme, conditions } from "./theme";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme,

  // The output directory for your css system
  outdir: "@flows/pandacss",

  jsxFramework: "react",

  emitPackage: true,

  minify: true,

  conditions,
});
