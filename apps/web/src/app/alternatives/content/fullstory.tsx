// cspell:words fullstory

import { css } from "@flows/styled-system/css";
import { Fullstory20, FullstoryFull20 } from "icons";

import { type AlternativeContentType } from "../types";
import { FREE_LIMIT } from "shared";

export const fullstoryContent: AlternativeContentType = {
  slug: "fullstory",
  seoTitle: "Fullstory Guides and Surveys alternative",
  title: "The purpose-built alternative to Fullstory Guides and Surveys",
  description:
    "Flows is the alternative to Fullstory's Guides and Surveys feature for teams who want a dedicated in-app onboarding and feedback tool instead of an add-on to a session replay platform.",
  metaDescription:
    "Comparing Flows to Fullstory's Guides and Surveys feature specifically, not session replay or behavioral analytics. See how each handles tours, surveys, and design control.",
  competitor: {
    name: "Fullstory",
    squareLogo: <Fullstory20 role="img" aria-label="Fullstory logo" />,
    fullLogo: (
      <FullstoryFull20
        role="img"
        aria-label="Fullstory logo"
        className={css({
          height: "22px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "Fullstory is a digital experience analytics platform built around session replay and behavioral data. Guides and Surveys is an add-on within that platform, letting you show in-app messages, walkthroughs, and surveys targeted using the same user properties and segments Fullstory already tracks, and even branch a tour based on a survey answer with condition steps. This comparison covers only that add-on, not Fullstory's core session replay or analytics product.",
    flowsContent:
      "Flows is a dedicated onboarding and in-app feedback platform. Instead of guides and surveys being an add-on to an analytics suite, they are the whole product, built with your own UI components and no paywall separating basic guidance from advanced targeting. If Guides and Surveys is why your team pays for a Fullstory tier, Flows replaces that specific need without requiring the analytics platform underneath it.",
  },
  comparisonTitle: "Flows vs Fullstory Guides and Surveys: Key differences",
  comparisons: [
    {
      title: "In-app guides and tooltips",
      competitor: true,
      flows: true,
      description:
        "Both support in-app guides, tooltips, and walkthroughs triggered by user behavior.",
    },
    {
      title: "Surveys",
      competitor: true,
      flows: true,
      description:
        "Both support in-app surveys with targeting rules based on segment and behavior.",
    },
    {
      title: "Embed your own components",
      competitor: false,
      flows: true,
      description:
        "Flows lets you embed components straight from your own codebase and design system. Fullstory's guides support custom CSS theming of its widget, but not swapping in your own components.",
    },
    {
      title: "Works without the analytics platform",
      competitor: false,
      flows: true,
      description:
        "Guides and Surveys only exists as an add-on to a paid Fullstory subscription. Flows is a standalone product, no session replay platform required.",
    },
    {
      title: "Free plan",
      competitor: false,
      flows: true,
      description: `Fullstory requires a paid, higher-tier plan to unlock Guides and Surveys. Flows offers a free plan with ${FREE_LIMIT} monthly tracked users and full access to onboarding and surveys.`,
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
      title: "An add-on vs the core product",
      competitorDescription:
        "Guides and Surveys was built to extend the value of the behavioral data Fullstory already collects, not as a standalone adoption tool. It's an add-on sold on top of Fullstory's paid analytics plans, so teams that only need in-app guidance still have to buy into the wider platform.",
      flowsDescription:
        "Onboarding and surveys are what Flows does, full stop. That means no requirement to buy an analytics platform to get there, and no add-on gating between basic guidance and advanced targeting.",
    },
    {
      title: "Own the user experience",
      competitorDescription:
        "Fullstory's guides support custom CSS theming, giving you real control over colors, fonts, and layout within its widget. What it doesn't offer is embedding your own React or Vue components directly, so guides still run inside Fullstory's own markup rather than your codebase.",
      flowsDescription:
        "Flows lets you use your own components and design system directly, so guides and surveys are built from the same code as the rest of your product, not themed inside a third-party widget.",
    },
    {
      title: "Built for developers",
      competitorDescription:
        "Fullstory Guides and Surveys is configured through the Fullstory dashboard, aimed at product and growth teams working with the data Fullstory has already captured.",
      flowsDescription:
        "Developers aren't an afterthought in Flows, they are first-class users. We focus on the details that make building with Flows a joy: versioning, environments, APIs, and great documentation, to name a few.",
    },
    {
      title: "Pricing",
      competitorDescription:
        "Guides and Surveys is only available as an add-on to Fullstory's paid, session-based plans, starting above its free tier, so you're paying for session capacity you may not need just to unlock in-app guidance.",
      flowsDescription: `Flows offers transparent usage-based pricing with no hidden fees. You can start for free with ${FREE_LIMIT} monthly tracked users and upgrade only when you need to. No sales calls, no hidden fees, just a clear pricing model that scales with your usage.`,
    },
  ],
  ctaBanner: {
    title: "Replace Fullstory Guides and Surveys with Flows",
    description:
      "Get dedicated in-app onboarding and surveys without paying for an analytics platform. Start building with Flows.",
  },
};
