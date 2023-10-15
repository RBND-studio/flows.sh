import type { Config } from "@pandacss/dev";
import { defineTokens } from "@pandacss/dev";

import {
  breakpoints,
  palette,
  radii,
  semanticTokens,
  spacing,
  textStyles,
} from "./src/theme/index";

const tokens = defineTokens({
  colors: palette,
  radii,
  spacing,
});

export const theme: Config["theme"] = {
  breakpoints,
  semanticTokens,
  textStyles,
  tokens,
};
