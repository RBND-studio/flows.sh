import type { Config } from "@pandacss/dev";
import { defineTokens } from "@pandacss/dev";

import {
  breakpoints,
  durations,
  easings,
  fastEaseInOut,
  keyframes,
  layerStyles,
  palette,
  radii,
  semanticTokens,
  shadows,
  spacing,
  superFastEaseInOut,
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
  layerStyles,
};

export const conditions: Config["conditions"] = {};

export const utilities: Config["utilities"] = {
  extend: {
    fastEaseInOut,
    superFastEaseInOut,
  },
};
