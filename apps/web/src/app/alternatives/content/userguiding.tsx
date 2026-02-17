import { css } from "@flows/styled-system/css";
import { UserGuiding20, UserGuidingFull20 } from "icons";

import { type AlternativeContentType } from "../types";

export const userguidingContent: AlternativeContentType = {
  slug: "userguiding",
  seoTitle: "UserGuiding alternative",
  title: "The modern and customizable UserGuiding alternative",
  description:
    "Flows is the UserGuiding alternative for teams who need deeper customization and a developer-friendly workflow for product adoption.",
  competitor: {
    name: "UserGuiding",
    squareLogo: <UserGuiding20 role="img" aria-label="UserGuiding logo" />,
    fullLogo: (
      <UserGuidingFull20
        role="img"
        aria-label="UserGuiding logo"
        className={css({
          height: "24px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "UserGuiding is a no-code product adoption platform offering tours, checklists, hotspots, and resource centers. It's quick to set up and affordable, but teams often hit limitations with customization, complex UI interactions, and developer workflows. The visual builder can struggle with dynamic single-page applications, and experiences can feel generic.",
    flowsContent:
      "Flows is a modern alternative to UserGuiding built for teams who want to own their user experience. With Flows, you build workflows using your own UI components and logic, combining the flexibility of code with the ease of a headless CMS. The result is product adoption that feels native to your product, not bolted on.",
  },
  comparisonTitle: "Flows vs UserGuiding: Key differences",
  comparisons: [
    {
      title: "Onboarding basics",
      competitor: true,
      flows: true,
      description:
        "Both services have basic onboarding features like tooltips, modals, and product tours, although Flows focuses on offering full control over the user experience.",
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
        "UserGuiding customization is limited to their theme builder and CSS overrides. Flows gives you full control over both UI and logic.",
    },
    {
      title: "Free plan",
      competitor: false,
      flows: true,
      description:
        "Flows offers a free plan with 250 monthly tracked users. UserGuiding offers a free plan that doesn't include product adoption features.",
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
      competitor: true,
      flows: true,
      description:
        "Both services offer published pricing. Flows uses usage-based pricing that scales predictably.",
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
        "UserGuiding uses predefined templates and a visual Chrome extension builder. While quick to set up, the result can look generic and disconnected from your product's design system. The builder can also struggle with complex, dynamic UIs.",
      flowsDescription:
        "Flows meets you where you are. You can use your own UI components and technologies, giving you the full flexibility of code to build relevant, contextual workflows that fit your product, meet your quality bar, and don't get in the way.",
    },
    {
      title: "Built for developers",
      competitorDescription:
        "UserGuiding focuses on providing a no-code solution for non-technical users, but this often comes at the cost of developer experience. Deeper integrations and advanced customization require workarounds.",
      flowsDescription:
        "Developers aren't an afterthought in Flows, they are first-class users. We focus on the details that make building with Flows a joy: versioning, environments, APIs, and great documentation, to name a few.",
    },
    {
      title: "Customer support",
      competitorDescription:
        "UserGuiding offers support through chat and email, with dedicated account managers on higher tiers.",
      flowsDescription:
        "Flows is a small company built and run by a team that cares deeply about your success. Whether you're on the free plan or a paid one, you get fast, thoughtful support directly from the people building the product.",
    },
    {
      title: "Pricing",
      competitorDescription:
        "UserGuiding pricing increases with MAU count and plan tier. Some features like branding removal require higher plans.",
      flowsDescription:
        "Flows offers transparent usage-based pricing with no hidden fees. You can start for free with 250 monthly active users and upgrade only when you need to. No sales calls, no hidden fees, just a clear pricing model that scales with your usage.",
    },
  ],
  ctaBanner: {
    title: "Switch from UserGuiding to Flows today",
    description:
      "Build product adoption experiences that match your product's quality. Start building with Flows.",
  },
};
