// cspell:words qualtrics

import { Flex } from "@flows/styled-system/jsx";
import { Text } from "ui";
import { Delighted20 } from "icons";

import { type AlternativeContentType } from "../types";

export const delightedContent: AlternativeContentType = {
  slug: "delighted",
  seoTitle: "Delighted alternative",
  title: "The product adoption alternative to Delighted",
  description:
    "Flows is the Delighted alternative for product teams who want more than satisfaction scores - a full adoption platform that drives the behaviors behind your metrics.",
  competitor: {
    name: "Delighted",
    squareLogo: <Delighted20 role="img" aria-label="Delighted logo" />,
    fullLogo: (
      <Flex align="center" gap="space8">
        <Delighted20 role="img" aria-label="Delighted logo" />
        <Text variant="titleL">Delighted</Text>
      </Flex>
    ),
  },
  summary: {
    competitorContent:
      "Delighted, now part of Qualtrics, is an experience management platform designed to make collecting customer feedback as fast and easy as possible. It supports NPS, CSAT, CES, 5-star ratings, and custom survey types across multiple channels, with clean dashboards, integrations, and an accessible interface that does not require technical expertise. For teams that want quick signal on how customers feel, Delighted does the job well. But it stops at measurement - Delighted has no product tours, no onboarding checklists, and no tools to act on the feedback it collects.",
    flowsContent:
      "Flows includes NPS, CSAT, and custom surveys as part of a complete product adoption platform. You can measure satisfaction and act on the signal immediately - routing low-activation users into an onboarding flow, showing contextual tips when a user flags a specific feature as confusing, or triggering a product tour for users who score low on feature discovery. The adoption toolkit and the survey toolkit work together instead of existing in separate products.",
  },
  comparisonTitle: "Flows vs Delighted: Key differences",
  comparisons: [
    {
      title: "NPS and CSAT surveys",
      competitor: true,
      flows: true,
      description:
        "Both services support NPS, CSAT, CES, and custom survey types. Delighted is purpose-built for simple, fast survey deployment across multiple channels, while Flows integrates surveys into a broader adoption workflow.",
    },
    {
      title: "Product tours",
      competitor: false,
      flows: true,
      description:
        "Flows supports full product tours with tooltips, modals, and step-by-step guidance. Delighted does not offer product tours.",
    },
    {
      title: "Onboarding checklists",
      competitor: false,
      flows: true,
      description:
        "Flows includes onboarding checklists to guide users through key actions. Delighted does not have this feature.",
    },
    {
      title: "Embeddable components",
      competitor: false,
      flows: true,
      description:
        "With Flows you can embed components directly into your product for a seamless user experience. Delighted renders surveys using its own widget that overlays your product UI.",
    },
    {
      title: "Custom components",
      competitor: false,
      flows: true,
      description:
        "Flows allows you to use your design system and plug in components directly from your codebase. Delighted survey styling is limited to its built-in customization options.",
    },
    {
      title: "Workflow logic",
      competitor: false,
      flows: true,
      description:
        "Flows supports branching workflows and conditional logic for building multi-step adoption experiences. Delighted supports basic follow-up questions but not full workflow logic.",
    },
    {
      title: "Free plan",
      competitor: true,
      flows: true,
      description:
        "Delighted offers a free plan with 25 responses and one user. Flows includes a free plan with 250 monthly tracked users and full adoption features.",
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
        "Flows offers APIs, versioning, environments, and documentation built for developers. Delighted is optimized for CX, customer success, and product teams rather than developer workflows.",
    },
    {
      title: "Resilient against ad blockers",
      competitor: false,
      flows: true,
      description:
        "Delighted loads via an external script that many ad blockers target. Flows runs as part of your application and is not affected by ad blockers.",
    },
  ],
  otherDifferences: [
    {
      title: "Satisfaction measurement vs product adoption",
      competitorDescription:
        "Delighted is built around a specific goal: make it as easy as possible for teams to collect satisfaction data. Its clean interface, fast setup, and wide survey type support let anyone spin up an NPS or CSAT program without engineering help. That simplicity is genuinely valuable for teams that just need signal. But Delighted can only collect data. It cannot guide users to the behaviors that drive satisfaction, act on a low score in real time, or connect feedback to what is actually happening in your product.",
      flowsDescription:
        "Flows is built to drive the behaviors that improve satisfaction metrics. When you understand what makes your highest-NPS users successful - which features they use, which onboarding steps they completed - you can build adoption flows that guide everyone else there. Surveys in Flows collect the signal; the rest of the toolkit acts on it. The feedback loop closes automatically rather than waiting for your team to review responses and plan a follow-up.",
    },
    {
      title: "Built for simplicity vs built for developers",
      competitorDescription:
        "Delighted's core value proposition is that anyone on your team can deploy a survey in minutes without touching code. That is a real strength for smaller teams or organizations without dedicated product engineers. But it also means that Delighted's customization options top out quickly - you are constrained by what the Delighted builder supports, not by your own design system.",
      flowsDescription:
        "Flows is built for teams that want both power and ease. Non-technical team members can build and launch flows using the visual editor. Developers can go deeper with APIs, custom component integrations, and full access to the underlying logic. You do not have to choose between accessible and powerful.",
    },
    {
      title: "Own the user experience",
      competitorDescription:
        "Delighted delivers its surveys through its own widget layer - typically a small popup or slide-in that appears over your product. The survey experience is branded and clean, but it is recognizably a third-party tool. It does not match your design system, and it interrupts rather than integrates with the rest of the in-product experience.",
      flowsDescription:
        "Flows meets you where you are. You can use your own UI components and technologies, giving you full flexibility to build relevant, contextual workflows that fit your product, meet your quality bar, and do not get in the way.",
    },
    {
      title: "Single survey tool vs full adoption toolkit",
      competitorDescription:
        "Delighted is purpose-built for one thing: satisfaction measurement. That focus makes it fast to deploy, but it also means you need other tools for everything else - product tours, onboarding flows, feature announcements, and usage guidance. Each additional tool adds another integration, another vendor, and another dataset to reconcile.",
      flowsDescription:
        "Flows covers the full adoption lifecycle in one platform. NPS and CSAT are there when you need them, alongside tours, checklists, tooltips, and modals. Everything runs on one platform with one targeting system and one reporting view, so you can see how adoption activities affect satisfaction scores without cross-referencing multiple tools.",
    },
  ],
  ctaBanner: {
    title: "Switch from Delighted to Flows today",
    description:
      "Collect satisfaction data and drive the adoption that improves it, all in one platform. Start building with Flows.",
  },
};
