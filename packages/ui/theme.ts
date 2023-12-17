import type { Config } from "@pandacss/dev";
import { defineTokens } from "@pandacss/dev";

import {
  bor,
  breakpoints,
  cardWrap,
  durations,
  easings,
  keyframes,
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
  keyframes,
};

export const conditions: Config["conditions"] = {
  dark: ".dark-mode &",
};

export const utilities: Config["utilities"] = {
  extend: {
    bor,
    cardWrap,
  },
};
