import { Box, Flex } from "@flows/styled-system/jsx";
import { Text } from "ui";

import { type AlternativeContentType } from "../types";

export const guidechimpContent: AlternativeContentType = {
  slug: "guidechimp",
  seoTitle: "GuideChimp alternative",
  title: "The fully-featured GuideChimp alternative",
  description:
    "Flows is the GuideChimp alternative for teams who want to move beyond open-source tour libraries and build scalable product adoption workflows.",
  competitor: {
    name: "GuideChimp",
    squareLogo: (
      <Box w={20} h={20} bg="#A36948" role="img" aria-label="GuideChimp logo" borderRadius="4px" />
    ),
    fullLogo: (
      <Flex align="center" gap="space8">
        <Box w={20} h={20} bg="#A36948" borderRadius="4px" />
        <Text variant="titleL">GuideChimp</Text>
      </Flex>
    ),
  },
  summary: {
    competitorContent:
      "GuideChimp is an open-source JavaScript library for creating interactive guided tours. It works with React, Vue, Angular, and plain JavaScript, and supports a plugin system for extending functionality. While it's flexible as a UI library, it is still fundamentally a client-side tour component. State management, targeting, analytics, and maintenance all need to be built and owned by your engineering team.",
    flowsContent:
      "Flows is a modern alternative to GuideChimp that removes the need to build onboarding infrastructure in-house. You define workflows using your own UI components, while Flows handles state, orchestration, targeting, and delivery. You get the flexibility of a code-first approach with the operational capabilities of a full product adoption platform.",
  },
  comparisonTitle: "Flows vs GuideChimp: Key differences",
  comparisons: [
    {
      title: "Product tours",
      competitor: true,
      flows: true,
      description:
        "Both GuideChimp and Flows support guided, step-by-step product tours and user onboarding experiences.",
    },
    {
      title: "Framework support",
      competitor: true,
      flows: true,
      description:
        "GuideChimp works with React, Vue, Angular, and plain JavaScript. Flows supports the same frameworks and more.",
    },
    {
      title: "Plugin system",
      competitor: true,
      flows: false,
      description:
        "GuideChimp offers an extensible plugin system for customizing tour behavior. Flows handles this through built-in workflow logic instead.",
    },
    {
      title: "Embeddable components",
      competitor: false,
      flows: true,
      description:
        "Flows allows you to embed components directly within your app's layout. GuideChimp is limited to overlay-style tooltips.",
    },
    {
      title: "Workflow logic",
      competitor: false,
      flows: true,
      description:
        "Flows supports branching workflows and conditional logic. GuideChimp requires custom code for anything beyond linear tours.",
    },
    {
      title: "State management",
      competitor: false,
      flows: true,
      description:
        "Flows handles user progress, persistence, and completion automatically. GuideChimp requires manual state handling.",
    },
    {
      title: "Analytics",
      competitor: false,
      flows: true,
      description:
        "Flows provides built-in analytics and step tracking. GuideChimp requires custom analytics integration.",
    },
    {
      title: "Targeting",
      competitor: false,
      flows: true,
      description:
        "Flows supports user targeting and segmentation. GuideChimp has no built-in targeting capabilities.",
    },
    {
      title: "Localization",
      competitor: false,
      flows: true,
      description:
        "Flows supports localization out of the box. GuideChimp requires manual implementation for multi-language support.",
    },
    {
      title: "Free plan",
      competitor: true,
      flows: true,
      description:
        "GuideChimp requires a paid license for commercial applications. Flows offers a free plan with 250 monthly tracked users.",
    },
  ],
  otherDifferences: [
    {
      title: "Build vs buy",
      competitorDescription:
        "With GuideChimp, your team builds and maintains everything around the library: state, targeting, analytics, and updates as your product evolves.",
      flowsDescription:
        "Flows removes the need to build onboarding infrastructure. You focus on UI and content while Flows handles orchestration, delivery, and state.",
    },
    {
      title: "From tours to workflows",
      competitorDescription:
        "GuideChimp is a tour library. Branching logic, conditional flows, and multi-step journeys spanning sessions all require custom engineering work.",
      flowsDescription:
        "Flows supports full workflows with branching logic, inline components, and long-running journeys that persist across sessions.",
    },
    {
      title: "Part of your product",
      competitorDescription:
        "GuideChimp overlays tooltips on top of your UI. As your product grows, this can feel disconnected from the native experience.",
      flowsDescription:
        "Flows workflows live inside your product and are built using your own components and design system.",
    },
    {
      title: "Team collaboration",
      competitorDescription:
        "GuideChimp is developer-only. Every tour update and content change requires an engineering ticket.",
      flowsDescription:
        "Flows enables collaboration between developers, product managers, and designers. Developers own the components; product teams control the content and logic.",
    },
    {
      title: "Maintenance overhead",
      competitorDescription:
        "As your product UI evolves, GuideChimp tours need constant updates and re-testing to stay accurate.",
      flowsDescription:
        "Flows adapts naturally as your product changes, reducing maintenance overhead and long-term technical debt.",
    },
  ],
  ctaBanner: {
    title: "Switch from GuideChimp to Flows today",
    description:
      "Stop maintaining tour infrastructure in-house. Build scalable, product-native workflows with Flows.",
  },
};
