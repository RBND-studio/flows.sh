// cspell:words Beamer

import { css } from "@flows/styled-system/css";
import { Beamer20, BeamerFull20 } from "icons";

import { type AlternativeContentType } from "../types";

export const beamerContent: AlternativeContentType = {
  slug: "beamer",
  seoTitle: "Beamer alternative",
  title: "The product adoption alternative to Beamer",
  description:
    "Flows is the Beamer alternative for product teams who want full in-app guidance and onboarding, not just a changelog widget.",
  competitor: {
    name: "Beamer",
    squareLogo: <Beamer20 role="img" aria-label="Beamer logo" />,
    fullLogo: (
      <BeamerFull20
        role="img"
        aria-label="Beamer logo"
        className={css({
          height: "24px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "Beamer is a product changelog and announcement tool that lets you notify users of new features through an in-app news feed widget. It is well-suited for broadcasting updates, but it was not built for product adoption. Beamer does not support product tours, onboarding checklists, or contextual in-app guidance. Teams looking to actively guide users through their product quickly find that Beamer covers only a narrow slice of what they need.",
    flowsContent:
      "Flows is a dedicated product adoption platform built for teams who want to actively guide users, not just announce updates. With Flows, you build onboarding workflows, product tours, checklists, and surveys using your own components and design system. Every feature is designed for adoption - from targeting and branching logic to embeddable components that feel native to your product.",
  },
  comparisonTitle: "Flows vs Beamer: Key differences",
  comparisons: [
    {
      title: "Product tours",
      competitor: false,
      flows: true,
      description:
        "Flows supports full product tours with tooltips, modals, and step-by-step guidance. Beamer is a changelog widget and does not offer product tours.",
    },
    {
      title: "Onboarding checklists",
      competitor: false,
      flows: true,
      description:
        "Flows includes onboarding checklists to guide users through key actions. Beamer does not have this feature.",
    },
    {
      title: "In-app announcements",
      competitor: true,
      flows: true,
      description:
        "Both services support in-app announcements, though Beamer specializes in this area with a news feed widget while Flows provides it as part of a broader adoption toolkit.",
    },
    {
      title: "Embeddable components",
      competitor: false,
      flows: true,
      description:
        "With Flows you can embed components directly into your product for a seamless user experience.",
    },
    {
      title: "Custom components",
      competitor: false,
      flows: true,
      description:
        "Flows allows you to use your design system and plug in components directly from your codebase.",
    },
    {
      title: "Workflow logic",
      competitor: false,
      flows: true,
      description:
        "Flows supports branching workflows and conditional logic. Beamer delivers announcements without step-by-step logic.",
    },
    {
      title: "Surveys",
      competitor: "Limited",
      flows: true,
      description:
        "Flows includes built-in NPS, CSAT, and custom surveys. Beamer offers basic NPS as an add-on feature.",
    },
    {
      title: "Free plan",
      competitor: true,
      flows: true,
      description:
        "Both services offer a free plan. Flows includes 250 monthly tracked users with full adoption features.",
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
      title: "Announcements vs adoption",
      competitorDescription:
        "Beamer is fundamentally an announcement tool. Its core feature is a news feed widget that sits in your app and surfaces changelogs, updates, and promotions. This is valuable for communicating with existing users, but it does nothing to guide new users through your product or drive feature adoption.",
      flowsDescription:
        "Flows is a product adoption platform. It is designed to guide users at every stage of their journey - from first login to advanced feature discovery. Onboarding tours, contextual tooltips, checklists, and surveys all work together to drive meaningful engagement with your product.",
    },
    {
      title: "Own the user experience",
      competitorDescription:
        "Beamer renders its news feed widget using its own UI, which can feel disconnected from your product's design system. Customization is limited to colors and basic styling within Beamer's builder.",
      flowsDescription:
        "Flows meets you where you are. You can use your own UI components and technologies, giving you full flexibility to build relevant, contextual workflows that fit your product, meet your quality bar, and don't get in the way.",
    },
    {
      title: "Built for developers",
      competitorDescription:
        "Beamer is primarily a marketing and product management tool. Developer-facing APIs and programmatic control are minimal.",
      flowsDescription:
        "Developers aren't an afterthought in Flows, they are first-class users. We focus on the details that make building with Flows a joy: versioning, environments, APIs, and great documentation, to name a few.",
    },
    {
      title: "Pricing",
      competitorDescription:
        "Beamer's free plan is limited, and paid plans are geared toward the changelog use case. If you want full adoption tooling, you would need a separate product entirely.",
      flowsDescription:
        "Flows offers transparent usage-based pricing with no hidden fees. You can start for free with 250 monthly tracked users and upgrade only when you need to. No sales calls, no hidden fees, just a clear pricing model that scales with your usage.",
    },
  ],
  ctaBanner: {
    title: "Go beyond changelogs with Flows",
    description:
      "Get a dedicated product adoption platform that guides users through your product, not just announces what's new. Start building with Flows.",
  },
};
