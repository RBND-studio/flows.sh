import { Flex } from "@flows/styled-system/jsx";
import { Text } from "ui";

import { type AlternativeContentType } from "../types";
import { TourGuideJS20 } from "icons";

export const tourguideJsContent: AlternativeContentType = {
  slug: "tourguide-js",
  seoTitle: "TourGuide JS alternative",
  title: "The fully-featured TourGuide JS alternative",
  description:
    "Flows is the TourGuide JS alternative for teams who have outgrown lightweight tour libraries and want a scalable, maintainable way to build product adoption.",
  competitor: {
    name: "TourGuide JS",
    squareLogo: <TourGuideJS20 role="img" aria-label="TourGuide JS logo" />,
    fullLogo: (
      <Flex align="center" gap="space8">
        <TourGuideJS20 role="img" aria-label="TourGuide JS logo" />
        <Text variant="titleL">TourGuide JS</Text>
      </Flex>
    ),
  },
  summary: {
    competitorContent:
      "TourGuide JS is a lightweight, framework-agnostic JavaScript library for creating step-by-step user tours and onboarding guides. It is easy to set up and works with any frontend stack, but it only covers the UI layer of product tours. Everything else—state management, targeting, analytics, localization, and long-term maintenance—must be built and owned by your team.",
    flowsContent:
      "Flows is a modern alternative to TourGuide JS that replaces the need to build onboarding infrastructure yourself. With Flows, you define workflows using your own UI components, while Flows handles state, orchestration, targeting, and delivery. You get the code-first flexibility of a library with the operational power of a full platform.",
  },
  comparisonTitle: "Flows vs TourGuide JS: Key differences",
  comparisons: [
    {
      title: "Product tours",
      competitor: true,
      flows: true,
      description:
        "Both TourGuide and Flows support guided step-by-step product tours and user onboarding.",
    },
    {
      title: "Framework agnostic",
      competitor: true,
      flows: true,
      description:
        "TourGuide works with any JavaScript framework. Flows supports React, Vue, Angular, and plain JavaScript.",
    },
    {
      title: "Floating components",
      competitor: true,
      flows: true,
      description:
        "TourGuide provides tooltip-style popovers. Flows supports tooltips, modals, banners, and more.",
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
        "Flows supports branching workflows and conditional logic. TourGuide requires custom code for anything beyond linear tours.",
    },
    {
      title: "State management",
      competitor: false,
      flows: true,
      description:
        "Flows handles user progress, persistence, and completion automatically. TourGuide requires manual state handling.",
    },
    {
      title: "Localization",
      competitor: false,
      flows: true,
      description:
        "Flows supports localization out of the box. TourGuide requires manual implementation for multi-language support.",
    },
    {
      title: "Analytics",
      competitor: false,
      flows: true,
      description:
        "Flows provides built-in analytics and step tracking. TourGuide requires custom analytics integration.",
    },
    {
      title: "Targeting",
      competitor: false,
      flows: true,
      description:
        "Flows supports user targeting and segmentation. TourGuide has no built-in targeting capabilities.",
    },
    {
      title: "Free plan",
      competitor: true,
      flows: true,
      description:
        "TourGuide is free and open source. Flows offers a free plan with 250 monthly tracked users.",
    },
  ],
  otherDifferences: [
    {
      title: "Build vs buy",
      competitorDescription:
        "With TourGuide, your team owns everything around the tour: state, targeting, analytics, and ongoing maintenance as your product evolves.",
      flowsDescription:
        "Flows removes the need to build onboarding infrastructure. You focus on UI and content while Flows handles orchestration, delivery, and state.",
    },
    {
      title: "From tours to workflows",
      competitorDescription:
        "TourGuide is designed for linear, step-by-step tours and nothing more. Any additional logic requires custom code.",
      flowsDescription:
        "Flows supports full workflows with branching logic, inline components, and long-running journeys that persist across sessions.",
    },
    {
      title: "Part of your product",
      competitorDescription:
        "TourGuide overlays UI on top of your application, which can feel disconnected as your product evolves.",
      flowsDescription:
        "Flows workflows live inside your product and are built using your own components and design system.",
    },
    {
      title: "Team collaboration",
      competitorDescription:
        "TourGuide is developer-only. Product managers and designers depend on engineering for every tour update.",
      flowsDescription:
        "Flows enables collaboration between developers, product managers, and designers. Developers own the components; product teams control the content and logic.",
    },
    {
      title: "Maintenance and ownership",
      competitorDescription:
        "Every UI change or new requirement in your product means updating TourGuide configurations and re-testing tours manually.",
      flowsDescription:
        "Flows adapts naturally as your product changes, reducing maintenance overhead and long-term technical debt.",
    },
  ],
  ctaBanner: {
    title: "Switch from TourGuide JS to Flows today",
    description:
      "Stop maintaining tour logic in-house. Build scalable, product-native workflows with Flows.",
  },
};
