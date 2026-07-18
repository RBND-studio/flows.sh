// cspell:words wootric

import { Flex } from "@flows/styled-system/jsx";
import { Text } from "ui";
import { Wootric20 } from "icons";

import { type AlternativeContentType } from "../types";
import { FREE_LIMIT } from "shared";

export const wootricContent: AlternativeContentType = {
  slug: "wootric",
  seoTitle: "Wootric alternative",
  title: "The product adoption alternative to Wootric",
  description:
    "Flows is the Wootric alternative for product teams who need more than NPS surveys - a full adoption platform with tours, checklists, and in-app guidance.",
  competitor: {
    name: "Wootric",
    squareLogo: <Wootric20 role="img" aria-label="Wootric logo" />,
    fullLogo: (
      <Flex align="center" gap="space8">
        <Wootric20 role="img" aria-label="Wootric logo" />
        <Text variant="titleL">Wootric</Text>
      </Flex>
    ),
  },
  summary: {
    competitorContent:
      "Wootric, now part of InMoment, is a customer experience platform built around NPS, CSAT, and CES measurement. It excels at collecting targeted feedback at critical journey points, surfacing sentiment trends through AI analysis, and routing insights to customer success, support, and product teams. For organizations that need to track satisfaction at scale and report on loyalty metrics, Wootric is a capable tool. But it was built for feedback collection, not product adoption - there are no product tours, no onboarding checklists, and no tools to close the gap between what users say and what they actually do in your product.",
    flowsContent:
      "Flows gives you NPS, CSAT, and custom surveys as part of a complete product adoption platform. You can collect targeted feedback at any point in the user journey and act on it immediately - guiding low-activation users into an onboarding flow, surfacing contextual tips when users respond negatively, or triggering a product tour for users who have not discovered the value behind your highest satisfaction scores. Everything is built with your own components and design system, so the experience feels native to your product.",
  },
  comparisonTitle: "Flows vs Wootric: Key differences",
  comparisons: [
    {
      title: "NPS and CSAT surveys",
      competitor: true,
      flows: true,
      description:
        "Both services support targeted in-app NPS, CSAT, and custom survey types. Wootric specializes in satisfaction measurement with AI-powered analysis, while Flows integrates surveys into a broader adoption workflow.",
    },
    {
      title: "Product tours",
      competitor: false,
      flows: true,
      description:
        "Flows supports full product tours with tooltips, modals, and step-by-step guidance. Wootric does not offer product tours.",
    },
    {
      title: "Onboarding checklists",
      competitor: false,
      flows: true,
      description:
        "Flows includes onboarding checklists to guide users through key actions. Wootric does not have this feature.",
    },
    {
      title: "Embeddable components",
      competitor: false,
      flows: true,
      description:
        "With Flows you can embed components directly into your product for a seamless user experience. Wootric renders its surveys using its own widget layer that sits on top of your product.",
    },
    {
      title: "Custom components",
      competitor: false,
      flows: true,
      description:
        "Flows allows you to use your design system and plug in components directly from your codebase. Wootric survey styling is limited to its built-in customization options.",
    },
    {
      title: "Workflow logic",
      competitor: false,
      flows: true,
      description:
        "Flows supports branching workflows and conditional logic for building multi-step adoption experiences. Wootric supports basic survey branching but not full workflow logic.",
    },
    {
      title: "Free plan",
      competitor: false,
      flows: true,
      description: `Flows includes a free plan with ${FREE_LIMIT} monthly tracked users and full adoption features. Wootric does not offer a free plan - all tiers require contacting sales.`,
    },
    {
      title: "Transparent pricing",
      competitor: false,
      flows: true,
      description:
        "Flows publishes usage-based pricing publicly. Wootric requires a sales conversation to get pricing details for any of its tiers.",
    },
    {
      title: "Developer experience",
      competitor: false,
      flows: true,
      description:
        "Flows offers APIs, versioning, environments, and documentation built for developers. Wootric is optimized for customer success and CX teams rather than developer workflows.",
    },
    {
      title: "Resilient against ad blockers",
      competitor: false,
      flows: true,
      description:
        "Wootric loads via an external script that many ad blockers target. Flows runs as part of your application and is not affected by ad blockers.",
    },
  ],
  otherDifferences: [
    {
      title: "Measuring sentiment vs driving adoption",
      competitorDescription:
        "Wootric is built around a clear goal: understand how customers feel at specific points in their journey. Its AI analysis, CXInsight dashboards, and multi-channel survey delivery give customer success and CX teams a reliable picture of loyalty trends. But Wootric only measures the outcome. It cannot act on a low NPS score, guide a struggling user to the value that drives satisfaction, or close the gap between what users say in a survey and what they actually do in your product.",
      flowsDescription:
        "Flows is built to drive the behaviors that improve satisfaction metrics. When you understand what makes your highest-NPS users successful - which features they use, which steps they completed during onboarding - you can build adoption flows that guide everyone else there. Surveys in Flows collect the signal; the rest of the toolkit acts on it. A user who rates onboarding poorly can immediately be routed into a guided tour. A user who scores low on a specific feature can see a contextual tooltip the next time they use it. The gap between insight and action closes from weeks to seconds.",
    },
    {
      title: "Own the user experience",
      competitorDescription:
        "Wootric delivers its surveys through its own widget layer - a floating popup that renders on top of your product using Wootric's UI components. Customization options let you adjust colors and copy, but the survey experience is recognizably a third-party tool. It does not adapt to your design system, and it can feel detached from the rest of the in-product experience.",
      flowsDescription:
        "Flows meets you where you are. You can use your own UI components and technologies, giving you full flexibility to build relevant, contextual workflows that fit your product, meet your quality bar, and do not get in the way.",
    },
    {
      title: "Act on feedback in real time",
      competitorDescription:
        "In Wootric, a low NPS response generates a data point in your dashboard. Acting on it requires your team to review responses, identify the user, plan a follow-up, and coordinate a response - often days later. By then, the dissatisfied user has frequently already made a decision about whether to stay or leave.",
      flowsDescription:
        "In Flows, a survey response can trigger the next step without waiting for a team review. A user who rates onboarding poorly can be routed into a guided tour immediately. A user who flags a specific feature as confusing can see a contextual tip the next time they open it. The feedback loop closes automatically, not after a manual review cycle.",
    },
    {
      title: "Pricing",
      competitorDescription:
        "Wootric does not publish pricing publicly. All three tiers - Professional, Growth, and Voice of the Customer - require contacting the InMoment sales team to get quotes. You are paying for a specialized feedback and analytics tool, priced for enterprise CX programs rather than product teams looking for lightweight signal collection.",
      flowsDescription: `Flows offers transparent usage-based pricing with no hidden fees. You can start for free with ${FREE_LIMIT} monthly tracked users and upgrade only when you need to. No sales calls, no hidden fees - just a clear pricing model that scales with your usage.`,
    },
  ],
  ctaBanner: {
    title: "Switch from Wootric to Flows today",
    description:
      "Get surveys plus the full product adoption toolkit in one platform. Start building with Flows.",
  },
};
