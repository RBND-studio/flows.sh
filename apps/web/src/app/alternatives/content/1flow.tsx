import { css } from "@flows/styled-system/css";
import { OneFlow20, OneFlowFull20 } from "icons";

import { type AlternativeContentType } from "../types";
import { FREE_LIMIT } from "shared";

export const oneFlowContent: AlternativeContentType = {
  slug: "1flow",
  seoTitle: "1Flow alternative",
  title: "The product adoption alternative to 1Flow",
  description:
    "Flows is the 1Flow alternative for product teams who want a dedicated adoption platform, not just a survey and user research tool.",
  competitor: {
    name: "1Flow",
    squareLogo: <OneFlow20 role="img" aria-label="1Flow logo" />,
    fullLogo: (
      <OneFlowFull20
        role="img"
        aria-label="1Flow logo"
        className={css({
          height: "24px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "1Flow is an in-product survey and user research platform that helps teams capture targeted feedback, run NPS and CSAT flows, and segment users based on their responses. It is designed for product managers who want to understand their users through structured research at key moments in the product journey. 1Flow does surveys well. But it is a research and feedback tool - there are no product tours, no onboarding checklists, and no tools for actively guiding users from signup through activation.",
    flowsContent:
      "Flows is a product adoption platform where surveys are one tool in a broader toolkit. You guide users through your product with onboarding tours, checklists, and contextual tooltips, and collect feedback at the moments that matter using native in-app surveys. Everything is built with your own components and design system, so the experience is native to your product rather than an external widget.",
  },
  comparisonTitle: "Flows vs 1Flow: Key differences",
  comparisons: [
    {
      title: "Surveys",
      competitor: true,
      flows: true,
      description:
        "Both services support in-app surveys including NPS, CSAT, and custom questions. 1Flow specializes in research-oriented survey flows, while Flows integrates surveys into a broader adoption workflow.",
    },
    {
      title: "Product tours",
      competitor: false,
      flows: true,
      description:
        "Flows supports full product tours with tooltips, modals, and step-by-step guidance. 1Flow does not offer product tours.",
    },
    {
      title: "Onboarding checklists",
      competitor: false,
      flows: true,
      description:
        "Flows includes onboarding checklists to guide users through key actions. 1Flow does not have this feature.",
    },
    {
      title: "Embeddable components",
      competitor: false,
      flows: true,
      description:
        "With Flows you can embed components directly into your product for a seamless user experience. 1Flow renders surveys using its own widget UI.",
    },
    {
      title: "Custom components",
      competitor: false,
      flows: true,
      description:
        "Flows allows you to use your design system and plug in components directly from your codebase. 1Flow survey styling is limited to its built-in customization options.",
    },
    {
      title: "Workflow logic",
      competitor: "Limited",
      flows: true,
      description:
        "1Flow supports conditional branching within survey flows. Flows supports full workflow logic for multi-step adoption experiences across tours, checklists, and surveys.",
    },
    {
      title: "Free plan",
      competitor: false,
      flows: true,
      description: `Flows offers a free plan with ${FREE_LIMIT} monthly tracked users. 1Flow offers a 14-day free trial but does not have a free tier.`,
    },
    {
      title: "Transparent pricing",
      competitor: true,
      flows: true,
      description: "Both services publish pricing publicly without requiring a sales call.",
    },
    {
      title: "Developer experience",
      competitor: false,
      flows: true,
      description:
        "Flows offers APIs, versioning, environments, and documentation built for developers. 1Flow is optimized for product managers rather than developer workflows.",
    },
  ],
  otherDifferences: [
    {
      title: "Research tool vs adoption platform",
      competitorDescription:
        "1Flow is designed for product research. It gives you a clean way to target users at the right moment and collect structured feedback - post-onboarding, after a feature is used, before a trial expires. These are valuable signals. But 1Flow stops at collecting them. It cannot guide a struggling user through a product tour, surface a contextual tip at the point of friction, or show a checklist to users who have not completed setup.",
      flowsDescription:
        "Flows is designed to drive adoption. It is built to guide users at every stage of their journey - from first login through feature discovery and retention. Surveys in Flows are part of a larger workflow: you can ask a question, branch based on the answer, and immediately guide the user to the right next step rather than waiting for a product manager to review responses and plan a follow-up.",
    },
    {
      title: "Surveys that drive action",
      competitorDescription:
        "In 1Flow, surveys are the end state. Users respond, data goes into your dashboard, and your team acts on it later. The feedback loop runs through your product team - by the time you respond, the struggling user has already moved on or churned.",
      flowsDescription:
        "In Flows, a survey response can immediately trigger the next step. A low NPS score can surface a targeted onboarding flow. A user who responds 'I don't understand this feature' can be routed into a product tour for that exact feature. The feedback loop is closed inside the product, in real time, without waiting for a team review.",
    },
    {
      title: "Own the user experience",
      competitorDescription:
        "1Flow renders its surveys using its own widget components. You can customize colors and some styling, but the survey experience is always rendered by 1Flow's UI layer and may not match the look and feel of your product.",
      flowsDescription:
        "Flows meets you where you are. You can use your own UI components and technologies, giving you full flexibility to build relevant, contextual workflows that fit your product, meet your quality bar, and don't get in the way.",
    },
    {
      title: "Built for developers",
      competitorDescription:
        "1Flow is built for product managers and researchers. The no-code survey builder is the primary interface, and developer tooling is secondary to the research and analytics features.",
      flowsDescription:
        "Developers aren't an afterthought in Flows, they are first-class users. We focus on the details that make building with Flows a joy: versioning, environments, APIs, and great documentation, to name a few.",
    },
  ],
  ctaBanner: {
    title: "Switch from 1Flow to Flows today",
    description:
      "Get a dedicated product adoption platform with surveys built in. Start building with Flows.",
  },
};
