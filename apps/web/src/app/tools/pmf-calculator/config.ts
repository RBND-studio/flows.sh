import { formatNumberWithThousandSeparator } from "shared";

import { calculatorColors as colors } from "../calculator/colors";
import { formatPercent } from "../calculator/format";
import type { CalculatorConfig } from "../calculator/types";
import { routes } from "routes";

type PmfGroup = "not" | "somewhat" | "very";

export const pmfConfig: CalculatorConfig<PmfGroup> = {
  inputsTitle: "Your survey responses",
  inputsDescription:
    "How would you feel if you could no longer use this product? Enter how many people picked each answer.",
  scoreLabel: "Would be very disappointed",
  scoreEmptyLabel: "Waiting for responses",
  scoreEmptyDescription:
    "Your score is the share of people who would be very disappointed to lose the product. The convention is that 40 percent or more suggests product market fit.",
  groupsTitle: "Your answers",
  bannerTitle: "Ship beautiful PMF surveys with Flows",
  bannerDescription:
    "Create product market fit surveys that look like your product, without the engineering overhead.",
  demoLink: routes.exampleDetail("pmf-survey"),

  options: [
    { value: 0, label: "Not", name: "Not disappointed", groupKey: "not" },
    { value: 1, label: "Somewhat", name: "Somewhat disappointed", groupKey: "somewhat" },
    { value: 2, label: "Very", name: "Very disappointed", groupKey: "very" },
  ],

  groups: [
    {
      key: "not",
      label: "Not disappointed",
      description:
        "People who would shrug and move on. Often the wrong segment for you rather than a problem to fix.",
      color: colors.bad,
      onColor: colors.onLight,
    },
    {
      key: "somewhat",
      label: "Somewhat disappointed",
      description:
        "People who like the product but have alternatives. Read their comments to find what would move them up.",
      color: colors.neutral,
      onColor: colors.onLight,
    },
    {
      key: "very",
      label: "Very disappointed",
      description:
        "The people who genuinely need you. This group is your score, and the segment worth building and selling to.",
      color: colors.good,
      onColor: colors.onDark,
    },
  ],

  bands: [
    {
      label: "Not yet",
      description:
        "Few people would miss the product. Look at whether you are asking the right segment before changing the roadmap.",
      from: 0,
      to: 25,
      color: colors.bad,
    },
    {
      label: "Getting close",
      description:
        "A real group depends on you. Find what they have in common and work out how to reach more people like them.",
      from: 25,
      to: 40,
      color: colors.neutral,
    },
    {
      label: "Product market fit",
      description:
        "At or above the conventional threshold. Treat it as a signal to double down, not as a finish line.",
      from: 40,
      to: 60,
      color: colors.mid,
    },
    {
      label: "Strong fit",
      description:
        "The product is hard to replace for most of the people you asked. Growth is now a distribution problem.",
      from: 60,
      to: 100,
      color: colors.good,
    },
  ],

  sample: { 0: "41", 1: "78", 2: "81" },

  computeScore: (result) => (result.total > 0 ? result.shareOf("very") : null),
  formatScore: (score) => formatPercent(score),
  formatValue: (value) => `${value}%`,
  gaugeTicks: [0, 25, 50, 75, 100],

  secondaryStats: (result) => [
    {
      label: "Would miss it at all",
      value: formatPercent(result.shareOf("very") + result.shareOf("somewhat")),
    },
    {
      label: "Responses",
      value: formatNumberWithThousandSeparator(result.total),
    },
  ],
};
