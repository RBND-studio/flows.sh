// cSpell:words Apty

import { css } from "@flows/styled-system/css";
import { Apty20, AptyFull20 } from "icons";

import { type AlternativeContentType } from "../types";

export const aptyContent: AlternativeContentType = {
  slug: "apty",
  seoTitle: "Apty alternative",
  title: "The modern and affordable Apty alternative",
  description:
    "Flows is the Apty alternative for product teams who want flexible adoption tools without enterprise-only pricing and complexity.",
  competitor: {
    name: "Apty",
    squareLogo: <Apty20 role="img" aria-label="Apty logo" />,
    fullLogo: (
      <AptyFull20
        role="img"
        aria-label="Apty logo"
        className={css({
          height: "24px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "Apty is an enterprise digital adoption platform focused on guiding employees through internal business software. It offers step-by-step walkthroughs and workflow validation, but its enterprise-only approach means opaque pricing, sales-driven onboarding, and a product built for IT departments rather than product teams building SaaS products.",
    flowsContent:
      "Flows is a modern alternative to Apty built for product teams who want to ship great adoption experiences. With Flows, you build workflows using your own components and design system, set up in minutes, and pay only for what you use. No enterprise contracts, no IT department required.",
  },
  comparisonTitle: "Flows vs Apty: Key differences",
  comparisons: [
    {
      title: "Onboarding basics",
      competitor: true,
      flows: true,
      description:
        "Both services support guided walkthroughs and in-app guidance, although Flows focuses on offering full control over the user experience.",
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
      title: "Free plan",
      competitor: false,
      flows: true,
      description:
        "Flows offers a free plan with 250 monthly tracked users. Apty has no free plan or public pricing.",
    },
    {
      title: "Self-serve setup",
      competitor: false,
      flows: true,
      description:
        "Flows lets you sign up and start building in minutes. Apty requires a sales process to get started.",
    },
    {
      title: "Localization",
      competitor: true,
      flows: true,
      description: "Both services support localization, allowing you to serve a global audience.",
    },
    {
      title: "Transparent pricing",
      competitor: false,
      flows: true,
      description:
        "Flows uses transparent, usage-based pricing. Apty does not publish pricing and requires sales engagement.",
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
      title: "Product teams vs enterprise IT",
      competitorDescription:
        "Apty is designed for enterprise IT teams training employees on internal tools like Salesforce and ServiceNow. Its workflows, pricing, and features reflect this enterprise-first audience.",
      flowsDescription:
        "Flows is built for product teams who want to guide their own users. Whether it's onboarding, feature adoption, or education, Flows helps you build experiences that are part of your product.",
    },
    {
      title: "Own the user experience",
      competitorDescription:
        "Apty overlays its own UI on top of your application. The guidance components use their design, not yours, and can feel separate from your product.",
      flowsDescription:
        "Flows meets you where you are. You can use your own UI components and technologies, giving you the full flexibility of code to build relevant, contextual workflows that fit your product, meet your quality bar, and don't get in the way.",
    },
    {
      title: "Built for developers",
      competitorDescription:
        "Apty focuses on non-technical content creators in enterprise environments. Developer workflows and programmatic control are secondary.",
      flowsDescription:
        "Developers aren't an afterthought in Flows, they are first-class users. We focus on the details that make building with Flows a joy: versioning, environments, APIs, and great documentation, to name a few.",
    },
    {
      title: "Pricing",
      competitorDescription:
        "Apty doesn't publish pricing and requires enterprise sales engagement. Contracts are tailored to each organization, making it hard to evaluate upfront.",
      flowsDescription:
        "Flows offers transparent usage-based pricing with no hidden fees. You can start for free with 250 monthly tracked users and upgrade only when you need to. No sales calls, no hidden fees, just a clear pricing model that scales with your usage.",
    },
  ],
  ctaBanner: {
    title: "Switch from Apty to Flows today",
    description:
      "Get powerful product adoption without enterprise complexity. Start building with Flows in minutes.",
  },
};
