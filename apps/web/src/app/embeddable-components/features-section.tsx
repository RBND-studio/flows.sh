import { Flex } from "@flows/styled-system/jsx";
import { Component16, Filter16, Graph16, Language16, Slot16 } from "icons";
import { type ReactNode } from "react";
import { Text } from "ui";

import { LayoutIllustration } from "./layout-illustration";
import type { FeatureBentoProps } from "components/feature-bento/feature-bento";
import {
  DoubleFeatureBento,
  FeatureBento,
  FeatureBentoWrapper,
  HorizontalBentoSeparator,
} from "components/feature-bento/feature-bento";
import { Section } from "components/ui/section";
import { AnalyticsIllustration } from "components/feature-landing-pages/analytics-illustration";
import { EmbeddableComponentsIllustrations } from "components/ui/illustrations/embeddable-components-illustration";
import { CustomUIComponentsIllustration } from "components/ui/illustrations/custom-ui-components-illustration";

const featuresContent: FeatureBentoProps[] = [
  {
    icon: Slot16,
    title: "Fits in-line",
    description:
      "Instead of pointing to elements with tooltips, embed interactive content directly within the context of the user's journey.",
    visual: <EmbeddableComponentsIllustrations />,
  },
  {
    icon: Component16,
    title: "Full layout control",
    description:
      "Components render inside Slots, allowing for precise placement and control over the layout of embedded content.",
    visual: <LayoutIllustration />,
  },
  {
    icon: Component16,
    title: "Custom components",
    description:
      "Use your own design system and technologies to build custom components that fit seamlessly into your product.",
    visual: <CustomUIComponentsIllustration />,
  },
  {
    icon: Language16,
    title: "Localization",
    description: "Adapt embedded content to different languages to reach a global audience.",
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
      "Measure the impact of your embedded content with built-in analytics to track user engagement and conversion rates.",
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
            Relevant in-app experiences
          </Text>
          <Text variant="bodyL" color="fg.neutral.muted" textAlign="center">
            Bring product adoption experiences into your product. Embed tutorials, contextual empty
            states, and other interactive content to guide users and improve engagement.
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
