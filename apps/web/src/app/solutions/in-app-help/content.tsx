import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { Check16, QuestionMark16 } from "icons";
import { links } from "lib/links";
import Link from "next/link";
import { routes } from "routes";
import { FREE_LIMIT, pricingTiers } from "shared";

import { WorkflowsExample } from "../workflows-example";
import type { Question } from "components/faq-section";
import { CustomUIComponentsIllustration } from "components/ui/illustrations/custom-ui-components-illustration";
import { EmbeddableComponentsIllustrations } from "components/ui/illustrations/embeddable-components-illustration";
import { PlaceholderApplication } from "components/ui/placeholder-application/placeholder-application";
import { PlaceholderTooltip } from "components/ui/placeholder-application/placeholder-tooltip";
import { Icon, Text } from "ui";

export const riverFeatures = [
  {
    title: "Help where the question happens",
    description:
      "Add a help trigger to any screen in your product. When a user opens it, show a tooltip, a short guide, or a help panel built from your own components, without leaving the page or opening a support ticket.",
    visual: (
      <PlaceholderApplication
        helpSlot={
          <Box position="relative">
            <Flex
              alignItems="center"
              justifyContent="center"
              height={22}
              width={22}
              backgroundColor="bg.primary"
              borderRadius="50%"
              shadow="focus"
            >
              <Icon icon={QuestionMark16} color="fg.neutral.onPrimary" />
            </Flex>
            <Box
              width={176}
              pt="space4"
              position="absolute"
              left={0}
              top="100%"
              md={{ left: "unset", right: 0 }}
            >
              <PlaceholderTooltip
                title="Need a hand?"
                description="Ask a question or open a quick guide without leaving this screen."
                showProgress={false}
                buttonLabel="Ask"
              />
            </Box>
          </Box>
        }
      />
    ),
  },
  {
    title: "Build checklists for common questions",
    description:
      "Turn frequent questions or setup steps into a checklist users can work through inside your product, at their own pace, instead of hunting through docs for the same answers over and over.",
    visual: (
      <PlaceholderApplication
        insideSlot={
          <Box
            position="absolute"
            bottom="space16"
            right="space16"
            zIndex={1}
            width={200}
            p="space12"
            borderRadius="radius12"
            backgroundColor="pane.bg.elevated"
            borderWidth="1px"
            borderColor="pane.border.elevated"
            shadow="antimetal"
          >
            <Text mb="space8" variant="titleS">
              Getting started
            </Text>
            <Flex flexDirection="column" gap="space8">
              <Flex alignItems="center" gap="space6">
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="50%"
                  backgroundColor="bg.primary"
                  height={16}
                  width={16}
                  flexShrink={0}
                >
                  <Icon
                    icon={Check16}
                    color="fg.neutral.onPrimary"
                    className={css({ height: 10, width: 10 })}
                  />
                </Flex>
                <Text variant="bodyXs" color="fg.neutral.muted" textDecoration="line-through">
                  Connect your first source
                </Text>
              </Flex>
              <Flex alignItems="center" gap="space6">
                <Box
                  height={16}
                  width={16}
                  borderRadius="50%"
                  borderWidth="2px"
                  borderColor="border.neutral"
                  flexShrink={0}
                />
                <Text variant="bodyXs">Create your first issue</Text>
              </Flex>
              <Flex alignItems="center" gap="space6">
                <Box
                  height={16}
                  width={16}
                  borderRadius="50%"
                  borderWidth="2px"
                  borderColor="border.neutral"
                  flexShrink={0}
                />
                <Text variant="bodyXs">Invite a team member</Text>
              </Flex>
            </Flex>
          </Box>
        }
      />
    ),
  },
  {
    title: "Fully customizable UI components",
    description:
      "Start quickly with built-in tooltips, hints, and panels designed for support. Need help to look like the rest of your product? Build your own components and logic for a fully native experience. Flows APIs give you the power to build anything you need.",
    visual: <CustomUIComponentsIllustration />,
  },
  {
    title: "Integrated workflows",
    description:
      "Chain help into a larger journey. Follow up a help panel with a short walkthrough of the feature the user was stuck on, or route them to a survey if the answer did not solve their problem. Flows lets you sequence these steps in a single workflow.",
    visual: (
      <Flex
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="center"
        backgroundColor="pane.bg.secondary"
        layerStyle="dotBackground"
      >
        <WorkflowsExample />
      </Flex>
    ),
  },
  {
    title: "Embeddable components",
    description:
      "Embed help content directly into your application without needing to update code or re-deploying.",
    visual: (
      <Box p="space16">
        <EmbeddableComponentsIllustrations />
      </Box>
    ),
  },
];

export const questions: Question[] = [
  {
    title: "What is Flows and how can it help with in-app help?",
    content: (
      <>
        Flows is a product adoption platform that lets you build contextual help inside your product
        instead of sending users to a separate help center. Add tooltips, short guides, and help
        panels that show up exactly where a user gets stuck, and target them by page or user
        property. The visual editor lets non-developers manage the content, while your own UI
        components render every experience natively.
      </>
    ),
    schemaText: `Flows is a product adoption platform that lets you build contextual help inside your product instead of sending users to a separate help center. Add tooltips, short guides, and help panels that show up exactly where a user gets stuck, and target them by page or user property. The visual editor lets non-developers manage the content, while your own UI components render every experience natively. Flows is free for up to ${FREE_LIMIT} monthly tracked users (MTUs).`,
  },
  {
    title: "Do I need to know how to code?",
    content: (
      <>
        You don’t need to know how to code to create your first in-app help experience with Flows.
        Once you integrate our SDK, you can use our visual editor to create and manage help content
        without writing any code.
        <br />
        <br />
        However, Flows is a “Headless product adoption platform”, so having a front-end developer on
        your team can be beneficial to fully leverage its customization capabilities by creating
        custom UI components for your workflows.
      </>
    ),
    schemaText:
      "You don’t need to know how to code to create your first in-app help experience with Flows. Once you integrate our SDK, you can use our visual editor to create and manage help content without writing any code. However, Flows is a “Headless product adoption platform”, so having a front-end developer on your team can be beneficial to fully leverage its customization capabilities by creating custom UI components for your workflows.",
  },
  {
    title: "How much customization is possible?",
    content: (
      <>
        Flows are designed to be a “Headless product adoption platform“. This means that you can{" "}
        <Link
          className={css({ textDecoration: "underline" })}
          href={links.docs.blocks.components.custom}
        >
          create your own UI components
        </Link>{" "}
        with custom styling and logic to create a native experience for your users. You can also use
        our built-in components to get started quickly.
      </>
    ),
    schemaText:
      "Flows are designed to be a “Headless product adoption platform“. This means that you can create your own UI components with custom styling and logic to create a native experience for your users. You can also use our built-in components to get started quickly.",
  },
  {
    title: "How much does Flows cost?",
    content: (
      <>
        Flows is free for up to {FREE_LIMIT} monthly tracked users (MTUs). After that, the pricing
        starts at ${pricingTiers.tier1.price} per MTU. Our pricing is volume based, so the more
        active users you have, the less you pay per user. For more information, check out our{" "}
        <Link className={css({ textDecoration: "underline" })} href={routes.pricing}>
          pricing page
        </Link>
        .
      </>
    ),
    schemaText: `Flows is free for up to ${FREE_LIMIT} monthly tracked users (MTUs). After that, the pricing starts at $${pricingTiers.tier1.price} per MTU. Our pricing is volume based, so the more active users you have, the less you pay per user. For more information, check out our pricing page.`,
  },
];
