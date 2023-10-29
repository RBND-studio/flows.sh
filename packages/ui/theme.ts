import type { Config } from "@pandacss/dev";
import { defineTokens } from "@pandacss/dev";

import {
  breakpoints,
  durations,
  easings,
  palette,
  radii,
  semanticTokens,
  shadows,
  spacing,
  textStyles,
} from "./src/theme";

const tokens = defineTokens({
  colors: palette,
  radii,
  spacing,
  durations,
  easings,
  shadows,
});

export const theme: Config["theme"] = {
  breakpoints,
  semanticTokens,
  textStyles,
  tokens,
  keyframes: {
    enter: {
      "0%": { transform: "scale(.95)", opacity: 0 },
      "100%": { transform: "scale(1)", opacity: 1 },
    },
    exit: {
      "0%": { transform: "scale(1)", opacity: 1 },
      "100%": { transform: "scale(.95)", opacity: 0 },
    },
    fadein: {
      "0%": { opacity: "0" },
      "100%": { opacity: "1" },
    },
    fadeout: {
      "0%": { opacity: "1" },
      "100%": { opacity: "0" },
    },
  },
};

export const conditions: Config["conditions"] = {
  dark: "[data-color-mode=dark] &",
};
