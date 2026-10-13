import { type Config, defineConfig } from "@pandacss/dev";
import basePreset from "@pandacss/preset-base";
import { theme, conditions, utilities } from "./theme";

const config: Config = defineConfig({
  presets: [basePreset],

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

export default config;
