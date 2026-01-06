import { css } from "@flows/styled-system/css";
import { ReactJoyride20, ReactJoyrideFull20 } from "icons";

import { type AlternativeContentType } from "../types";

export const reactJoyrideContent: AlternativeContentType = {
  slug: "react-joyride",
  seoTitle: "React Joyride alternative",
  title: "The fully-featured React Joyride alternative",
  description:
    "Flows is the React Joyride alternative for teams who have outgrown hard-coded product tours and want flexible, scalable workflows inside their product.",
  competitor: {
    name: "React Joyride",
    squareLogo: <ReactJoyride20 color="#ff0044" role="img" aria-label="React Joyride logo" />,
    fullLogo: (
      <ReactJoyrideFull20
        color="#ff0044"
        role="img"
        aria-label="React Joyride logo"
        className={css({
          height: "18px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "React Joyride is a popular open-source React library for building guided product tours. It provides a declarative API and good control over tour steps, but everything beyond basic tours—state, logic, targeting, analytics, localization, and maintenance—must be implemented manually.",
    flowsContent:
      "Flows is a modern product adoption platform that replaces hard-coded tours with workflows. You build UI using your own components, while Flows handles orchestration, state, branching logic, and delivery inside your product.",
  },
  comparisonTitle: "Flows vs React Joyride: Key differences",
  comparisons: [
    {
      title: "Product tours",
      competitor: true,
      flows: true,
      description:
        "Both React Joyride and Flows can guide users through step-by-step product experiences.",
    },
    {
      title: "React-first integration",
      competitor: true,
      flows: true,
      description:
        "React Joyride is built specifically for React. Flows provides React SDKs while remaining framework-agnostic.",
    },
    {
      title: "Floating components",
      competitor: true,
      flows: true,
      description:
        "React Joyride focuses on tooltips and overlays. Flows supports tooltips, modals, banners, and checklists.",
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
        "React Joyride customization requires writing and maintaining code. Flows lets you use your own components and design system.",
    },
    {
      title: "Workflow logic",
      competitor: false,
      flows: true,
      description:
        "Flows supports branching workflows and conditional logic. React Joyride tours are linear unless you build custom logic.",
    },
    {
      title: "State management",
      competitor: false,
      flows: true,
      description:
        "Flows manages user progress, persistence, and completion automatically. React Joyride requires manual state handling.",
    },
    {
      title: "Localization",
      competitor: false,
      flows: true,
      description:
        "Flows supports localization out of the box. React Joyride requires custom translation handling.",
    },
    {
      title: "Analytics",
      competitor: false,
      flows: true,
      description:
        "Flows provides built-in analytics and tracking. React Joyride requires custom analytics integration.",
    },
    {
      title: "Targeting",
      competitor: false,
      flows: true,
      description:
        "Flows offers advanced user targeting and segmentation features. React Joyride requires custom implementation for targeting specific user groups.",
    },
    {
      title: "Free plan",
      competitor: true,
      flows: true,
      description:
        "React Joyride is free and open source. Flows offers a free plan with 250 monthly active users.",
    },
  ],
  otherDifferences: [
    {
      title: "Hard-coded tours vs workflows",
      competitorDescription:
        "React Joyride tours are defined in code and tightly coupled to the UI structure.",
      flowsDescription:
        "Flows workflows are decoupled from UI structure and can evolve without rewriting tour definitions.",
    },
    {
      title: "Build vs buy",
      competitorDescription:
        "With React Joyride, you’re responsible for building and maintaining everything around the tour: logic, targeting, state, analytics, and ongoing updates as your product evolves.",
      flowsDescription:
        "Flows removes the need to build onboarding infrastructure. You focus on UI and content, while Flows handles orchestration, delivery, and state.",
    },
    {
      title: "From tours to workflows",
      competitorDescription:
        "React Joyride is designed for linear, step-by-step product tours and little else.",
      flowsDescription:
        "Flows supports full workflows with branching logic, inline components, and long-running journeys across sessions.",
    },
    {
      title: "Part of your product",
      competitorDescription:
        "React Joyride overlays tooltips on top of your UI, which can feel bolted on as your product evolves.",
      flowsDescription:
        "Flows workflows live inside your product and can be built using your own components and design system.",
    },
    {
      title: "Maintenance and ownership",
      competitorDescription:
        "Every UI change or new requirement means updating custom React Joyride code and re-testing tours.",
      flowsDescription:
        "Flows adapts naturally as your product changes, reducing maintenance overhead and long-term technical debt.",
    },
    {
      title: "Team collaboration",
      competitorDescription:
        "React Joyride is developer-only. Product and design changes depend on engineering.",
      flowsDescription:
        "Flows enables collaboration between developers, designers, and product managers.",
    },
    {
      title: "From library to system",
      competitorDescription:
        "React Joyride is a UI library, not a system for managing adoption over time.",
      flowsDescription:
        "Flows is a system for building, running, and iterating on product adoption workflows.",
    },
  ],
  ctaBanner: {
    title: "Switch from React Joyride to Flows today",
    description:
      "Stop hard-coding product tours. Build flexible, product-native workflows with Flows.",
  },
};
