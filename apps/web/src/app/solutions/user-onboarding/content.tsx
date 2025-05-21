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
    title: "In-app product tours",
    description:
      "Guide users step-by-step through key features for their success in your product. Highlight actions, showcase the value, and lead them to their “Aha” moment.",
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
    title: "Embeddable components",
    description:
      "Embed UI elements directly into your application without needing to update code or re-deploying.",
    visual: <EmbeddableComponentsIllustrations />,
  },
  {
    title: "Flexible solution",
    description:
      "Flows comes with a set of built-in UI components to get you started. Not enough? Create your own components with custom styling and logic to create a native experience.",
    visual: <CustomUIComponentsIllustration />,
  },
  {
    title: "Part of a workflow",
    description:
      "Create powerful workflows that engage users at every stage of their user experience.",
    visual: (
      <Flex
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="center"
        layerStyle="dotBackground"
      >
        <WorkflowsExample />
      </Flex>
    ),
  },
];

export const questions = [
  {
    title: "What is Flows and how can it help with user onboarding?",
    content: (
      <>
        Flows is a product adoption platform that streamlines user onboarding with tools and
        components to guide users through key features. Integrate Flows to create in-app tours,
        embed UI elements, and design custom workflows to enhance engagement and retention. The
        visual editor allows non-developers to manage these elements without coding, while offering
        customization for developers.
        <br />
        <br />
        Flows includes built-in UI components and supports custom components for a native
        experience. Its scalable pricing model starts with a free tier for up to {FREE_LIMIT}{" "}
        monthly tracked users (MTUs), making it cost-effective for businesses of all sizes.
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
        custom UI components for your workflows
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
