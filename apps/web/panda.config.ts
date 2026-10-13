import { defineConfig } from "@pandacss/dev";
import basePreset from "@pandacss/preset-base";
import { theme, conditions, utilities } from "ui/theme";

export default defineConfig({
  presets: [basePreset],

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
  optimize: {
    removeUnusedTokens: true,
    removeUnusedKeyframes: true,
    smartCompoundVariants: true,
    treeshakeDesignSystem: true,
  },

  conditions,
});
