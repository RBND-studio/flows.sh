"use client";

import { Section } from "components/ui/section";
import { Block16, Component16, CreditCard16, Modal16, Question16 } from "icons";
import { useState, type ReactNode } from "react";
import {
  calculateStripeEstimatedPrice,
  formatNumberWithThousandSeparator,
  FREE_LIMIT,
  newPricingTiers,
  PRO_FLAT_FEE,
  PRO_INCLUDED_MTU,
  PRO_MAX_MTU,
} from "shared";

import { Flex } from "@flows/styled-system/jsx";
import { Slider, Text, Tooltip } from "ui";
import { sum } from "lib/sum";

import {
  NewHeroIllustrationGlow,
  NewHeroIllustrationLine,
} from "components/main-illustration/decorations";
import { CyclingWord, userAdjectives } from "components/ui/cycling-word";
import { css } from "@flows/styled-system/css";
import { PricingCard } from "./pricing-card";

type Props = {
  embed?: boolean;
};

export const PricingCardsSection = ({ embed }: Props) => {
  const [selectedValue, setSelectedValue] = useState(FREE_LIMIT);

  const handleSliderChange = (value: number): void => {
    const result = sum([
      0,
      Math.min(value, 40) * 50,
      Math.min(Math.max(value - 40, 0), 40) * 200,
      Math.min(Math.max(value - 80, 0), 40) * 1000,
    ]);

    setSelectedValue(Math.round(result));
  };

  const mtuValue = selectedValue < PRO_INCLUDED_MTU ? PRO_INCLUDED_MTU : selectedValue;
  const estimatedCost = (() => {
    const reachedMax = selectedValue === PRO_MAX_MTU;
    const finalPrice = calculateStripeEstimatedPrice({
      subscriptionPriceTiers: newPricingTiers,
      usage: selectedValue,
    });

    if (reachedMax) {
      return "Contact us";
    }

    if (finalPrice === 0) {
      return `$${PRO_FLAT_FEE}`;
    }

    return `$${formatNumberWithThousandSeparator(finalPrice, 0)}`;
  })();

  return (
    <>
      <Section decorator="corner-flipped" bottomBorder sideBorders={embed}>
        <Flex
          direction="column"
          w="100%"
          px={{ base: "space24", md: "space32" }}
          pb={{ base: "space24", md: "space32" }}
          justifyContent="space-between"
        >
          <Text id="calculatorLabel" variant="titleM" as="h2" mb="space24" textAlign="center">
            How many monthly <MtuRender /> users do you expect to have?
          </Text>
          <Slider
            aria-labelledby="calculatorLabel"
            defaultValue={[5]}
            max={120}
            min={0}
            step={0.1}
            onValueChange={(value) => handleSliderChange(value[0])}
          />
          <Flex justifyContent="space-between" gap="space24" mt="space8">
            <Text variant="bodyM" w={66} color="fg.neutral.muted">
              100
            </Text>
            <Text
              variant="bodyM"
              w={66}
              color="fg.neutral.muted"
              display={{ base: "none", md: "block" }}
              textAlign="center"
            >
              1,250
            </Text>
            <Text variant="bodyM" w={66} color="fg.neutral.muted" textAlign="center">
              6,000
            </Text>
            <Text
              variant="bodyM"
              w={66}
              color="fg.neutral.muted"
              display={{ base: "none", md: "block" }}
              textAlign="center"
            >
              18,750
            </Text>
            <Text variant="bodyM" w={66} color="fg.neutral.muted" textAlign="right">
              +50,000
            </Text>
          </Flex>
        </Flex>
      </Section>

      <Section sideBorders sideDots bottomBorder decorator="vertical">
        <Flex gap={1} direction={{ base: "column", md: "row" }} bg="border.neutral">
          <PricingCard
            title="Hobby"
            description="For personal development, prototyping, and testing."
            price="Free"
            mtuAmount={100}
            features={[
              {
                icon: CreditCard16,
                text: "No credit card required",
              },
              {
                icon: Component16,
                text: "Custom components preview",
              },
              {
                icon: Block16,
                text: "Unlimited workflows",
              },
              {
                icon: Question16,
                text: "Community support",
              },
            ]}
          />
          <PricingCard
            title="Pro"
            description="Everything you need to build and scale your product adoption"
            price={estimatedCost}
            mtuAmount={mtuValue}
            primary
            featuresNote="Everything in Hobby, plus:"
            features={[
              {
                icon: Modal16,
                text: "Remove Flows branding",
              },
              {
                icon: Component16,
                text: "Custom components",
              },

              {
                icon: Question16,
                text: "Priority support",
              },
            ]}
          />
        </Flex>
        <NewHeroIllustrationGlow className={css({ opacity: { base: 0.05, _dark: 0.1 } })} />
        <NewHeroIllustrationLine />
      </Section>
    </>
  );
};

const MtuRender = (): ReactNode => {
  return (
    <Tooltip
      trigger={
        <Text variant="titleM" as="span">
          <CyclingWord words={userAdjectives} underline />
        </Text>
      }
      supportMobileTap
      content="Flows charges only for users who actually see an experience, we call them MTU (Monthly Tracked Users). On the Pro plan, you pay for the amount of MTU you have each month, regardless of how many users visit your app."
    />
  );
};
