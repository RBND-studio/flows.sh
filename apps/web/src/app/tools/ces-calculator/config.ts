import { formatNumberWithThousandSeparator } from "shared";

import { calculatorColors as colors } from "../calculator/colors";
import { formatPercent } from "../calculator/format";
import type { CalculatorConfig } from "../calculator/types";
import { routes } from "routes";

type CesGroup = "difficult" | "neutral" | "easy";

const RATINGS = [1, 2, 3, 4, 5, 6, 7];

const groupKeyForRating = (rating: number): CesGroup => {
  if (rating <= 3) return "difficult";
  if (rating === 4) return "neutral";
  return "easy";
};

export const cesConfig: CalculatorConfig<CesGroup> = {
  inputsTitle: "Your survey responses",
  inputsDescription: "Enter how many people picked each rating, where 7 means very easy.",
  scoreLabel: "Your Customer Effort Score",
  scoreEmptyLabel: "Waiting for responses",
  scoreEmptyDescription:
    "CES is the average of every answer on the 1 to 7 scale, so it always lands between 1, where the flow felt impossible, and 7, where it felt effortless.",
  groupsTitle: "Your groups",
  distributionTitle: "Rating distribution",
  distributionDescription: "How your responses spread across the 1 to 7 scale.",
  bannerTitle: "Ship beautiful CES surveys with Flows",
  bannerDescription:
    "Create effort surveys that live inside your own flows, without the engineering overhead.",
  demoLink: routes.exampleDetail("ces-survey"),

  options: RATINGS.map((rating) => ({
    value: rating,
    label: `${rating}`,
    groupKey: groupKeyForRating(rating),
  })),

  groups: [
    {
      key: "difficult",
      label: "High effort",
      range: "1 to 3",
      description:
        "People had to work to get through this flow. Their follow up answers name the step to fix.",
      color: colors.bad,
      onColor: colors.onLight,
    },
    {
      key: "neutral",
      label: "Neutral",
      range: "4",
      description:
        "Neither easy nor hard. Usually a flow that works but takes more steps than it needs.",
      color: colors.neutral,
      onColor: colors.onLight,
    },
    {
      key: "easy",
      label: "Low effort",
      range: "5 to 7",
      description: "The flow got out of the way. This is the share you want to grow over time.",
      color: colors.good,
      onColor: colors.onDark,
    },
  ],

  bands: [
    {
      label: "High friction",
      description:
        "More people struggled than glided through. Fix the flow before you measure it again.",
      from: 1,
      to: 4,
      color: colors.bad,
    },
    {
      label: "Mixed",
      description:
        "The flow works, but enough people hit resistance that it is costing you completions.",
      from: 4,
      to: 5,
      color: colors.neutral,
    },
    {
      label: "Low friction",
      description: "A good result. Most people got through without having to think about it.",
      from: 5,
      to: 6,
      color: colors.mid,
    },
    {
      label: "Effortless",
      description: "The flow is close to invisible. Spend your time on a worse one instead.",
      from: 6,
      to: 7,
      color: colors.good,
    },
  ],

  sample: { 1: "5", 2: "9", 3: "14", 4: "22", 5: "38", 6: "47", 7: "31" },

  computeScore: (result) => result.average,
  formatScore: (score) => score.toFixed(2),
  formatValue: (value) => `${value}`,
  gaugeTicks: [1, 2, 3, 4, 5, 6, 7],

  secondaryStats: (result) => [
    {
      label: "Rated it easy",
      value: formatPercent(result.shareOf("easy")),
    },
    {
      label: "Responses",
      value: formatNumberWithThousandSeparator(result.total),
    },
  ],
};
