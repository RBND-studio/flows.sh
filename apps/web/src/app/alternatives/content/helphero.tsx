import { css } from "@flows/styled-system/css";
import { HelpHero20, HelpHeroFull20 } from "icons";

import { type AlternativeContentType } from "../types";

export const helpheroContent: AlternativeContentType = {
  slug: "helphero",
  seoTitle: "HelpHero alternative",
  title: "The modern and fully-featured HelpHero alternative",
  description:
    "Flows is the HelpHero alternative for teams who have outgrown basic product tours and want full control over their adoption experience.",
  competitor: {
    name: "HelpHero",
    squareLogo: <HelpHero20 role="img" aria-label="HelpHero logo" />,
    fullLogo: (
      <HelpHeroFull20
        role="img"
        aria-label="HelpHero logo"
        className={css({
          height: "24px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "HelpHero is a simple, affordable no-code product tour tool. It covers the basics — tours, hotspots, and checklists — and is quick to set up. But teams that need deeper customization, complex workflows, or advanced targeting often outgrow it. The feature set is narrow, and there are limited options for making experiences match your product's design.",
    flowsContent:
      "Flows is a modern alternative to HelpHero built for teams who want full control over their product adoption experience. With Flows, you build workflows using your own components and design system. It combines the ease of getting started with the power to build sophisticated, product-native experiences as your needs grow.",
  },
  comparisonTitle: "Flows vs HelpHero: Key differences",
  comparisons: [
    {
      title: "Onboarding basics",
      competitor: true,
      flows: true,
      description:
        "Both services have basic onboarding features like tooltips and product tours, although Flows focuses on offering full control over the user experience.",
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
        "HelpHero offers limited visual customization. Flows gives you full control over both UI and logic.",
    },
    {
      title: "Workflow logic",
      competitor: false,
      flows: true,
      description:
        "Flows supports full branching workflows and conditional logic. HelpHero tours are linear.",
    },
    {
      title: "Free plan",
      competitor: false,
      flows: true,
      description:
        "Flows offers a free plan with 250 monthly tracked users. HelpHero offers only a time-limited trial.",
    },
    {
      title: "Localization",
      competitor: false,
      flows: true,
      description:
        "Flows supports localization out of the box. HelpHero does not have built-in localization support.",
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
      title: "Grow without switching",
      competitorDescription:
        "HelpHero works well for simple use cases, but as your product and team grow, you may need features like branching workflows, advanced targeting, localization, and custom components that HelpHero doesn't support.",
      flowsDescription:
        "Flows scales with your needs. Start with simple tours and grow into complex, multi-step workflows with branching logic, inline components, and advanced targeting — all without switching tools.",
    },
    {
      title: "Own the user experience",
      competitorDescription:
        "HelpHero uses predefined tour templates that have limited customization. The experiences may not match your product's design system.",
      flowsDescription:
        "Flows meets you where you are. You can use your own UI components and technologies, giving you the full flexibility of code to build relevant, contextual workflows that fit your product, meet your quality bar, and don't get in the way.",
    },
    {
      title: "Built for developers",
      competitorDescription:
        "HelpHero focuses on non-technical users with a simple visual builder. Developer controls and integrations are limited.",
      flowsDescription:
        "Developers aren't an afterthought in Flows, they are first-class users. We focus on the details that make building with Flows a joy: versioning, environments, APIs, and great documentation, to name a few.",
    },
    {
      title: "Customer support",
      competitorDescription: "HelpHero is a small team with basic support options.",
      flowsDescription:
        "Flows is a small company built and run by a team that cares deeply about your success. Whether you're on the free plan or a paid one, you get fast, thoughtful support directly from the people building the product.",
    },
  ],
  ctaBanner: {
    title: "Switch from HelpHero to Flows today",
    description:
      "Upgrade to a product adoption platform that grows with you. Start building with Flows.",
  },
};
