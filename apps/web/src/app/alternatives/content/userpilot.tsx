import { css } from "@flows/styled-system/css";
import { Userpilot20, UserpilotFull20 } from "icons";

import { type AlternativeContentType } from "../types";

export const userpilotContent: AlternativeContentType = {
  slug: "userpilot",
  seoTitle: "Userpilot alternative",
  title: "The modern and affordable Userpilot alternative",
  description:
    "Flows is the Userpilot alternative for modern product teams who want deeper customization, better developer experience, and transparent pricing.",
  competitor: {
    name: "Userpilot",
    squareLogo: <Userpilot20 role="img" aria-label="Userpilot logo" />,
    fullLogo: (
      <UserpilotFull20
        role="img"
        aria-label="Userpilot logo"
        className={css({
          height: "28px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "Userpilot is a product adoption platform focused on no-code onboarding patterns such as tooltips, modals, and checklists. It works well for basic onboarding use cases, but teams often run into limitations around customization, developer workflows, and building more complex, product-native experiences. As needs grow, pricing and plan tiers can also become a constraint.",
    flowsContent:
      "Flows is a modern alternative to Userpilot built for teams who want to own their user experience. With Flows, workflows live inside your product and can be built using your own UI components and logic. It combines the flexibility of code with a headless CMS-like experience that works for product managers, designers, and developers alike.",
  },
  comparisonTitle: "Flows vs Userpilot: Key differences",
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
      title: "Free plan",
      competitor: false,
      flows: true,
      description:
        "Flows offers a free plan with 250 monthly tracked users no strings attached. Userpilot offers only a 14-day free trial.",
    },
    {
      title: "Custom components",
      competitor: false,
      flows: true,
      description:
        "Flows allows you to use your design system and plug-in components directly from your codebase.",
    },
    {
      title: "Localization",
      competitor: "On higher plans",
      flows: true,
      description:
        "Flows supports localization out of the box. Userpilot requires higher-tier plans.",
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
        "Flows offers transparent usage-based pricing with no hidden fees, while Userpilot lists only their cheapest plan publicly.",
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
        "Userpilot relies on predefined UI patterns that can feel generic and disconnected from the rest of the product. Customization is mostly limited to styling.",
      flowsDescription:
        "Flows meets you where you are. You can use your own UI components and technologies, giving you the full flexibility of code to build relevant, contextual workflows that fit your product, meet your quality bar, and don’t get in the way.",
    },
    {
      title: "Built for developers",
      competitorDescription:
        "Userpilot is designed mainly as a no-code tool, which can make deeper integrations and advanced customization difficult.",
      flowsDescription:
        "Developers aren’t an afterthought in Flows, they are first-class users. We focus on the details that make building with Flows a joy: versioning, environments, APIs, and great documentation, to name a few.",
    },
    {
      title: "Customer support",
      competitorDescription:
        "While Userpilot offers a variety of support options you pay for these in their hefty platform fees.",
      flowsDescription:
        "Flows is a small company built and run by a team that cares deeply about your success. Whether you’re on the free plan or a paid one, you get fast, thoughtful support directly from the people building the product.",
    },
    {
      title: "Pricing",
      competitorDescription:
        "Userpilot lists only their cheapest plan publicly and requires you to book a demo just to find out if it fits your budget. Their pricing model is built for large enterprises and can include charges per seat, per flow, or even per feature, making it unpredictable and often expensive.",
      flowsDescription:
        "Flows offers transparent usage-based pricing with no hidden fees. You can start for free with 250 monthly active users and upgrade only when you need to. No sales calls, no hidden fees, just a clear pricing model that scales with your usage.",
    },
  ],
  ctaBanner: {
    title: "Switch from Userpilot to Flows today",
    description:
      "Build better product adoption experiences at a fraction of the price. Start migrating your flows from Userpilot to Flows.",
  },
};
