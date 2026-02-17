import { css } from "@flows/styled-system/css";
import { Usetiful20, UsetifulFull20 } from "icons";

import { type AlternativeContentType } from "../types";

export const usetifulContent: AlternativeContentType = {
  slug: "usetiful",
  seoTitle: "Usetiful alternative",
  title: "The developer-first Usetiful alternative",
  description:
    "Flows is the Usetiful alternative for modern companies who want to build better product adoption with full control, custom UI, and flexible workflows that scale.",
  competitor: {
    name: "Usetiful",
    squareLogo: <Usetiful20 role="img" aria-label="Usetiful logo" />,
    fullLogo: (
      <UsetifulFull20
        role="img"
        aria-label="Usetiful logo"
        className={css({
          height: "28px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "Usetiful is a user onboarding tool that helps companies build guided tours and checklists. It’s a good option for teams that need simple, no-code onboarding flows. While it’s easy to get started, its overlay-based approach and limited workflow logic can make it difficult to build onboarding experiences that feel fully integrated into your product.",
    flowsContent:
      "Flows is a modern alternative to Usetiful, crafted with care by a team that prioritizes control and transparency. With Flows you get the power to create product adoption experiences that live within your product and are fully customizable for a fraction of the price. Flows is designed for the modern product team, offering a headless CMS like experience that both developers and non-technical users will love.",
  },
  comparisonTitle: "Flows vs Usetiful: Key differences",
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
        "With Flows you can embed components directly into your product, allowing for a more seamless user experience. Usetiful only supports overlays like tours and tooltips.",
    },
    {
      title: "Free plan",
      competitor: true,
      flows: true,
      description:
        "Flows offers a free plan with 250 monthly tracked users and all features included, no strings attached. Usetiful has a 500 MAU free plan with a watermark and locked features.",
    },
    {
      title: "Custom components",
      competitor: false,
      flows: true,
      description:
        "Flows allows you to use your design system and plug-in components directly from your codebase. Usetiful customization is limited to CSS and themes.",
    },
    {
      title: "Localization",
      competitor: true,
      flows: true,
      description:
        "Both services support localization, allowing you to serve a global audience. Usetiful locks localization behind higher-tier plans.",
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
      title: "Own the user experience",
      competitorDescription:
        "With Usetiful you are forced to use their templates, limiting the experience you can build and making it obvious that the components aren’t part of your product. The components are not the same as the ones used in your product, they don’t fully match your brand, and just feel off. Every time your UI or design system changes, you have to manually update Usetiful components to stay in sync.",
      flowsDescription:
        "Flows meets you where you are. You can use your own UI components and technologies, giving you the full flexibility of code to build relevant, contextual workflows that fit your product, meet your quality bar, and don’t get in the way.",
    },
    {
      title: "Built for developers",
      competitorDescription:
        "Usetiful focuses on providing a no-code solution for non-technical users, but this often comes at the cost of developer experience. Their platform can be hard to integrate with modern tech stacks and inflexible when it comes to customization.",
      flowsDescription:
        "Developers aren’t an afterthought in Flows, they are first-class users. We focus on the details that make building with Flows a joy: versioning, environments, APIs, and great documentation, to name a few.",
    },
    {
      title: "Customer support",
      competitorDescription:
        "Usetiful provides support mainly through documentation and email, with priority assistance available on higher pricing tiers.",
      flowsDescription:
        "Flows is a small company built and run by a team that cares deeply about your success. Whether you’re on the free plan or a paid one, you get fast, thoughtful support directly from the people building the product.",
    },
    {
      title: "Pricing",
      competitorDescription:
        "Usetiful’s pricing is tied to monthly active users and feature tiers, meaning you pay for every user in your product, even those who never engage with your onboarding flows. As your user base grows, costs can quickly become unpredictable. Their alternative model, based on the number of assists per month, can also discourage experimentation, making you think twice before launching new experiences.",
      flowsDescription:
        "Flows offers transparent usage-based pricing with no hidden fees. You can start for free with 250 monthly active users and upgrade only when you need to. No sales calls, no hidden fees, just a clear pricing model that scales with your usage.",
    },
  ],
  ctaBanner: {
    title: "Switch from Usetiful to Flows today",
    description:
      "Build better product adoption experiences at a fraction of the price. Start migrating your flows from Usetiful to Flows.",
  },
};
