import { css } from "@flows/styled-system/css";
import { Sprig20, SprigFull20 } from "icons";

import { type AlternativeContentType } from "../types";

export const sprigContent: AlternativeContentType = {
  slug: "sprig",
  seoTitle: "Sprig alternative",
  title: "The purpose-built Sprig alternative for product adoption",
  description:
    "Flows is the Sprig alternative for product teams who want a dedicated adoption platform instead of onboarding bolted onto a research and insights tool.",
  competitor: {
    name: "Sprig",
    squareLogo: <Sprig20 role="img" aria-label="Sprig logo" />,
    fullLogo: (
      <SprigFull20
        role="img"
        aria-label="Sprig logo"
        className={css({
          height: "24px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "Sprig is a product insights platform combining in-app surveys, AI-powered analysis, and session replays to help teams understand user behavior. While Sprig includes survey and feedback tools, it is primarily a research and insights platform. Its in-app guidance capabilities are limited compared to dedicated adoption tools, and teams serious about onboarding often find it lacks the workflow depth and customization they need.",
    flowsContent:
      "Flows is a dedicated product adoption platform built for teams who want to actively guide users through their product. With Flows, you build onboarding workflows, product tours, checklists, and surveys using your own components and design system. Every feature is designed for adoption - from targeting and branching logic to embeddable components that feel native to your product.",
  },
  comparisonTitle: "Flows vs Sprig: Key differences",
  comparisons: [
    {
      title: "Surveys",
      competitor: true,
      flows: true,
      description:
        "Both services support in-app surveys. Sprig specializes in research-oriented surveys and AI analysis, while Flows integrates surveys into a broader adoption workflow.",
    },
    {
      title: "Product tours",
      competitor: false,
      flows: true,
      description:
        "Flows supports full product tours with tooltips, modals, and step-by-step guidance. Sprig does not offer product tours.",
    },
    {
      title: "Onboarding checklists",
      competitor: false,
      flows: true,
      description:
        "Flows includes onboarding checklists to guide users through key actions. Sprig does not have this feature.",
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
        "Flows supports branching workflows and conditional logic. Sprig surveys follow simpler branching structures.",
    },
    {
      title: "Free plan",
      competitor: true,
      flows: true,
      description: "Both services offer free plans.",
    },
    {
      title: "Transparent pricing",
      competitor: false,
      flows: true,
      description:
        "Flows uses transparent, usage-based pricing. Sprig requires contacting sales for pricing.",
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
      title: "Research tool vs adoption platform",
      competitorDescription:
        "Sprig is built for product research teams. Its core strengths are AI-powered analysis of survey responses, session replays, and user interviews. These are valuable for understanding your users, but they do not guide users toward the behaviors that drive retention and revenue.",
      flowsDescription:
        "Flows is built to drive adoption. It is designed to guide users at every stage of their journey - from first login to advanced feature discovery. Onboarding tours, contextual tooltips, checklists, and surveys all work together to drive meaningful engagement with your product.",
    },
    {
      title: "Own the user experience",
      competitorDescription:
        "Sprig uses its own UI components for surveys and in-app messages. Customization is limited to their builder, and experiences may feel disconnected from your product's design system.",
      flowsDescription:
        "Flows meets you where you are. You can use your own UI components and technologies, giving you full flexibility to build relevant, contextual workflows that fit your product, meet your quality bar, and don't get in the way.",
    },
    {
      title: "Built for developers",
      competitorDescription:
        "Sprig focuses on product managers and researchers. Developer workflows, versioning, and programmatic control are secondary to the research and analysis features.",
      flowsDescription:
        "Developers aren't an afterthought in Flows, they are first-class users. We focus on the details that make building with Flows a joy: versioning, environments, APIs, and great documentation, to name a few.",
    },
    {
      title: "Pricing",
      competitorDescription:
        "Sprig bundles insights, replays, and surveys into one platform with enterprise pricing that requires a sales conversation. You pay for a full research suite even if you primarily need in-app surveys.",
      flowsDescription:
        "Flows offers transparent usage-based pricing with no hidden fees. You can start for free with 250 monthly tracked users and upgrade only when you need to. No sales calls, no hidden fees, just a clear pricing model that scales with your usage.",
    },
  ],
  ctaBanner: {
    title: "Switch from Sprig to Flows today",
    description:
      "Get a dedicated product adoption platform instead of a research tool. Start building with Flows.",
  },
};
