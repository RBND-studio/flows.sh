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
});
