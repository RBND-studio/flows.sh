import { Flex } from "@flows/styled-system/jsx";
import { Action16, Block16, Delay16, Filter16, Graph16 } from "icons";
import { type ReactNode } from "react";
import { Text } from "ui";

import { BranchIllustration } from "./branch-illustration";
import { WorkflowEditorIllustration } from "./workflow-editor-illustration";
import type { FeatureBentoProps } from "components/feature-bento/feature-bento";
import {
  DoubleFeatureBento,
  FeatureBento,
  FeatureBentoWrapper,
  HorizontalBentoSeparator,
} from "components/feature-bento/feature-bento";
import { Section } from "components/ui/section";
import { AnalyticsIllustration } from "components/feature-landing-pages/analytics-illustration";

const featuresContent: FeatureBentoProps[] = [
  {
    icon: Block16,
    title: "Visual workflow builder",
    description:
      "Drag and drop blocks to design multi-step flows. Connect UI components, logic, delays, and actions into a single end-to-end journey.",
    visual: <WorkflowEditorIllustration />,
  },
  {
    icon: Filter16,
    title: "Branching logic",
    description:
      "Send users down different paths based on their role, plan, or behavior. Define any number of branches with AND/OR conditions.",
    visual: <BranchIllustration />,
  },
  {
    icon: Action16,
    title: "Take actions",
    description:
      "Update user properties, add users to segments, or trigger webhooks when a condition is met along the journey.",
  },
  {
    icon: Delay16,
    title: "Delays and scheduling",
    description:
      "Reach users at exactly the right moment. Avoid overwhelming new signups or triggering steps before users are ready.",
  },
  {
    icon: Graph16,
    title: "Built-in analytics",
    description:
      "See how many users enter, complete, or drop off at every step. Click any block to drill into its individual metrics.",
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
            Orchestrate the entire user journey
          </Text>
          <Text variant="bodyL" color="fg.neutral.muted" textAlign="center">
            Flows lets you build and automate complex multi-step experiences that span the full user
            lifecycle. Go beyond simple tours with logic, delays, and actions that react to real
            user behavior.
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
