import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { links } from "lib/links";
import Link from "next/link";
import { routes } from "routes";
import { FREE_LIMIT, pricingTiers } from "shared";
import { Button, Text } from "ui";

import {
  CustomUIComponentsIllustration,
  EmbeddableComponentsIllustrations,
  PlaceholderApplication,
  PlaceholderTooltip,
} from "../../../components/ui";
import { WorkflowsExample } from "../workflows-example";

export const riverFeatures = [
  {
    title: "Upgrade prompts & special offers",
    description:
      "Nudge users toward higher plans when they hit value milestones. Using Flows, you can create targeted modals or banners that offer discounts or highlight premium features at the right moment. Personalize these messages by segment to make each offer more relevant.",
    visual: (
      <PlaceholderApplication
        sidebarBannerSlot={
          <Flex
            flexDirection="column"
            p="space12"
            borderWidth="1px"
            borderColor="newBorder.neutral"
            borderRadius="6px"
            backgroundColor="pane.bg.elevated"
            mt="space8"
            alignItems="start"
            opacity={0}
            animation="fadein 0.6s ease-in-out"
            animationFillMode="forwards"
          >
            <Text mb="space2" variant="titleS">
              20% off Pro plan
            </Text>
            <Text mb="space4" variant="bodyXs">
              Upgrade to get access to advanced features.
            </Text>
            {/* Button is rendered as div to prevent taking focus and messing with aria-hidden */}
            <Button variant="primary" asChild size="small">
              <div
                className={css({
                  pointerEvents: "none",
                })}
              >
                Upgrade now
              </div>
            </Button>
          </Flex>
        }
      />
    ),
  },
  {
    title: "Feature gating & paywalls",
    description:
      "Do you have advanced features that are only available to premium users? Use Flows to prompt lower - tier users to upgrade when they try to access these features. For example, when a free user clicks a locked feature, Flows can trigger an upgrade banner highlighting the benefits of the premium plan.",
    visual: (
      <PlaceholderApplication
        sidebarTooltipSlot={
          <Box position="relative">
            <Box
              height={24}
              width={24}
              backgroundColor="newBg.neutral"
              borderWidth="1px"
              borderColor="newBorder.primary"
              borderRadius="radius4"
              shadow="focus"
            />
            <Box width={176} pt="space4" position="absolute" right={0} md={{ right: "unset" }}>
              <PlaceholderTooltip
                title="Analytics Pro"
                description="Upgrade to get access to advanced analytics features."
                showProgress={false}
                buttonLabel="Upgrade now"
              />
            </Box>
          </Box>
        }
      />
    ),
  },
  {
    title: "Fully customizable UI components",
    description:
      "Start quickly with built-in UI elements like tooltips, hints and modals designed for engagement. Need a unique look? Build your own styling and logic to match your product’s brand. Flows APIs give you the power to build anything you need.",
    visual: <CustomUIComponentsIllustration />,
  },
  {
    title: "Integrated workflows",
    description:
      "Integrate revenue expansion campaigns into larger user journeys. For instance, you might show an upsell banner only after a user completes onboarding, or follow a new feature announcement with a tutorial. Flows lets you sequence these touchpoints in a single workflow for maximum impact.",
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
      "Embed UI elements directly into your application without needing to update code or re-deploying.",
    visual: <EmbeddableComponentsIllustrations />,
  },
];

export const questions = [
  {
    title: "What is Flows and how can it help with product-led growth?",
    content: (
      <>
        Flows is a product adoption platform that makes it easy to create in-app experiences at
        every stage of the user lifecycle. In the context of revenue expansion, you can use Flows to
        launch targeted upgrade modals, paywall banners, and promotional flows that guide users to
        higher-value plans. The visual editor lets non-developers design these campaigns without
        code, while developers can still add custom UI components if needed. By streamlining and
        centralizing in-app promotions, Flows turns your product into a powerful engine for growth.
      </>
    ),
  },
  {
    title: "Do I need to know how to code?",
    content: (
      <>
        You don’t need to know how to code to start creating user onboarding flows with Flows. Once
        you integrate our SDK, you can use our visual editor to create and manage workflows without
        writing any code.
        <br />
        <br />
        However, Flows is a “Headless product adoption platform”, so having a front-end developer on
        your team can be beneficial to fully leverage its customization capabilities by creating
        custom UI components for your workflows.
      </>
    ),
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
  },
];
