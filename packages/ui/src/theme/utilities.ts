import { defineUtility } from "@pandacss/dev";

export const fastEaseInOut = defineUtility({
  transform(value, { token }) {
    return {
      transitionProperty: value,
      transitionTimingFunction: token("easings.easeInOut"),
      transitionDuration: token(`durations.fast`),
    };
  },
});

export const superFastEaseInOut = defineUtility({
  transform(value, { token }) {
    return {
      transitionProperty: value,
      transitionTimingFunction: token("easings.easeInOut"),
      transitionDuration: token(`durations.superFast`),
    };
  },
});
