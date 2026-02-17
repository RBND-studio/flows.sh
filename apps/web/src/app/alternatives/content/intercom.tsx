import { css } from "@flows/styled-system/css";
import { Intercom20, IntercomFull20 } from "icons";

import { type AlternativeContentType } from "../types";

export const intercomContent: AlternativeContentType = {
  slug: "intercom",
  seoTitle: "Intercom Product Tours alternative",
  title: "The purpose-built Intercom Product Tours alternative",
  description:
    "Flows is the Intercom Product Tours alternative for teams who want dedicated onboarding tools without paying for an entire messaging platform.",
  competitor: {
    name: "Intercom",
    squareLogo: <Intercom20 role="img" aria-label="Intercom logo" />,
    fullLogo: (
      <IntercomFull20
        role="img"
        aria-label="Intercom logo"
        className={css({
          height: "24px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "Intercom Product Tours is an add-on to the Intercom customer messaging platform. While it benefits from tight integration with Intercom's messenger and chatbot, it's not available as a standalone product. The tour builder is relatively basic compared to dedicated onboarding tools, and adding product tours means paying on top of an already costly Intercom subscription.",
    flowsContent:
      "Flows is a modern alternative to Intercom Product Tours built for teams who want a dedicated product adoption tool. With Flows, you build workflows that live inside your product using your own components and design system. You don't need to buy into an entire messaging platform just to guide users through your product.",
  },
  comparisonTitle: "Flows vs Intercom Product Tours: Key differences",
  comparisons: [
    {
      title: "Onboarding basics",
      competitor: true,
      flows: true,
      description:
        "Both services support tooltips, modals, and guided product tours for user onboarding.",
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
      title: "Standalone product",
      competitor: false,
      flows: true,
      description:
        "Flows is a standalone product adoption platform. Intercom Product Tours requires an Intercom subscription.",
    },
    {
      title: "Free plan",
      competitor: false,
      flows: true,
      description:
        "Flows offers a free plan with 250 monthly tracked users. Intercom Product Tours is a paid add-on.",
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
      competitor: false,
      flows: true,
      description:
        "Flows uses transparent, usage-based pricing. Intercom pricing is complex with per-seat and resolution-based charges on top of add-on costs.",
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
      title: "Dedicated vs add-on",
      competitorDescription:
        "Intercom Product Tours is a feature within a broader messaging platform. It gets attention proportional to its role as an add-on, which means slower feature development and less depth compared to dedicated tools.",
      flowsDescription:
        "Flows is built from the ground up for product adoption. Every feature, API, and design decision is focused on helping you build better in-app experiences.",
    },
    {
      title: "Own the user experience",
      competitorDescription:
        "Intercom Product Tours uses Intercom's visual style and templates. Tours are recognizable as Intercom components, which can feel disconnected from your product's design.",
      flowsDescription:
        "Flows meets you where you are. You can use your own UI components and technologies, giving you the full flexibility of code to build relevant, contextual workflows that fit your product, meet your quality bar, and don't get in the way.",
    },
    {
      title: "Built for developers",
      competitorDescription:
        "Intercom focuses on non-technical users and customer support teams. The tour builder is basic and offers limited programmatic control.",
      flowsDescription:
        "Developers aren't an afterthought in Flows, they are first-class users. We focus on the details that make building with Flows a joy: versioning, environments, APIs, and great documentation, to name a few.",
    },
    {
      title: "Pricing",
      competitorDescription:
        "Intercom Product Tours is an add-on that costs extra on top of the base Intercom subscription. Combined costs can be significant, especially as your team and user base grow.",
      flowsDescription:
        "Flows offers transparent usage-based pricing with no hidden fees. You can start for free with 250 monthly active users and upgrade only when you need to. No sales calls, no hidden fees, just a clear pricing model that scales with your usage.",
    },
  ],
  ctaBanner: {
    title: "Switch from Intercom Product Tours to Flows today",
    description:
      "Get a dedicated product adoption tool without paying for an entire messaging platform. Start building with Flows.",
  },
};
