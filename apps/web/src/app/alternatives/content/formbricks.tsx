// cspell:words formbricks

import { css } from "@flows/styled-system/css";
import { Formbricks20, FormbricksFull20 } from "icons";

import { type AlternativeContentType } from "../types";

export const formbricksContent: AlternativeContentType = {
  slug: "formbricks",
  seoTitle: "Formbricks alternative",
  title: "The managed product adoption alternative to Formbricks",
  description:
    "Flows is the Formbricks alternative for product teams who want a fully managed adoption platform with surveys, tours, and checklists - without self-hosting.",
  competitor: {
    name: "Formbricks",
    squareLogo: <Formbricks20 role="img" aria-label="Formbricks logo" />,
    fullLogo: (
      <FormbricksFull20
        role="img"
        aria-label="Formbricks logo"
        className={css({
          height: "24px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "Formbricks is an open-source survey and forms platform that can be self-hosted or used via its cloud offering. It provides a strong no-code builder for in-app surveys, NPS flows, and feedback forms, with a developer-friendly API and strong data privacy controls. Teams that prioritize full data ownership appreciate the self-hosted path. But Formbricks is fundamentally a forms and survey tool - it does not offer product tours, onboarding checklists, or the adoption features product teams need to actively guide users through their product.",
    flowsContent:
      "Flows is a fully managed product adoption platform that includes surveys as one part of a broader toolkit. With product tours, onboarding checklists, contextual tooltips, and in-app surveys, Flows gives you everything you need to guide users toward activation and retention - without the infrastructure overhead of managing a self-hosted service.",
  },
  comparisonTitle: "Flows vs Formbricks: Key differences",
  comparisons: [
    {
      title: "Surveys",
      competitor: true,
      flows: true,
      description:
        "Both services support in-app surveys including NPS, CSAT, and custom question types. Formbricks specializes in forms and surveys, while Flows integrates surveys into a broader adoption workflow.",
    },
    {
      title: "Product tours",
      competitor: false,
      flows: true,
      description:
        "Flows supports full product tours with tooltips, modals, and step-by-step guidance. Formbricks does not offer product tours.",
    },
    {
      title: "Onboarding checklists",
      competitor: false,
      flows: true,
      description:
        "Flows includes onboarding checklists to guide users through key actions. Formbricks does not have this feature.",
    },
    {
      title: "Embeddable components",
      competitor: false,
      flows: true,
      description:
        "With Flows you can embed components directly into your product for a seamless user experience. Formbricks renders surveys using its own widget layer.",
    },
    {
      title: "Custom components",
      competitor: "Limited",
      flows: true,
      description:
        "Formbricks is open source, so you can modify the codebase, but out-of-the-box survey styling is constrained to its builder. Flows lets you plug in your own design system components directly.",
    },
    {
      title: "Open source",
      competitor: true,
      flows: false,
      description:
        "Formbricks is open source and can be self-hosted for full data ownership. Flows is a fully managed cloud service.",
    },
    {
      title: "Managed service",
      competitor: "Limited",
      flows: true,
      description:
        "Formbricks offers a cloud option, but the self-hosted path requires infrastructure setup and ongoing maintenance. Flows is fully managed with no infrastructure to run.",
    },
    {
      title: "Free plan",
      competitor: true,
      flows: true,
      description:
        "Formbricks is free to self-host and offers a cloud free tier. Flows includes a free plan with 250 monthly tracked users and full adoption features.",
    },
    {
      title: "Workflow logic",
      competitor: "Limited",
      flows: true,
      description:
        "Formbricks supports conditional branching in survey flows. Flows supports full workflow logic for multi-step adoption experiences across tours, checklists, and surveys.",
    },
  ],
  otherDifferences: [
    {
      title: "Open source survey tool vs managed adoption platform",
      competitorDescription:
        "Formbricks is a genuinely strong open-source project. If your team wants to run surveys on your own infrastructure, control every detail of the form experience, and contribute to the codebase, Formbricks is a serious option. The open-source model also means you pay nothing for self-hosting and get full visibility into how the tool works.",
      flowsDescription:
        "Flows is purpose-built for product adoption. It is not a forms tool with adoption features added on top - it is designed from the ground up to guide users through your product. Product tours, onboarding checklists, and contextual guidance are first-class features, not afterthoughts. And as a fully managed service, there is no infrastructure to provision, monitor, or upgrade.",
    },
    {
      title: "Self-hosting overhead vs managed infrastructure",
      competitorDescription:
        "Running Formbricks self-hosted means you own your data entirely, which is a legitimate advantage for teams with strict data residency requirements. But it also means you are responsible for deployment, uptime, database backups, security patches, and upgrades. For many product teams, that overhead is not worth the control.",
      flowsDescription:
        "Flows handles all infrastructure, security, and reliability so your team can focus on building product experiences rather than running services. There is no deployment to manage, no database to maintain, and no upgrade cycle to track. You get enterprise-grade reliability without the ops burden.",
    },
    {
      title: "Forms and surveys vs full adoption toolkit",
      competitorDescription:
        "Formbricks does forms and surveys well. You can build targeted in-product surveys with solid branching logic, and the no-code builder makes it accessible to non-technical team members. But the product stops there - if you need to guide users through an onboarding flow, highlight a new feature, or run a product tour, you need a separate tool.",
      flowsDescription:
        "Flows covers the full adoption lifecycle in one platform. Surveys are one tool you reach for when you need to collect signal - but you also have tours, checklists, tooltips, and modals for when you need to guide rather than ask. Everything is interconnected, so a survey response can trigger a tour, and a checklist completion can surface an NPS prompt.",
    },
    {
      title: "Developer experience",
      competitorDescription:
        "Formbricks has a solid developer experience - the open-source codebase is readable, the API is documented, and self-hosting gives you complete control over the stack. Developers who want to go deep into the tool can read and modify the source code.",
      flowsDescription:
        "Developers aren't an afterthought in Flows, they are first-class users. We focus on the details that make building with Flows a joy: versioning, environments, APIs, and great documentation, to name a few.",
    },
  ],
  ctaBanner: {
    title: "Switch from Formbricks to Flows today",
    description:
      "Get a fully managed adoption platform with surveys, tours, and checklists built in. Start building with Flows.",
  },
};
