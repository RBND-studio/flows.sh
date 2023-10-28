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
};

export const conditions: Config["conditions"] = {
  dark: "[data-color-mode=dark] &",
};
