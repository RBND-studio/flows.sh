import { css } from "@flows/styled-system/css";
import { Refiner20, RefinerFull20 } from "icons";

import { type AlternativeContentType } from "../types";

export const refinerContent: AlternativeContentType = {
  slug: "refiner",
  seoTitle: "Refiner alternative",
  title: "The complete product adoption alternative to Refiner",
  description:
    "Flows is the Refiner alternative for SaaS teams who want micro-surveys plus full in-app guidance, onboarding, and product tours in one platform.",
  competitor: {
    name: "Refiner",
    squareLogo: <Refiner20 role="img" aria-label="Refiner logo" />,
    fullLogo: (
      <RefinerFull20
        role="img"
        aria-label="Refiner logo"
        className={css({
          height: "22px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "Refiner is a micro-survey tool built specifically for SaaS companies. It lets you run in-app surveys including PMF, NPS, CSAT, and custom forms with precise targeting based on user properties and behavior. Refiner is focused and developer-friendly, but it is a survey-only tool. It does not offer product tours, onboarding flows, or any active guidance for moving users through your product.",
    flowsContent:
      "Flows is a product adoption platform that covers the full user journey - from onboarding to advanced feature adoption - with surveys built in. Where Refiner only collects feedback, Flows lets you act on it. You build guided workflows using your own components, collect feedback at the right moment, and create experiences that feel native to your product.",
  },
  comparisonTitle: "Flows vs Refiner: Key differences",
  comparisons: [
    {
      title: "Surveys",
      competitor: true,
      flows: true,
      description:
        "Both services support in-app surveys including NPS, CSAT, PMF, and custom surveys. Refiner specializes in surveys, while Flows integrates them into a broader adoption platform.",
    },
    {
      title: "Product tours",
      competitor: false,
      flows: true,
      description:
        "Flows supports full product tours with tooltips, modals, and step-by-step guidance. Refiner does not offer product tours.",
    },
    {
      title: "Onboarding checklists",
      competitor: false,
      flows: true,
      description:
        "Flows includes onboarding checklists to guide users through key actions. Refiner is survey-only.",
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
      competitor: false,
      flows: true,
      description:
        "Flows offers a free plan with 250 monthly tracked users. Refiner offers only a time-limited free trial.",
    },
    {
      title: "Developer experience",
      competitor: true,
      flows: true,
      description:
        "Both services offer good developer experiences. Flows adds versioning, environments, and a broader SDK alongside survey capabilities.",
    },
    {
      title: "Transparent pricing",
      competitor: true,
      flows: true,
      description: "Both services offer transparent, usage-based pricing on their websites.",
    },
  ],
  otherDifferences: [
    {
      title: "Collect feedback and act on it",
      competitorDescription:
        "Refiner is excellent at collecting feedback. You can precisely target surveys, analyze results, and push data to your CRM or analytics stack. But Refiner stops at feedback collection - it cannot help you act on what you learn by guiding users toward the behaviors that matter.",
      flowsDescription:
        "Flows closes the loop. You collect feedback at the right moment in the user journey and immediately follow up with targeted guidance. A user who scores low on NPS can receive a personalized help flow. A user who has not discovered a key feature can be guided to it contextually.",
    },
    {
      title: "Own the user experience",
      competitorDescription:
        "Refiner surveys are embedded via script and rendered using Refiner's UI. Customization options cover colors and basic styling, but the survey widget uses Refiner's component structure rather than your design system.",
      flowsDescription:
        "Flows meets you where you are. You can use your own UI components and technologies, giving you full flexibility to build relevant, contextual workflows that fit your product, meet your quality bar, and don't get in the way.",
    },
    {
      title: "Beyond surveys",
      competitorDescription:
        "Refiner's entire product is built around surveys. If your feedback needs grow beyond surveys into onboarding, adoption, or in-app guidance, you would need to bring in a separate tool and manage two integrations.",
      flowsDescription:
        "Flows is one platform for the entire adoption lifecycle. Start with onboarding tours, add a checklist for feature discovery, trigger a PMF survey at the right moment, and follow up with targeted guidance - all from a single integration and admin interface.",
    },
    {
      title: "Pricing",
      competitorDescription:
        "Refiner's pricing is usage-based, you pay for active users. Since it only solves one problem, you often need to combine it with another tool for product adoption.",
      flowsDescription:
        "Flows offers transparent usage-based pricing with no hidden fees. You can start for free with 250 monthly tracked users and upgrade only when you need to. No sales calls, no hidden fees, just a clear pricing model that scales with your usage.",
    },
  ],
  ctaBanner: {
    title: "Switch from Refiner to Flows today",
    description:
      "Get surveys plus the full product adoption toolkit in one platform. Start building with Flows.",
  },
};
