import { css } from "@flows/styled-system/css";
import { NgxUiTour20, NgxUiTourFull20 } from "icons";

import { type AlternativeContentType } from "../types";

export const ngxUiTourContent: AlternativeContentType = {
  slug: "ngx-ui-tour",
  seoTitle: "Ngx UI Tour alternative",
  title: "The fully-featured Ngx UI Tour alternative",
  description:
    "Flows is the Ngx UI Tour alternative for teams who have outgrown hard-coded product tours and want flexible, scalable workflows inside their product.",
  competitor: {
    name: "Ngx UI Tour",
    squareLogo: <NgxUiTour20 role="img" aria-label="Ngx UI Tour logo" />,
    fullLogo: (
      <NgxUiTourFull20
        role="img"
        aria-label="Ngx UI Tour logo"
        className={css({
          height: "26px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "Ngx UI Tour is an Angular library for building guided tours using tooltips and step-based overlays. It integrates well with Angular apps but leaves workflow logic, targeting, persistence, and analytics entirely to your codebase.",
    flowsContent:
      "Flows is a product adoption platform that works across frameworks. You bring your UI components, and Flows handles orchestration, workflows, targeting, and lifecycle management.",
  },
  comparisonTitle: "Flows vs Ngx UI Tour: Key differences",
  comparisons: [
    {
      title: "Product tours",
      competitor: true,
      flows: true,
      description:
        "Both Ngx UI Tour and Flows can guide users through step-by-step onboarding experiences.",
    },
    {
      title: "Angular support",
      competitor: true,
      flows: true,
      description: "Ngx UI Tour is Angular-only. Flows supports Angular and other frameworks.",
    },
    {
      title: "Floating components",
      competitor: true,
      flows: true,
      description:
        "Ngx UI Tour supports tooltip-based overlays. Flows supports tooltips, modals, banners, and checklists.",
    },
    {
      title: "Embeddable components",
      competitor: false,
      flows: true,
      description:
        "Flows supports inline components rendered directly inside your app layout, not just overlays.",
    },
    {
      title: "Customization",
      competitor: true,
      flows: true,
      description:
        "Ngx UI Tour customization happens entirely in code. Flows lets you reuse your design system components while centralizing logic.",
    },
    {
      title: "Workflow logic",
      competitor: false,
      flows: true,
      description:
        "Flows supports branching workflows and conditional logic. Ngx UI Tour tours are linear unless you build custom logic.",
    },
    {
      title: "State management",
      competitor: false,
      flows: true,
      description:
        "Flows manages user progress, persistence, and completion automatically. Ngx UI Tour requires manual state handling.",
    },
    {
      title: "Localization",
      competitor: false,
      flows: true,
      description:
        "Flows supports localization out of the box. Ngx UI Tour requires custom translation handling.",
    },
    {
      title: "Analytics",
      competitor: false,
      flows: true,
      description:
        "Flows provides built-in analytics and tracking. Ngx UI Tour requires custom analytics integration.",
    },
    {
      title: "Targeting",
      competitor: false,
      flows: true,
      description:
        "Flows offers advanced user targeting and segmentation features. Ngx UI Tour requires custom implementation for targeting specific user groups.",
    },
    {
      title: "Free plan",
      competitor: true,
      flows: true,
      description:
        "Ngx UI Tour is free and open source. Flows offers a free plan with 250 monthly active users.",
    },
  ],
  otherDifferences: [
    {
      title: "Library vs platform",
      competitorDescription: "Ngx UI Tour is a UI library embedded directly into your Angular app.",
      flowsDescription:
        "Flows is a platform that orchestrates workflows while staying deeply integrated with your product.",
    },
    {
      title: "Beyond onboarding",
      competitorDescription: "Ngx UI Tour focuses primarily on onboarding use cases.",
      flowsDescription:
        "Flows supports onboarding, feature discovery, education, re-engagement, and upsell workflows.",
    },
    {
      title: "Part of your product",
      competitorDescription:
        "Ngx UI Tour overlays tooltips on top of your UI, which can feel bolted on as your product evolves.",
      flowsDescription:
        "Flows workflows live inside your product and can be built using your own components and design system.",
    },
    {
      title: "Maintenance and ownership",
      competitorDescription:
        "Every UI change or new requirement means updating custom Ngx UI Tour code and re-testing tours.",
      flowsDescription:
        "Flows adapts naturally as your product changes, reducing maintenance overhead and long-term technical debt.",
    },
    {
      title: "Team collaboration",
      competitorDescription: "Ngx UI Tour changes require developer involvement for every update.",
      flowsDescription:
        "Flows enables collaboration between developers, product managers, and designers.",
    },
    {
      title: "Time to value",
      competitorDescription: "Ngx UI Tour is fast to start but becomes harder to extend over time.",
      flowsDescription:
        "Flows is designed for fast iteration without accumulating onboarding debt.",
    },
  ],
  ctaBanner: {
    title: "Switch from Ngx UI Tour to Flows today",
    description:
      "Stop hard-coding product tours. Build flexible, product-native workflows with Flows.",
  },
};
