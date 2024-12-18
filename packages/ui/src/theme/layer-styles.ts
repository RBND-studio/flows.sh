import { defineLayerStyles } from "@pandacss/dev";

export const layerStyles = defineLayerStyles({
  card: {
    value: {
      backgroundColor: "pane.bg.main",

      borderRadius: "6px",
      borderWidth: "1px",
      borderColor: "newBorder.neutral",

      boxShadow: "newL1",
    },
  },
  dotBackground: {
    value: {
      background: "pane.bg.secondary",
      backgroundImage: "radial-gradient(token(colors.special.dotBg) 1px, transparent 0)",
      backgroundSize: "12px 12px",
      backgroundPosition: "-6px -6px",
    },
  },
});
