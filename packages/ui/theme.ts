import type { Config } from "@pandacss/dev";
import { defineTokens } from "@pandacss/dev";

import {
  breakpoints,
  durations,
  easings,
  palette,
  radii,
  semanticTokens,
  spacing,
  textStyles,
} from "./src/theme";

const tokens = defineTokens({
  colors: palette,
  radii,
  spacing,
  durations,
  easings,
});

export const theme: Config["theme"] = {
  breakpoints,
  semanticTokens,
  textStyles,
  tokens,
};
