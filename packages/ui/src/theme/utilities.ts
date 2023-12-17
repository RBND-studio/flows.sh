import { token } from "@flows/styled-system/tokens";
import { defineUtility } from "@pandacss/dev";

export const bor = defineUtility({
  values: ["1px"],
  transform(value) {
    return {
      borderStyle: "solid",
      borderWidth: value,
      borderColor: token("colors.border"),
    };
  },
});

export const cardWrap = defineUtility({
  transform() {
    return {
      borderStyle: "solid",
      borderWidth: "1px",
      borderColor: token("colors.border"),
      borderRadius: token("radii.radius12"),
      backgroundColor: token("colors.bg.card"),
      boxShadow: token("shadows.l1"),
    };
  },
});
