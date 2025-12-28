import { css } from "@flows/styled-system/css";
import { Driverjs20, DriverjsFull20 } from "icons";

import { type AlternativeContentType } from "../types";

export const driverjsContent: AlternativeContentType = {
  slug: "driverjs",
  seoTitle: "Driver.js alternative",
  title: "The fully-featured Driver.js alternative",
  description:
    "Flows is the Driver.js alternative for teams who have outgrown DIY product tours and want a scalable way to build product adoption.",
  competitor: {
    name: "Driver.js",
    squareLogo: <Driverjs20 role="img" aria-label="Driver.js logo" />,
    fullLogo: (
      <DriverjsFull20
        role="img"
        aria-label="Driver.js logo"
        className={css({
          height: "28px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "Driver.js is a lightweight open-source JavaScript library for building simple product tours using tooltips and highlights. It’s easy to get started, but everything beyond basic tours like state management, logic, targeting, analytics, and maintenance, needs to be built and maintained in-house.",
    flowsContent:
      "Flows is a modern alternative to Driver.js that removes the need to build and maintain onboarding infrastructure yourself. With Flows, you create workflows that live inside your product, using your own UI components and logic, while Flows handles state, orchestration, and delivery.",
  },
  comparisonTitle: "Flows vs Driver.js: Key differences",
  comparisons: [
    {
      title: "Product tours",
      competitor: true,
      flows: true,
      description:
        "Both Driver.js and Flows support guided product tours and step-by-step user guidance.",
    },
    {
      title: "Floating components",
      competitor: true,
      flows: true,
      description:
        "Driver.js provides popovers and overlays. Flows supports tooltips, modals, banners, and more.",
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
        "Driver.js allows visual customization through configuration and CSS. Flows offers full control over UI and behavior using your own components.",
    },
    {
      title: "Workflow logic",
      competitor: false,
      flows: true,
      description:
        "Flows supports full branching workflows, while Driver.js requires custom code for any conditional logic.",
    },
    {
      title: "State management",
      competitor: false,
      flows: true,
      description:
        "Flows handles user state, progress, and completion automatically. Driver.js requires you to build this yourself.",
    },
    {
      title: "Localization",
      competitor: false,
      flows: true,
      description:
        "Flows supports localization out of the box. Driver.js requires manual implementation.",
    },
    {
      title: "Analytics",
      competitor: false,
      flows: true,
      description:
        "Flows provides built-in analytics and tracking. Driver.js requires custom analytics integration.",
    },
    {
      title: "Targeting",
      competitor: false,
      flows: true,
      description:
        "Flows offers advanced user targeting and segmentation features. Driver.js requires custom implementation for targeting specific user groups.",
    },
    {
      title: "Free plan",
      competitor: true,
      flows: true,
      description:
        "Driver.js is free and open source. Flows offers a free plan with 250 monthly active users.",
    },
  ],
  otherDifferences: [
    {
      title: "Build vs buy",
      competitorDescription:
        "With Driver.js, your team owns everything around the tour: logic, state, targeting, analytics, and long-term maintenance.",
      flowsDescription:
        "Flows removes the need to build onboarding infrastructure. You focus on UI and content while Flows handles orchestration and delivery.",
    },
    {
      title: "From tours to workflows",
      competitorDescription:
        "Driver.js is designed for linear, step-by-step product tours and little else.",
      flowsDescription:
        "Flows supports full workflows with branching logic, inline components, and long-running journeys across sessions.",
    },
    {
      title: "Part of your product",
      competitorDescription:
        "Driver.js overlays UI elements on top of your application, which can feel bolted on as your product evolves.",
      flowsDescription:
        "Flows workflows live inside your product and can be built using your own components and design system.",
    },
    {
      title: "Maintenance and ownership",
      competitorDescription:
        "Every UI change or new requirement means updating custom Driver.js code and re-testing tours.",
      flowsDescription:
        "Flows adapts naturally as your product changes, reducing maintenance overhead and long-term technical debt.",
    },
    {
      title: "Team collaboration",
      competitorDescription:
        "Driver.js is developer-only. Product managers and designers depend on engineering for every change.",
      flowsDescription:
        "Flows enables collaboration between developers, product managers, and designers in a shared system.",
    },
  ],
  ctaBanner: {
    title: "Switch from Driver.js to Flows today",
    description:
      "Stop rebuilding onboarding logic in-house. Build scalable, product-native workflows with Flows.",
  },
};
