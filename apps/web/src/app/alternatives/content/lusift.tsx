// cSpell:words Lusift

import { Box, Flex } from "@flows/styled-system/jsx";
import { Text } from "ui";

import { type AlternativeContentType } from "../types";

export const lusiftContent: AlternativeContentType = {
  slug: "lusift",
  seoTitle: "Lusift alternative",
  title: "The fully-featured Lusift alternative",
  description:
    "Flows is the Lusift alternative for teams who have outgrown simple tour libraries and want a scalable, maintainable platform for building product adoption.",
  competitor: {
    name: "Lusift",
    squareLogo: (
      <Box w={20} h={20} bg="#11999e" role="img" aria-label="Lusift logo" borderRadius="4px" />
    ),
    fullLogo: (
      <Flex align="center" gap="space8">
        <Box w={20} h={20} bg="#11999e" borderRadius="4px" />
        <Text variant="titleL">Lusift</Text>
      </Flex>
    ),
  },
  summary: {
    competitorContent:
      "Lusift is an open-source JavaScript library for building product guides and tours, focused on simplicity and ease of setup. It provides a lightweight, dependency-free way to create step-by-step onboarding experiences. Like other tour libraries, it covers the UI layer only—state management, targeting, analytics, localization, and long-term maintenance are your team's responsibility.",
    flowsContent:
      "Flows is a modern alternative to Lusift that goes beyond a simple tour library. With Flows, you define workflows using your own UI components, while Flows handles state, orchestration, targeting, and delivery. You get the simplicity of a lightweight library with the operational capabilities of a full product adoption platform.",
  },
  comparisonTitle: "Flows vs Lusift: Key differences",
  comparisons: [
    {
      title: "Product tours",
      competitor: true,
      flows: true,
      description:
        "Both Lusift and Flows support guided, step-by-step product tours for user onboarding.",
    },
    {
      title: "Framework agnostic",
      competitor: true,
      flows: true,
      description:
        "Lusift works with any JavaScript framework. Flows supports React, Vue, Angular, and plain JavaScript.",
    },
    {
      title: "Floating components",
      competitor: true,
      flows: true,
      description:
        "Lusift provides tooltip and popover-style guides. Flows supports tooltips, modals, banners, and more.",
    },
    {
      title: "Embeddable components",
      competitor: false,
      flows: true,
      description:
        "Flows allows you to embed components inline within your app's UI, not just overlay tooltips on top.",
    },
    {
      title: "Workflow logic",
      competitor: false,
      flows: true,
      description:
        "Flows supports branching workflows and conditional logic. Lusift requires custom code for anything beyond linear tours.",
    },
    {
      title: "State management",
      competitor: false,
      flows: true,
      description:
        "Flows handles user progress, persistence, and completion automatically. Lusift requires manual state handling.",
    },
    {
      title: "Localization",
      competitor: false,
      flows: true,
      description:
        "Flows supports localization out of the box. Lusift requires manual implementation for multi-language support.",
    },
    {
      title: "Analytics",
      competitor: false,
      flows: true,
      description:
        "Flows provides built-in analytics and step tracking. Lusift requires custom analytics integration.",
    },
    {
      title: "Targeting",
      competitor: false,
      flows: true,
      description:
        "Flows supports user targeting and segmentation. Lusift has no built-in targeting capabilities.",
    },
    {
      title: "Free plan",
      competitor: true,
      flows: true,
      description:
        "Lusift is free and open source. Flows offers a free plan with 250 monthly tracked users.",
    },
    {
      title: "Surveys",
      competitor: false,
      flows: true,
      description:
        "Flows includes built-in surveys for collecting user feedback. Lusift is a tour library and does not include survey capabilities.",
    },
  ],
  otherDifferences: [
    {
      title: "Build vs buy",
      competitorDescription:
        "With Lusift, your team owns everything around the tour: state, targeting, analytics, and ongoing maintenance as your product evolves.",
      flowsDescription:
        "Flows removes the need to build onboarding infrastructure. You focus on UI and content while Flows handles orchestration, delivery, and state.",
    },
    {
      title: "From tours to workflows",
      competitorDescription:
        "Lusift is designed for simple, linear product tours. Any additional logic—branching, conditions, multi-session journeys—requires custom engineering work.",
      flowsDescription:
        "Flows supports full workflows with branching logic, inline components, and long-running journeys that persist across sessions.",
    },
    {
      title: "Part of your product",
      competitorDescription:
        "Lusift overlays guide UI on top of your application, which can feel disconnected as your product grows and evolves.",
      flowsDescription:
        "Flows workflows live inside your product and are built using your own components and design system.",
    },
    {
      title: "Team collaboration",
      competitorDescription:
        "Lusift is developer-only. Product managers and designers depend on engineering for every tour update and content change.",
      flowsDescription:
        "Flows enables collaboration between developers, product managers, and designers. Developers own the components; product teams control the content and logic.",
    },
    {
      title: "Maintenance and ownership",
      competitorDescription:
        "As your product UI evolves, Lusift tours need manual updates and re-testing. Every new requirement means more custom code.",
      flowsDescription:
        "Flows adapts naturally as your product changes, reducing maintenance overhead and long-term technical debt.",
    },
  ],
  ctaBanner: {
    title: "Switch from Lusift to Flows today",
    description:
      "Stop maintaining tour logic in-house. Build scalable, product-native workflows with Flows.",
  },
};
