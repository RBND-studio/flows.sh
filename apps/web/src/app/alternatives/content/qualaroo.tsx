// cspell:words qualaroo

import { css } from "@flows/styled-system/css";
import { Qualaroo20, QualarooFull20 } from "icons";

import { type AlternativeContentType } from "../types";
import { FREE_LIMIT } from "shared";

export const qualarooContent: AlternativeContentType = {
  slug: "qualaroo",
  seoTitle: "Qualaroo alternative",
  title: "The product adoption alternative to Qualaroo",
  description:
    "Flows is the Qualaroo alternative for product teams who need more than targeted surveys - a full adoption platform with tours, checklists, and in-app guidance.",
  competitor: {
    name: "Qualaroo",
    squareLogo: <Qualaroo20 role="img" aria-label="Qualaroo logo" />,
    fullLogo: (
      <QualarooFull20
        role="img"
        aria-label="Qualaroo logo"
        className={css({
          height: "28px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "Qualaroo is a customer insights platform that uses targeted micro-surveys, called Nudges, to collect feedback from specific user segments at specific moments in your product. It excels at reaching users contextually with short, focused questions and processing the responses for sentiment analysis. Qualaroo is a mature and capable tool for understanding what users think. But it was built for feedback collection, not product adoption - there are no product tours, no onboarding checklists, and no way to actively guide users through your product.",
    flowsContent:
      "Flows gives you surveys as part of a full product adoption platform. You can collect targeted feedback at any point in the user journey while also running onboarding flows, product tours, and checklists to guide users toward key actions. Everything is built with your own components and design system, so the experience feels native to your product rather than an overlaid widget.",
  },
  comparisonTitle: "Flows vs Qualaroo: Key differences",
  comparisons: [
    {
      title: "Surveys",
      competitor: true,
      flows: true,
      description:
        "Both services support targeted in-app surveys. Qualaroo specializes in micro-survey Nudges with sentiment analysis, while Flows integrates surveys into a broader adoption workflow.",
    },
    {
      title: "Product tours",
      competitor: false,
      flows: true,
      description:
        "Flows supports full product tours with tooltips, modals, and step-by-step guidance. Qualaroo does not offer product tours.",
    },
    {
      title: "Onboarding checklists",
      competitor: false,
      flows: true,
      description:
        "Flows includes onboarding checklists to guide users through key actions. Qualaroo does not have this feature.",
    },
    {
      title: "Embeddable components",
      competitor: false,
      flows: true,
      description:
        "With Flows you can embed components directly into your product for a seamless user experience. Qualaroo renders its Nudge surveys using its own widget UI.",
    },
    {
      title: "Custom components",
      competitor: false,
      flows: true,
      description:
        "Flows allows you to use your design system and plug in components directly from your codebase. Qualaroo survey styling is limited to its built-in customization options.",
    },
    {
      title: "Workflow logic",
      competitor: false,
      flows: true,
      description:
        "Flows supports branching workflows and conditional logic for building multi-step adoption experiences. Qualaroo supports basic survey branching but not full workflow logic.",
    },
    {
      title: "Free plan",
      competitor: true,
      flows: true,
      description: `Qualaroo offers a free trial with 50 monthly responses. Flows includes a free plan with ${FREE_LIMIT} monthly tracked users and full adoption features.`,
    },
    {
      title: "Localization",
      competitor: true,
      flows: true,
      description: "Both services support localization for reaching a global audience.",
    },
    {
      title: "Resilient against ad blockers",
      competitor: false,
      flows: true,
      description:
        "Qualaroo loads via an external script that many ad blockers target. Flows runs as part of your application and is not affected by ad blockers.",
    },
  ],
  otherDifferences: [
    {
      title: "Surveys vs adoption",
      competitorDescription:
        "Qualaroo is built for research and feedback. Its Nudge surveys are well-designed for capturing opinion data at specific moments - post-signup, after a key action, before a user churns. The sentiment analysis and reporting features help teams interpret what users say. But Qualaroo can only ask questions. It cannot guide users to do anything.",
      flowsDescription:
        "Flows is built to drive adoption, with surveys as one tool in the toolkit. You can collect targeted feedback at any stage of the user journey and immediately act on that signal - routing low-activation users into an onboarding flow, showing a contextual tip when a confused user responds, or triggering a checklist for users who skip the setup wizard. Surveys and guidance work together instead of existing in separate tools.",
    },
    {
      title: "Own the user experience",
      competitorDescription:
        "Qualaroo renders its Nudge widget using its own UI components, typically appearing as a small popup in the corner of the screen. Customization options let you adjust colors and fonts, but the widget look and feel is always recognizably a third-party survey tool - it does not adapt to your design system.",
      flowsDescription:
        "Flows meets you where you are. You can use your own UI components and technologies, giving you full flexibility to build relevant, contextual workflows that fit your product, meet your quality bar, and don't get in the way.",
    },
    {
      title: "Built for developers",
      competitorDescription:
        "Qualaroo is primarily a tool for product managers and customer success teams. Developer integrations exist, but the platform is designed around non-technical users building and targeting surveys through the Qualaroo interface.",
      flowsDescription:
        "Developers aren't an afterthought in Flows, they are first-class users. We focus on the details that make building with Flows a joy: versioning, environments, APIs, and great documentation, to name a few.",
    },
    {
      title: "Pricing",
      competitorDescription:
        "Qualaroo's pricing scales with survey responses and the features you need. Higher-tier plans unlock advanced targeting, integrations, and sentiment analysis. You are paying for a specialized feedback collection tool, not a platform that also covers onboarding and adoption.",
      flowsDescription: `Flows offers transparent usage-based pricing with no hidden fees. You can start for free with ${FREE_LIMIT} monthly tracked users and upgrade only when you need to. No sales calls, no hidden fees, just a clear pricing model that scales with your usage.`,
    },
  ],
  ctaBanner: {
    title: "Switch from Qualaroo to Flows today",
    description:
      "Get surveys plus the full product adoption toolkit in one platform. Start building with Flows.",
  },
};
