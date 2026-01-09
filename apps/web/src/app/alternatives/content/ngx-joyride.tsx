import { css } from "@flows/styled-system/css";
import { NgxJoyride20, NgxJoyrideFull20 } from "icons";

import { type AlternativeContentType } from "../types";

export const ngxJoyrideContent: AlternativeContentType = {
  slug: "ngx-joyride",
  seoTitle: "Ngx Joyride alternative",
  title: "The fully-featured Ngx Joyride alternative",
  description:
    "Flows is the Ngx Joyride alternative for teams who have outgrown hard-coded product tours and want flexible, scalable workflows inside their product.",
  competitor: {
    name: "Ngx Joyride",
    squareLogo: <NgxJoyride20 role="img" aria-label="Ngx Joyride logo" />,
    fullLogo: (
      <NgxJoyrideFull20
        role="img"
        aria-label="Ngx Joyride logo"
        className={css({
          height: "24px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "Ngx Joyride is an Angular library for creating guided tours using step-based tooltips. It integrates tightly with Angular but leaves persistence, targeting, analytics, and workflow logic entirely to the application code.",
    flowsContent:
      "Flows is a product adoption platform designed for teams that need more than tours. You bring your UI components, and Flows handles workflows, targeting, state, and lifecycle management across frameworks.",
  },
  comparisonTitle: "Flows vs Ngx Joyride: Key differences",
  comparisons: [
    {
      title: "Product tours",
      competitor: true,
      flows: true,
      description:
        "Both Ngx Joyride and Flows can guide users through step-by-step onboarding experiences.",
    },
    {
      title: "Framework support",
      competitor: "Angular only",
      flows: true,
      description: "Ngx Joyride is Angular-specific. Flows supports Angular and other frameworks.",
    },
    {
      title: "Floating components",
      competitor: true,
      flows: true,
      description:
        "Ngx Joyride supports tooltip-based overlays. Flows supports tooltips, modals, banners, and checklists.",
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
        "Ngx Joyride customization happens entirely in code. Flows lets you reuse your design system components while centralizing logic.",
    },
    {
      title: "Workflow logic",
      competitor: false,
      flows: true,
      description:
        "Flows supports branching workflows and conditional logic. Ngx Joyride tours are linear unless you build custom logic.",
    },
    {
      title: "State management",
      competitor: false,
      flows: true,
      description:
        "Flows manages user progress, persistence, and completion automatically. Ngx Joyride requires manual state handling.",
    },
    {
      title: "Localization",
      competitor: false,
      flows: true,
      description:
        "Flows supports localization out of the box. Ngx Joyride requires custom translation handling.",
    },
    {
      title: "Analytics",
      competitor: false,
      flows: true,
      description:
        "Flows provides built-in analytics and tracking. Ngx Joyride requires custom analytics integration.",
    },
    {
      title: "Targeting",
      competitor: false,
      flows: true,
      description:
        "Flows offers advanced user targeting and segmentation features. Ngx Joyride requires custom implementation for targeting specific user groups.",
    },
    {
      title: "Free plan",
      competitor: true,
      flows: true,
      description:
        "Ngx Joyride is free and open source. Flows offers a free plan with 250 monthly active users.",
    },
  ],
  otherDifferences: [
    {
      title: "Library vs platform",
      competitorDescription:
        "Ngx Joyride is a UI library embedded directly into your Angular application.",
      flowsDescription:
        "Flows is a platform that orchestrates workflows while letting you own the UI.",
    },
    {
      title: "Beyond onboarding",
      competitorDescription: "Ngx Joyride focuses primarily on onboarding use cases.",
      flowsDescription:
        "Flows supports onboarding, feature discovery, education, re-engagement, and upsell workflows.",
    },
    {
      title: "Part of your product",
      competitorDescription:
        "Ngx Joyride overlays tooltips on top of your UI, which can feel bolted on as your product evolves.",
      flowsDescription:
        "Flows workflows live inside your product and can be built using your own components and design system.",
    },
    {
      title: "Maintenance and ownership",
      competitorDescription:
        "Every UI change or new requirement means updating custom Ngx Joyride code and re-testing tours.",
      flowsDescription:
        "Flows adapts naturally as your product changes, reducing maintenance overhead and long-term technical debt.",
    },
    {
      title: "Team collaboration",
      competitorDescription: "Ngx Joyride changes require developer involvement for every update.",
      flowsDescription:
        "Flows enables collaboration between developers, product managers, and designers.",
    },
    {
      title: "Time to value",
      competitorDescription: "Ngx Joyride is fast to start but becomes harder to extend over time.",
      flowsDescription:
        "Flows is designed for fast iteration without accumulating onboarding debt.",
    },
  ],
  ctaBanner: {
    title: "Switch from Ngx Joyride to Flows today",
    description:
      "Stop hard-coding product tours. Build flexible, product-native workflows with Flows.",
  },
};
