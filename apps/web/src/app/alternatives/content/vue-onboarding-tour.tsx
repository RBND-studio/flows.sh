import { Box, Flex } from "@flows/styled-system/jsx";
import { Text } from "ui";

import { type AlternativeContentType } from "../types";

export const vueOnboardingTourContent: AlternativeContentType = {
  slug: "vue-onboarding-tour",
  seoTitle: "VueOnboardingTour alternative",
  title: "The fully-featured VueOnboardingTour alternative",
  description:
    "Flows is the VueOnboardingTour alternative for teams who have outgrown Vue-only tour libraries and want a scalable, framework-agnostic way to build product adoption.",
  competitor: {
    name: "VueOnboardingTour",
    squareLogo: (
      <Box
        w={20}
        h={20}
        bg="#42B883"
        role="img"
        aria-label="VueOnboardingTour logo"
        borderRadius="4px"
      />
    ),
    fullLogo: (
      <Flex align="center" gap="space8">
        <Box w={20} h={20} bg="#42B883" borderRadius="4px" />
        <Text variant="titleL">VueOnboardingTour</Text>
      </Flex>
    ),
  },
  summary: {
    competitorContent:
      "VueOnboardingTour is an open-source Vue.js component for creating guided, step-by-step onboarding tours. It integrates natively with the Vue ecosystem and provides a straightforward API for defining tour steps. Like other open-source tour libraries, it covers the UI layer only—state management, targeting, analytics, localization, and maintenance all need to be built and owned by your team.",
    flowsContent:
      "Flows is a modern product adoption platform that replaces the need to build onboarding infrastructure in-house. With Flows, you build workflows using your own Vue components, while Flows handles state, orchestration, targeting, and delivery. You get the Vue-native development experience with the operational power of a full platform.",
  },
  comparisonTitle: "Flows vs VueOnboardingTour: Key differences",
  comparisons: [
    {
      title: "Product tours",
      competitor: true,
      flows: true,
      description:
        "Both VueOnboardingTour and Flows support guided, step-by-step product tours for user onboarding.",
    },
    {
      title: "Vue support",
      competitor: true,
      flows: true,
      description:
        "VueOnboardingTour is built specifically for Vue. Flows supports Vue as well as React, Angular, and plain JavaScript.",
    },
    {
      title: "Framework agnostic",
      competitor: false,
      flows: true,
      description:
        "VueOnboardingTour is Vue-only. Flows works across Vue, React, Angular, and vanilla JavaScript—useful if your stack evolves.",
    },
    {
      title: "Floating components",
      competitor: true,
      flows: true,
      description:
        "VueOnboardingTour provides tooltip-style overlays. Flows supports tooltips, modals, banners, and more.",
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
        "Flows supports branching workflows and conditional logic. VueOnboardingTour requires custom code for anything beyond linear tours.",
    },
    {
      title: "State management",
      competitor: false,
      flows: true,
      description:
        "Flows handles user progress, persistence, and completion automatically. VueOnboardingTour requires manual state handling.",
    },
    {
      title: "Analytics",
      competitor: false,
      flows: true,
      description:
        "Flows provides built-in analytics and step tracking. VueOnboardingTour requires custom analytics integration.",
    },
    {
      title: "Targeting",
      competitor: false,
      flows: true,
      description:
        "Flows supports user targeting and segmentation. VueOnboardingTour has no built-in targeting capabilities.",
    },
    {
      title: "Free plan",
      competitor: true,
      flows: true,
      description:
        "VueOnboardingTour is free and open source. Flows offers a free plan with 250 monthly tracked users.",
    },
  ],
  otherDifferences: [
    {
      title: "Build vs buy",
      competitorDescription:
        "With VueOnboardingTour, your team builds and maintains everything around the library: state, targeting, analytics, and updates as your product evolves.",
      flowsDescription:
        "Flows removes the need to build onboarding infrastructure. You focus on UI and content while Flows handles orchestration, delivery, and state.",
    },
    {
      title: "Beyond Vue",
      competitorDescription:
        "VueOnboardingTour is tightly coupled to Vue. If any part of your stack is React, Angular, or plain JavaScript, you need a different tool.",
      flowsDescription:
        "Flows works across Vue, React, Angular, and plain JavaScript. Whichever frameworks are in your stack, Flows integrates cleanly and lets you build with your own components.",
    },
    {
      title: "From tours to workflows",
      competitorDescription:
        "VueOnboardingTour is designed for linear, step-by-step onboarding tours. Any conditional logic or branching requires custom implementation.",
      flowsDescription:
        "Flows supports full workflows with branching logic, inline components, and long-running journeys that persist across sessions.",
    },
    {
      title: "Team collaboration",
      competitorDescription:
        "VueOnboardingTour is developer-only. Product managers and designers depend on engineering for every tour update.",
      flowsDescription:
        "Flows enables collaboration between developers, product managers, and designers. Developers own the components; product teams control the content and logic.",
    },
    {
      title: "Maintenance and ownership",
      competitorDescription:
        "As your product UI changes, VueOnboardingTour steps need manual updates and re-testing to stay accurate.",
      flowsDescription:
        "Flows adapts naturally as your product changes, reducing maintenance overhead and long-term technical debt.",
    },
  ],
  ctaBanner: {
    title: "Switch from VueOnboardingTour to Flows today",
    description:
      "Stop maintaining tour logic in-house. Build scalable, product-native workflows with Flows.",
  },
};
