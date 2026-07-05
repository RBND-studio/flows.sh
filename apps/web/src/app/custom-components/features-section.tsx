import { Flex } from "@flows/styled-system/jsx";
import { Code16, Filter16, Graph16, Language16, Start16 } from "icons";
import { type ReactNode } from "react";
import { Text } from "ui";

import { CustomComponentExampleCode } from "./custom-component-example-code";
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

const featuresContent: FeatureBentoProps[] = [
  {
    icon: Code16,
    title: "Full power of code",
    description:
      "Use any technology, framework, or design system to build relevant, contextual experiences that fit your product.",
    visual: <CustomComponentExampleCode />,
  },
  {
    icon: Start16,
    title: "Quick start",
    description: "Get started quickly with pre-built components like banners, modals, and more.",
    visual: <ComponentsIllustration />,
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
            Shape it to your needs
          </Text>
          <Text variant="bodyL" color="fg.neutral.muted" textAlign="center">
            Adapt Flows to any app and use case. Rely on ready-made components or build completely
            custom elements using your own design system and technologies.
          </Text>
        </Flex>
      </Section>

      <FeatureBentoWrapper>
        <DoubleFeatureBento firstFeature={featuresContent[0]} secondFeature={featuresContent[1]} />
        <HorizontalBentoSeparator />
        <DoubleFeatureBento firstFeature={featuresContent[2]} secondFeature={featuresContent[3]} />
        <HorizontalBentoSeparator />
        <FeatureBento {...featuresContent[4]} />
      </FeatureBentoWrapper>
    </>
  );
};
