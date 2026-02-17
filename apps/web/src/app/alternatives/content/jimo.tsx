// cSpell:words Jimo

import { css } from "@flows/styled-system/css";
import { Jimo20, JimoFull20 } from "icons";

import { type AlternativeContentType } from "../types";

export const jimoContent: AlternativeContentType = {
  slug: "jimo",
  seoTitle: "Jimo alternative",
  title: "The developer-friendly Jimo alternative",
  description:
    "Flows is the Jimo alternative for teams who want full control over product adoption with a developer-first approach.",
  competitor: {
    name: "Jimo",
    squareLogo: <Jimo20 role="img" aria-label="Jimo logo" />,
    fullLogo: (
      <JimoFull20
        role="img"
        aria-label="Jimo logo"
        className={css({
          height: "24px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "Jimo is a product adoption platform combining tours, changelogs, surveys, and feature request boards. While it covers a broad range of features, this breadth can come at the expense of depth. Customization is limited to their predefined templates, and teams that need control over UI and behavior often find themselves working around the tool rather than with it.",
    flowsContent:
      "Flows is a modern alternative to Jimo built for teams who want to own their user experience. With Flows, you build workflows using your own components and design system, giving you full flexibility over how adoption experiences look and behave. Flows focuses on doing product adoption exceptionally well.",
  },
  comparisonTitle: "Flows vs Jimo: Key differences",
  comparisons: [
    {
      title: "Onboarding basics",
      competitor: true,
      flows: true,
      description:
        "Both services have basic onboarding features like tooltips, modals, and product tours, although Flows focuses on offering full control over the user experience.",
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
        "Jimo limits customization to their template builder. Flows gives you full control over both UI and logic.",
    },
    {
      title: "Free plan",
      competitor: false,
      flows: true,
      description:
        "Flows offers a free plan with 250 monthly tracked users. Jimo offers only a time-limited trial.",
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
      competitor: true,
      flows: true,
      description: "Both services offer published pricing that scales with usage.",
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
      title: "Depth vs breadth",
      competitorDescription:
        "Jimo covers tours, changelogs, surveys, and feature requests in one tool. This breadth means each feature area may be less refined than a dedicated solution.",
      flowsDescription:
        "Flows focuses on product adoption. This focus means deeper functionality, better developer experience, and a product that does one thing exceptionally well rather than many things adequately.",
    },
    {
      title: "Own the user experience",
      competitorDescription:
        "Jimo uses predefined UI elements that may not match your product's design system. Customization is limited to their builder.",
      flowsDescription:
        "Flows meets you where you are. You can use your own UI components and technologies, giving you the full flexibility of code to build relevant, contextual workflows that fit your product, meet your quality bar, and don't get in the way.",
    },
    {
      title: "Built for developers",
      competitorDescription:
        "Jimo focuses on providing a no-code solution. Developer workflows and programmatic control are secondary.",
      flowsDescription:
        "Developers aren't an afterthought in Flows, they are first-class users. We focus on the details that make building with Flows a joy: versioning, environments, APIs, and great documentation, to name a few.",
    },
    {
      title: "Customer support",
      competitorDescription: "Jimo is a smaller company with standard support options.",
      flowsDescription:
        "Flows is a small company built and run by a team that cares deeply about your success. Whether you're on the free plan or a paid one, you get fast, thoughtful support directly from the people building the product.",
    },
  ],
  ctaBanner: {
    title: "Switch from Jimo to Flows today",
    description: "Build product adoption experiences you fully control. Start building with Flows.",
  },
};
