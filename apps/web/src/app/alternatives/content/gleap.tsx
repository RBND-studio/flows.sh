// cSpell:words gleap

import { css } from "@flows/styled-system/css";
import { Gleap20, GleapFull20 } from "icons";

import { type AlternativeContentType } from "../types";

export const gleapContent: AlternativeContentType = {
  slug: "gleap",
  seoTitle: "Gleap alternative",
  title: "The purpose-built Gleap alternative for product adoption",
  description:
    "Flows is the Gleap alternative for teams who want a dedicated product adoption platform instead of tours bolted onto a feedback tool.",
  competitor: {
    name: "Gleap",
    squareLogo: <Gleap20 role="img" aria-label="Gleap logo" />,
    fullLogo: (
      <GleapFull20
        role="img"
        aria-label="Gleap logo"
        className={css({
          height: "24px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "Gleap is a customer feedback and bug reporting platform that has expanded into product tours. While it combines feedback collection, live chat, and onboarding in one tool, the tour features are secondary to its core focus on bug reporting and feedback. Teams looking for a dedicated onboarding solution may find the product tour capabilities too basic.",
    flowsContent:
      "Flows is a modern alternative to Gleap's product tours, built from the ground up for product adoption. With Flows, you build workflows using your own components and design system, with full control over targeting, branching logic, and the user experience. Every feature is designed to help you build better in-app guidance.",
  },
  comparisonTitle: "Flows vs Gleap: Key differences",
  comparisons: [
    {
      title: "Onboarding basics",
      competitor: true,
      flows: true,
      description:
        "Both services support product tours and in-app guidance, although Flows offers deeper adoption features and full control over the experience.",
    },
    {
      title: "Embeddable components",
      competitor: false,
      flows: true,
      description:
        "With Flows you can embed components directly into your product, allowing for a more seamless user experience.",
    },
    {
      title: "Custom components",
      competitor: false,
      flows: true,
      description:
        "Flows allows you to use your design system and plug-in components directly from your codebase.",
    },
    {
      title: "Customization",
      competitor: false,
      flows: true,
      description:
        "Gleap tour customization is limited to their builder. Flows gives you full control over both UI and logic.",
    },
    {
      title: "Workflow logic",
      competitor: false,
      flows: true,
      description:
        "Flows supports full branching workflows and conditional logic. Gleap tours are linear.",
    },
    {
      title: "Free plan",
      competitor: false,
      flows: true,
      description:
        "Flows offers a free plan with 250 monthly tracked users. Gleap offers only a time-limited trial.",
    },
    {
      title: "Localization",
      competitor: true,
      flows: true,
      description: "Both services support localization, allowing you to serve a global audience.",
    },
    {
      title: "Resilient against ad blockers",
      competitor: false,
      flows: true,
      description:
        "Flows is bundled with your product, making it resilient against script blockers and ad blockers.",
    },
    {
      title: "Developer experience",
      competitor: false,
      flows: true,
      description:
        "Flows offers APIs, versioning, environments, and documentation built for developers.",
    },
  ],
  otherDifferences: [
    {
      title: "Dedicated vs secondary",
      competitorDescription:
        "Gleap's core strengths are bug reporting and feedback collection. Product tours were added later and receive proportionally less development focus. The tour builder is basic compared to dedicated onboarding tools.",
      flowsDescription:
        "Flows is built from the ground up for product adoption. Every feature, API, and design decision is focused on helping you build better in-app experiences.",
    },
    {
      title: "Own the user experience",
      competitorDescription:
        "Gleap uses its own UI components for tours. Customization is limited, and the experiences may not match your product's design system.",
      flowsDescription:
        "Flows meets you where you are. You can use your own UI components and technologies, giving you the full flexibility of code to build relevant, contextual workflows that fit your product, meet your quality bar, and don't get in the way.",
    },
    {
      title: "Built for developers",
      competitorDescription:
        "Gleap offers good SDKs for feedback and bug reporting, but the product tour development experience is more limited.",
      flowsDescription:
        "Developers aren't an afterthought in Flows, they are first-class users. We focus on the details that make building with Flows a joy: versioning, environments, APIs, and great documentation, to name a few.",
    },
    {
      title: "Customer support",
      competitorDescription:
        "Gleap offers support through their platform, with tiered support levels on paid plans.",
      flowsDescription:
        "Flows is a small company built and run by a team that cares deeply about your success. Whether you're on the free plan or a paid one, you get fast, thoughtful support directly from the people building the product.",
    },
  ],
  ctaBanner: {
    title: "Switch from Gleap to Flows today",
    description:
      "Get a dedicated product adoption platform instead of an afterthought. Start building with Flows.",
  },
};
