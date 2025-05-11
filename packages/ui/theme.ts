import type { Config } from "@pandacss/dev";
import { defineTokens } from "@pandacss/dev";

import {
  bor,
  borBottom,
  borLeft,
  borRight,
  borTop,
  breakpoints,
  cardWrap,
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
    bor,
    borBottom,
    borTop,
    borLeft,
    borRight,
    cardWrap,
    fastEaseInOut,
    superFastEaseInOut,
  },
};
