import { css } from "@flows/styled-system/css";
import { Pendo20, PendoFull20 } from "icons";

import { type AlternativeContentType } from "../types";

export const pendoContent: AlternativeContentType = {
  slug: "pendo",
  seoTitle: "Pendo alternative",
  title: "The modern and affordable Pendo alternative",
  description:
    "Flows is the Pendo alternative for product teams who want full control over in-app experiences without paying enterprise prices.",
  competitor: {
    name: "Pendo",
    squareLogo: <Pendo20 role="img" aria-label="Pendo logo" />,
    fullLogo: (
      <PendoFull20
        role="img"
        aria-label="Pendo logo"
        className={css({
          height: "24px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "Pendo is a product analytics and in-app guidance platform primarily targeting mid-market and enterprise teams. While it combines analytics with guides, the guidance features are often secondary to analytics. Customization is limited to predefined templates, pricing is opaque for paid plans, and advanced features are locked behind enterprise tiers, leading many teams to look for Pendo alternatives.",
    flowsContent:
      "Flows is a modern alternative to Pendo's in-app guidance, built for teams who want to own their user experience. With Flows, you build workflows using your own components and design system, giving you full control over how users interact with your product. Flows focuses entirely on product adoption, doing it well rather than spreading across analytics, surveys, and roadmaps.",
  },
  comparisonTitle: "Flows vs Pendo: Key differences",
  comparisons: [
    {
      title: "Onboarding basics",
      competitor: true,
      flows: true,
      description:
        "Both services support tooltips, modals, and product tours, although Flows focuses on offering full control over the user experience.",
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
        "Pendo limits customization to predefined templates and CSS. Flows gives you full control over both UI and logic.",
    },
    {
      title: "Free plan",
      competitor: "Limited (500 MAU)",
      flows: true,
      description:
        "Pendo offers a limited free plan capped at 500 MAU with basic features. Flows offers a free plan with 250 monthly tracked users and no feature restrictions.",
    },
    {
      title: "Localization",
      competitor: "On higher plans",
      flows: true,
      description:
        "Flows supports localization out of the box. Pendo requires higher-tier plans for localization.",
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
        "Flows uses transparent, usage-based pricing. Pendo requires contacting sales for paid plan pricing.",
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
      title: "Own the user experience",
      competitorDescription:
        "Pendo's in-app guides use predefined templates that overlay your product. They can feel disconnected from your UI, and customization is limited to styling within their builder. Every time your design system changes, Pendo guides need manual updates to stay in sync.",
      flowsDescription:
        "Flows meets you where you are. You can use your own UI components and technologies, giving you the full flexibility of code to build relevant, contextual workflows that fit your product, meet your quality bar, and don't get in the way.",
    },
    {
      title: "Focused on what matters",
      competitorDescription:
        "Pendo bundles analytics, guides, feedback, and roadmapping into one platform. This breadth means the in-app guidance features are often less refined than purpose-built tools. You end up paying for a lot of functionality you may not need.",
      flowsDescription:
        "Flows focuses on product adoption. This focus means deeper functionality, better developer experience, and a product that does one thing exceptionally well rather than many things adequately.",
    },
    {
      title: "Built for developers",
      competitorDescription:
        "Pendo focuses on providing a no-code solution for product managers, but this often comes at the cost of developer experience. Deeper integrations and advanced customization can be difficult.",
      flowsDescription:
        "Developers aren't an afterthought in Flows, they are first-class users. We focus on the details that make building with Flows a joy: versioning, environments, APIs, and great documentation, to name a few.",
    },
    {
      title: "Pricing",
      competitorDescription:
        "Pendo's paid plans require contacting sales and can run into tens of thousands of dollars per year. Pricing scales with MAUs and features are gated behind tiers.",
      flowsDescription:
        "Flows offers transparent usage-based pricing with no hidden fees. You can start for free with 250 monthly active users and upgrade only when you need to. No sales calls, no hidden fees, just a clear pricing model that scales with your usage.",
    },
  ],
  ctaBanner: {
    title: "Switch from Pendo to Flows today",
    description:
      "Build better product adoption experiences at a fraction of the price. Get full control over your in-app guidance with Flows.",
  },
};
