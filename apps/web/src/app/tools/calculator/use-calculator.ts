"use client";

import { useCallback, useMemo, useState } from "react";

import type { CalculatorConfig, CalculatorResult, GroupResult, OptionResult } from "./types";

export type AnswerCounts = Record<number, string>;

export type UseCalculator<TKey extends string> = {
  counts: AnswerCounts;
  result: CalculatorResult<TKey>;
  score: number | null;
  setCount: (value: number, count: string) => void;
  reset: () => void;
  loadSample: () => void;
  isEmpty: boolean;
};

const parseCount = (value: string | undefined): number => {
  const parsed = Number.parseInt(value ?? "", 10);
  if (Number.isNaN(parsed) || parsed < 0) return 0;
  return parsed;
};

const shareOfCount = (count: number, total: number): number =>
  total > 0 ? (count / total) * 100 : 0;

export const useCalculator = <TKey extends string>(
  config: CalculatorConfig<TKey>,
): UseCalculator<TKey> => {
  const emptyCounts = useMemo(
    (): AnswerCounts => Object.fromEntries(config.options.map((option) => [option.value, ""])),
    [config.options],
  );

  const [counts, setCounts] = useState<AnswerCounts>(emptyCounts);

  const setCount = useCallback((value: number, count: string) => {
    const sanitized = count.replace(/\D/gu, "").slice(0, 7);
    setCounts((prev) => ({ ...prev, [value]: sanitized }));
  }, []);

  const reset = useCallback(() => setCounts(emptyCounts), [emptyCounts]);
  const loadSample = useCallback(() => setCounts(config.sample), [config.sample]);

  const result = useMemo((): CalculatorResult<TKey> => {
    // Walking groups first means every option knows its group by construction, with no lookup.
    const grouped = config.groups.map((group) => ({
      group,
      answers: config.options
        .filter((option) => option.groupKey === group.key)
        .map((option) => ({ option, count: parseCount(counts[option.value]) })),
    }));

    const total = grouped.reduce(
      (sum, { answers }) => sum + answers.reduce((acc, answer) => acc + answer.count, 0),
      0,
    );

    const options: OptionResult<TKey>[] = grouped
      .flatMap(({ group, answers }) =>
        answers.map(({ option, count }) => ({
          ...option,
          count,
          share: shareOfCount(count, total),
          group,
        })),
      )
      .sort((a, b) => a.value - b.value);

    const groups: GroupResult<TKey>[] = grouped.map(({ group, answers }) => {
      const count = answers.reduce((sum, answer) => sum + answer.count, 0);
      return { ...group, count, share: shareOfCount(count, total) };
    });

    const valueSum = options.reduce((sum, option) => sum + option.value * option.count, 0);

    return {
      total,
      options,
      groups,
      average: total > 0 ? valueSum / total : null,
      shareOf: (groupKey) => groups.find((group) => group.key === groupKey)?.share ?? 0,
    };
  }, [config.groups, config.options, counts]);

  return {
    counts,
    result,
    score: config.computeScore(result),
    setCount,
    reset,
    loadSample,
    isEmpty: result.total === 0,
  };
};
