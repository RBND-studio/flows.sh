// cSpell:words Stonly

import { css } from "@flows/styled-system/css";
import { Stonly20, StonlyFull20 } from "icons";

import { type AlternativeContentType } from "../types";

export const stonlyContent: AlternativeContentType = {
  slug: "stonly",
  seoTitle: "Stonly alternative",
  title: "The developer-friendly Stonly alternative",
  description:
    "Flows is the Stonly alternative for teams who want full control over in-app guidance instead of relying on help widgets and predefined templates.",
  competitor: {
    name: "Stonly",
    squareLogo: <Stonly20 role="img" aria-label="Stonly logo" />,
    fullLogo: (
      <StonlyFull20
        role="img"
        aria-label="Stonly logo"
        className={css({
          height: "24px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      'Stonly is a platform focused on interactive guides and knowledge bases for self-service support. It excels at branching, decision-tree-style guides that help users find answers, but its approach is more "pull" than "push" — users need to seek out help rather than being proactively guided. Customization is limited to their templates, and pricing requires contacting sales for higher tiers.',
    flowsContent:
      "Flows is a modern alternative to Stonly built for teams who want proactive product adoption, not just reactive help. With Flows, you build workflows that live inside your product using your own components and design system. Flows handles both proactive guidance and contextual help with full control over the experience.",
  },
  comparisonTitle: "Flows vs Stonly: Key differences",
  comparisons: [
    {
      title: "Onboarding basics",
      competitor: true,
      flows: true,
      description:
        "Both services support tooltips and guided experiences, although Flows focuses on proactive workflows rather than self-service guides.",
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
      title: "Proactive guidance",
      competitor: false,
      flows: true,
      description:
        "Flows proactively triggers workflows based on user behavior and targeting. Stonly primarily relies on users seeking help through widgets.",
    },
    {
      title: "Free plan",
      competitor: false,
      flows: true,
      description:
        "Flows offers a free plan with 250 monthly tracked users. Stonly requires contacting sales for pricing.",
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
      title: "Transparent pricing",
      competitor: false,
      flows: true,
      description:
        "Flows uses transparent, usage-based pricing. Stonly requires contacting sales for higher-tier plans.",
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
      title: "Proactive vs reactive",
      competitorDescription:
        "Stonly is built around self-service help — users open a widget, browse guides, and find answers themselves. This works well for support but leaves gaps in proactive user onboarding and feature adoption.",
      flowsDescription:
        "Flows is designed for proactive product adoption. Workflows trigger automatically based on user behavior, segment, and context, guiding users at the right moment without waiting for them to ask for help.",
    },
    {
      title: "Own the user experience",
      competitorDescription:
        "Stonly uses its own templates and widgets, which can feel separate from your product's UI. Customization is limited to their builder.",
      flowsDescription:
        "Flows meets you where you are. You can use your own UI components and technologies, giving you the full flexibility of code to build relevant, contextual workflows that fit your product, meet your quality bar, and don't get in the way.",
    },
    {
      title: "Built for developers",
      competitorDescription:
        "Stonly focuses on non-technical content creators. Developer workflows and deeper integrations are secondary.",
      flowsDescription:
        "Developers aren't an afterthought in Flows, they are first-class users. We focus on the details that make building with Flows a joy: versioning, environments, APIs, and great documentation, to name a few.",
    },
    {
      title: "Pricing",
      competitorDescription:
        "Stonly's pricing is not fully transparent and requires contacting sales for higher tiers.",
      flowsDescription:
        "Flows offers transparent usage-based pricing with no hidden fees. You can start for free with 250 monthly active users and upgrade only when you need to. No sales calls, no hidden fees, just a clear pricing model that scales with your usage.",
    },
  ],
  ctaBanner: {
    title: "Switch from Stonly to Flows today",
    description:
      "Move from reactive help widgets to proactive product adoption. Start building with Flows.",
  },
};
