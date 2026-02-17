import { css } from "@flows/styled-system/css";
import { Hopscotch20, HopscotchFull20 } from "icons";

import { type AlternativeContentType } from "../types";

export const hopscotchContent: AlternativeContentType = {
  slug: "hopscotch",
  seoTitle: "Hopscotch alternative",
  title: "The developer-friendly Hopscotch alternative",
  description:
    "Flows is the Hopscotch alternative for teams who want full control over their onboarding experience with a developer-first approach.",
  competitor: {
    name: "Hopscotch",
    squareLogo: <Hopscotch20 role="img" aria-label="Hopscotch logo" />,
    fullLogo: (
      <HopscotchFull20
        role="img"
        aria-label="Hopscotch logo"
        className={css({
          height: "24px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "Hopscotch is a no-code platform for creating interactive product tours and in-app messaging. It offers tour building, user segmentation, and integrations with analytics platforms. While it covers core onboarding use cases, customization is limited to their builder and predefined components, and teams that need deeper control over UI and behavior may find themselves constrained.",
    flowsContent:
      "Flows is a modern alternative to Hopscotch built for teams who want to own their user experience. With Flows, you build workflows using your own components and design system, combining the flexibility of code with the ease of a headless CMS. Product managers, designers, and developers share a platform that gives them each what they need.",
  },
  comparisonTitle: "Flows vs Hopscotch: Key differences",
  comparisons: [
    {
      title: "Onboarding basics",
      competitor: true,
      flows: true,
      description:
        "Both services have onboarding features like tooltips, modals, and product tours, although Flows focuses on offering full control over the user experience.",
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
        "Hopscotch offers styling customization within their builder. Flows gives you full control over both UI and logic.",
    },
    {
      title: "Free plan",
      competitor: false,
      flows: true,
      description:
        "Flows offers a free plan with 250 monthly tracked users. Hopscotch offers only a time-limited trial.",
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
        "Hopscotch uses predefined UI components for tours and messages. While you can adjust styling, the experiences are built within their builder and may not fully match your product's design system.",
      flowsDescription:
        "Flows meets you where you are. You can use your own UI components and technologies, giving you the full flexibility of code to build relevant, contextual workflows that fit your product, meet your quality bar, and don't get in the way.",
    },
    {
      title: "Built for developers",
      competitorDescription:
        "Hopscotch focuses on providing a no-code solution. While it offers a browser SDK, deeper integration and programmatic control are limited compared to developer-first platforms.",
      flowsDescription:
        "Developers aren't an afterthought in Flows, they are first-class users. We focus on the details that make building with Flows a joy: versioning, environments, APIs, and great documentation, to name a few.",
    },
    {
      title: "Customer support",
      competitorDescription:
        "Hopscotch offers support through their platform, with dedicated support on higher-tier plans.",
      flowsDescription:
        "Flows is a small company built and run by a team that cares deeply about your success. Whether you're on the free plan or a paid one, you get fast, thoughtful support directly from the people building the product.",
    },
    {
      title: "Pricing",
      competitorDescription:
        "Hopscotch pricing starts at $99/month and scales with monthly active users. There is no free plan, only a trial.",
      flowsDescription:
        "Flows offers transparent usage-based pricing with no hidden fees. You can start for free with 250 monthly active users and upgrade only when you need to. No sales calls, no hidden fees, just a clear pricing model that scales with your usage.",
    },
  ],
  ctaBanner: {
    title: "Switch from Hopscotch to Flows today",
    description:
      "Build product adoption experiences you fully control. Start building with Flows for free.",
  },
};
