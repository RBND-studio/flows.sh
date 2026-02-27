import { css } from "@flows/styled-system/css";
import { CommandAi20, CommandAiFull20 } from "icons";

import { type AlternativeContentType } from "../types";

export const commandAiContent: AlternativeContentType = {
  slug: "command-ai",
  seoTitle: "Command AI alternative",
  title: "The focused Command AI alternative for product adoption",
  description:
    "Flows is the Command AI alternative for teams who want a dedicated product adoption platform instead of an AI assistant layer.",
  competitor: {
    name: "Command AI",
    squareLogo: <CommandAi20 role="img" aria-label="Command AI logo" />,
    fullLogo: (
      <CommandAiFull20
        role="img"
        aria-label="Command AI logo"
        className={css({
          height: "24px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "Command AI is an AI-powered user assistance platform acquired by Amplitude. It offers nudges, product tours, checklists, surveys, a HelpHub, and a Spotlight command bar. Its focus is on AI-driven, non-intrusive assistance rather than structured adoption workflows. Following acquisition by Amplitude, its product direction is increasingly tied to Amplitude's broader analytics platform.",
    flowsContent:
      "Flows is a focused alternative to Command AI built for product teams who want structured, workflow-driven adoption experiences. With Flows, you build precise, targeted workflows using your own components and design system, with full control over when, how, and to whom experiences are shown.",
  },
  comparisonTitle: "Flows vs Command AI: Key differences",
  comparisons: [
    {
      title: "Onboarding basics",
      competitor: true,
      flows: true,
      description:
        "Both services support product tours, checklists, and in-app guidance for user onboarding.",
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
      title: "Customization",
      competitor: false,
      flows: true,
      description:
        "Command AI's nudges use their own UI templates. Flows gives you full control over both UI and logic.",
    },
    {
      title: "Free plan",
      competitor: false,
      flows: true,
      description:
        "Flows offers a free plan with 250 monthly tracked users. Command AI does not offer a public free tier.",
    },
    {
      title: "Localization",
      competitor: false,
      flows: true,
      description: "Flows supports localization out of the box.",
    },
    {
      title: "Resilient against ad blockers",
      competitor: false,
      flows: true,
      description:
        "Flows is bundled with your product, making it resilient against script blockers and ad blockers.",
    },
    {
      title: "Transparent pricing",
      competitor: false,
      flows: true,
      description:
        "Flows uses transparent, usage-based pricing. Command AI does not publish pricing publicly and requires a demo.",
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
      title: "Workflows vs AI nudges",
      competitorDescription:
        "Command AI centers on AI-driven, reactive assistance — surfacing help when users seem stuck. This works well for support deflection, but gives you less control over structured onboarding and adoption journeys.",
      flowsDescription:
        "Flows is built around deliberate, structured workflows. You decide when to show experiences, to whom, and in what order — giving you precision over the adoption journey rather than relying on AI inference.",
    },
    {
      title: "Standalone vs platform dependency",
      competitorDescription:
        "Command AI was acquired by Amplitude. This means its product roadmap and pricing are increasingly tied to Amplitude's ecosystem, which may not align with teams not already using Amplitude.",
      flowsDescription:
        "Flows is an independent, focused product adoption platform. There's no platform lock-in, no bundled analytics suite you don't need — just a clear tool for building great in-app experiences.",
    },
    {
      title: "Own the user experience",
      competitorDescription:
        "Command AI's nudges and tours use their own UI components and templates. Customization is limited to their builder.",
      flowsDescription:
        "Flows meets you where you are. You can use your own UI components and technologies, giving you the full flexibility of code to build relevant, contextual workflows that fit your product, meet your quality bar, and don't get in the way.",
    },
    {
      title: "Built for developers",
      competitorDescription:
        "Command AI focuses on product and growth teams. Developer controls, programmatic APIs, and deep integration options are secondary.",
      flowsDescription:
        "Developers aren't an afterthought in Flows, they are first-class users. We focus on the details that make building with Flows a joy: versioning, environments, APIs, and great documentation, to name a few.",
    },
  ],
  ctaBanner: {
    title: "Switch from Command AI to Flows today",
    description:
      "Build structured adoption workflows with full control over the experience. Start for free with Flows.",
  },
};
