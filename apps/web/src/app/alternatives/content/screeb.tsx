// cSpell:words Screeb

import { css } from "@flows/styled-system/css";
import { Screeb20, ScreebFull20 } from "icons";

import { type AlternativeContentType } from "../types";

export const screebContent: AlternativeContentType = {
  slug: "screeb",
  seoTitle: "Screeb alternative",
  title: "The purpose-built Screeb alternative for product adoption",
  description:
    "Flows is the Screeb alternative for teams who want a dedicated product adoption platform instead of onboarding bolted onto an analytics tool.",
  competitor: {
    name: "Screeb",
    squareLogo: <Screeb20 role="img" aria-label="Screeb logo" />,
    fullLogo: (
      <ScreebFull20
        role="img"
        aria-label="Screeb logo"
        className={css({
          height: "24px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "Screeb is an all-in-one platform combining session replays, in-app surveys, product analytics, and product tours. While this breadth is useful for understanding user behavior, product tours are a secondary feature. Teams building serious onboarding and adoption workflows often find the tour capabilities less refined than dedicated tools, and they end up paying for analytics features they may already have elsewhere.",
    flowsContent:
      "Flows is a modern alternative to Screeb's product tours, built from the ground up for product adoption. With Flows, you build workflows using your own components and design system, with full control over targeting, branching logic, and the user experience. Every feature is designed to help you build better in-app guidance, not split between surveys, replays, and analytics.",
  },
  comparisonTitle: "Flows vs Screeb: Key differences",
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
        "Screeb tour customization is limited to their builder. Flows gives you full control over both UI and logic.",
    },
    {
      title: "Workflow logic",
      competitor: false,
      flows: true,
      description:
        "Flows supports full branching workflows and conditional logic. Screeb tours follow a linear structure.",
    },
    {
      title: "Free plan",
      competitor: false,
      flows: true,
      description:
        "Flows offers a free plan with 250 monthly tracked users. Screeb offers only a time-limited trial.",
    },
    {
      title: "Localization",
      competitor: false,
      flows: true,
      description: "Flows supports localization out of the box.",
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
        "Screeb's core strengths are session replays and in-app surveys. Product tours were added as part of a broader platform play. They receive proportionally less development focus, which shows in the depth of features available for building complex onboarding experiences.",
      flowsDescription:
        "Flows is built from the ground up for product adoption. Every feature, API, and design decision is focused on helping you build better in-app experiences, not split across analytics, replays, and feedback collection.",
    },
    {
      title: "Own the user experience",
      competitorDescription:
        "Screeb uses its own UI components for tours and messages. Customization is limited to their builder, and experiences may not match your product's design system.",
      flowsDescription:
        "Flows meets you where you are. You can use your own UI components and technologies, giving you the full flexibility of code to build relevant, contextual workflows that fit your product, meet your quality bar, and don't get in the way.",
    },
    {
      title: "Built for developers",
      competitorDescription:
        "Screeb focuses primarily on product managers and CX teams. Developer workflows, versioning, and programmatic control are secondary.",
      flowsDescription:
        "Developers aren't an afterthought in Flows, they are first-class users. We focus on the details that make building with Flows a joy: versioning, environments, APIs, and great documentation, to name a few.",
    },
    {
      title: "Pricing",
      competitorDescription:
        "Screeb bundles analytics, session replays, and onboarding into one platform. You pay for the full suite even if you only need product tours.",
      flowsDescription:
        "Flows offers transparent usage-based pricing with no hidden fees. You can start for free with 250 monthly tracked users and upgrade only when you need to. No sales calls, no hidden fees, just a clear pricing model that scales with your usage.",
    },
  ],
  ctaBanner: {
    title: "Switch from Screeb to Flows today",
    description:
      "Get a dedicated product adoption platform instead of an afterthought. Start building with Flows.",
  },
};
