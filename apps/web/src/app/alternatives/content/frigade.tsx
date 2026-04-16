// cSpell:words Frigade

import { css } from "@flows/styled-system/css";
import { Frigade20, FrigadeFull20 } from "icons";

import { type AlternativeContentType } from "../types";

export const frigadeContent: AlternativeContentType = {
  slug: "frigade",
  seoTitle: "Frigade alternative",
  title: "The framework-agnostic Frigade alternative",
  description:
    "Flows is the Frigade alternative for teams who want a full product adoption platform that works across React, Vue, Angular, and beyond.",
  competitor: {
    name: "Frigade",
    squareLogo: <Frigade20 role="img" aria-label="Frigade logo" />,
    fullLogo: (
      <FrigadeFull20
        role="img"
        aria-label="Frigade logo"
        className={css({
          height: "28px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "Frigade is a developer-first product adoption library that provides React components for building onboarding experiences like tours, checklists, and announcements. It pairs a component library with a dashboard for non-developers to manage content. While the developer experience is good within React, it is tightly coupled to the React ecosystem and offers less depth for non-React teams and product managers who need more flexibility.",
    flowsContent:
      "Flows is a modern alternative to Frigade built for teams across all tech stacks. With Flows, you build workflows using your own components and design system, with full support for React, Vue, Angular, and plain JavaScript. Flows combines a developer-first SDK with a powerful CMS-like dashboard so product managers, designers, and developers can all collaborate without bottlenecks.",
  },
  comparisonTitle: "Flows vs Frigade: Key differences",
  comparisons: [
    {
      title: "Onboarding basics",
      competitor: true,
      flows: true,
      description:
        "Both services support tours, checklists, and in-app guidance using a developer-first approach.",
    },
    {
      title: "Framework support",
      competitor: false,
      flows: true,
      description:
        "Flows supports React, Vue, Angular, and vanilla JavaScript. Frigade is primarily built for React.",
    },
    {
      title: "Embeddable components",
      competitor: true,
      flows: true,
      description:
        "Both support embedding components inside your app. Flows lets you use your own design system components; Frigade provides its own component primitives.",
    },
    {
      title: "Custom components",
      competitor: true,
      flows: true,
      description:
        "Flows allows you to plug in any component from your codebase. Frigade does as well.",
    },
    {
      title: "Free plan",
      competitor: false,
      flows: true,
      description:
        "Flows offers a free plan for up to 250 monthly tracked users. Frigade offers only a live demo.",
    },
    {
      title: "Localization",
      competitor: false,
      flows: true,
      description:
        "Flows supports localization out of the box. Frigade requires passing localized content with variables.",
    },
    {
      title: "Resilient against ad blockers",
      competitor: true,
      flows: true,
      description:
        "Both Flows and Frigade are bundled with your product, making them resilient against ad blockers.",
    },
    {
      title: "Transparent pricing",
      competitor: false,
      flows: true,
      description:
        "Flows uses transparent, usage-based pricing. Frigade does not publish pricing publicly.",
    },
    {
      title: "Surveys",
      competitor: false,
      flows: true,
      description:
        "Flows includes built-in NPS, CSAT, PMF, and custom surveys for collecting user feedback. Frigade does not offer native survey capabilities.",
    },
  ],
  otherDifferences: [
    {
      title: "Any framework, not just React",
      competitorDescription:
        "Frigade is built as a React component library. Teams using Vue, Angular, Svelte, or vanilla JavaScript cannot use it without significant workarounds, if at all.",
      flowsDescription:
        "Flows works across React, Vue, Angular, and plain JavaScript. Whichever framework your team uses, Flows integrates cleanly and lets you build with your own components.",
    },
    {
      title: "Your components, not theirs",
      competitorDescription:
        "Frigade provides a set of headless components that you style and configure through their API. You are working within their component model, which may not map perfectly to your design system.",
      flowsDescription:
        "Flows meets you where you are. You can use your own UI components and technologies, giving you the full flexibility of code to build relevant, contextual workflows that fit your product, meet your quality bar, and don't get in the way.",
    },
    {
      title: "Built for developers and PMs",
      competitorDescription:
        "Frigade is developer-centric. Non-technical teammates can edit content in the dashboard, but complex workflow changes still require code. This can create bottlenecks for product and marketing teams.",
      flowsDescription:
        "Flows is built for both developers and non-developers. Developers own the components and integration; product managers and designers control the workflow logic and content, with no engineering ticket required for every update.",
    },
    {
      title: "Pricing",
      competitorDescription:
        "Frigade does not publish pricing publicly. You need to contact their team to understand what you'll pay as your usage grows.",
      flowsDescription:
        "Flows offers transparent usage-based pricing with no hidden fees. You can start for free with 250 monthly tracked users and upgrade only when you need to. No sales calls, no hidden fees, just a clear pricing model that scales with your usage.",
    },
  ],
  ctaBanner: {
    title: "Switch from Frigade to Flows today",
    description:
      "Build product adoption across any framework with your own components. Start for free with Flows.",
  },
};
