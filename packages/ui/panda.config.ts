import { defineConfig } from "@pandacss/dev";
import { theme, conditions, utilities } from "./theme";

const prod = process.env.PROD === "true" || process.env.NODE_ENV === "production";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme,

  utilities,

  // The output directory for your css system
  outdir: "@flows/pandacss",

  jsxFramework: "react",

  emitPackage: true,
  forceConsistentTypeExtension: true,

  minify: true,

  hash: { className: prod, cssVar: false },

  conditions,
});
