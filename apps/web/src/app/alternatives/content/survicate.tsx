import { css } from "@flows/styled-system/css";
import { Survicate20, SurvicateFull20 } from "icons";

import { type AlternativeContentType } from "../types";

export const survicateContent: AlternativeContentType = {
  slug: "survicate",
  seoTitle: "Survicate alternative",
  title: "The product adoption alternative to Survicate",
  description:
    "Flows is the Survicate alternative for product teams who need more than surveys - full onboarding, tours, and in-app guidance built around your product.",
  competitor: {
    name: "Survicate",
    squareLogo: <Survicate20 role="img" aria-label="Survicate logo" />,
    fullLogo: (
      <SurvicateFull20
        role="img"
        aria-label="Survicate logo"
        className={css({
          height: "24px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "Survicate is a customer feedback and survey platform that lets you run NPS, CSAT, CES, and custom surveys across web, in-app, email, and mobile channels. It excels at collecting user opinions but was not designed for product adoption. It lacks product tours, onboarding flows, and the contextual guidance tools that teams need to actively move users through their product.",
    flowsContent:
      "Flows is a product adoption platform that includes surveys as part of a broader toolkit. With Flows, you guide users through your product with tours, checklists, and contextual tips - and collect feedback at the right moment using built-in NPS, CSAT, and custom surveys. Everything is built using your own components, with full control over targeting and logic.",
  },
  comparisonTitle: "Flows vs Survicate: Key differences",
  comparisons: [
    {
      title: "Surveys",
      competitor: true,
      flows: true,
      description:
        "Both services support in-app surveys. Survicate specializes in surveys across multiple channels, while Flows integrates surveys into a broader adoption workflow.",
    },
    {
      title: "Product tours",
      competitor: false,
      flows: true,
      description:
        "Flows supports full product tours with tooltips, modals, and step-by-step guidance. Survicate does not offer product tours.",
    },
    {
      title: "Onboarding checklists",
      competitor: false,
      flows: true,
      description:
        "Flows includes onboarding checklists to guide users through key actions. Survicate does not have this feature.",
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
        "Flows supports branching workflows and conditional logic for building multi-step adoption experiences.",
    },
    {
      title: "Free plan",
      competitor: true,
      flows: true,
      description:
        "Both services offer a free plan. Flows includes 250 monthly tracked users with full adoption features.",
    },
    {
      title: "Localization",
      competitor: true,
      flows: true,
      description: "Both services support localization for reaching a global audience.",
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
      title: "Surveys vs adoption",
      competitorDescription:
        "Survicate is built around feedback collection. Its strengths are survey templates, multi-channel distribution, and response analytics. If your goal is to understand what users think, Survicate does it well. But it cannot guide users to do anything - there are no tours, no checklists, no contextual nudges.",
      flowsDescription:
        "Flows is built to drive adoption, with surveys as one of many tools in the toolkit. You can collect feedback at the right moment in a user journey - after completing onboarding, after using a feature, or when a user shows signs of churning - and combine that signal with targeted guidance to close the loop.",
    },
    {
      title: "Own the user experience",
      competitorDescription:
        "Survicate renders its surveys using its own UI components, which are embedded via a script. The look and feel is customizable to a degree, but the survey widget can feel generic and detached from your product's design system.",
      flowsDescription:
        "Flows meets you where you are. You can use your own UI components and technologies, giving you full flexibility to build relevant, contextual workflows that fit your product, meet your quality bar, and don't get in the way.",
    },
    {
      title: "Built for developers",
      competitorDescription:
        "Survicate is primarily a tool for customer success and product teams. Developer APIs exist but the platform is optimized for non-technical users creating surveys.",
      flowsDescription:
        "Developers aren't an afterthought in Flows, they are first-class users. We focus on the details that make building with Flows a joy: versioning, environments, APIs, and great documentation, to name a few.",
    },
    {
      title: "Pricing",
      competitorDescription:
        "Survicate's pricing scales with survey responses and features. If you want advanced targeting or integrations, you move to higher tiers. You are paying for a survey tool, not a full adoption platform.",
      flowsDescription:
        "Flows offers transparent usage-based pricing with no hidden fees. You can start for free with 250 monthly tracked users and upgrade only when you need to. No sales calls, no hidden fees, just a clear pricing model that scales with your usage.",
    },
  ],
  ctaBanner: {
    title: "Switch from Survicate to Flows today",
    description:
      "Get surveys plus the full product adoption toolkit in one platform. Start building with Flows.",
  },
};
