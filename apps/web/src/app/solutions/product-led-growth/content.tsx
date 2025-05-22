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
    title: "Personalized onboarding",
    description:
      "Create welcome experiences and guided tutorials that turn new sign-ups into active users. Use modals, hints, or tours to highlight key features. Interactive checklists help users track their progress and stay engaged.",
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
                title="Get started"
                description="Start by creating your first issue in the project."
              />
            </Box>
          </Box>
        }
      />
    ),
  },
  {
    title: "In-app messages & announcements",
    description:
      "Deliver the right message at the right moment. With Flows, you can deploy targeted banners, tooltips, and modals to announce new features or promote relevant add-ons. Automate upsell and renewal prompts based on usage data, so users get the most valuable offers.",
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
              New: Analytics dashboard
            </Text>
            <Text mb="space4" variant="bodyXs">
              Get better insights into user’s behavior.
            </Text>
            {/* Button is rendered as div to prevent taking focus and messing with aria-hidden */}
            <Button variant="primary" asChild size="small">
              <div
                className={css({
                  pointerEvents: "none",
                })}
              >
                Show details
              </div>
            </Button>
          </Flex>
        }
      />
    ),
  },
  {
    title: "Fully customizable UI components",
    description:
      "Start quickly with built-in UI elements like tooltips, hints and modals designed for engagement. Need a unique experience? Build your own components and logic to match your exact requirements. Flows APIs give you the power to build anything you need.",
    visual: <CustomUIComponentsIllustration />,
  },
  {
    title: "Integrated growth workflows",
    description:
      "Combine experiences into multi-step campaigns that guide users through your ideal product journey. For example, trigger a welcome modal after sign-up, then follow up with a feature tour, and later nudge with an upsell banner. Flows can branch and filter based on user attributes so you can personalize the experience.",
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
        Flows is a product adoption platform that makes it easy to create in-app experiences for any
        stage of the user lifecycle. With Flows, you can launch onboarding tours, announcements, and
        personalized campaigns to guide users toward value and encourage upgrades. Our visual editor
        lets marketing and product teams build and update flows without code, while developers can
        add custom components for a native feel. By streamlining these experiences, Flows helps turn
        your product into a powerful growth engine.
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
