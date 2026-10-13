import { defineUtility } from "@pandacss/dev";
import type { PropertyConfig } from "@pandacss/types";

export const fastEaseInOut: PropertyConfig = defineUtility({
  transform(value, { token }) {
    return {
      transitionProperty: value,
      transitionTimingFunction: token("easings.easeInOut"),
      transitionDuration: token(`durations.fast`),
    };
  },
});

export const superFastEaseInOut: PropertyConfig = defineUtility({
  transform(value, { token }) {
    return {
      transitionProperty: value,
      transitionTimingFunction: token("easings.easeInOut"),
      transitionDuration: token(`durations.superFast`),
    };
  },
});
