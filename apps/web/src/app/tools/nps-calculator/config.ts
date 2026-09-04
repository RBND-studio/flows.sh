import { formatNumberWithThousandSeparator } from "shared";

import { calculatorColors as colors } from "../calculator/colors";
import { formatPercent } from "../calculator/format";
import type { CalculatorConfig } from "../calculator/types";
import { routes } from "routes";

type NpsGroup = "detractors" | "passives" | "promoters";

const SCORES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const groupKeyForScore = (score: number): NpsGroup => {
  if (score <= 6) return "detractors";
  if (score <= 8) return "passives";
  return "promoters";
};

export const npsConfig: CalculatorConfig<NpsGroup> = {
  inputsTitle: "Your survey responses",
  inputsDescription: "Enter how many people picked each score from 0 to 10.",
  scoreLabel: "Your Net Promoter Score",
  scoreEmptyLabel: "Waiting for responses",
  scoreEmptyDescription:
    "Your score will land somewhere between negative 100, where everyone is a detractor, and positive 100, where everyone is a promoter.",
  groupsTitle: "Your groups",
  distributionTitle: "Score distribution",
  distributionDescription: "How your responses spread across the 0 to 10 scale.",
  bannerTitle: "Ship beautiful NPS surveys with Flows",
  bannerDescription:
    "Create delightful in-app NPS experiences for web and mobile, without the engineering overhead.",
  demoLink: routes.exampleDetail("nps-survey"),

  options: SCORES.map((score) => ({
    value: score,
    label: `${score}`,
    groupKey: groupKeyForScore(score),
  })),

  groups: [
    {
      key: "detractors",
      label: "Detractors",
      range: "0 to 6",
      description: "Unhappy customers who slow you down with churn and negative word of mouth.",
      color: colors.bad,
      onColor: colors.onLight,
    },
    {
      key: "passives",
      label: "Passives",
      range: "7 to 8",
      description: "Satisfied but unenthusiastic customers who are open to a competitor's offer.",
      color: colors.neutral,
      onColor: colors.onLight,
    },
    {
      key: "promoters",
      label: "Promoters",
      range: "9 to 10",
      description: "Loyal enthusiasts who keep buying and refer other people to your product.",
      color: colors.good,
      onColor: colors.onDark,
    },
  ],

  bands: [
    {
      label: "Needs work",
      description: "You have more detractors than promoters. Find out what is going wrong first.",
      from: -100,
      to: 0,
      color: colors.bad,
    },
    {
      label: "Good",
      description: "More promoters than detractors. A solid base to build on.",
      from: 0,
      to: 30,
      color: colors.neutral,
    },
    {
      label: "Great",
      description: "Well above average. Most of your customers are happy to recommend you.",
      from: 30,
      to: 70,
      color: colors.mid,
    },
    {
      label: "Excellent",
      description: "World class. Very few companies ever reach this range.",
      from: 70,
      to: 100,
      color: colors.good,
    },
  ],

  sample: {
    0: "3",
    1: "2",
    2: "4",
    3: "5",
    4: "7",
    5: "11",
    6: "16",
    7: "24",
    8: "31",
    9: "45",
    10: "62",
  },

  computeScore: (result) =>
    result.total > 0
      ? Math.round(result.shareOf("promoters") - result.shareOf("detractors"))
      : null,
  formatScore: (score) => (score > 0 ? `+${score}` : `${score}`),
  formatValue: (value) => (value > 0 ? `+${value}` : `${value}`),
  gaugeTicks: [-100, -50, 0, 50, 100],

  secondaryStats: (result) => [
    {
      label: "Formula",
      value: `${formatPercent(result.shareOf("promoters"))} promoters - ${formatPercent(result.shareOf("detractors"))} detractors`,
    },
    {
      label: "Responses",
      value: formatNumberWithThousandSeparator(result.total),
    },
  ],
};
