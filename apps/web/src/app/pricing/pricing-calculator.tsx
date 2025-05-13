"use client";

import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { Section } from "components/ui";
import { sum } from "lib/sum";
import { type ReactElement, useState } from "react";
import { formatNumberWithThousandSeparator, FREE_LIMIT, pricingTiers } from "shared";
import { Slider, Text } from "ui";

export const PricingCalculator = (): ReactElement => {
  const [selectedValue, setSelectedValue] = useState(FREE_LIMIT);

  const handleSliderChange = (value: number): void => {
    const result = sum([
      FREE_LIMIT,
      Math.min(value, 40) * 37.5,
      Math.min(Math.max(value - 40, 0), 40) * 200,
      Math.min(Math.max(value - 80, 0), 40) * 1000,
    ]);

    setSelectedValue(Math.round(result));
  };

  const estimatedCost = (() => {
    let flowsToPrice = selectedValue;
    let finalPrice = 0;

    Object.values(pricingTiers).forEach((tier) => {
      const tierAmount = tier.flowsRange[1] - tier.flowsRange[0];
      const amount = Math.min(flowsToPrice, tierAmount);
      finalPrice += tier.price * amount;
      flowsToPrice -= amount;
    });

    return finalPrice.toFixed(2);
  })();

  return (
    <>
      <Section
        bg="pane.bg.elevated"
        borderRadius="radius12"
        borderWidth="1px"
        borderColor="newBorder.neutral.placeholder"
        shadow="antimetal"
      >
        <Box padding="space24" borderBottomWidth="1px" borderBottomColor="newBorder.neutral">
          <Flex
            justifyContent="space-between"
            mb="space16"
            mdDown={{ flexDirection: "column", gap: "space8" }}
          >
            <Text id="calculatorLabel" variant="titleL" as="h2">
              Monthly tracked users
            </Text>
            <Flex gap="space8" alignItems="baseline">
              <Text variant="titleL">{formatNumberWithThousandSeparator(selectedValue)}</Text>
              <Text variant="bodyL" color="newFg.neutral.muted">
                MTUs / month
              </Text>
            </Flex>
          </Flex>
          <Slider
            aria-labelledby="calculatorLabel"
            defaultValue={[1.5]}
            max={120}
            min={0}
            step={0.1}
            onValueChange={(value) => handleSliderChange(value[0])}
          />
          <Flex justifyContent="space-between" mt="space16">
            <Text variant="bodyS" color="newFg.neutral.muted">
              {FREE_LIMIT}
            </Text>
            <Text variant="bodyS" color="newFg.neutral.muted">
              2k
            </Text>
            <Text variant="bodyS" color="newFg.neutral.muted">
              10k
            </Text>
            <Text variant="bodyS" color="newFg.neutral.muted">
              50k
            </Text>
          </Flex>
        </Box>
        <Flex padding="space24" justifyContent="space-between" alignItems="baseline">
          <Text variant="titleL">Estimate</Text>
          <Flex alignItems="baseline" gap="space8">
            <Text variant="title2xl">${estimatedCost}</Text>
            <Text variant="bodyL" color="newFg.neutral.muted">
              / month
            </Text>
          </Flex>
        </Flex>
      </Section>
      <Section>
        <Text
          variant="bodyM"
          color="newFg.neutral.muted"
          align="center"
          className={css({
            mt: "space24",
            textWrap: "balance",
          })}
        >
          Starts at ${pricingTiers.tier1.price} per MTU with your first{" "}
          {formatNumberWithThousandSeparator(pricingTiers.free.flowsRange[1])} MTUs completely free.
          We only charge for users who experience a Flows workflow in the current billing period.
        </Text>
      </Section>
    </>
  );
};
