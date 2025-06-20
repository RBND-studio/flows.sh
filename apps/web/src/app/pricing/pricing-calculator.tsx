"use client";

import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { Section, SmartLink, Waves } from "components/ui";
import { ArrowRight16 } from "icons";
import { links } from "lib/links";
import { sum } from "lib/sum";
import { type ReactElement, useState } from "react";
import { formatNumberWithThousandSeparator, FREE_LIMIT, pricingTiers } from "shared";
import { Button, Icon, Slider, Text } from "ui";

export const PricingCalculator = (): ReactElement => {
  const [selectedValue, setSelectedValue] = useState(FREE_LIMIT);
  const reachedMax = selectedValue === 50000;

  const handleSliderChange = (value: number): void => {
    const result = sum([
      0,
      Math.min(value, 40) * 50,
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
    <Section
      wavesElement={
        <Waves
          planeWidth={20}
          lineCountWidth={200}
          cameraPosition={{
            x: 0,
            y: 2,
            z: 6,
          }}
          className={css({
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: -1,
            height: "100%",
            width: "100%",
          })}
        />
      }
    >
      <Flex
        gap="space24"
        mx={{ base: "unset", md: "space32" }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <CalculatorCard
          selectedValue={selectedValue}
          handleSliderChange={handleSliderChange}
          reachedMax={reachedMax}
        />
        <EstimateCard estimatedCost={estimatedCost} reachedMax={reachedMax} />
      </Flex>
    </Section>
  );
};

const CalculatorCard = ({
  selectedValue,
  handleSliderChange,
  reachedMax,
}: {
  selectedValue: number;
  handleSliderChange: (value: number) => void;
  reachedMax: boolean;
}): ReactElement => {
  const mtuValueText = reachedMax ? "50,000 +" : formatNumberWithThousandSeparator(selectedValue);

  return (
    <Flex
      direction="column"
      w="100%"
      padding={{ base: "space24", md: "space32" }}
      background="pane.bg.elevated"
      borderRadius="radius8"
      borderWidth="1px"
      borderColor="newBorder.neutral.placeholder"
      shadow="antimetal"
      flex="1 1 300px"
      justifyContent="space-between"
    >
      <Box mb="space32">
        <Text id="calculatorLabel" variant="titleM" as="h2" mb="space12">
          Calculate your pricing
        </Text>
        <Flex gap="space8" alignItems="baseline" mb="space32">
          <Text variant="title2xl">{mtuValueText}</Text>
          <Text variant="bodyL" color="newFg.neutral.muted">
            MTUs
          </Text>
        </Flex>
        <Slider
          aria-labelledby="calculatorLabel"
          defaultValue={[5]}
          max={120}
          min={0}
          step={0.1}
          onValueChange={(value) => handleSliderChange(value[0])}
        />
      </Box>

      <Flex justifyContent="space-between" mt="space16" gap="space8">
        <Text variant="bodyM" color="newFg.neutral.muted">
          Need custom pricing?
        </Text>
        <Text variant="bodyM" asChild>
          <a
            href={links.contact}
            className={css({
              display: "flex",
              alignItems: "center",
              gap: "space4",
            })}
          >
            Contact us
            <Icon icon={ArrowRight16} color="inherit" />
          </a>
        </Text>
      </Flex>
    </Flex>
  );
};

const EstimateCard = ({
  estimatedCost,
  reachedMax,
}: {
  estimatedCost: string;
  reachedMax: boolean;
}): ReactElement => {
  const isFree = estimatedCost === "0.00";

  const estimatedCostText = reachedMax ? "Contact us" : `$${estimatedCost}`;
  const description = isFree
    ? "Our free tier allows up to 250 MTUs, enough to onboard your users while looking for product-market fit. All features are included, no credit card required."
    : "Enjoy unlimited workflows for your users with a pay-as-you-go model. You only pay for the MTUs you use, and you can cancel at any time. All features are included.";

  return (
    <Box
      w="100%"
      padding={{ base: "space24", md: "space32" }}
      background="newBg.neutral.subtle"
      borderRadius="radius8"
      borderWidth="1px"
      borderColor="newBorder.neutral"
      flex="1 1 300px"
    >
      <Text variant="titleL" mb="space12">
        Your estimate
      </Text>
      <Flex alignItems="baseline" gap="space8" mb={{ base: "space16", md: "space32" }}>
        <Text variant="title2xl">{estimatedCostText}</Text>
        {!reachedMax ? (
          <Text variant="bodyL" color="newFg.neutral.muted">
            / month
          </Text>
        ) : null}
      </Flex>
      <Text variant="bodyM" color="newFg.neutral.muted" mb={{ base: "space24", md: "space32" }}>
        {description}
      </Text>
      <Button className={css({ shadow: "neutralFocus" })} asChild size="large">
        <SmartLink href={links.signUp}>Get started</SmartLink>
      </Button>
    </Box>
  );
};
