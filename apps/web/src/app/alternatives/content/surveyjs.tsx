// cspell:words SurveyJS

import { css } from "@flows/styled-system/css";
import { SurveyJSFull20 } from "icons";

import { type AlternativeContentType } from "../types";
import { Box } from "@flows/styled-system/jsx";

export const surveyjsContent: AlternativeContentType = {
  slug: "surveyjs",
  seoTitle: "SurveyJS alternative",
  title: "The managed alternative to SurveyJS",
  description:
    "Flows is the SurveyJS alternative for product teams who want a complete adoption platform with surveys built in - no self-hosting, no custom backend, no glue code.",
  competitor: {
    name: "SurveyJS",
    squareLogo: (
      <Box w={20} h={20} bg="#19B394" role="img" aria-label="SurveyJS logo" borderRadius="4px" />
    ),
    fullLogo: (
      <SurveyJSFull20
        role="img"
        aria-label="SurveyJS logo"
        className={css({
          height: "28px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "SurveyJS is an open-source JavaScript survey library that gives developers full control over survey creation, rendering, and data storage. It is highly flexible and self-hostable, but it is a raw building block, not a product. Using SurveyJS means building and maintaining your own backend, admin interface, analytics layer, and hosting infrastructure. Teams looking to run surveys without this overhead often look for alternatives.",
    flowsContent:
      "Flows is a managed product adoption platform with surveys built in. Where SurveyJS provides a library you have to build around, Flows gives you a complete platform: survey creation, targeting, triggering, results, and integration into broader adoption workflows - all managed and ready to use. You get the full flexibility of building with your own components without having to maintain the infrastructure.",
  },
  comparisonTitle: "Flows vs SurveyJS: Key differences",
  comparisons: [
    {
      title: "Surveys",
      competitor: true,
      flows: true,
      description:
        "Both support surveys. SurveyJS is a powerful library for rendering custom surveys, while Flows provides a fully managed survey platform integrated with adoption workflows.",
    },
    {
      title: "Managed service",
      competitor: false,
      flows: true,
      description:
        "Flows is a fully managed platform - no backend, hosting, or infrastructure to maintain. SurveyJS requires you to build and host your own stack.",
    },
    {
      title: "Product tours",
      competitor: false,
      flows: true,
      description:
        "Flows supports product tours, tooltips, and step-by-step in-app guidance. SurveyJS is a survey library and does not offer these features.",
    },
    {
      title: "Onboarding checklists",
      competitor: false,
      flows: true,
      description: "Flows includes onboarding checklists. SurveyJS does not have this feature.",
    },
    {
      title: "No-code builder",
      competitor: false,
      flows: true,
      description:
        "Flows includes a no-code visual builder for creating and managing surveys and adoption flows. SurveyJS requires code to create and manage surveys.",
    },
    {
      title: "Custom components",
      competitor: true,
      flows: true,
      description:
        "Both allow full customization of survey UI. SurveyJS gives you a library to build on, while Flows lets you plug in your own components from your design system.",
    },
    {
      title: "Targeting and triggering",
      competitor: false,
      flows: true,
      description:
        "Flows includes built-in targeting and event-based triggering. With SurveyJS, you build and maintain your own targeting logic.",
    },
    {
      title: "Free plan",
      competitor: "Free for open source",
      flows: true,
      description:
        "SurveyJS is free and open source. Flows offers a free plan with 250 monthly tracked users.",
    },
    {
      title: "Developer experience",
      competitor: true,
      flows: true,
      description:
        "Both are developer-friendly. SurveyJS gives you a powerful library, while Flows adds versioning, environments, APIs, and a managed platform so you can focus on your product.",
    },
  ],
  otherDifferences: [
    {
      title: "Library vs platform",
      competitorDescription:
        "SurveyJS is a library. It solves the rendering problem - you get a highly capable survey engine - but you still need to build everything around it: the backend to store responses, the admin interface to manage surveys, the analytics to understand results, and the targeting logic to show the right survey to the right user.",
      flowsDescription:
        "Flows is a complete platform. Every piece you would have to build with SurveyJS is already there: survey creation, targeting, event triggers, response analytics, and integration into onboarding workflows. You integrate once and focus on building your product.",
    },
    {
      title: "Surveys inside the adoption lifecycle",
      competitorDescription:
        "SurveyJS renders surveys wherever you choose to display them. But it has no concept of the user journey - it does not know when a user first logged in, which features they have used, or whether they are at risk of churning. You have to build all of that context yourself.",
      flowsDescription:
        "Flows knows where your users are in their journey. You can trigger a PMF survey after a user completes onboarding, surface an NPS survey at a milestone, or follow up a poor score with targeted guidance - all based on user behavior and properties, without custom code.",
    },
    {
      title: "Built for product teams",
      competitorDescription:
        "SurveyJS is a developer tool. Product managers and customer success teams need engineering help to create and manage surveys, which slows iteration and creates bottlenecks.",
      flowsDescription:
        "Flows is built for both developers and product teams. A developer integrates the SDK once, and then the whole team can create, launch, and iterate on surveys and adoption flows through the visual interface - no engineering required for most changes.",
    },
    {
      title: "Pricing",
      competitorDescription:
        "SurveyJS is free and open source. However, you pay the ongoing cost of hosting and maintaining your own backend infrastructure.",
      flowsDescription:
        "Flows offers transparent usage-based pricing with no hidden fees. You can start for free with 250 monthly tracked users and upgrade only when you need to. No sales calls, no hidden fees, just a clear pricing model that scales with your usage.",
    },
  ],
  ctaBanner: {
    title: "Switch from SurveyJS to Flows today",
    description:
      "Get a fully managed adoption platform with surveys built in - no infrastructure, no glue code. Start building with Flows.",
  },
};
