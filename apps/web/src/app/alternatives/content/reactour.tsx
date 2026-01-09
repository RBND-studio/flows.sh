import { css } from "@flows/styled-system/css";
import { Reactour20, ReactourFull20 } from "icons";

import { type AlternativeContentType } from "../types";

export const reactourContent: AlternativeContentType = {
  slug: "reactour",
  seoTitle: "Reactour alternative",
  title: "The fully-featured Reactour alternative",
  description:
    "Flows is the Reactour alternative for teams who have outgrown hard-coded product tours and want flexible, scalable workflows inside their product.",
  competitor: {
    name: "Reactour",
    squareLogo: <Reactour20 role="img" aria-label="Reactour logo" />,
    fullLogo: (
      <ReactourFull20
        role="img"
        aria-label="Reactour logo"
        className={css({
          height: "20px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "Reactour is a popular React library for building guided tours using step-based overlays and tooltips. It is lightweight and flexible at the UI level but leaves state persistence, targeting, analytics, and workflow logic entirely to the application code.",
    flowsContent:
      "Flows is a product adoption platform designed for teams that need more than tours. You bring your UI components, and Flows handles workflows, targeting, state, and lifecycle management across frameworks.",
  },
  comparisonTitle: "Flows vs Reactour: Key differences",
  comparisons: [
    {
      title: "Product tours",
      competitor: true,
      flows: true,
      description:
        "Both Reactour and Flows can guide users through step-by-step onboarding experiences.",
    },
    {
      title: "Framework support",
      competitor: "React only",
      flows: true,
      description: "Reactour is React-specific. Flows supports multiple frameworks.",
    },
    {
      title: "Floating components",
      competitor: true,
      flows: true,
      description:
        "Reactour supports tooltip-based overlays. Flows supports tooltips, modals, banners, and checklists.",
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
        "Reactour customization happens entirely in code. Flows lets you reuse your design system components while centralizing logic.",
    },
    {
      title: "Workflow logic",
      competitor: false,
      flows: true,
      description:
        "Flows supports branching workflows and conditional logic. Reactour tours are linear unless you build custom logic.",
    },
    {
      title: "State management",
      competitor: false,
      flows: true,
      description:
        "Flows manages user progress, persistence, and completion automatically. Reactour requires manual state handling.",
    },
    {
      title: "Localization",
      competitor: false,
      flows: true,
      description:
        "Flows supports localization out of the box. Reactour requires custom translation handling.",
    },
    {
      title: "Analytics",
      competitor: false,
      flows: true,
      description:
        "Flows provides built-in analytics and tracking. Reactour requires custom analytics integration.",
    },
    {
      title: "Targeting",
      competitor: false,
      flows: true,
      description:
        "Flows offers advanced user targeting and segmentation features. Reactour requires custom implementation for targeting specific user groups.",
    },
    {
      title: "Free plan",
      competitor: true,
      flows: true,
      description:
        "Reactour is free and open source. Flows offers a free plan with 250 monthly active users.",
    },
    {
      title: "Actively maintained",
      competitor: false,
      flows: true,
      description:
        "Reactour has not seen significant updates since 7th May, 2025. Flows is actively developed with regular releases and new features.",
    },
  ],
  otherDifferences: [
    {
      title: "Library vs platform",
      competitorDescription:
        "Reactour is a lightweight library you embed and manage inside your codebase.",
      flowsDescription:
        "Flows is a platform that orchestrates workflows while staying deeply integrated with your product.",
    },
    {
      title: "Beyond onboarding",
      competitorDescription: "Reactour focuses primarily on onboarding use cases.",
      flowsDescription:
        "Flows supports onboarding, feature discovery, education, re-engagement, and upsell workflows.",
    },
    {
      title: "Part of your product",
      competitorDescription:
        "Reactour overlays tooltips on top of your UI, which can feel bolted on as your product evolves.",
      flowsDescription:
        "Flows workflows live inside your product and can be built using your own components and design system.",
    },
    {
      title: "Maintenance and ownership",
      competitorDescription:
        "Every UI change or new requirement means updating custom Reactour code and re-testing tours.",
      flowsDescription:
        "Flows adapts naturally as your product changes, reducing maintenance overhead and long-term technical debt.",
    },
    {
      title: "Team collaboration",
      competitorDescription: "Reactour changes require developer involvement for every update.",
      flowsDescription:
        "Flows enables collaboration between developers, product managers, and designers.",
    },
    {
      title: "Time to value",
      competitorDescription: "Reactour is fast to start but becomes harder to extend over time.",
      flowsDescription:
        "Flows is designed for fast iteration without accumulating onboarding debt.",
    },
  ],
  ctaBanner: {
    title: "Switch from Reactour to Flows today",
    description:
      "Stop hard-coding product tours. Build flexible, product-native workflows with Flows.",
  },
};
