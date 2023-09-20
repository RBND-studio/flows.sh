import { defineConfig } from "@pandacss/dev";
import { theme } from "ui/theme";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["../../packages/ui/src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  theme,

  // The output directory for your css system
  outdir: "@flows/styled-system",

  jsxFramework: "react",

  emitPackage: true,
});
