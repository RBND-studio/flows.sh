import type { Config } from "@pandacss/dev";
import { defineTokens } from "@pandacss/dev";

import {
  breakpoints,
  durations,
  easings,
  fastEaseInOut,
  fonts,
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
  fonts,
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

export const globalCss: Config["globalCss"] = {
  // Bright tabs extensions styling
  '[data-bright-tab][data-state="inactive"]': {
    "--tab-background": "var(--inactive-tab-background)",
    "--tab-color": "var(--inactive-tab-color)",
    "--tab-bottom-border": "transparent",
    "--tab-top-border": "transparent",
  },
};
