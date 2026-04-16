//cspell:words onboardjs

import { Flex } from "@flows/styled-system/jsx";
import { Text } from "ui";

import { type AlternativeContentType } from "../types";
import { OnboardJS20 } from "icons";

export const onboardjsContent: AlternativeContentType = {
  slug: "onboardjs",
  seoTitle: "OnboardJS alternative",
  title: "The complete OnboardJS alternative",
  description:
    "Flows is the OnboardJS alternative for teams who want a full product adoption platform, not just a headless state machine for onboarding flows.",
  competitor: {
    name: "OnboardJS",
    squareLogo: <OnboardJS20 role="img" aria-label="OnboardJS logo" />,
    fullLogo: (
      <Flex align="center" gap="space8">
        <OnboardJS20 role="img" aria-label="OnboardJS logo" />
        <Text variant="titleL">OnboardJS</Text>
      </Flex>
    ),
  },
  summary: {
    competitorContent:
      "OnboardJS is a headless, open-source onboarding framework JS. It uses a state machine approach rather than DOM-attached tooltips, letting developers bring their own UI. While the developer experience is clean and it integrates well with tools like PostHog and Supabase, it is a low-level primitive: it manages state, but leaves UI, targeting, analytics dashboards, localization, and non-developer collaboration entirely to your team.",
    flowsContent:
      "Flows is a modern product adoption platform that goes beyond a headless state machine. With Flows, you bring your own UI components and get the full power of a platform: workflow orchestration, user targeting, built-in analytics, localization, and a collaborative dashboard for product managers and designers—so your team stops rebuilding onboarding infrastructure on every project.",
  },
  comparisonTitle: "Flows vs OnboardJS: Key differences",
  comparisons: [
    {
      title: "Onboarding flows",
      competitor: true,
      flows: true,
      description:
        "Both OnboardJS and Flows support building multi-step onboarding experiences with custom UI.",
    },
    {
      title: "Custom components",
      competitor: true,
      flows: true,
      description:
        "Both allow you to bring your own UI components. OnboardJS is fully headless; Flows gives you full component control within a structured workflow system.",
    },
    {
      title: "Framework agnostic",
      competitor: true,
      flows: true,
      description:
        "Both OnboardJS and Flows work across React, Vue, Angular, and vanilla JavaScript.",
    },
    {
      title: "Floating components",
      competitor: false,
      flows: true,
      description:
        "Flows includes tooltip, modal, banner, and checklist component types out of the box. OnboardJS is headless and provides no default UI.",
    },
    {
      title: "Analytics",
      competitor: false,
      flows: true,
      description:
        "Flows provides built-in analytics and step tracking in its dashboard. OnboardJS integrates with external tools like PostHog and Mixpanel but has no analytics UI of its own.",
    },
    {
      title: "Targeting",
      competitor: false,
      flows: true,
      description:
        "Flows offers user targeting and segmentation. OnboardJS requires you to implement targeting logic yourself.",
    },
    {
      title: "Localization",
      competitor: false,
      flows: true,
      description:
        "Flows supports localization out of the box. OnboardJS requires manual localization handling.",
    },
    {
      title: "Non-developer access",
      competitor: false,
      flows: true,
      description:
        "Flows provides a dashboard for product managers and designers to manage workflows without code. OnboardJS is developer-only.",
    },
    {
      title: "Free plan",
      competitor: true,
      flows: true,
      description:
        "OnboardJS is free and open source. Flows offers a free plan with 250 monthly tracked users.",
    },
    {
      title: "Surveys",
      competitor: false,
      flows: true,
      description:
        "Flows includes built-in surveys for collecting user feedback. OnboardJS is a state machine library and does not include survey capabilities.",
    },
  ],
  otherDifferences: [
    {
      title: "State machine vs full platform",
      competitorDescription:
        "OnboardJS gives you a clean state machine for onboarding. Everything else—UI, analytics, targeting, dashboards, localization—is your team's responsibility.",
      flowsDescription:
        "Flows combines a developer-first SDK with a full platform. You own the UI components; Flows handles orchestration, delivery, analytics, and collaboration.",
    },
    {
      title: "Any framework, not just React",
      competitorDescription:
        "OnboardJS is purpose-built for React and Next.js. Teams using Vue, Angular, or plain JavaScript cannot use it.",
      flowsDescription:
        "Flows works across React, Vue, Angular, and plain JavaScript. Whichever framework your team uses, Flows integrates cleanly.",
    },
    {
      title: "Built for developers and PMs",
      competitorDescription:
        "OnboardJS is developer-only. Non-technical teammates cannot update onboarding flows without an engineering ticket.",
      flowsDescription:
        "Flows is built for both developers and non-developers. Developers own the components and integration; product managers control workflow logic and content without writing code.",
    },
    {
      title: "From library to system",
      competitorDescription:
        "OnboardJS is a low-level building block. As your product grows, you end up rebuilding the same infrastructure—analytics, targeting, dashboards—on every new project or feature.",
      flowsDescription:
        "Flows is a system for building, running, and iterating on product adoption workflows. It scales with your product without requiring new infrastructure investment.",
    },
    {
      title: "Maintenance and ownership",
      competitorDescription:
        "Every new onboarding requirement means more custom code. You own the full stack: UI, state, targeting, analytics, and maintenance.",
      flowsDescription:
        "Flows handles the platform layer. Your team focuses on the product experience, not onboarding infrastructure.",
    },
  ],
  ctaBanner: {
    title: "Switch from OnboardJS to Flows today",
    description:
      "Get a full product adoption platform without rebuilding infrastructure from scratch. Start for free with Flows.",
  },
};
