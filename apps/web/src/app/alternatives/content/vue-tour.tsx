import { css } from "@flows/styled-system/css";
import { VueTour20, VueTourFull20 } from "icons";

import { type AlternativeContentType } from "../types";

export const vueTourContent: AlternativeContentType = {
  slug: "vue-tour",
  seoTitle: "Vue Tour alternative",
  title: "The fully-featured Vue Tour alternative",
  description:
    "Flows is the Vue Tour alternative for teams who have outgrown hard-coded Vue.js tours and want flexible, maintainable workflows inside their product.",
  competitor: {
    name: "Vue Tour",
    squareLogo: <VueTour20 role="img" aria-label="Vue Tour logo" />,
    fullLogo: (
      <VueTourFull20
        role="img"
        aria-label="Vue Tour logo"
        className={css({
          height: "28px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "Vue Tour is an open-source Vue.js library for building guided product tours using tooltips and overlays. It is simple to get started but requires manual implementation for state, targeting, analytics, localization, and ongoing maintenance.",
    flowsContent:
      "Flows is a modern product adoption platform that replaces hard-coded tours with workflows. You build UI using your own components, while Flows handles orchestration, state, logic, and delivery across your product.",
  },
  comparisonTitle: "Flows vs Vue Tour: Key differences",
  comparisons: [
    {
      title: "Product tours",
      competitor: true,
      flows: true,
      description:
        "Both Vue Tour and Flows can guide users through step-by-step product experiences.",
    },
    {
      title: "Vue.js integration",
      competitor: true,
      flows: true,
      description:
        "Vue Tour is built specifically for Vue. Flows supports Vue.js as well as React, Angular, and plain JavaScript.",
    },
    {
      title: "Floating components",
      competitor: true,
      flows: true,
      description:
        "Vue Tour focuses on tooltip-based overlays. Flows supports tooltips, modals, banners, and checklists.",
    },
    {
      title: "Embeddable components",
      competitor: false,
      flows: true,
      description:
        "Flows supports inline components rendered directly inside your app layout, not just floating overlays.",
    },
    {
      title: "Customization",
      competitor: true,
      flows: true,
      description:
        "Vue Tour customization requires writing and maintaining Vue-specific code. Flows lets you reuse your design system components.",
    },
    {
      title: "Workflow logic",
      competitor: false,
      flows: true,
      description:
        "Flows supports branching workflows and conditional logic. Vue Tour tours are linear by default.",
    },
    {
      title: "State management",
      competitor: false,
      flows: true,
      description:
        "Flows manages user progress and persistence automatically. Vue Tour requires manual state handling.",
    },
    {
      title: "Localization",
      competitor: false,
      flows: true,
      description:
        "Flows supports localization out of the box. Vue Tour requires custom translation logic.",
    },
    {
      title: "Analytics",
      competitor: false,
      flows: true,
      description:
        "Flows provides built-in analytics and tracking. Vue Tour requires custom analytics integration.",
    },
    {
      title: "Targeting",
      competitor: false,
      flows: true,
      description:
        "Flows offers advanced user targeting and segmentation features. Vue Tour requires custom implementation for targeting specific user groups.",
    },
    {
      title: "Free plan",
      competitor: true,
      flows: true,
      description:
        "Vue Tour is free and open source. Flows offers a free plan with 250 monthly active users.",
    },
  ],
  otherDifferences: [
    {
      title: "Hard-coded tours vs workflows",
      competitorDescription:
        "Vue Tour tours are defined directly in Vue components and tightly coupled to the DOM structure.",
      flowsDescription:
        "Flows workflows are decoupled from UI structure and evolve without rewriting tour code.",
    },
    {
      title: "Build vs buy",
      competitorDescription:
        "With Vue Tour, you’re responsible for building and maintaining everything around the tour: logic, targeting, state, analytics, and ongoing updates as your product evolves.",
      flowsDescription:
        "Flows removes the need to build onboarding infrastructure. You focus on UI and content, while Flows handles orchestration, delivery, and state.",
    },
    {
      title: "Beyond onboarding",
      competitorDescription: "Vue Tour is optimized for simple onboarding tours.",
      flowsDescription:
        "Flows supports onboarding, feature discovery, education, upsell flows, and long-running journeys.",
    },
    {
      title: "Part of your product",
      competitorDescription:
        "Vue Tour overlays tooltips on top of your UI, which can feel bolted on as your product evolves.",
      flowsDescription:
        "Flows workflows live inside your product and can be built using your own components and design system.",
    },
    {
      title: "Maintenance cost",
      competitorDescription:
        "UI changes frequently break selectors and step definitions in Vue Tour.",
      flowsDescription:
        "Flows reduces maintenance by handling orchestration and adapting as your product changes.",
    },
    {
      title: "Team collaboration",
      competitorDescription:
        "Vue Tour is developer-only. Product and design changes require engineering effort.",
      flowsDescription:
        "Flows enables collaboration between developers, designers, and product managers.",
    },
    {
      title: "Library vs platform",
      competitorDescription:
        "Vue Tour is a UI helper library, not a system for managing product adoption.",
      flowsDescription:
        "Flows is a platform for building, running, and iterating on adoption workflows over time.",
    },
  ],
  ctaBanner: {
    title: "Switch from Vue Tour to Flows today",
    description:
      "Stop maintaining hard-coded Vue tours. Build flexible, product-native workflows with Flows.",
  },
};
