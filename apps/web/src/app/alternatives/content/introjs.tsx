import { css } from "@flows/styled-system/css";
import { Introjs20, IntrojsFull20 } from "icons";

import { type AlternativeContentType } from "../types";

export const introjsContent: AlternativeContentType = {
  slug: "introjs",
  seoTitle: "Intro.js alternative",
  title: "The fully-featured Intro.js alternative",
  description:
    "Flows is the Intro.js alternative for teams who have outgrown DIY product tours and want a scalable way to build product adoption.",
  competitor: {
    name: "Intro.js",
    squareLogo: <Introjs20 role="img" aria-label="Intro.js logo" />,
    fullLogo: (
      <IntrojsFull20
        role="img"
        aria-label="Intro.js logo"
        className={css({
          height: "26px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "Intro.js is a lightweight open-source JavaScript library for building simple product tours using tooltips and highlights. It’s easy to get started, but everything beyond basic tours like state management, logic, targeting, analytics, and maintenance, needs to be built and maintained in-house.",
    flowsContent:
      "Flows is a modern alternative to Intro.js that removes the need to build and maintain onboarding infrastructure yourself. With Flows, you create workflows that live inside your product, using your own UI components and logic, while Flows handles state, orchestration, and delivery.",
  },
  comparisonTitle: "Flows vs Intro.js: Key differences",
  comparisons: [
    {
      title: "Product tours",
      competitor: true,
      flows: true,
      description:
        "Both Intro.js and Flows support guided product tours and step-by-step user guidance.",
    },
    {
      title: "Floating components",
      competitor: true,
      flows: true,
      description:
        "Intro.js provides tooltip-based overlays. Flows supports tooltips, modals, banners, and more.",
    },
    {
      title: "Embeddable components",
      competitor: false,
      flows: true,
      description:
        "Flows allows you to embed components inline within your app’s UI, not just overlay highlights.",
    },
    {
      title: "Customization",
      competitor: true,
      flows: true,
      description:
        "Intro.js allows visual customization through configuration and CSS. Flows offers full control over UI and behavior using your own components.",
    },
    {
      title: "Workflow logic",
      competitor: false,
      flows: true,
      description:
        "Flows supports full branching workflows, while Intro.js requires custom code for any conditional logic.",
    },
    {
      title: "State management",
      competitor: false,
      flows: true,
      description:
        "Flows handles user state, progress, and completion automatically. Intro.js requires you to build this yourself.",
    },
    {
      title: "Localization",
      competitor: false,
      flows: true,
      description:
        "Flows supports localization out of the box. Intro.js requires manual implementation.",
    },
    {
      title: "Analytics",
      competitor: false,
      flows: true,
      description:
        "Flows provides built-in analytics and tracking. Intro.js requires custom analytics integration.",
    },
    {
      title: "Targeting",
      competitor: false,
      flows: true,
      description:
        "Flows offers advanced user targeting and segmentation features. Intro.js requires custom implementation for targeting specific user groups.",
    },
    {
      title: "Free plan",
      competitor: false,
      flows: true,
      description:
        "Intro.js requires a paid license for commercial applications. Flows offers a free plan with 250 monthly active users.",
    },
  ],
  otherDifferences: [
    {
      title: "Build vs buy",
      competitorDescription:
        "With Intro.js, you’re responsible for building and maintaining everything around the tour: logic, targeting, state, analytics, and ongoing updates as your product evolves.",
      flowsDescription:
        "Flows removes the need to build onboarding infrastructure. You focus on UI and content, while Flows handles orchestration, delivery, and state.",
    },
    {
      title: "From tours to workflows",
      competitorDescription:
        "Intro.js is designed for linear, step-by-step product tours and little else.",
      flowsDescription:
        "Flows supports full workflows with branching logic, inline components, and long-running journeys across sessions.",
    },
    {
      title: "Part of your product",
      competitorDescription:
        "Intro.js overlays tooltips on top of your UI, which can feel bolted on as your product evolves.",
      flowsDescription:
        "Flows workflows live inside your product and can be built using your own components and design system.",
    },
    {
      title: "Maintenance and ownership",
      competitorDescription:
        "Every UI change or new requirement means updating custom Intro.js code and re-testing tours.",
      flowsDescription:
        "Flows adapts naturally as your product changes, reducing maintenance overhead and long-term technical debt.",
    },
    {
      title: "Team collaboration",
      competitorDescription:
        "Intro.js is developer-only. Product managers and designers depend on engineering for every change.",
      flowsDescription:
        "Flows enables collaboration between developers, product managers, and designers in a shared system.",
    },
  ],
  ctaBanner: {
    title: "Switch from Intro.js to Flows today",
    description:
      "Stop rebuilding onboarding logic in-house. Build scalable, product-native workflows with Flows.",
  },
};
