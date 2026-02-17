// cSpell:words Produktly

import { css } from "@flows/styled-system/css";
import { Produktly20, ProduktlyFull20 } from "icons";

import { type AlternativeContentType } from "../types";

export const produktlyContent: AlternativeContentType = {
  slug: "produktly",
  seoTitle: "Produktly alternative",
  title: "The developer-friendly Produktly alternative",
  description:
    "Flows is the Produktly alternative for teams who want full control over their product adoption experience with a developer-first workflow.",
  competitor: {
    name: "Produktly",
    squareLogo: <Produktly20 role="img" aria-label="Produktly logo" />,
    fullLogo: (
      <ProduktlyFull20
        role="img"
        aria-label="Produktly logo"
        className={css({
          height: "24px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "Produktly is a product adoption tool offering tours, tooltips, checklists, and announcements. While it covers common onboarding patterns, customization is limited to predefined templates. Teams that need deeper control over UI, behavior, and developer workflows may find themselves constrained.",
    flowsContent:
      "Flows is a modern alternative to Produktly built for teams who want to own their user experience. With Flows, you build workflows using your own components and design system, combining the flexibility of code with the ease of a headless CMS. The result is adoption that feels native to your product.",
  },
  comparisonTitle: "Flows vs Produktly: Key differences",
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
        "Produktly customization is limited to their template builder. Flows gives you full control over both UI and logic.",
    },
    {
      title: "Free plan",
      competitor: false,
      flows: true,
      description:
        "Flows offers a free plan with 250 monthly tracked users. Produktly offers only a time-limited trial.",
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
      title: "Transparent pricing",
      competitor: false,
      flows: true,
      description: "Flows uses transparent, usage-based pricing with no hidden fees.",
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
        "Produktly uses predefined UI components for tours and tooltips. While functional, they may not match your product's design system and can feel like a third-party overlay.",
      flowsDescription:
        "Flows meets you where you are. You can use your own UI components and technologies, giving you the full flexibility of code to build relevant, contextual workflows that fit your product, meet your quality bar, and don't get in the way.",
    },
    {
      title: "Built for developers",
      competitorDescription:
        "Produktly focuses on providing a no-code solution for non-technical users, but this comes at the cost of developer experience and deeper integration options.",
      flowsDescription:
        "Developers aren't an afterthought in Flows, they are first-class users. We focus on the details that make building with Flows a joy: versioning, environments, APIs, and great documentation, to name a few.",
    },
    {
      title: "Customer support",
      competitorDescription: "Produktly is a smaller company with standard support options.",
      flowsDescription:
        "Flows is a small company built and run by a team that cares deeply about your success. Whether you're on the free plan or a paid one, you get fast, thoughtful support directly from the people building the product.",
    },
    {
      title: "Pricing",
      competitorDescription: "Produktly pricing information is not widely published.",
      flowsDescription:
        "Flows offers transparent usage-based pricing with no hidden fees. You can start for free with 250 monthly active users and upgrade only when you need to. No sales calls, no hidden fees, just a clear pricing model that scales with your usage.",
    },
  ],
  ctaBanner: {
    title: "Switch from Produktly to Flows today",
    description: "Build product adoption experiences you fully control. Start building with Flows.",
  },
};
