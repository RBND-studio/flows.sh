import { css } from "@flows/styled-system/css";
import { Box } from "@flows/styled-system/jsx";
import { VOnboarding20, VOnboardingFull20 } from "icons";

import { type AlternativeContentType } from "../types";

export const vOnboardingContent: AlternativeContentType = {
  slug: "v-onboarding",
  seoTitle: "v-onboarding alternative",
  title: (
    <>
      The fully-featured{" "}
      <Box as="span" whiteSpace="nowrap">
        v-onboarding
      </Box>{" "}
      alternative
    </>
  ),
  description:
    "Flows is the v-onboarding alternative for teams who have outgrown hard-coded product tours and want flexible, scalable workflows inside their product.",
  competitor: {
    name: "v-onboarding",
    squareLogo: <VOnboarding20 role="img" aria-label="v-onboarding logo" />,
    fullLogo: (
      <VOnboardingFull20
        role="img"
        aria-label="v-onboarding logo"
        className={css({
          height: "26px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "v-onboarding is a lightweight Vue library for building guided tours and onboarding steps using overlays and tooltips. It integrates directly into Vue applications but leaves workflow logic, targeting, persistence, and analytics to the developer.",
    flowsContent:
      "Flows is a product adoption platform that works across frameworks. You build UI components using your own design system, while Flows handles workflows, targeting, state, and lifecycle management.",
  },
  comparisonTitle: "Flows vs v-onboarding: Key differences",
  comparisons: [
    {
      title: "Product tours",
      competitor: true,
      flows: true,
      description:
        "Both v-onboarding and Flows can guide users through step-by-step onboarding experiences.",
    },
    {
      title: "Framework support",
      competitor: "Vue only",
      flows: true,
      description: "v-onboarding is limited to Vue. Flows works across multiple frameworks.",
    },
    {
      title: "Floating components",
      competitor: true,
      flows: true,
      description:
        "v-onboarding supports tooltip-based overlays. Flows supports tooltips, modals, banners, and checklists.",
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
        "v-onboarding customization happens entirely in code. Flows lets you reuse your design system components while centralizing logic.",
    },
    {
      title: "Workflow logic",
      competitor: false,
      flows: true,
      description:
        "Flows supports branching workflows and conditional logic. v-onboarding tours are linear unless you build custom logic.",
    },
    {
      title: "State management",
      competitor: false,
      flows: true,
      description:
        "Flows manages user progress, persistence, and completion automatically. v-onboarding requires manual state handling.",
    },
    {
      title: "Localization",
      competitor: false,
      flows: true,
      description:
        "Flows supports localization out of the box. v-onboarding requires custom translation handling.",
    },
    {
      title: "Analytics",
      competitor: false,
      flows: true,
      description:
        "Flows provides built-in analytics and tracking. v-onboarding requires custom analytics integration.",
    },
    {
      title: "Targeting",
      competitor: false,
      flows: true,
      description:
        "Flows offers advanced user targeting and segmentation features. v-onboarding requires custom implementation for targeting specific user groups.",
    },
    {
      title: "Free plan",
      competitor: true,
      flows: true,
      description:
        "v-onboarding is free and open source. Flows offers a free plan with 250 monthly tracked users.",
    },
  ],
  otherDifferences: [
    {
      title: "Library vs platform",
      competitorDescription:
        "v-onboarding is a UI library embedded directly into your Vue application.",
      flowsDescription:
        "Flows is a platform that orchestrates workflows while letting you own the UI.",
    },
    {
      title: "Beyond onboarding",
      competitorDescription: "v-onboarding focuses primarily on onboarding use cases.",
      flowsDescription:
        "Flows supports onboarding, feature discovery, education, re-engagement, and upsell workflows.",
    },
    {
      title: "Part of your product",
      competitorDescription:
        "v-onboarding overlays tooltips on top of your UI, which can feel bolted on as your product evolves.",
      flowsDescription:
        "Flows workflows live inside your product and can be built using your own components and design system.",
    },
    {
      title: "Maintenance and ownership",
      competitorDescription:
        "Every UI change or new requirement means updating custom v-onboarding code and re-testing tours.",
      flowsDescription:
        "Flows adapts naturally as your product changes, reducing maintenance overhead and long-term technical debt.",
    },
    {
      title: "Team collaboration",
      competitorDescription: "v-onboarding changes require developer involvement for every update.",
      flowsDescription:
        "Flows enables collaboration between developers, product managers, and designers.",
    },
    {
      title: "Time to value",
      competitorDescription:
        "v-onboarding is fast to start but becomes harder to extend over time.",
      flowsDescription:
        "Flows is designed for fast iteration without accumulating onboarding debt.",
    },
  ],
  ctaBanner: {
    title: "Switch from v-onboarding to Flows today",
    description:
      "Stop hard-coding product tours. Build flexible, product-native workflows with Flows.",
  },
};
