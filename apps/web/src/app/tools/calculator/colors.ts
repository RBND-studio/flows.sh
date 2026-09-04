import { token } from "@flows/styled-system/tokens";

/**
 * Fixed data visualization colors shared by every survey calculator. They read the same in light
 * and dark mode, which keeps a chart and its legend consistent across themes.
 */
export const calculatorColors = {
  bad: token("colors.dataViz.salmon.fg"),
  neutral: token("colors.dataViz.yellow.fg"),
  mid: token("colors.dataViz.teal.fg"),
  good: token("colors.dataViz.darkGreen.fg"),
  /** Text color to use on top of `bad`, `neutral`, and `mid` */
  onLight: token("colors.neutral.1000"),
  /** Text color to use on top of `good` */
  onDark: token("colors.neutral.0"),
};
