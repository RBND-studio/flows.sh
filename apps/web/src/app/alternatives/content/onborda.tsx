import { css } from "@flows/styled-system/css";
import { Onborda20, OnbordaFull20 } from "icons";

import { type AlternativeContentType } from "../types";

export const onbordaContent: AlternativeContentType = {
  slug: "onborda",
  seoTitle: "Onborda alternative",
  title: "The fully-featured Onborda alternative",
  description:
    "Flows is the Onborda alternative for teams who have outgrown hard-coded product tours and want flexible, scalable workflows inside their product.",
  competitor: {
    name: "Onborda",
    squareLogo: <Onborda20 role="img" aria-label="Onborda logo" />,
    fullLogo: (
      <OnbordaFull20
        role="img"
        aria-label="Onborda logo"
        className={css({
          height: "18px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "Onborda is an open-source onboarding library focused on building product tours and simple onboarding flows. It provides a modern developer experience but leaves state management, targeting, analytics, and scalability up to your application.",

    flowsContent:
      "Flows is a modern product adoption platform that replaces hard-coded tours with workflows. You build UI using your own components, while Flows handles orchestration, state, branching logic, and delivery inside your product.",
  },
  comparisonTitle: "Flows vs Onborda: Key differences",
  comparisons: [
    {
      title: "Product tours",
      competitor: true,
      flows: true,
      description:
        "Both Onborda and Flows can guide users through step-by-step onboarding experiences.",
    },
    {
      title: "Modern developer experience",
      competitor: true,
      flows: true,
      description:
        "Onborda focuses on clean APIs for developers. Flows provides SDKs plus higher-level abstractions.",
    },
    {
      title: "Floating components",
      competitor: true,
      flows: true,
      description:
        "Onborda supports tooltip-based overlays. Flows supports tooltips, modals, banners, and checklists.",
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
        "Onborda customization happens entirely in code. Flows lets you reuse your design system components while centralizing logic.",
    },
    {
      title: "Workflow logic",
      competitor: false,
      flows: true,
      description:
        "Flows supports branching workflows and conditional logic. Onborda tours are linear unless you build custom logic.",
    },
    {
      title: "State management",
      competitor: false,
      flows: true,
      description:
        "Flows manages user progress, persistence, and completion automatically. Onborda requires manual state handling.",
    },
    {
      title: "Localization",
      competitor: false,
      flows: true,
      description:
        "Flows supports localization out of the box. Onborda requires custom translation handling.",
    },
    {
      title: "Analytics",
      competitor: false,
      flows: true,
      description:
        "Flows provides built-in analytics and tracking. Onborda requires custom analytics integration.",
    },
    {
      title: "Targeting",
      competitor: false,
      flows: true,
      description:
        "Flows offers advanced user targeting and segmentation features. Onborda requires custom implementation for targeting specific user groups.",
    },
    {
      title: "Free plan",
      competitor: true,
      flows: true,
      description:
        "Onborda is free and open source. Flows offers a free plan with 250 monthly tracked users.",
    },
  ],
  otherDifferences: [
    {
      title: "Library vs platform",
      competitorDescription:
        "Onborda is a lightweight library you embed and manage inside your codebase.",
      flowsDescription:
        "Flows is a platform that orchestrates workflows while staying deeply integrated with your product.",
    },
    {
      title: "Beyond onboarding",
      competitorDescription: "Onborda focuses primarily on onboarding use cases.",
      flowsDescription:
        "Flows supports onboarding, feature discovery, education, re-engagement, and upsell workflows.",
    },
    {
      title: "Part of your product",
      competitorDescription:
        "Onborda overlays tooltips on top of your UI, which can feel bolted on as your product evolves.",
      flowsDescription:
        "Flows workflows live inside your product and can be built using your own components and design system.",
    },
    {
      title: "Maintenance and ownership",
      competitorDescription:
        "Every UI change or new requirement means updating custom Onborda code and re-testing tours.",
      flowsDescription:
        "Flows adapts naturally as your product changes, reducing maintenance overhead and long-term technical debt.",
    },
    {
      title: "Team collaboration",
      competitorDescription: "Onborda changes require developer involvement for every update.",
      flowsDescription:
        "Flows enables collaboration between developers, product managers, and designers.",
    },
    {
      title: "Time to value",
      competitorDescription: "Onborda is fast to start but becomes harder to extend over time.",
      flowsDescription:
        "Flows is designed for fast iteration without accumulating onboarding debt.",
    },
  ],
  ctaBanner: {
    title: "Switch from Onborda to Flows today",
    description:
      "Stop hard-coding product tours. Build flexible, product-native workflows with Flows.",
  },
};
