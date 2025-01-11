import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { WorkflowsExample } from "components/homepage/workflows-section/workflows-example";
import { links } from "lib/links";
import Link from "next/link";
import { routes } from "routes";

import {
  PlaceholderApplication,
  PlaceholderModal,
  PlaceholderTable,
  PlaceholderTooltip,
} from "../../../components/ui";

export const riverFeatures = [
  {
    title: "Embeddable components",
    description:
      "Add feature announcements directly into your application without needing to update code or re-deploying.",
    visual: (
      <Box
        overflow="hidden"
        width="100%"
        height="100%"
        position="relative"
        background="pane.bg.main"
        role="img"
      >
        <Box
          bottom={0}
          left={0}
          height={120}
          background="linear-gradient(0deg, token(colors.pane.bg.elevated), transparent)"
          width="100%"
          aria-hidden="true"
          position="absolute"
        />
        <PlaceholderTable />
      </Box>
    ),
    first: true,
  },
  {
    title: "In-app product tours",
    description:
      "Guide users step-by-step to teach them what new features are available and how to use them.",
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
    title: "Flexible solution",
    description:
      "Flows comes with a set of built-in UI components to get you started. Not enough? Create your own components with custom styling and logic to create a native experience.",
    visual: (
      <Flex
        background="pane.bg.secondary"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="100%"
        p="space12"
        gap="space24"
        role="img"
      >
        <PlaceholderTooltip
          title="Click here"
          description="Tooltips are great for guiding users through a process."
        />

        <PlaceholderModal
          title="New feature announcement"
          description="Modals are better for catching attention or more information."
          className={css({
            display: "none",
            md: { display: "flex" },
          })}
        />
      </Flex>
    ),
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
        backgroundColor="pane.bg.secondary"
      >
        <WorkflowsExample />
      </Flex>
    ),
    last: true,
  },
];

export const questions = [
  {
    title: "What is Flows and how can it help with feature adoption?",
    content: (
      <>
        Flows is a product adoption platform that simplifies feature announcement and product
        walkthroughs with tools and components to guide users. Integrate Flows to create in-app
        tours, embed UI elements, and design custom workflows to enhance engagement and retention.
        The visual editor allows non-developers to manage these elements without coding, while
        offering customization for developers.
        <br />
        <br />
        Flows includes built-in UI components and supports custom components for a native
        experience. Its scalable pricing model starts with a free tier for up to 500 active users
        per month, making it cost-effective for businesses of all sizes.
      </>
    ),
  },
  {
    title: "Do I need to know how to code?",
    content: (
      <>
        You don’t need to know how to code to create your fist release announcement with Flows. Once
        you integrate our SDK, you can use our visual editor to create and manage workflows without
        writing any code.
        <br />
        <br />
        However, Flows is a “Headless product adoption platform”, so having a front-end developer on
        your team can be beneficial for fully leveraging its customization capabilities by creating
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
          href={links.docs.blockTemplates.createCustomComponents}
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
        Flows is free for up to 500 active users per month. After that, the pricing starts at $0.075
        per active user per month. Our pricing is volume based, so the more active users you have,
        the lower the less you pay per user. For more information, check out our{" "}
        <Link className={css({ textDecoration: "underline" })} href={routes.pricing}>
          pricing page
        </Link>
        .
      </>
    ),
  },
];
