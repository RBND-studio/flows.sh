// cSpell:words optimonk

import { css } from "@flows/styled-system/css";
import { Optimonk20, OptimonkFull20 } from "icons";

import { type AlternativeContentType } from "../types";

export const optimonkContent: AlternativeContentType = {
  slug: "optimonk",
  seoTitle: "OptiMonk alternative",
  title: "The product adoption alternative to OptiMonk",
  description:
    "Flows is the OptiMonk alternative for teams who need more than popups: full product adoption workflows built with your own components.",
  competitor: {
    name: "OptiMonk",
    squareLogo: <Optimonk20 role="img" aria-label="OptiMonk logo" />,
    fullLogo: (
      <OptimonkFull20
        role="img"
        aria-label="OptiMonk logo"
        className={css({
          height: "24px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "OptiMonk is a popup and website personalization tool built primarily for e-commerce and marketing conversion. It offers a wide range of popup formats, A/B testing, and targeting, but its core focus is on capturing leads and recovering abandoned carts rather than guiding users through a product. It's a marketing tool first, not a product adoption platform.",
    flowsContent:
      "Flows is a dedicated product adoption platform for in-app onboarding, feature discovery, and user education. Where OptiMonk targets website visitors with marketing popups, Flows helps you build structured workflows that guide authenticated users through your product, using your own components and design system.",
  },
  comparisonTitle: "Flows vs OptiMonk: Key differences",
  comparisons: [
    {
      title: "In-app guidance",
      competitor: false,
      flows: true,
      description:
        "Flows is built for guiding authenticated users inside your product. OptiMonk focuses on website visitor conversion.",
    },
    {
      title: "Modals and banners",
      competitor: true,
      flows: true,
      description:
        "Both support modals and banners. Flows targets in-app product users; OptiMonk targets marketing website visitors.",
    },
    {
      title: "Embeddable components",
      competitor: false,
      flows: true,
      description:
        "Flows allows you to embed components inline within your app's UI for a seamless experience.",
    },
    {
      title: "Custom components",
      competitor: false,
      flows: true,
      description:
        "Flows allows you to use your design system and plug-in components directly from your codebase.",
    },
    {
      title: "Workflow logic",
      competitor: false,
      flows: true,
      description:
        "Flows supports branching workflows and multi-step adoption journeys. OptiMonk focuses on single-step conversion popups.",
    },
    {
      title: "Free plan",
      competitor: true,
      flows: true,
      description: "Both services offer a free plan to get started.",
    },
    {
      title: "Localization",
      competitor: false,
      flows: true,
      description: "Flows supports localization out of the box.",
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
    {
      title: "Surveys",
      competitor: false,
      flows: true,
      description:
        "Flows includes built-in NPS, CSAT, PMF, and custom surveys for collecting in-app user feedback. OptiMonk is a marketing popup tool and does not offer product surveys.",
    },
  ],
  otherDifferences: [
    {
      title: "Product adoption vs marketing conversion",
      competitorDescription:
        "OptiMonk is built to convert website visitors: capturing emails, reducing cart abandonment, and promoting offers. These are marketing goals. It's not designed for guiding users through a SaaS product after they've signed up.",
      flowsDescription:
        "Flows is built for product adoption — onboarding new users, driving feature discovery, and educating users over time. Every feature is designed for in-app use by authenticated users, not marketing popup campaigns.",
    },
    {
      title: "Own the user experience",
      competitorDescription:
        "OptiMonk uses its own popup templates that are designed for marketing conversion. These don't integrate with your product's design system or user context.",
      flowsDescription:
        "Flows meets you where you are. You can use your own UI components and technologies, giving you the full flexibility of code to build relevant, contextual workflows that fit your product, meet your quality bar, and don't get in the way.",
    },
    {
      title: "Built for developers",
      competitorDescription:
        "OptiMonk is built for marketers, not developers. It offers minimal programmatic control or developer-facing integration options.",
      flowsDescription:
        "Developers aren't an afterthought in Flows, they are first-class users. We focus on the details that make building with Flows a joy: versioning, environments, APIs, and great documentation, to name a few.",
    },
    {
      title: "Customer support",
      competitorDescription:
        "OptiMonk provides support through their help center and email with tiered response times on paid plans.",
      flowsDescription:
        "Flows is a small company built and run by a team that cares deeply about your success. Whether you're on the free plan or a paid one, you get fast, thoughtful support directly from the people building the product.",
    },
  ],
  ctaBanner: {
    title: "Move beyond popups with Flows",
    description:
      "Build full product adoption workflows, not just marketing overlays. Start for free with Flows.",
  },
};
