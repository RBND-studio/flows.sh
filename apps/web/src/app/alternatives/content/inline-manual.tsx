import { type AlternativeContentType } from "../types";
import { InlineManual20, InlineManualFull20 } from "icons";
import { css } from "@flows/styled-system/css";

export const inlineManualContent: AlternativeContentType = {
  slug: "inline-manual",
  seoTitle: "Inline Manual alternative",
  title: "The developer-first Inline Manual alternative",
  description:
    "Flows is the Inline Manual alternative for product teams who want full component control, transparent pricing, and a platform built for both developers and PMs.",
  competitor: {
    name: "Inline Manual",
    squareLogo: <InlineManual20 role="img" aria-label="Inline Manual logo" />,
    fullLogo: (
      <InlineManualFull20
        role="img"
        aria-label="Inline Manual logo"
        className={css({
          height: "28px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "Inline Manual is a user onboarding platform for creating interactive walkthroughs, tooltips, and in-app messages to improve product adoption and reduce support tickets. It provides a visual editor for non-technical users and works by injecting its own overlay UI into your product. While it covers the basics of guided onboarding, it uses its own widget components rather than integrating with your design system, and pricing requires a conversation with sales.",
    flowsContent:
      "Flows is a modern alternative to Inline Manual for teams who want full control over their in-app experiences. With Flows, you build workflows using your own UI components and design system—no widget overlays, no templated UI. Flows gives both developers and product managers the tools they need, with transparent pricing and a free plan to get started.",
  },
  comparisonTitle: "Flows vs Inline Manual: Key differences",
  comparisons: [
    {
      title: "Onboarding basics",
      competitor: true,
      flows: true,
      description:
        "Both services support interactive walkthroughs, tooltips, and in-app messages for guiding users through your product.",
    },
    {
      title: "Embeddable components",
      competitor: false,
      flows: true,
      description:
        "Flows lets you embed components directly within your app's layout. Inline Manual uses overlay-style tooltips and modals on top of your product.",
    },
    {
      title: "Custom components",
      competitor: false,
      flows: true,
      description:
        "Flows lets you plug in components from your own codebase and design system. Inline Manual uses its own widget UI.",
    },
    {
      title: "Workflow logic",
      competitor: false,
      flows: true,
      description:
        "Flows supports branching workflows and conditional logic. Inline Manual walkthroughs are primarily linear.",
    },
    {
      title: "Analytics",
      competitor: true,
      flows: true,
      description: "Both provide analytics on walkthrough performance and user engagement.",
    },
    {
      title: "Targeting",
      competitor: true,
      flows: true,
      description:
        "Both support user targeting and segmentation for showing specific guides to specific audiences.",
    },
    {
      title: "Localization",
      competitor: true,
      flows: true,
      description: "Both support localization for serving a global user base.",
    },
    {
      title: "Resilient against ad blockers",
      competitor: false,
      flows: true,
      description:
        "Flows is bundled with your product, making it resilient against script blockers. Inline Manual loads as an external script, which can be blocked.",
    },
    {
      title: "Free plan",
      competitor: false,
      flows: true,
      description:
        "Flows offers a free plan with 250 monthly tracked users. Inline Manual requires a paid plan.",
    },
    {
      title: "Transparent pricing",
      competitor: true,
      flows: true,
      description:
        "Flows uses transparent, usage-based pricing. Inline Manual pricing page shows limited information.",
    },
  ],
  otherDifferences: [
    {
      title: "Your components, not theirs",
      competitorDescription:
        "Inline Manual injects its own widget UI into your product. The look and feel of walkthroughs is constrained to Inline Manual's component templates, which may not match your design system.",
      flowsDescription:
        "Flows meets you where you are. You use your own UI components and technologies, giving you full control to build adoption experiences that feel native to your product and meet your quality bar.",
    },
    {
      title: "Built for developers and PMs",
      competitorDescription:
        "Inline Manual's visual editor is aimed at non-technical users, but developer-facing control is limited. Complex workflow changes still require workarounds or support.",
      flowsDescription:
        "Flows is built for both developers and non-developers. Developers own the components and integration; product managers control workflow logic and content without writing code.",
    },
    {
      title: "From walkthroughs to workflows",
      competitorDescription:
        "Inline Manual is built for step-by-step walkthroughs. Branching logic, conditional journeys, and multi-session flows require significant workarounds.",
      flowsDescription:
        "Flows supports full workflows with branching logic, inline components, and long-running journeys that persist across sessions.",
    },
    {
      title: "Pricing",
      competitorDescription:
        "Inline Manual pricing for Standard Pro plan is public, but Enterprise plan pricing requires a conversation with sales. Costs can scale significantly as you grow.",
      flowsDescription:
        "Flows offers transparent usage-based pricing with no hidden fees. Start for free with 250 monthly tracked users and upgrade only when you need to.",
    },
  ],
  ctaBanner: {
    title: "Switch from Inline Manual to Flows today",
    description:
      "Build product-native adoption workflows with your own components. Start for free with Flows.",
  },
};
