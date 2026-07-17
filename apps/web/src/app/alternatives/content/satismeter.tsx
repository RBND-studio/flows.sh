// cspell:words satismeter

import { css } from "@flows/styled-system/css";
import { Satismeter20, SatismeterFull20 } from "icons";

import { type AlternativeContentType } from "../types";
import { FREE_LIMIT } from "shared";

export const satismeterContent: AlternativeContentType = {
  slug: "satismeter",
  seoTitle: "Satismeter alternative",
  title: "The product adoption alternative to Satismeter",
  description:
    "Flows is the Satismeter alternative for product teams who want more than NPS scores - a full adoption platform that drives the behaviors behind your satisfaction metrics.",
  competitor: {
    name: "Satismeter",
    squareLogo: <Satismeter20 role="img" aria-label="Satismeter logo" />,
    fullLogo: (
      <SatismeterFull20
        role="img"
        aria-label="Satismeter logo"
        className={css({
          height: "28px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "Satismeter is a customer satisfaction platform focused on NPS, CSAT, and CES measurement. It excels at running automated survey campaigns, tracking loyalty trends over time, and segmenting satisfaction data by user cohort or behavior. For teams that need to monitor how happy their customers are and report on it reliably, Satismeter does the job well. But it stops at measurement - Satismeter has no product tours, no onboarding flows, and no tools to address the reasons behind low satisfaction scores.",
    flowsContent:
      "Flows includes NPS, CSAT, and custom surveys as part of a complete product adoption platform. You can measure satisfaction and act on the signal immediately - guiding low-activation users into an onboarding flow, showing contextual tips to users who score poorly on specific features, or triggering a product tour for users who have not discovered the value that drives retention. Surveys are one tool in a toolkit designed to improve the metrics you are measuring.",
  },
  comparisonTitle: "Flows vs Satismeter: Key differences",
  comparisons: [
    {
      title: "NPS and CSAT surveys",
      competitor: true,
      flows: true,
      description:
        "Both services support NPS, CSAT, and custom survey types. Satismeter specializes in customer satisfaction measurement and tracking, while Flows integrates surveys into a broader adoption workflow.",
    },
    {
      title: "Product tours",
      competitor: false,
      flows: true,
      description:
        "Flows supports full product tours with tooltips, modals, and step-by-step guidance. Satismeter does not offer product tours.",
    },
    {
      title: "Onboarding checklists",
      competitor: false,
      flows: true,
      description:
        "Flows includes onboarding checklists to guide users through key actions. Satismeter does not have this feature.",
    },
    {
      title: "Embeddable components",
      competitor: false,
      flows: true,
      description:
        "With Flows you can embed components directly into your product for a seamless user experience. Satismeter renders surveys using its own widget layer.",
    },
    {
      title: "Custom components",
      competitor: false,
      flows: true,
      description:
        "Flows allows you to use your design system and plug in components directly from your codebase. Satismeter survey styling is limited to its built-in customization options.",
    },
    {
      title: "Workflow logic",
      competitor: false,
      flows: true,
      description:
        "Flows supports branching workflows and conditional logic for building multi-step adoption experiences. Satismeter does not offer workflow logic beyond basic survey branching.",
    },
    {
      title: "Free plan",
      competitor: true,
      flows: true,
      description: `Satismeter offers free plan with 25 responses monthly. Flows includes a free plan with ${FREE_LIMIT} monthly tracked users and full adoption features.`,
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
        "Flows offers APIs, versioning, environments, and documentation built for developers. Satismeter is optimized for customer success and product teams rather than developer workflows.",
    },
  ],
  otherDifferences: [
    {
      title: "Measuring satisfaction vs driving it",
      competitorDescription:
        "Satismeter is built around a specific goal: track how satisfied your customers are over time. It does this well - automated NPS cadences, trend reporting, and cohort analysis give customer success teams a reliable picture of loyalty. But Satismeter only measures the outcome. It cannot act on a low score, guide a struggling user to the value that drives satisfaction, or close the gap between what users want and what they discover in your product.",
      flowsDescription:
        "Flows is built to drive the behaviors that improve satisfaction metrics. When you understand what makes your highest-NPS users successful - which features they use, which steps they completed during onboarding - you can build adoption flows that guide everyone else there. Surveys in Flows collect the signal; the rest of the toolkit acts on it.",
    },
    {
      title: "Act on feedback in real time",
      competitorDescription:
        "In Satismeter, a low NPS response generates a data point in your dashboard. Acting on it requires your team to review responses, segment users, plan a follow-up, and coordinate a response - usually days or weeks later. By then, the dissatisfied user has often already made a decision.",
      flowsDescription:
        "In Flows, a survey response can immediately trigger the next step without waiting for a team review. A user who rates onboarding poorly can be routed into a guided tour. A user who scores low on feature satisfaction can see a contextual tooltip the next time they use that feature. The gap between insight and action closes from weeks to seconds.",
    },
    {
      title: "Own the user experience",
      competitorDescription:
        "Satismeter renders its survey widget using its own UI components. Customization options let you adjust branding, but the survey experience is delivered by Satismeter's layer rather than your product's design system, and it can feel detached from the rest of the in-product experience.",
      flowsDescription:
        "Flows meets you where you are. You can use your own UI components and technologies, giving you full flexibility to build relevant, contextual workflows that fit your product, meet your quality bar, and don't get in the way.",
    },
    {
      title: "Single metric vs full adoption toolkit",
      competitorDescription:
        "Satismeter is purpose-built for one thing: satisfaction measurement. That focus makes it clean and simple to deploy, but it also means you need other tools for everything else - product tours, onboarding flows, feature announcements, and usage guidance. Each new tool adds another integration, another vendor, and another dataset to reconcile.",
      flowsDescription:
        "Flows covers the full adoption lifecycle in one platform. NPS and CSAT are there when you need them, alongside tours, checklists, tooltips, and modals. Everything runs on one platform with one targeting system and one reporting view, so you can see how adoption activities affect satisfaction scores without cross-referencing multiple tools.",
    },
  ],
  ctaBanner: {
    title: "Switch from Satismeter to Flows today",
    description:
      "Collect satisfaction data and drive the adoption that improves it, all in one platform. Start building with Flows.",
  },
};
