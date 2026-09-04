import type { Route } from "next";
import type { ReactNode } from "react";

export type CalculatorGroup<TKey extends string = string> = {
  key: TKey;
  label: string;
  /** Which answers fall into this group, e.g. "0 to 6". Omitted when the answers are worded. */
  range?: string;
  description: string;
  color: string;
  /** Readable text color on top of `color` */
  onColor: string;
};

export type CalculatorOption<TKey extends string = string> = {
  /** Numeric value of the answer, used for averages and for the chart order */
  value: number;
  /** Short label shown on the chip and under the distribution chart */
  label: string;
  /** Full answer wording, used when the scale is worded rather than numeric */
  name?: string;
  groupKey: TKey;
};

export type CalculatorBand = {
  label: string;
  description: string;
  from: number;
  to: number;
  color: string;
};

export type OptionResult<TKey extends string = string> = CalculatorOption<TKey> & {
  count: number;
  share: number;
  group: CalculatorGroup<TKey>;
};

export type GroupResult<TKey extends string = string> = CalculatorGroup<TKey> & {
  count: number;
  share: number;
};

export type CalculatorResult<TKey extends string = string> = {
  total: number;
  options: OptionResult<TKey>[];
  groups: GroupResult<TKey>[];
  /** Mean of every answer value, or null when there are no responses */
  average: number | null;
  /** Share of responses in the group with this key */
  shareOf: (groupKey: TKey) => number;
};

export type SecondaryStat = {
  label: string;
  value: string;
};

export type CalculatorConfig<TKey extends string = string> = {
  /** Copy for the input column */
  inputsTitle: string;
  inputsDescription: string;
  /** Copy for the headline score */
  scoreLabel: string;
  scoreEmptyLabel: string;
  scoreEmptyDescription: string;
  groupsTitle: string;
  distributionTitle?: string;
  distributionDescription?: string;
  bannerTitle: string;
  bannerDescription: string;
  demoLink: Route;

  options: CalculatorOption<TKey>[];
  groups: CalculatorGroup<TKey>[];
  /**
   * Benchmark bands, in ascending order. They also define the scale the gauge and the benchmark
   * table run on, so the first band starts at the minimum and the last one ends at the maximum.
   */
  bands: CalculatorBand[];
  sample: Record<number, string>;

  computeScore: (result: CalculatorResult<TKey>) => number | null;
  /** Formats the headline score, e.g. "+28" or "83.9%" */
  formatScore: (score: number) => string;
  /** Formats a point on the scale, used for gauge ticks and benchmark ranges, e.g. "+50" or "75%" */
  formatValue: (value: number) => string;
  gaugeTicks: number[];
  secondaryStats?: (result: CalculatorResult<TKey>) => SecondaryStat[];
};

export type CalculatorPageContent = {
  bands: CalculatorBand[];
  formatValue: (value: number) => string;
  pageUrl: string;
  title: string;
  description: string;
  /** Rendered client side, so each tool passes its own widget element */
  calculator: ReactNode;
  explainer: {
    title: string;
    intro: string;
    steps: { title: string; description: string }[];
    formula: { expression: string; note: string };
    footnote: ReactNode;
  };
  benchmarks: {
    title: string;
    intro: string;
  };
  faqTitle: string;
  faqs: { title: string; content: string }[];
  cta: { title: string; description: string };
};
