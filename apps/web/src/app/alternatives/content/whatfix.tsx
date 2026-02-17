import { css } from "@flows/styled-system/css";
import { WhatFix20, WhatFixFull20 } from "icons";

import { type AlternativeContentType } from "../types";

export const whatfixContent: AlternativeContentType = {
  slug: "whatfix",
  seoTitle: "Whatfix alternative",
  title: "The modern and affordable Whatfix alternative",
  description:
    "Flows is the Whatfix alternative for modern product teams who want powerful adoption tools without enterprise-grade complexity or pricing.",
  competitor: {
    name: "Whatfix",
    squareLogo: <WhatFix20 role="img" aria-label="Whatfix logo" />,
    fullLogo: (
      <WhatFixFull20
        role="img"
        aria-label="Whatfix logo"
        className={css({
          height: "24px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "Whatfix is an enterprise digital adoption platform used by large organizations to guide employees through complex software. While feature-rich, it's built for Fortune 500 IT departments, with opaque pricing, lengthy implementation cycles, and a level of complexity that's overkill for most product teams. Getting started requires a sales process and often professional services.",
    flowsContent:
      "Flows is a modern alternative to Whatfix designed for product teams who need powerful adoption tools without the enterprise overhead. With Flows, you build workflows using your own components and design system, set up in minutes, and pay only for what you use. No sales calls, no implementation consultants, just a focused product adoption platform.",
  },
  comparisonTitle: "Flows vs Whatfix: Key differences",
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
      title: "Free plan",
      competitor: false,
      flows: true,
      description:
        "Flows offers a free plan with 250 monthly tracked users. Whatfix has no free plan or public pricing.",
    },
    {
      title: "Self-serve setup",
      competitor: false,
      flows: true,
      description:
        "Flows lets you sign up and start building in minutes. Whatfix requires a sales process and often involves implementation services.",
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
        "Flows uses transparent, usage-based pricing. Whatfix requires sales engagement and pricing is not publicly available.",
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
      title: "Product teams vs enterprise IT",
      competitorDescription:
        "Whatfix is designed for enterprise IT departments rolling out complex internal software. The platform's complexity reflects this audience, with features and workflows built for large-scale enterprise deployments.",
      flowsDescription:
        "Flows is built for product teams who want to ship great onboarding experiences. It's designed to be fast to set up, easy to iterate on, and powerful enough for any use case.",
    },
    {
      title: "Own the user experience",
      competitorDescription:
        "Whatfix overlays its own UI components on top of your application. The experiences use Whatfix's design language, not yours, and can feel disconnected from your product.",
      flowsDescription:
        "Flows meets you where you are. You can use your own UI components and technologies, giving you the full flexibility of code to build relevant, contextual workflows that fit your product, meet your quality bar, and don't get in the way.",
    },
    {
      title: "Built for developers",
      competitorDescription:
        "Whatfix focuses on non-technical content creators in enterprise environments. Deep programmatic control and modern developer workflows are secondary to the visual builder.",
      flowsDescription:
        "Developers aren't an afterthought in Flows, they are first-class users. We focus on the details that make building with Flows a joy: versioning, environments, APIs, and great documentation, to name a few.",
    },
    {
      title: "Pricing",
      competitorDescription:
        "Whatfix doesn't publish pricing and requires a demo to get started. Enterprise contracts can involve significant costs, often reaching six figures annually for larger deployments.",
      flowsDescription:
        "Flows offers transparent usage-based pricing with no hidden fees. You can start for free with 250 monthly active users and upgrade only when you need to. No sales calls, no hidden fees, just a clear pricing model that scales with your usage.",
    },
  ],
  ctaBanner: {
    title: "Switch from Whatfix to Flows today",
    description:
      "Get powerful product adoption without enterprise overhead. Start building with Flows in minutes.",
  },
};
