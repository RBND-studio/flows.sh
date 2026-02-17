import { css } from "@flows/styled-system/css";
import { BootstrapTour20, BootstrapTourFull20 } from "icons";

import { type AlternativeContentType } from "../types";

export const bootstrapTourContent: AlternativeContentType = {
  slug: "bootstrap-tour",
  seoTitle: "Bootstrap Tour alternative",
  title: "The fully-featured Bootstrap Tour alternative",
  description:
    "Flows is the Bootstrap Tour alternative for teams who have outgrown jQuery-based product tours and want a modern, scalable way to build product adoption.",
  competitor: {
    name: "Bootstrap Tour",
    squareLogo: <BootstrapTour20 role="img" aria-label="Bootstrap Tour logo" />,
    fullLogo: (
      <BootstrapTourFull20
        role="img"
        aria-label="Bootstrap Tour logo"
        className={css({
          height: "28px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "Bootstrap Tour is an open-source JavaScript library for building product tours using Bootstrap popovers. It requires jQuery and Bootstrap as dependencies, which are outdated for modern web applications. The library is largely unmaintained, and everything beyond basic tours — state management, logic, targeting, analytics — needs to be built and maintained in-house.",
    flowsContent:
      "Flows is a modern alternative to Bootstrap Tour that removes the need to maintain onboarding infrastructure yourself. With Flows, you create workflows that live inside your product, using your own UI components and logic, while Flows handles state, orchestration, and delivery. No jQuery or Bootstrap required.",
  },
  comparisonTitle: "Flows vs Bootstrap Tour: Key differences",
  comparisons: [
    {
      title: "Product tours",
      competitor: true,
      flows: true,
      description:
        "Both Bootstrap Tour and Flows can guide users through step-by-step product experiences.",
    },
    {
      title: "Floating components",
      competitor: true,
      flows: true,
      description:
        "Bootstrap Tour uses Bootstrap popovers. Flows supports tooltips, modals, banners, and more.",
    },
    {
      title: "Embeddable components",
      competitor: false,
      flows: true,
      description:
        "Flows supports inline components rendered directly inside your app layout, not just floating overlays.",
    },
    {
      title: "Modern framework support",
      competitor: false,
      flows: true,
      description:
        "Flows works with React, Vue, Angular, Svelte, and vanilla JavaScript. Bootstrap Tour requires jQuery and Bootstrap.",
    },
    {
      title: "Workflow logic",
      competitor: false,
      flows: true,
      description:
        "Flows supports full branching workflows and conditional logic. Bootstrap Tour tours are linear.",
    },
    {
      title: "State management",
      competitor: "Basic",
      flows: true,
      description:
        "Bootstrap Tour offers basic state persistence via cookies. Flows handles user progress, completion, and cross-session state automatically.",
    },
    {
      title: "Localization",
      competitor: false,
      flows: true,
      description:
        "Flows supports localization out of the box. Bootstrap Tour requires manual handling.",
    },
    {
      title: "Analytics",
      competitor: false,
      flows: true,
      description:
        "Flows provides built-in analytics and tracking. Bootstrap Tour requires custom analytics integration.",
    },
    {
      title: "Targeting",
      competitor: false,
      flows: true,
      description:
        "Flows offers advanced user targeting and segmentation. Bootstrap Tour requires custom implementation.",
    },
    {
      title: "Free plan",
      competitor: true,
      flows: true,
      description:
        "Bootstrap Tour is free and open source. Flows offers a free plan with 250 monthly tracked users.",
    },
  ],
  otherDifferences: [
    {
      title: "Build vs buy",
      competitorDescription:
        "With Bootstrap Tour, your team owns everything around the tour: logic, state, targeting, analytics, and long-term maintenance. The library itself is largely unmaintained.",
      flowsDescription:
        "Flows removes the need to build onboarding infrastructure. You focus on UI and content while Flows handles orchestration and delivery.",
    },
    {
      title: "Modern tech stack",
      competitorDescription:
        "Bootstrap Tour requires jQuery and Bootstrap — dependencies that most modern applications have moved away from. Integrating it with React, Vue, or other frameworks requires significant workarounds.",
      flowsDescription:
        "Flows works natively with modern frameworks including React, Vue, Angular, Svelte, and vanilla JavaScript. No legacy dependencies required.",
    },
    {
      title: "From tours to workflows",
      competitorDescription:
        "Bootstrap Tour is designed for simple, linear step-by-step tours and nothing more.",
      flowsDescription:
        "Flows supports full workflows with branching logic, inline components, and long-running journeys across sessions.",
    },
    {
      title: "Part of your product",
      competitorDescription:
        "Bootstrap Tour overlays popovers on top of your application using Bootstrap's visual style, which can feel dated and disconnected from modern UIs.",
      flowsDescription:
        "Flows workflows live inside your product and can be built using your own components and design system.",
    },
    {
      title: "Team collaboration",
      competitorDescription:
        "Bootstrap Tour is developer-only. Product managers and designers depend on engineering for every change.",
      flowsDescription:
        "Flows enables collaboration between developers, product managers, and designers in a shared system.",
    },
  ],
  ctaBanner: {
    title: "Switch from Bootstrap Tour to Flows today",
    description:
      "Stop maintaining jQuery-based tours. Build modern, product-native workflows with Flows.",
  },
};
