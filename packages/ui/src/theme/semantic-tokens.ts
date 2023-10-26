import { defineSemanticTokens } from "@pandacss/dev";

export const semanticTokens = defineSemanticTokens({
  colors: {
    bg: {
      DEFAULT: { value: "{colors.neutral.0}" },
      muted: { value: "{colors.neutral.25}" },
      subtle: { value: "{colors.neutral.50}" },
      strong: { value: "{colors.neutral.100}" },
      primary: { value: "{colors.primary.400}" },
      primaryHover: { value: "{colors.primary.500}" },
      hover: { value: "{colors.neutral.50}" },
      black: { value: "{colors.neutral.850}" },
      blackHover: { value: "{colors.neutral.750}" },
    },
    text: {
      DEFAULT: { value: "{colors.neutral.900}" },
      muted: { value: "{colors.neutral.650}" },
      subtle: { value: "{colors.neutral.500}" },
      white: { value: "{colors.neutral.0}" },
      primary: { value: "{colors.primary.500}" },
      onPrimary: { value: "{colors.neutral.0}" },
    },
    border: {
      DEFAULT: { value: "{colors.neutral.50}" },
      strong: { value: "{colors.neutral.100}" },
      primary: { value: "{colors.primary.400}" },
    },
    icon: {
      DEFAULT: { value: "{colors.neutral.650}" },
      strong: { value: "{colors.neutral.900}" },
      primary: { value: "{colors.primary.500}" },
    },
  },
});
