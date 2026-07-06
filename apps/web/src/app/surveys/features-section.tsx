import { Flex } from "@flows/styled-system/jsx";
import { Component16, Filter16, Graph16, Language16, Start16, Survey16 } from "icons";
import { type ReactNode } from "react";
import { Text } from "ui";

import { CoolButtonIllustration } from "app/product-tours/cool-button-illustration";
import { SurveyFan } from "./survey-cards";
import type { FeatureBentoProps } from "components/feature-bento/feature-bento";
import {
  DoubleFeatureBento,
  FeatureBento,
  FeatureBentoWrapper,
  HorizontalBentoSeparator,
} from "components/feature-bento/feature-bento";
import { Section } from "components/ui/section";
import { AnalyticsIllustration } from "components/feature-landing-pages/analytics-illustration";
import { CustomUIComponentsIllustration } from "components/ui/illustrations/custom-ui-components-illustration";

const featuresContent: FeatureBentoProps[] = [
  {
    icon: Survey16,
    title: "Flexible surveys",
    description: "Freeform, multiple choice, number rating, emoji reactions, and link surveys.",
    visual: <SurveyFan />,
  },
  {
    icon: Start16,
    title: "Ask at the right moment",
    description:
      "Trigger surveys based on user actions, page views, or time spent to catch users when feedback is most relevant.",
    visual: <CoolButtonIllustration />,
  },
  {
    icon: Component16,
    title: "Custom components",
    description:
      "Build surveys using your own design system and components to match your product's look and feel.",
    visual: <CustomUIComponentsIllustration />,
  },
  {
    icon: Language16,
    title: "Localization",
    description: "Run surveys in multiple languages to collect feedback from a global audience.",
  },
  {
    icon: Filter16,
    title: "User targeting",
    description:
      "Target specific users or companies with AND/OR logic to define hyper-targeted segments.",
  },
  {
    icon: Graph16,
    title: "Built-in analytics",
    description:
      "Track response rates, score distributions, and trends over time with built-in survey analytics.",
    visual: <AnalyticsIllustration />,
  },
];

export const FeaturesSection = (): ReactNode => {
  return (
    <>
      <Section
        py={{ base: "space64", md: "space120" }}
        sideBorders
        bottomBorder
        decorator="vertical"
      >
        <Flex
          flexDirection="column"
          gap="space20"
          alignItems="center"
          maxWidth={580}
          mx="auto"
          px="space24"
        >
          <Text variant="title2xl" as="h2" textAlign="center">
            Turn feedback into product decisions
          </Text>
          <Text variant="bodyL" color="fg.neutral.muted" textAlign="center">
            Flows makes it easy to collect, analyze, and act on user feedback. Run surveys that fit
            naturally into your product and surface insights that matter.
          </Text>
        </Flex>
      </Section>

      <FeatureBentoWrapper>
        <DoubleFeatureBento firstFeature={featuresContent[0]} secondFeature={featuresContent[1]} />
        <HorizontalBentoSeparator />
        <FeatureBento {...featuresContent[2]} />
        <HorizontalBentoSeparator />
        <DoubleFeatureBento firstFeature={featuresContent[3]} secondFeature={featuresContent[4]} />
        <HorizontalBentoSeparator />
        <FeatureBento {...featuresContent[5]} />
      </FeatureBentoWrapper>
    </>
  );
};
