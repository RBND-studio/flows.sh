import { css } from "@flows/styled-system/css";
import { NextStepJs20, NextStepJsFull20 } from "icons";

import { type AlternativeContentType } from "../types";

export const nextstepjsContent: AlternativeContentType = {
  slug: "nextstepjs",
  seoTitle: "NextStep alternative",
  title: "The fully-featured NextStep alternative",
  description:
    "Flows is the NextStep alternative for teams who have outgrown hard-coded product tours and want flexible, scalable workflows inside their product.",
  competitor: {
    name: "NextStep",
    squareLogo: <NextStepJs20 role="img" aria-label="NextStep logo" />,
    fullLogo: (
      <NextStepJsFull20
        role="img"
        aria-label="NextStep logo"
        className={css({
          height: "26px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "NextStep is a lightweight, developer-focused library for building guided tours and onboarding steps in React applications. It is simple to integrate but limited to linear tours, with state, targeting, and analytics handled entirely by your application code.",
    flowsContent:
      "Flows is a product adoption platform designed for teams who need more than tours. You build UI components using your own design system, while Flows handles workflows, targeting, state, and lifecycle management.",
  },
  comparisonTitle: "Flows vs NextStep: Key differences",
  comparisons: [
    {
      title: "Product tours",
      competitor: true,
      flows: true,
      description:
        "Both NextStep and Flows can guide users through step-by-step onboarding experiences.",
    },
    {
      title: "Framework support",
      competitor: "React only",
      flows: true,
      description: "NextStep is focused on React. Flows supports multiple frameworks and stacks.",
    },
    {
      title: "Modern developer experience",
      competitor: true,
      flows: true,
      description:
        "NextStep focuses on APIs for developers. Flows provides SDKs plus higher-level abstractions.",
    },
    {
      title: "Floating components",
      competitor: true,
      flows: true,
      description:
        "NextStep focuses on overlays and tooltips. Flows supports tooltips, modals, banners, and checklists.",
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
        "NextStep customization happens entirely in code. Flows lets you reuse your design system components while centralizing logic.",
    },
    {
      title: "Workflow logic",
      competitor: false,
      flows: true,
      description:
        "Flows supports branching workflows and conditional logic. NextStep tours are linear unless you build custom logic.",
    },
    {
      title: "State management",
      competitor: false,
      flows: true,
      description:
        "Flows manages user progress, persistence, and completion automatically. NextStep requires manual state handling.",
    },
    {
      title: "Localization",
      competitor: false,
      flows: true,
      description:
        "Flows supports localization out of the box. NextStep requires custom translation handling.",
    },
    {
      title: "Analytics",
      competitor: false,
      flows: true,
      description:
        "Flows provides built-in analytics and tracking. NextStep requires custom analytics integration.",
    },
    {
      title: "Targeting",
      competitor: false,
      flows: true,
      description:
        "Flows offers advanced user targeting and segmentation features. NextStep requires custom implementation for targeting specific user groups.",
    },
    {
      title: "Free plan",
      competitor: true,
      flows: true,
      description:
        "NextStep is free and open source. Flows offers a free plan with 250 monthly active users.",
    },
  ],
  otherDifferences: [
    {
      title: "Library vs platform",
      competitorDescription:
        "NextStep is a lightweight library you embed and manage inside your codebase.",
      flowsDescription:
        "Flows is a platform that orchestrates workflows while staying deeply integrated with your product.",
    },
    {
      title: "Beyond onboarding",
      competitorDescription: "NextStep focuses primarily on onboarding use cases.",
      flowsDescription:
        "Flows supports onboarding, feature discovery, education, re-engagement, and upsell workflows.",
    },
    {
      title: "Part of your product",
      competitorDescription:
        "NextStep overlays tooltips on top of your UI, which can feel bolted on as your product evolves.",
      flowsDescription:
        "Flows workflows live inside your product and can be built using your own components and design system.",
    },
    {
      title: "Maintenance burden",
      competitorDescription:
        "All logic, state, and evolution of tours must be maintained in your codebase.",
      flowsDescription: "Flows reduces long-term maintenance by separating UI from workflow logic.",
    },
    {
      title: "Team collaboration",
      competitorDescription: "NextStep changes require developer involvement for every update.",
      flowsDescription:
        "Flows enables collaboration between developers, product managers, and designers.",
    },
    {
      title: "Time to value",
      competitorDescription: "NextStep is fast to start but becomes harder to extend over time.",
      flowsDescription:
        "Flows is designed for fast iteration without accumulating onboarding debt.",
    },
  ],
  ctaBanner: {
    title: "Switch from NextStep to Flows today",
    description:
      "Stop hard-coding product tours. Build flexible, product-native workflows with Flows.",
  },
};
