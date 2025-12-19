import { css } from "@flows/styled-system/css";
import { Chameleon20, ChameleonFull20 } from "icons";

import { type AlternativeContentType } from "../types";

export const chameleonContent: AlternativeContentType = {
  slug: "chameleon",
  seoTitle: "Chameleon alternative",
  title: "The modern and affordable Chameleon alternative",
  description:
    "Flows is the Chameleon alternative for modern product teams who want full control over product adoption at a fraction of the price.",
  competitor: {
    name: "Chameleon",
    squareLogo: <Chameleon20 role="img" aria-label="Chameleon logo" />,
    fullLogo: (
      <ChameleonFull20
        role="img"
        aria-label="Chameleon logo"
        className={css({
          height: "28px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "Chameleon is a product adoption platform focused on no-code onboarding patterns like tooltips, banners, and checklists. While it works well for basic use cases, teams often run into limitations around customization, developer workflows, and pricing. More advanced capabilities such as localization or collaboration are locked behind higher-tier plans.",
    flowsContent:
      "Flows is a modern alternative to Chameleon built for teams who want to own their user experience. With Flows, workflows live inside your product and can be built using your own UI components and logic. It combines the flexibility of code with the ease of a headless CMS, making it powerful for developers while still accessible to product teams.",
  },
  comparisonTitle: "Flows vs Chameleon: Key differences",
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
      competitor: "Limited to templates",
      flows: true,
      description:
        "Flows lets you embed fully custom components inline in your product, not just predefined templates.",
    },
    {
      title: "Custom components",
      competitor: false,
      flows: true,
      description:
        "Flows allows you to plug in components directly from your codebase and design system.",
    },
    {
      title: "Customization",
      competitor: false,
      flows: true,
      description:
        "Chameleon offers limited customization using theme builders and CSS, while Flows gives full control over UI and logic.",
    },
    {
      title: "Free plan",
      competitor: false,
      flows: true,
      description:
        "Flows offers a free plan with 250 monthly active users. Chameleon's free plan includes only interactive demos, not live onboarding.",
    },
    {
      title: "Localization",
      competitor: true,
      flows: true,
      description:
        "Flows supports localization out of the box. Chameleon requires an enterprise plan.",
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
        "Flows uses transparent, usage-based pricing. Chameleon pricing increases with plan tiers and add-ons.",
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
        "Chameleon provides predefined UI patterns with limited flexibility. Even inline experiences rely on templates, which can make onboarding feel generic and disconnected from the rest of the product.",
      flowsDescription:
        "Flows lets you use your own components and design system, so adoption experiences feel like a natural part of your product rather than an overlay.",
    },
    {
      title: "Built for developers",
      competitorDescription:
        "Chameleon is optimized for no-code workflows, which can limit how deeply developers can integrate or customize experiences.",
      flowsDescription:
        "Developers aren’t an afterthought in Flows, they are first-class users. We focus on the details that make building with Flows a joy: versioning, environments, APIs, and great documentation, to name a few.",
    },
    {
      title: "Customer support",
      competitorDescription:
        "While Chameleon offers a variety of support options you pay for these in their hefty platform fees.",
      flowsDescription:
        "Flows is a small company built and run by a team that cares deeply about your success. Whether you’re on the free plan or a paid one, you get fast, thoughtful support directly from the people building the product.",
    },
    {
      title: "Pricing",
      competitorDescription:
        "Chameleon pricing starts at a relatively high monthly cost and gates key features like localization behind higher tiers.",
      flowsDescription:
        "Flows offers transparent usage-based pricing with no hidden fees. You can start for free with 250 monthly active users and upgrade only when you need to. No sales calls, no hidden fees, just a clear pricing model that scales with your usage.",
    },
  ],
  ctaBanner: {
    title: "Switch from Chameleon to Flows today",
    description:
      "Build better product adoption experiences at a fraction of the price. Start migrating your flows from Chameleon to Flows.",
  },
};
