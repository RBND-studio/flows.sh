import { css } from "@flows/styled-system/css";
import { VueTour20, VueTourFull20 } from "icons";

import { type AlternativeContentType } from "../types";

export const vuejsTourContent: AlternativeContentType = {
  slug: "vuejs-tour",
  seoTitle: "vuejs-tour alternative",
  title: "The fully-featured vuejs-tour alternative",
  description:
    "Flows is the vuejs-tour alternative for teams who have outgrown hard-coded Vue.js tours and want flexible, maintainable workflows inside their product.",
  competitor: {
    name: "vuejs-tour",
    squareLogo: <VueTour20 role="img" aria-label="vuejs-tour logo" />,
    fullLogo: (
      <VueTourFull20
        role="img"
        aria-label="vuejs-tour logo"
        className={css({
          height: "28px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "vuejs-tour is a lightweight open-source Vue.js library for creating guided product tours as Vue components. It's simple to get started, but it's Vue-only, has a small community, and everything beyond basic tours — state management, logic, targeting, analytics, and maintenance — needs to be built and maintained in-house.",
    flowsContent:
      "Flows is a modern product adoption platform that replaces hard-coded tours with workflows. You build UI using your own components, while Flows handles orchestration, state, logic, and delivery across your product. Flows supports Vue.js as well as React, Angular, and plain JavaScript.",
  },
  comparisonTitle: "Flows vs vuejs-tour: Key differences",
  comparisons: [
    {
      title: "Product tours",
      competitor: true,
      flows: true,
      description:
        "Both vuejs-tour and Flows can guide users through step-by-step product experiences.",
    },
    {
      title: "Vue.js integration",
      competitor: true,
      flows: true,
      description:
        "vuejs-tour is built specifically for Vue. Flows supports Vue.js as well as React, Angular, and plain JavaScript.",
    },
    {
      title: "Floating components",
      competitor: true,
      flows: true,
      description:
        "vuejs-tour focuses on tooltip-based overlays. Flows supports tooltips, modals, banners, and checklists.",
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
        "vuejs-tour customization requires writing Vue-specific code. Flows lets you reuse your design system components.",
    },
    {
      title: "Workflow logic",
      competitor: false,
      flows: true,
      description:
        "Flows supports branching workflows and conditional logic. vuejs-tour tours are linear by default.",
    },
    {
      title: "State management",
      competitor: false,
      flows: true,
      description:
        "Flows manages user progress and persistence automatically. vuejs-tour requires manual state handling.",
    },
    {
      title: "Localization",
      competitor: false,
      flows: true,
      description:
        "Flows supports localization out of the box. vuejs-tour requires custom translation logic.",
    },
    {
      title: "Analytics",
      competitor: false,
      flows: true,
      description:
        "Flows provides built-in analytics and tracking. vuejs-tour requires custom analytics integration.",
    },
    {
      title: "Targeting",
      competitor: false,
      flows: true,
      description:
        "Flows offers advanced user targeting and segmentation. vuejs-tour requires custom implementation.",
    },
    {
      title: "Free plan",
      competitor: true,
      flows: true,
      description:
        "vuejs-tour is free and open source. Flows offers a free plan with 250 monthly tracked users.",
    },
  ],
  otherDifferences: [
    {
      title: "Hard-coded tours vs workflows",
      competitorDescription:
        "vuejs-tour tours are defined directly in Vue components and tightly coupled to the DOM structure.",
      flowsDescription:
        "Flows workflows are decoupled from UI structure and evolve without rewriting tour code.",
    },
    {
      title: "Build vs buy",
      competitorDescription:
        "With vuejs-tour, you're responsible for building and maintaining everything around the tour: logic, targeting, state, analytics, and ongoing updates as your product evolves.",
      flowsDescription:
        "Flows removes the need to build onboarding infrastructure. You focus on UI and content, while Flows handles orchestration, delivery, and state.",
    },
    {
      title: "Beyond Vue.js",
      competitorDescription:
        "vuejs-tour only works with Vue.js. If your application uses multiple frameworks or you migrate away from Vue, your tours need to be rebuilt.",
      flowsDescription:
        "Flows is framework-agnostic. It supports Vue.js, React, Angular, Svelte, and plain JavaScript, so your adoption workflows survive tech stack changes.",
    },
    {
      title: "Part of your product",
      competitorDescription:
        "vuejs-tour overlays tooltips on top of your UI, which can feel bolted on as your product evolves.",
      flowsDescription:
        "Flows workflows live inside your product and can be built using your own components and design system.",
    },
    {
      title: "Team collaboration",
      competitorDescription:
        "vuejs-tour is developer-only. Product and design changes require engineering effort.",
      flowsDescription:
        "Flows enables collaboration between developers, designers, and product managers.",
    },
    {
      title: "Library vs platform",
      competitorDescription:
        "vuejs-tour is a UI helper library, not a system for managing product adoption.",
      flowsDescription:
        "Flows is a platform for building, running, and iterating on adoption workflows over time.",
    },
  ],
  ctaBanner: {
    title: "Switch from vuejs-tour to Flows today",
    description:
      "Stop maintaining hard-coded Vue tours. Build flexible, product-native workflows with Flows.",
  },
};
