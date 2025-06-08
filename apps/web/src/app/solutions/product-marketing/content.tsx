import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { links } from "lib/links";
import Link from "next/link";
import { routes } from "routes";
import { FREE_LIMIT, pricingTiers } from "shared";

import {
  CustomUIComponentsIllustration,
  EmbeddableComponentsIllustrations,
  PlaceholderApplication,
  PlaceholderTooltip,
} from "../../../components/ui";
import { WorkflowsExample } from "../workflows-example";

export const riverFeatures = [
  {
    title: "In-app announcements and banners",
    description:
      "Build targeted experiences to promote new features, events, or offers. Use segmentation to deliver these messages to exactly the users who need to see them. Because everything lives in Flows, you can update the content or design at any time without a code deploy.",
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
    title: "Fully customizable UI components",
    description:
      "Start quickly with built-in UI elements like tooltips, hints and modals designed for engagement. Need a unique look? Build your own styling and logic to match your product’s brand. Flows APIs give you the power to build anything you need.",
    visual: <CustomUIComponentsIllustration />,
  },
  {
    title: "Integrated workflows",
    description:
      "Integrate product marketing campaigns into larger user journeys. For instance, you might show an upsell banner only after a user completes onboarding, or follow a new feature announcement with a tutorial. Flows lets you sequence these touchpoints in a single workflow for maximum impact",
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
    title: "What is Flows and how can it help with product marketing?",
    content: (
      <>
        Flows is a product adoption platform that simplifies product marketing by enabling teams to
        launch in-app campaigns that engage users. Integrate Flows to create targeted announcements,
        banners, and tutorials to boost awareness and adoption of your features. The visual editor
        lets non-developers design and update campaigns without code, while developers can still add
        custom UI components if needed
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
