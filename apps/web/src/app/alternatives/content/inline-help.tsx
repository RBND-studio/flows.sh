// cSpell:words Inlinehelp

import { css } from "@flows/styled-system/css";
import { InlineHelp20, InlineHelpFull20 } from "icons";

import { type AlternativeContentType } from "../types";

export const inlineHelpContent: AlternativeContentType = {
  slug: "inline-help",
  seoTitle: "Inline Help alternative",
  title: "The developer-friendly Inline Help alternative",
  description:
    "Flows is the Inline Help alternative for teams who want proactive product adoption workflows, not just AI-powered support widgets.",
  competitor: {
    name: "Inline Help",
    squareLogo: <InlineHelp20 role="img" aria-label="Inline Help logo" />,
    fullLogo: (
      <InlineHelpFull20
        role="img"
        aria-label="Inline Help logo"
        className={css({
          height: "30px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "Inline Help is an AI-powered support platform that surfaces contextual help inside your product. It uses your existing documentation to power tooltips, a chatbot, and a help widget, letting users ask questions and get answers in context. While this reduces support tickets, the approach is reactive: users still need to seek out help rather than being proactively guided.",
    flowsContent:
      "Flows is a modern alternative to Inline Help built for teams who want proactive product adoption, not just reactive AI support. With Flows, you build structured workflows that guide users through your product using your own components and design system, triggered at the right moment, for the right user, without waiting for them to ask for help.",
  },
  comparisonTitle: "Flows vs Inline Help: Key differences",
  comparisons: [
    {
      title: "Onboarding basics",
      competitor: true,
      flows: true,
      description:
        "Both services support in-app guidance, although Flows focuses on proactive workflows while Inline Help focuses on reactive AI support.",
    },
    {
      title: "Proactive guidance",
      competitor: false,
      flows: true,
      description:
        "Flows triggers workflows automatically based on user behavior and targeting. Inline Help relies on users seeking help through its widget.",
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
      title: "Workflow logic",
      competitor: false,
      flows: true,
      description:
        "Flows supports full branching workflows and multi-step adoption journeys. Inline Help focuses on answering single questions.",
    },
    {
      title: "Free plan",
      competitor: false,
      flows: true,
      description:
        "Flows offers a free plan with 250 monthly tracked users. Inline Help offers only a time-limited trial.",
    },
    {
      title: "Localization",
      competitor: true,
      flows: true,
      description:
        "Both services support multiple languages, allowing you to serve a global audience.",
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
    {
      title: "Surveys",
      competitor: false,
      flows: true,
      description:
        "Flows includes built-in NPS, CSAT, PMF, and custom surveys for collecting user feedback. Inline Help focuses on AI-powered support and does not include survey functionality.",
    },
  ],
  otherDifferences: [
    {
      title: "Proactive vs reactive",
      competitorDescription:
        "Inline Help is built around reactive support: users open the widget, ask a question, and the AI responds. This works well for reducing support tickets, but leaves a gap in proactive onboarding and feature adoption.",
      flowsDescription:
        "Flows is designed for proactive product adoption. Workflows trigger automatically based on user behavior, segment, and context, guiding users at the right moment without waiting for them to ask for help.",
    },
    {
      title: "Own the user experience",
      competitorDescription:
        "Inline Help surfaces help through its own widget and tooltip components. Customization is limited, and the experience is distinctly Inline Help's, not yours.",
      flowsDescription:
        "Flows meets you where you are. You can use your own UI components and technologies, giving you the full flexibility of code to build relevant, contextual workflows that fit your product, meet your quality bar, and don't get in the way.",
    },
    {
      title: "Built for developers",
      competitorDescription:
        "Inline Help is designed for non-technical teams to deploy AI support without engineering effort. Developer controls and programmatic workflows are limited.",
      flowsDescription:
        "Developers aren't an afterthought in Flows, they are first-class users. We focus on the details that make building with Flows a joy: versioning, environments, APIs, and great documentation, to name a few.",
    },
    {
      title: "Customer support",
      competitorDescription:
        "Inline Help offers support through their platform with tiered response times on paid plans.",
      flowsDescription:
        "Flows is a small company built and run by a team that cares deeply about your success. Whether you're on the free plan or a paid one, you get fast, thoughtful support directly from the people building the product.",
    },
  ],
  ctaBanner: {
    title: "Switch from Inline Help to Flows today",
    description:
      "Move from reactive support widgets to proactive product adoption. Start building with Flows.",
  },
};
