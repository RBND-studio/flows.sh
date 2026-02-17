import { css } from "@flows/styled-system/css";
import { Userlane20, UserlaneFull20 } from "icons";

import { type AlternativeContentType } from "../types";

export const userlaneContent: AlternativeContentType = {
  slug: "userlane",
  seoTitle: "Userlane alternative",
  title: "The modern and affordable Userlane alternative",
  description:
    "Flows is the Userlane alternative for teams who want flexible product adoption without enterprise complexity or opaque pricing.",
  competitor: {
    name: "Userlane",
    squareLogo: <Userlane20 role="img" aria-label="Userlane logo" />,
    fullLogo: (
      <UserlaneFull20
        role="img"
        aria-label="Userlane logo"
        className={css({
          height: "24px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "Userlane is a digital adoption platform focused on interactive step-by-step walkthroughs, primarily for employee onboarding onto enterprise software. While it offers interactive guidance, its enterprise focus means opaque pricing, lengthy sales cycles, and a product that can feel like overkill for SaaS product teams who need lighter, more customizable solutions.",
    flowsContent:
      "Flows is a modern alternative to Userlane built for product teams who want to move fast. With Flows, you build workflows using your own components and design system, giving you full control over the user experience. Start for free, set up in minutes, and scale as you grow — no demo calls or enterprise contracts required.",
  },
  comparisonTitle: "Flows vs Userlane: Key differences",
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
      title: "Customization",
      competitor: false,
      flows: true,
      description:
        "Userlane offers limited visual customization within their builder. Flows gives you full control over both UI and logic.",
    },
    {
      title: "Free plan",
      competitor: false,
      flows: true,
      description:
        "Flows offers a free plan with 250 monthly tracked users. Userlane requires a demo and enterprise contract.",
    },
    {
      title: "Self-serve setup",
      competitor: false,
      flows: true,
      description:
        "Flows lets you sign up, integrate, and start building in minutes. Userlane requires a sales process to get started.",
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
        "Flows uses transparent, usage-based pricing. Userlane does not publish pricing and requires sales engagement.",
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
      title: "Product teams vs IT departments",
      competitorDescription:
        "Userlane is designed primarily for enterprise IT teams rolling out internal tools like Salesforce or SAP. It's built for employee training, not product-led growth.",
      flowsDescription:
        "Flows is built for product teams who want to guide their own users. Whether it's onboarding, feature adoption, or education, Flows helps you build experiences that are part of your product.",
    },
    {
      title: "Own the user experience",
      competitorDescription:
        "Userlane overlays its own UI on top of your application. The walkthrough components use their design, not yours, and can feel separate from your product.",
      flowsDescription:
        "Flows meets you where you are. You can use your own UI components and technologies, giving you the full flexibility of code to build relevant, contextual workflows that fit your product, meet your quality bar, and don't get in the way.",
    },
    {
      title: "Built for developers",
      competitorDescription:
        "Userlane focuses on non-technical content creators in enterprise environments. Developer workflows and programmatic control are secondary.",
      flowsDescription:
        "Developers aren't an afterthought in Flows, they are first-class users. We focus on the details that make building with Flows a joy: versioning, environments, APIs, and great documentation, to name a few.",
    },
    {
      title: "Pricing",
      competitorDescription:
        "Userlane doesn't publish pricing and requires a demo to get started. Enterprise contracts can involve lengthy negotiations and significant costs.",
      flowsDescription:
        "Flows offers transparent usage-based pricing with no hidden fees. You can start for free with 250 monthly active users and upgrade only when you need to. No sales calls, no hidden fees, just a clear pricing model that scales with your usage.",
    },
  ],
  ctaBanner: {
    title: "Switch from Userlane to Flows today",
    description:
      "Get flexible product adoption without enterprise complexity. Start building with Flows in minutes.",
  },
};
