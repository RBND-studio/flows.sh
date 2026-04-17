import { type AlternativeContentType } from "../types";
import { ClickLearn20, ClickLearnFull20 } from "icons";
import { css } from "@flows/styled-system/css";

export const clicklearnContent: AlternativeContentType = {
  slug: "clicklearn",
  seoTitle: "ClickLearn alternative",
  title: "The modern and flexible ClickLearn alternative",
  description:
    "Flows is the ClickLearn alternative for product teams who want powerful in-app guidance without enterprise complexity or recording-based workflows.",
  competitor: {
    name: "ClickLearn",
    squareLogo: <ClickLearn20 role="img" aria-label="ClickLearn logo" />,
    fullLogo: (
      <ClickLearnFull20
        role="img"
        aria-label="ClickLearn logo"
        className={css({
          height: "28px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "ClickLearn is an enterprise digital adoption platform that generates learning content and documentation from recorded software interactions. It targets large organizations deploying ERP and CRM systems like SAP, Microsoft Dynamics, and Salesforce.",
    flowsContent:
      "Flows is a modern alternative to ClickLearn built for product teams who want to ship great in-app experiences without enterprise overhead. You build workflows using your own components and design system, integrate in minutes, and pay only for what you use. No recording sessions, no enterprise contracts - just a clear and flexible tool for building in-app guidance.",
  },
  comparisonTitle: "Flows vs ClickLearn: Key differences",
  comparisons: [
    {
      title: "Onboarding basics",
      competitor: true,
      flows: true,
      description:
        "Both services support in-app guided walkthroughs and contextual tooltips for user onboarding.",
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
        "Flows offers a free plan with 250 monthly tracked users. ClickLearn requires a demo and enterprise contract.",
    },
    {
      title: "Self-serve setup",
      competitor: false,
      flows: true,
      description:
        "Flows lets you sign up, integrate, and start building in minutes. ClickLearn requires a sales process to get started.",
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
        "Flows includes built-in NPS, CSAT, PMF, and custom surveys for collecting user feedback. ClickLearn does not offer native survey capabilities.",
    },
  ],
  otherDifferences: [
    {
      title: "Product teams vs enterprise training",
      competitorDescription:
        "ClickLearn is built for enterprise training and change management teams deploying large ERP and CRM systems. The platform's recording-based workflow and content generation features reflect this focus on producing documentation and e-learning for internal software rollouts.",
      flowsDescription:
        "Flows is built for product teams who want to guide their own users. Whether it's onboarding, feature adoption, or education, Flows helps you build experiences that are part of your product rather than layered on top of it.",
    },
    {
      title: "Own the user experience",
      competitorDescription:
        "ClickLearn generates guided content from recorded interactions and overlays its own UI on top of your application. The experience uses their components, not yours, and can feel disconnected from your product.",
      flowsDescription:
        "Flows meets you where you are. You can use your own UI components and technologies, giving you the full flexibility of code to build relevant, contextual workflows that fit your product, meet your quality bar, and don't get in the way.",
    },
    {
      title: "Built for developers",
      competitorDescription:
        "ClickLearn focuses on non-technical content creators and training administrators. Developer-facing APIs and programmatic control are secondary to the recording and publishing workflow.",
      flowsDescription:
        "Developers aren't an afterthought in Flows, they are first-class users. We focus on the details that make building with Flows a joy: versioning, environments, APIs, and great documentation, to name a few.",
    },
    {
      title: "Pricing",
      competitorDescription:
        "ClickLearn has a steep pricing model charging for users and editors, with multiple tiers and add-ons.",
      flowsDescription:
        "Flows offers transparent usage-based pricing with no hidden fees. You can start for free with 250 monthly tracked users and upgrade only when you need to. No sales calls, no hidden fees, just a clear pricing model that scales with your usage.",
    },
  ],
  ctaBanner: {
    title: "Switch from ClickLearn to Flows today",
    description:
      "Get powerful in-app adoption without enterprise complexity. Start building with Flows in minutes.",
  },
};
