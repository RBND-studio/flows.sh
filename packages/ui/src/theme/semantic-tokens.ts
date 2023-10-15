import { defineSemanticTokens } from "@pandacss/dev";

export const semanticTokens = defineSemanticTokens({
  colors: {
    bg: {
      DEFAULT: { value: "{colors.neutral.0}" },
      muted: { value: "{colors.neutral.25}" },
      subtle: { value: "{colors.neutral.50}" },
    },
    text: {
      DEFAULT: { value: "{colors.neutral.900}" },
      muted: { value: "{colors.neutral.650}" },
      subtle: { value: "{colors.neutral.500}" },
      white: { value: "{colors.neutral.0}" },
      primary: { value: "{colors.primary.500}" },
    },
    border: {
      DEFAULT: { value: "{colors.neutral.50}" },
      strong: { value: "{colors.neutral.100}" },
      primary: { value: "{colors.primary.400}" },
    },
  },
});
