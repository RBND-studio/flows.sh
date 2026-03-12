// cSpell:words Candu

import { css } from "@flows/styled-system/css";
import { Candu20, CanduFull20 } from "icons";

import { type AlternativeContentType } from "../types";

export const canduContent: AlternativeContentType = {
  slug: "candu",
  seoTitle: "Candu alternative",
  title: "The developer-friendly Candu alternative",
  description:
    "Flows is the Candu alternative for teams who want full control over their in-app experiences without a $199/month minimum.",
  competitor: {
    name: "Candu",
    squareLogo: <Candu20 role="img" aria-label="Candu logo" />,
    fullLogo: (
      <CanduFull20
        role="img"
        aria-label="Candu logo"
        className={css({
          height: "24px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "Candu is a no-code platform for building in-app experiences like tours, modals, banners, and hotspots. It offers a drag-and-drop editor with AI-assisted design and A/B testing. While the editor is flexible within their component system, you are still building with Candu's UI primitives rather than your own. Pricing starts at $199/month with no free plan.",
    flowsContent:
      "Flows is a modern alternative to Candu built for teams who want to truly own their user experience. With Flows, you build workflows using your own components and design system, not Candu's drag-and-drop primitives. The result is adoption that feels native to your product, not built in a third-party editor.",
  },
  comparisonTitle: "Flows vs Candu: Key differences",
  comparisons: [
    {
      title: "Onboarding basics",
      competitor: true,
      flows: true,
      description:
        "Both services support tours, modals, and in-app guidance, although Flows focuses on offering full control over the user experience.",
    },
    {
      title: "Embeddable components",
      competitor: true,
      flows: true,
      description:
        "Both support embedding content inline in the product. Flows lets you use your own components; Candu uses its own drag-and-drop primitives.",
    },
    {
      title: "Custom components",
      competitor: false,
      flows: true,
      description:
        "Flows allows you to plug in components directly from your codebase and design system. Candu provides its own set of UI primitives.",
    },
    {
      title: "Customization",
      competitor: false,
      flows: true,
      description:
        "Candu allows full CSS styling within their editor. Flows gives you full control over UI and logic using your own code.",
    },
    {
      title: "Free plan",
      competitor: false,
      flows: true,
      description:
        "Flows offers a free plan with 250 monthly tracked users. Candu's entry plan starts at $199/month with no free tier.",
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
      description:
        "Flows uses transparent, usage-based pricing. Candu's higher tiers are not publicly listed.",
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
      title: "Your components, not theirs",
      competitorDescription:
        "Candu's editor lets you assemble experiences from its own drag-and-drop components. Even with full CSS control, you are working within their system, not your design system. The result can still feel like a third-party overlay.",
      flowsDescription:
        "Flows meets you where you are. You can use your own UI components and technologies, giving you the full flexibility of code to build relevant, contextual workflows that fit your product, meet your quality bar, and don't get in the way.",
    },
    {
      title: "Built for developers",
      competitorDescription:
        "Candu focuses on making product teams self-sufficient without engineering. This no-code-first approach limits how deeply developers can integrate and control the experience.",
      flowsDescription:
        "Developers aren't an afterthought in Flows, they are first-class users. We focus on the details that make building with Flows a joy: versioning, environments, APIs, and great documentation, to name a few.",
    },
    {
      title: "Customer support",
      competitorDescription:
        "Candu provides support through their platform with tiered access on higher plans.",
      flowsDescription:
        "Flows is a small company built and run by a team that cares deeply about your success. Whether you're on the free plan or a paid one, you get fast, thoughtful support directly from the people building the product.",
    },
    {
      title: "Pricing",
      competitorDescription:
        "Candu starts at $199/month with no free plan. Higher tiers are not publicly listed and require contacting sales.",
      flowsDescription:
        "Flows offers transparent usage-based pricing with no hidden fees. You can start for free with 250 monthly tracked users and upgrade only when you need to. No sales calls, no hidden fees, just a clear pricing model that scales with your usage.",
    },
  ],
  ctaBanner: {
    title: "Switch from Candu to Flows today",
    description:
      "Build product adoption with your own components at a fraction of the price. Start for free with Flows.",
  },
};
