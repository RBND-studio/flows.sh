import { Box, Flex } from "@flows/styled-system/jsx";
import { Text } from "ui";

import { type AlternativeContentType } from "../types";

export const angularUiTourContent: AlternativeContentType = {
  slug: "angular-ui-tour",
  seoTitle: "Angular UI Tour alternative",
  title: "The fully-featured Angular UI Tour alternative",
  description:
    "Flows is the Angular UI Tour alternative for Angular teams who have outgrown hard-coded product tours and want scalable, workflow-driven product adoption.",
  competitor: {
    name: "Angular UI Tour",
    squareLogo: (
      <Box
        w={20}
        h={20}
        bg="#DD0031"
        role="img"
        aria-label="Angular UI Tour logo"
        borderRadius="4px"
      />
    ),
    fullLogo: (
      <Flex align="center" gap="space8">
        <Box w={20} h={20} bg="#DD0031" borderRadius="4px" />
        <Text variant="titleL">Angular UI Tour</Text>
      </Flex>
    ),
  },
  summary: {
    competitorContent:
      "Angular UI Tour is an open-source product tour library for Angular applications, built on top of Angular UI Bootstrap Tooltips. It provides a declarative API for defining step-by-step tours within Angular apps. Like other open-source tour libraries, it covers the UI layer only—state persistence, targeting, analytics, localization, and maintenance all need to be built and owned by your engineering team.",
    flowsContent:
      "Flows is a modern product adoption platform that works with Angular and beyond. With Flows, you build workflows using your own Angular components, while Flows handles state, orchestration, targeting, and delivery. You get the Angular-native development experience with the full operational power of a product adoption platform—without the maintenance burden of a DIY library.",
  },
  comparisonTitle: "Flows vs Angular UI Tour: Key differences",
  comparisons: [
    {
      title: "Product tours",
      competitor: true,
      flows: true,
      description:
        "Both Angular UI Tour and Flows support guided, step-by-step product tours within Angular applications.",
    },
    {
      title: "Angular support",
      competitor: true,
      flows: true,
      description:
        "Angular UI Tour is built specifically for Angular. Flows supports Angular as well as React, Vue, and plain JavaScript.",
    },
    {
      title: "Framework agnostic",
      competitor: false,
      flows: true,
      description:
        "Angular UI Tour is Angular-only. Flows works across Angular, React, Vue, and vanilla JavaScript—useful if your stack evolves or spans multiple frontends.",
    },
    {
      title: "Floating components",
      competitor: true,
      flows: true,
      description:
        "Angular UI Tour provides tooltip-based overlays. Flows supports tooltips, modals, banners, and more.",
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
        "Flows supports branching workflows and conditional logic. Angular UI Tour requires custom code for anything beyond linear tours.",
    },
    {
      title: "State management",
      competitor: false,
      flows: true,
      description:
        "Flows handles user progress, persistence, and completion automatically. Angular UI Tour requires manual state handling.",
    },
    {
      title: "Analytics",
      competitor: false,
      flows: true,
      description:
        "Flows provides built-in analytics and step tracking. Angular UI Tour requires custom analytics integration.",
    },
    {
      title: "Targeting",
      competitor: false,
      flows: true,
      description:
        "Flows supports user targeting and segmentation. Angular UI Tour has no built-in targeting capabilities.",
    },
    {
      title: "Free plan",
      competitor: true,
      flows: true,
      description:
        "Angular UI Tour is free and open source. Flows offers a free plan with 250 monthly tracked users.",
    },
    {
      title: "Surveys",
      competitor: false,
      flows: true,
      description:
        "Flows includes built-in surveys for collecting user feedback. Angular UI Tour is a tour library and does not include survey capabilities.",
    },
  ],
  otherDifferences: [
    {
      title: "Build vs buy",
      competitorDescription:
        "With Angular UI Tour, your team builds and maintains everything around the library: state, targeting, analytics, and updates as your product evolves.",
      flowsDescription:
        "Flows removes the need to build onboarding infrastructure. You focus on UI and content while Flows handles orchestration, delivery, and state.",
    },
    {
      title: "Beyond Angular",
      competitorDescription:
        "Angular UI Tour is tightly coupled to Angular and Angular UI Bootstrap. If your stack includes any other framework, you need separate tools.",
      flowsDescription:
        "Flows works across Angular, React, Vue, and plain JavaScript. Whichever frameworks are in your stack, Flows integrates cleanly.",
    },
    {
      title: "From tours to workflows",
      competitorDescription:
        "Angular UI Tour is designed for linear, step-by-step product tours. Branching logic, conditional journeys, and multi-session flows all require custom engineering.",
      flowsDescription:
        "Flows supports full workflows with branching logic, inline components, and long-running journeys that persist across sessions.",
    },
    {
      title: "Team collaboration",
      competitorDescription:
        "Angular UI Tour is developer-only. Product managers and designers depend on engineering for every tour update and content change.",
      flowsDescription:
        "Flows enables collaboration between developers, product managers, and designers. Developers own the components; product teams control the content and logic without writing code.",
    },
    {
      title: "Maintenance and ownership",
      competitorDescription:
        "As your Angular app evolves, Angular UI Tour steps need manual updates and re-testing. Every new product requirement means more custom code.",
      flowsDescription:
        "Flows adapts naturally as your product changes, reducing maintenance overhead and long-term technical debt.",
    },
  ],
  ctaBanner: {
    title: "Switch from Angular UI Tour to Flows today",
    description:
      "Stop maintaining tour logic in-house. Build scalable, product-native workflows with Flows.",
  },
};
