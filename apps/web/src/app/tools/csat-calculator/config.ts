import { formatNumberWithThousandSeparator } from "shared";

import { calculatorColors as colors } from "../calculator/colors";
import { formatPercent } from "../calculator/format";
import type { CalculatorConfig } from "../calculator/types";
import { routes } from "routes";

type CsatGroup = "unsatisfied" | "neutral" | "satisfied";

const RATINGS = [1, 2, 3, 4, 5];

const groupKeyForRating = (rating: number): CsatGroup => {
  if (rating <= 2) return "unsatisfied";
  if (rating === 3) return "neutral";
  return "satisfied";
};

export const csatConfig: CalculatorConfig<CsatGroup> = {
  inputsTitle: "Your survey responses",
  inputsDescription: "Enter how many people picked each rating from 1 to 5.",
  scoreLabel: "Your CSAT score",
  scoreEmptyLabel: "Waiting for responses",
  scoreEmptyDescription:
    "CSAT is the share of people who picked one of the top two ratings, so it always lands between 0 and 100 percent.",
  groupsTitle: "Your groups",
  distributionTitle: "Rating distribution",
  distributionDescription: "How your responses spread across the 1 to 5 scale.",
  bannerTitle: "Ship beautiful CSAT surveys with Flows",
  bannerDescription:
    "Create satisfaction surveys that match your product on every screen, without the engineering overhead.",
  demoLink: routes.exampleDetail("csat-survey"),

  options: RATINGS.map((rating) => ({
    value: rating,
    label: `${rating}`,
    groupKey: groupKeyForRating(rating),
  })),

  groups: [
    {
      key: "unsatisfied",
      label: "Unsatisfied",
      range: "1 to 2",
      description:
        "Something went wrong in this interaction. These are the responses to read first.",
      color: colors.bad,
      onColor: colors.onLight,
    },
    {
      key: "neutral",
      label: "Neutral",
      range: "3",
      description: "The interaction worked but left no impression. Easy to overlook, easy to win.",
      color: colors.neutral,
      onColor: colors.onLight,
    },
    {
      key: "satisfied",
      label: "Satisfied",
      range: "4 to 5",
      description: "The interaction did what people needed. These responses make up your score.",
      color: colors.good,
      onColor: colors.onDark,
    },
  ],

  bands: [
    {
      label: "Needs work",
      description:
        "Fewer than three in five people were satisfied. Read the low scores before changing anything.",
      from: 0,
      to: 60,
      color: colors.bad,
    },
    {
      label: "Good",
      description: "A normal result for most interactions, with clear room to improve.",
      from: 60,
      to: 75,
      color: colors.neutral,
    },
    {
      label: "Great",
      description: "The interaction is working for the large majority of people who go through it.",
      from: 75,
      to: 90,
      color: colors.mid,
    },
    {
      label: "Excellent",
      description:
        "Almost everyone is satisfied. Worth checking that you are not only surveying people who succeeded.",
      from: 90,
      to: 100,
      color: colors.good,
    },
  ],

  sample: { 1: "4", 2: "7", 3: "18", 4: "56", 5: "95" },

  computeScore: (result) => (result.total > 0 ? result.shareOf("satisfied") : null),
  formatScore: (score) => formatPercent(score),
  formatValue: (value) => `${value}%`,
  gaugeTicks: [0, 25, 50, 75, 100],

  secondaryStats: (result) => [
    {
      label: "Average rating",
      value: result.average === null ? "" : `${result.average.toFixed(2)} / 5`,
    },
    {
      label: "Responses",
      value: formatNumberWithThousandSeparator(result.total),
    },
  ],
};
