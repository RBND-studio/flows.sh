"use client";

import { css, cva } from "@flows/styled-system/css";
import { Box, Flex, Grid } from "@flows/styled-system/jsx";
import { Check16, Copy16, Reset16 } from "icons";
import { type JSX, useCallback, useEffect, useState } from "react";
import { Button, Input, Text } from "ui";

import { DistributionChart } from "./distribution-chart";
import { formatPercent } from "./format";
import { ScoreGauge } from "./score-gauge";
import { StackedShareBar } from "./stacked-share-bar";
import type { CalculatorBand, CalculatorConfig, OptionResult } from "./types";
import { useCalculator } from "./use-calculator";
import { formatNumberWithThousandSeparator } from "shared";
import { Banner } from "./banner";

const bandForScore = (bands: CalculatorBand[], score: number): CalculatorBand =>
  bands.findLast((band) => score >= band.from) ?? bands[0];

type Props<TKey extends string> = {
  config: CalculatorConfig<TKey>;
};

export const SurveyCalculator = <TKey extends string>({ config }: Props<TKey>): JSX.Element => {
  const { counts, result, score, setCount, reset, loadSample, isEmpty } = useCalculator(config);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timeout);
  }, [copied]);

  const handleCopy = useCallback(() => {
    if (score === null) return;
    const stats = config.secondaryStats?.(result) ?? [];
    const summary = [
      `${config.scoreLabel}: ${config.formatScore(score)}`,
      ...stats.map((stat) => `${stat.label}: ${stat.value}`),
      ...result.groups.map((group) => {
        const range = group.range ? ` (${group.range})` : "";
        return `${group.label}${range}: ${formatNumberWithThousandSeparator(group.count)} (${formatPercent(group.share)})`;
      }),
    ].join("\n");

    void navigator.clipboard.writeText(summary).then(() => setCopied(true));
  }, [config, result, score]);

  const band = score === null ? null : bandForScore(config.bands, score);
  const stats = score === null ? [] : (config.secondaryStats?.(result) ?? []);
  const wordedScale = config.options.some((option) => option.name !== undefined);

  return (
    <Flex flexDirection={{ base: "column", lg: "row" }} gap="space24" alignItems="flex-start">
      <Box width={{ base: "100%", lg: "340px" }} flexShrink={0}>
        <Text variant="titleM" as="h2">
          {config.inputsTitle}
        </Text>
        <Text variant="bodyS" color="fg.neutral.muted" mb="space16">
          {config.inputsDescription}
        </Text>

        <Flex flexDirection="column" gap="space8">
          {result.options.map((option) => (
            <Flex key={option.value} alignItems="center">
              <Label option={option} wordedScale={wordedScale} />
              <Input
                id={`answer-${option.value}`}
                className={wordedScale ? css({ width: { base: 110, md: 160 } }) : css({ flex: 1 })}
                inputClassName={css({ borderLeftRadius: 0 })}
                type="text"
                inputMode="numeric"
                value={counts[option.value] ?? ""}
                placeholder="0"
                onChange={(e) => setCount(option.value, e.target.value)}
              />
            </Flex>
          ))}
        </Flex>

        <Flex
          alignItems="center"
          justifyContent="space-between"
          gap="space8"
          mt="space16"
          pt="space16"
          borderTopWidth={1}
          borderTopColor="border.neutral"
        >
          <Text variant="bodyS" color="fg.neutral.muted" fontVariantNumeric="tabular-nums">
            {formatNumberWithThousandSeparator(result.total)}{" "}
            {result.total === 1 ? "response" : "responses"}
          </Text>
          <Flex gap="space8">
            <Button size="small" variant="secondary" onClick={loadSample}>
              Try sample data
            </Button>
            <Button
              size="small"
              variant="secondary"
              onClick={reset}
              disabled={isEmpty}
              startIcon={<Reset16 />}
            >
              Reset
            </Button>
          </Flex>
        </Flex>
        <Banner
          title={config.bannerTitle}
          description={config.bannerDescription}
          demoLink={config.demoLink}
        />
      </Box>

      <Flex flexDirection="column" gap="space24" flex={1} width="100%" minWidth={0}>
        <Box
          borderWidth={1}
          borderColor="border.neutral.placeholder"
          borderRadius="radius12"
          bg="pane.bg.elevated"
          padding="space20"
        >
          <Flex
            justifyContent="space-between"
            alignItems="flex-start"
            gap="space16"
            mb="space16"
            flexWrap="wrap"
          >
            <Box>
              <Text variant="bodyS" color="fg.neutral.muted" mb="space4">
                {config.scoreLabel}
              </Text>
              {score === null ? (
                <Text variant="title2xl" color="fg.neutral.subtle">
                  {config.scoreEmptyLabel}
                </Text>
              ) : (
                <Flex alignItems="baseline" gap="space12" flexWrap="wrap">
                  <Text variant="title5xl" as="p" fontVariantNumeric="tabular-nums">
                    {config.formatScore(score)}
                  </Text>
                  {band ? (
                    <Flex
                      alignItems="center"
                      gap="space6"
                      borderRadius="radius8"
                      paddingX="space8"
                      paddingY="space4"
                      bg="bg.neutral.subtle"
                    >
                      <Box
                        width="8px"
                        height="8px"
                        borderRadius="radius100"
                        style={{ backgroundColor: band.color }}
                      />
                      <Text variant="bodyS" weight="600">
                        {band.label}
                      </Text>
                    </Flex>
                  ) : null}
                </Flex>
              )}
            </Box>
            {score !== null && (
              <Button
                size="small"
                variant="secondary"
                onClick={handleCopy}
                startIcon={copied ? <Check16 /> : <Copy16 />}
              >
                {copied ? "Copied" : "Copy results"}
              </Button>
            )}
          </Flex>

          <ScoreGauge
            bands={config.bands}
            ticks={config.gaugeTicks}
            formatValue={config.formatValue}
            score={score}
            label={
              score === null
                ? `${config.scoreLabel} scale`
                : `${config.scoreLabel}: ${config.formatScore(score)}`
            }
          />

          {stats.length > 0 && (
            <Flex gap="space24" mt="space16" flexWrap="wrap">
              {stats.map((stat) => (
                <Box key={stat.label}>
                  <Text variant="bodyXs" color="fg.neutral.subtle">
                    {stat.label}
                  </Text>
                  <Text variant="titleL" as="p" fontVariantNumeric="tabular-nums">
                    {stat.value}
                  </Text>
                </Box>
              ))}
            </Flex>
          )}

          <Text variant="bodyS" color="fg.neutral.muted" mt="space12">
            {band ? band.description : config.scoreEmptyDescription}
          </Text>
        </Box>

        <Box
          borderWidth={1}
          borderColor="border.neutral.placeholder"
          borderRadius="radius12"
          bg="pane.bg.elevated"
          padding="space20"
        >
          <Text variant="titleM" as="h2" mb="space16">
            {config.groupsTitle}
          </Text>

          <StackedShareBar groups={result.groups} />

          <Grid
            gridTemplateColumns={{ base: "1fr", sm: "repeat(3, 1fr)" }}
            gap="space12"
            mt="space16"
          >
            {result.groups.map((group) => (
              <Box
                key={group.key}
                borderWidth={1}
                borderColor="border.neutral.placeholder"
                borderRadius="radius8"
                padding="space12"
              >
                <Flex alignItems="center" gap="space8" mb="space8">
                  <Box
                    width="8px"
                    height="8px"
                    borderRadius="radius100"
                    flexShrink={0}
                    style={{ backgroundColor: group.color }}
                  />
                  <Text variant="bodyS" weight="600">
                    {group.label}
                  </Text>
                  {group.range ? (
                    <Text variant="bodyXs" color="fg.neutral.subtle">
                      {group.range}
                    </Text>
                  ) : null}
                </Flex>
                <Flex alignItems="baseline" gap="space8">
                  <Text variant="titleL" as="p" fontVariantNumeric="tabular-nums">
                    {formatPercent(group.share)}
                  </Text>
                  <Text variant="bodyXs" color="fg.neutral.muted" fontVariantNumeric="tabular-nums">
                    {formatNumberWithThousandSeparator(group.count)}{" "}
                    {group.count === 1 ? "response" : "responses"}
                  </Text>
                </Flex>
                <Text variant="bodyXs" color="fg.neutral.muted" mt="space8">
                  {group.description}
                </Text>
              </Box>
            ))}
          </Grid>
        </Box>

        {config.distributionTitle ? (
          <Box
            borderWidth={1}
            borderColor="border.neutral.placeholder"
            borderRadius="radius12"
            bg="pane.bg.elevated"
            padding="space20"
          >
            <Text variant="titleM" as="h2">
              {config.distributionTitle}
            </Text>
            <Text variant="bodyS" color="fg.neutral.muted" mb="space8">
              {config.distributionDescription}
            </Text>
            <DistributionChart options={result.options} />
          </Box>
        ) : null}
      </Flex>
    </Flex>
  );
};

