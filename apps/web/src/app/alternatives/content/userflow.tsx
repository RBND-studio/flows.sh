import { css } from "@flows/styled-system/css";
import { Userflow20, UserFlowFull20 } from "icons";

import { type AlternativeContentType } from "../types";

export const userflowContent: AlternativeContentType = {
  slug: "userflow",
  seoTitle: "Userflow alternative",
  title: "The modern and affordable Userflow alternative",
  description:
    "Flows is the Userflow alternative for modern companies who want to build better product adoption at a fraction of the price.",
  competitor: {
    name: "Userflow",
    squareLogo: <Userflow20 role="img" aria-label="Userflow logo" />,
    fullLogo: (
      <UserFlowFull20
        role="img"
        aria-label="Userflow logo"
        className={css({
          height: "24px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "Userflow is an onboarding tool focused on no-code flows with tooltips, modals, and checklists. It supports basic conditional logic, but teams often hit limitations when building more complex or highly customized user journeys. Pricing and plan tiers can also become a blocker as teams grow.",
    flowsContent:
      "Flows is a modern alternative to Userflow designed for teams that want full control over product adoption. With Flows, workflows live inside your product and can be built using your own UI components and logic. It combines the power of code with a headless CMS-like experience that works for both developers and non-technical teammates.",
  },
  comparisonTitle: "Flows vs Userflow: Key differences",
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
        "Userflow offers limited customization using theme builders and CSS, while Flows gives full control over UI and logic.",
    },
    {
      title: "Free plan",
      competitor: false,
      flows: true,
      description:
        "Flows offers a free plan with 250 monthly tracked users no strings attached. Userflow only offers a time-limited trial.",
    },
    {
      title: "Localization",
      competitor: true,
      flows: true,
      description:
        "Flows supports localization out of the box. Userflow requires an upgraded plan.",
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
        "Flows uses transparent, usage-based pricing. Userflow pricing scales quickly with plan tiers.",
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
        "Userflow provides predefined UI elements like tooltips and modals, which can limit how closely onboarding matches your product’s design system.",
      flowsDescription:
        "Flows meets you where you are. You can use your own UI components and technologies, giving you the full flexibility of code to build relevant, contextual workflows that fit your product, meet your quality bar, and don’t get in the way.",
    },
    {
      title: "Built for developers",
      competitorDescription:
        "Userflow focuses on providing a no-code solution for non-technical users, but this often comes at the cost of developer experience. Their platform can be hard to integrate with modern tech stacks and inflexible when it comes to customization.",
      flowsDescription:
        "Developers aren’t an afterthought in Flows, they are first-class users. We focus on the details that make building with Flows a joy: versioning, environments, APIs, and great documentation, to name a few.",
    },
    {
      title: "Customer support",
      competitorDescription:
        "While Userflow offers a variety of support options you pay for these in their hefty platform fees.",
      flowsDescription:
        "Flows is a small company built and run by a team that cares deeply about your success. Whether you’re on the free plan or a paid one, you get fast, thoughtful support directly from the people building the product.",
    },
    {
      title: "Pricing",
      competitorDescription:
        "Userflow pricing increases quickly as your user base grows, teams add collaborators or need advanced features like localization.",
      flowsDescription:
        "Flows offers transparent usage-based pricing with no hidden fees. You can start for free with 250 monthly active users and upgrade only when you need to. No sales calls, no hidden fees, just a clear pricing model that scales with your usage.",
    },
  ],
  ctaBanner: {
    title: "Switch from Userflow to Flows today",
    description:
      "Build better product adoption experiences at a fraction of the price. Start migrating your flows from Userflow to Flows.",
  },
};
