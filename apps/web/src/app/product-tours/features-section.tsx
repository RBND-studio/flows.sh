import { Flex } from "@flows/styled-system/jsx";
import { Component16, Filter16, Graph16, Language16, Start16, Tooltip16 } from "icons";
import { type ReactNode } from "react";
import { Text } from "ui";

import { CoolButtonIllustration } from "./cool-button-illustration";
import type { FeatureBentoProps } from "components/feature-bento/feature-bento";
import {
  DoubleFeatureBento,
  FeatureBento,
  FeatureBentoWrapper,
  HorizontalBentoSeparator,
} from "components/feature-bento/feature-bento";
import { Section } from "components/ui/section";
import { ComponentsIllustration } from "components/feature-landing-pages/components-illustration";
import { AnalyticsIllustration } from "components/feature-landing-pages/analytics-illustration";
import { CustomUIComponentsIllustration } from "components/ui/illustrations/custom-ui-components-illustration";

const featuresContent: FeatureBentoProps[] = [
  {
    icon: Tooltip16,
    title: "More than just modals",
    description:
      " Pick from a variety of pre-built customizable components like tooltips, hints, embeddables and more.",
    visual: <ComponentsIllustration />,
  },
  {
    icon: Start16,
    title: "At the right time and place",
    description: " Trigger tours with clicks, hovers, page views or if an element is on a page.",
    visual: <CoolButtonIllustration />,
  },
  {
    icon: Component16,
    title: "Custom components",
    description:
      "Use your own design system and technologies to build custom components that fit your product and meet your quality bar.",
    visual: <CustomUIComponentsIllustration />,
  },
  {
    icon: Language16,
    title: "Localization",
    description: "Show tours in multiple languages to reach a global audience.",
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
      "Measure the success of your tours with built-in analytics to track user engagement and conversion rates.",
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
            Fully integrated product tours
          </Text>
          <Text variant="bodyL" color="fg.neutral.muted" textAlign="center">
            Flows is not like other onboarding tools. It is a fully customizable solution that
            allows you to create interactive tours, modals, and other components that seamlessly
            integrate with your product.
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
