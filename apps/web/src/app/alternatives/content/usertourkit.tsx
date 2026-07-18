// cspell:words usertourkit

import { Flex } from "@flows/styled-system/jsx";
import { Text } from "ui";
import { UserTourKit20 } from "icons";

import { type AlternativeContentType } from "../types";
import { FREE_LIMIT } from "shared";

export const usertourkitContent: AlternativeContentType = {
  slug: "usertourkit",
  seoTitle: "UserTourKit alternative",
  title: "The managed alternative to UserTourKit",
  description:
    "Flows is the UserTourKit alternative for teams who want product tours and onboarding without building and maintaining the infrastructure themselves.",
  competitor: {
    name: "UserTourKit",
    squareLogo: <UserTourKit20 role="img" aria-label="UserTourKit logo" />,
    fullLogo: (
      <Flex align="center" gap="space8">
        <UserTourKit20 role="img" aria-label="UserTourKit logo" />
        <Text variant="titleL">UserTourKit</Text>
      </Flex>
    ),
  },
  summary: {
    competitorContent:
      "UserTourKit is a headless React library that covers a lot of ground: guided tours, onboarding checklists, contextual hints, announcements, surveys, and feature adoption tracking - all in one npm package. It is developer-owned, self-hosted, and available for a one-time $99 purchase. For React developers who want full control over their onboarding infrastructure and prefer to own the code rather than pay a recurring SaaS bill, UserTourKit is a compelling option. But owning the library means owning the ongoing maintenance - updates, hosting, bug fixes, and building anything the library does not already cover.",
    flowsContent:
      "Flows offers a comparable feature set as a fully managed service. You get product tours, checklists, surveys, and in-app guidance without building or maintaining the underlying infrastructure. The no-code visual editor lets non-technical team members build and launch flows without engineering involvement, while developers retain full control through APIs, custom component integrations, and programmatic access. You pay for usage rather than a one-time license, but you also never deal with self-hosting.",
  },
  comparisonTitle: "Flows vs UserTourKit: Key differences",
  comparisons: [
    {
      title: "Product tours",
      competitor: true,
      flows: true,
      description:
        "Both support guided product tours with step-by-step walkthroughs and spotlight overlays. UserTourKit is a React library you install and maintain; Flows is a managed service that handles infrastructure for you.",
    },
    {
      title: "Onboarding checklists",
      competitor: true,
      flows: true,
      description:
        "Both support onboarding checklists with task tracking and progress persistence. UserTourKit handles this via its library; Flows includes it as part of the managed platform.",
    },
    {
      title: "Surveys",
      competitor: true,
      flows: true,
      description:
        "Both support in-app NPS, CSAT, and custom microsurveys. UserTourKit includes survey functionality in the library; Flows integrates surveys into the full adoption workflow.",
    },
    {
      title: "Custom components",
      competitor: true,
      flows: true,
      description:
        "Both support custom components and design system integration. UserTourKit is headless by design; Flows lets you plug in your own components while also providing managed hosting and versioning.",
    },
    {
      title: "Managed service",
      competitor: false,
      flows: true,
      description:
        "Flows handles hosting, updates, versioning, and infrastructure. UserTourKit is a self-hosted library - you own the deployment and maintenance.",
    },
    {
      title: "No-code builder",
      competitor: false,
      flows: true,
      description:
        "Flows includes a visual no-code editor so product managers and designers can build and launch flows without engineering help. UserTourKit requires code for everything.",
    },
    {
      title: "Multi-framework support",
      competitor: false,
      flows: true,
      description:
        "Flows works across React, Vue, Angular, and vanilla JavaScript. UserTourKit is a React-only library.",
    },
    {
      title: "Localization",
      competitor: "Via code",
      flows: true,
      description:
        "Flows supports localization out of the box for reaching a global audience. UserTourKit supports localization but requires implementing it through code.",
    },
    {
      title: "Free plan",
      competitor: false,
      flows: true,
      description: `Flows includes a free plan with ${FREE_LIMIT} monthly tracked users and full adoption features. UserTourKit requires a one-time $99 purchase for the Pro license.`,
    },
    {
      title: "Resilient against ad blockers",
      competitor: true,
      flows: true,
      description:
        "Both run as part of your application rather than loading from an external script, so neither is affected by ad blockers.",
    },
  ],
  otherDifferences: [
    {
      title: "Owning a library vs using a platform",
      competitorDescription:
        "UserTourKit's core appeal is ownership: you install it once, pay once, and the code is yours. There are no recurring SaaS bills, no vendor lock-in on features, and no platform changes you did not choose. For developers who have the bandwidth to manage the library, this is a real advantage. The trade-off is that you also own the ongoing work - keeping dependencies updated, debugging version conflicts, implementing features the library does not yet support, and building the tooling your non-technical teammates need to work independently.",
      flowsDescription:
        "Flows handles the infrastructure so your team can focus on building adoption experiences rather than maintaining the underlying system. Updates happen automatically, new features are available without migration work, and the managed environment handles edge cases around versioning and environments that you would otherwise debug yourself. The platform scales with your usage rather than requiring you to build out additional capacity.",
    },
    {
      title: "Code-only vs code and visual builder",
      competitorDescription:
        "UserTourKit is built for developers and requires code for everything - every flow, every tour step, every survey trigger is defined in your React codebase. That is great for developer experience and gives engineers precise control over behavior. But it creates a bottleneck: any time a product manager wants to adjust a tour or launch a new checklist, they need to go through an engineering sprint.",
      flowsDescription:
        "Flows gives developers full programmatic control through APIs and custom component integrations, but also includes a visual builder that lets product managers work independently. A designer can iterate on a tooltip copy change without opening a pull request. A product manager can A/B test an onboarding flow without waiting for engineering capacity. The no-code layer does not limit what developers can do - it just removes the bottleneck for the rest of the team.",
    },
    {
      title: "React-only vs multi-framework",
      competitorDescription:
        "UserTourKit is built specifically for React and works with Next.js and Vite. If your entire frontend is React, that is not a limitation. But if your product spans multiple frameworks - a marketing site in Next.js, a dashboard in Angular, an embedded widget in vanilla JavaScript - you need different tools for each environment.",
      flowsDescription:
        "Flows works across React, Vue, Angular, and vanilla JavaScript from a single platform. You manage targeting, versioning, and reporting in one place regardless of which framework a specific part of your product uses.",
    },
    {
      title: "Pricing model",
      competitorDescription:
        "UserTourKit's one-time $99 Pro license is genuinely affordable for a single project. There are no monthly bills, and the library continues to work regardless of how many users you have. The trade-off is that future major versions may require additional purchases, and you are responsible for all the operational overhead that a SaaS platform would otherwise handle.",
      flowsDescription:
        "Flows uses usage-based pricing that starts free and scales with your tracked users. You pay for the value you get rather than a flat license fee, and the platform handles everything that would otherwise be operational overhead on your side. For teams that are growing quickly or managing multiple products, the predictable managed-service model is often more cost-effective than the cumulative engineering time of maintaining a self-hosted library.",
    },
  ],
  ctaBanner: {
    title: "Switch from UserTourKit to Flows today",
    description:
      "Get product tours, checklists, and surveys as a fully managed service. Start building with Flows.",
  },
};
