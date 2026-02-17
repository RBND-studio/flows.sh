import { css } from "@flows/styled-system/css";
import { Appcues20, AppcuesFull20 } from "icons";

import { type AlternativeContentType } from "../types";

export const appcuesContent: AlternativeContentType = {
  slug: "appcues",
  seoTitle: "Appcues alternative",
  title: "The modern and affordable Appcues alternative",
  description:
    "Flows is the Appcues alternative for modern product teams who want full control over product adoption at a fraction of the price.",
  competitor: {
    name: "Appcues",
    squareLogo: <Appcues20 role="img" aria-label="Appcues logo" />,
    fullLogo: (
      <AppcuesFull20
        role="img"
        aria-label="Appcues logo"
        className={css({
          height: "24px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "Appcues is a popular product adoption tool focused on no-code onboarding experiences like tooltips, modals, and checklists. While it’s easy to get started, teams quickly run into limitations around customization, scalability, and pricing. Advanced functionality is locked behind higher tiers, and experiences often feel bolted on rather than native to the product, leaving many teams to eventually look for Appcues alternatives.",
    flowsContent:
      "Flows is a modern alternative to Appcues built for teams who want to own their user experience. With Flows, you build workflows that live inside your product using your own components and design system. It combines the flexibility of code with the ease of a headless CMS, giving product managers, designers, and developers a shared platform to build powerful product adoption experiences.",
  },
  comparisonTitle: "Flows vs Appcues: Key differences",
  comparisons: [
    {
      title: "Onboarding basics",
      competitor: true,
      flows: true,
      description:
        "Both services have basic onboarding features like tooltips, modals and product tours, although Flows focuses on offering full control over the user experience.",
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
        "Appcues customization is mostly limited to styling. Flows gives you full control over both UI and logic.",
    },
    {
      title: "Free plan",
      competitor: false,
      flows: true,
      description:
        "Flows offers a free plan with 250 monthly tracked users. Appcues only offers a time-limited free trial.",
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
        "Flows uses transparent, usage-based pricing. Appcues pricing increases with plan tiers and add-ons.",
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
        "With Appcues you are forced to use their templates, limiting the experience you can build and making it obvious that the components aren’t part of your product. The components are not the same as the ones used in your product, they don’t fully match your brand, and just feel off. Every time your UI or design system changes, you have to manually update Appcues components to stay in sync.",
      flowsDescription:
        "Flows meets you where you are. You can use your own UI components and technologies, giving you the full flexibility of code to build relevant, contextual workflows that fit your product, meet your quality bar, and don’t get in the way.",
    },
    {
      title: "Built for developers",
      competitorDescription:
        "Appcues focuses on providing a no-code solution for non-technical users, but this often comes at the cost of developer experience. Their platform can be hard to integrate with modern tech stacks and inflexible when it comes to customization.",
      flowsDescription:
        "Developers aren’t an afterthought in Flows, they are first-class users. We focus on the details that make building with Flows a joy: versioning, environments, APIs, and great documentation, to name a few.",
    },
    {
      title: "Customer support",
      competitorDescription:
        "While Appcues offers a variety of support options you pay for these in their hefty platform fees.",
      flowsDescription:
        "Flows is a small company built and run by a team that cares deeply about your success. Whether you’re on the free plan or a paid one, you get fast, thoughtful support directly from the people building the product.",
    },
    {
      title: "Pricing",
      competitorDescription:
        "Appcues pricing starts at a high monthly cost and gates features like branching, environments, and collaboration behind higher tiers.",
      flowsDescription:
        "Flows offers transparent usage-based pricing with no hidden fees. You can start for free with 250 monthly active users and upgrade only when you need to. No sales calls, no hidden fees, just a clear pricing model that scales with your usage.",
    },
  ],
  ctaBanner: {
    title: "Switch from Appcues to Flows today",
    description:
      "Build better product adoption experiences at a fraction of the price. Start migrating your flows from Appcues to Flows.",
  },
};