const Label = ({ option, wordedScale }: { option: OptionResult; wordedScale: boolean }) => {
  const labelCss = cva({
    base: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      borderLeftRadius: "radius8",
      height: 32,
    },
    variants: {
      type: {
        number: {
          width: 32,
          flexShrink: 0,
          justifyContent: "center",
        },
        text: {
          minWidth: 0,
          flex: 1,
          px: "space8",
          gap: "space6",
          borderWidth: 1,
          borderColor: "control.border",
          borderRightWidth: 0,
          bg: "bg.neutral.subtle",
        },
      },
    },
  });
  if (wordedScale) {
    return (
      <label className={labelCss({ type: "text" })} htmlFor={`answer-${option.value}`}>
        <Box h={8} w={8} borderRadius="radius8" style={{ backgroundColor: option.group.color }} />
        <Text variant="bodyXs" weight="600" color="fg.neutral">
          {option.name ?? option.label}
        </Text>
      </label>
    );
  }

  return (
    <label
      className={labelCss({ type: "number" })}
      htmlFor={`answer-${option.value}`}
      style={{ backgroundColor: option.group.color, color: option.group.onColor }}
    >
      <Text variant="bodyS" weight="600" color="inherit">
        {option.name ?? option.label}
      </Text>
    </label>
  );
};
