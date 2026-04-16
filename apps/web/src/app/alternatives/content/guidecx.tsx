// cSpell:words Guidecx

import { css } from "@flows/styled-system/css";
import { GuideCX20, GuideCXFull20 } from "icons";

import { type AlternativeContentType } from "../types";

export const guidecxContent: AlternativeContentType = {
  slug: "guidecx",
  seoTitle: "GUIDEcx alternative",
  title: "The in-app product adoption alternative to GUIDEcx",
  description:
    "Flows is the GUIDEcx alternative for teams who want in-app guidance built into their product, not external onboarding project tracking.",
  competitor: {
    name: "GUIDEcx",
    squareLogo: <GuideCX20 role="img" aria-label="GUIDEcx logo" />,
    fullLogo: (
      <GuideCXFull20
        role="img"
        aria-label="GUIDEcx logo"
        className={css({
          height: "24px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "GUIDEcx is a client onboarding project management platform. It helps B2B teams manage the implementation of new accounts through task tracking, milestones, and stakeholder collaboration portals. While useful for coordinating complex onboarding projects, it operates outside your product and doesn't deliver in-app guidance to your end users.",
    flowsContent:
      "Flows is a product adoption platform that lives inside your product. With Flows, you build in-app workflows that guide users through features and onboarding journeys using your own components and design system. Where GUIDEcx manages onboarding projects from the outside, Flows guides users from within.",
  },
  comparisonTitle: "Flows vs GUIDEcx: Key differences",
  comparisons: [
    {
      title: "In-app guidance",
      competitor: false,
      flows: true,
      description:
        "Flows delivers in-app tours, tooltips, and workflows directly inside your product. GUIDEcx manages onboarding projects in a separate portal.",
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
      title: "User targeting",
      competitor: false,
      flows: true,
      description:
        "Flows targets individual users with the right guidance at the right moment based on behavior and segment.",
    },
    {
      title: "Workflow logic",
      competitor: false,
      flows: true,
      description:
        "Flows supports branching workflows and conditional logic tied to user behavior inside your product.",
    },
    {
      title: "Free plan",
      competitor: false,
      flows: true,
      description:
        "Flows offers a free plan with 250 monthly tracked users. GUIDEcx requires contacting sales for pricing.",
    },
    {
      title: "Localization",
      competitor: false,
      flows: true,
      description: "Flows supports localization out of the box.",
    },
    {
      title: "Transparent pricing",
      competitor: false,
      flows: true,
      description:
        "Flows uses transparent, usage-based pricing. GUIDEcx does not publish pricing publicly.",
    },
    {
      title: "Developer experience",
      competitor: false,
      flows: true,
      description:
        "Flows offers APIs, versioning, environments, and documentation built for developers.",
    },
    {
      title: "Surveys",
      competitor: true,
      flows: true,
      description:
        "Both services support in-app surveys for collecting user feedback.",
    },
  ],
  otherDifferences: [
    {
      title: "Inside your product vs outside it",
      competitorDescription:
        "GUIDEcx coordinates onboarding through a separate client portal where tasks, milestones, and stakeholders are managed. Your end users interact with GUIDEcx's platform, not yours.",
      flowsDescription:
        "Flows lives inside your product. Every tour, checklist, and message is delivered within your own UI, keeping users engaged with your product rather than navigating away to an external portal.",
    },
    {
      title: "Self-serve adoption vs managed projects",
      competitorDescription:
        "GUIDEcx is built for high-touch B2B onboarding where a customer success team manages each implementation project. It's optimized for coordination between teams, not for guiding individual end users through a product.",
      flowsDescription:
        "Flows is built for scalable, self-serve product adoption. Workflows trigger automatically for the right users at the right time, without requiring a CSM to manage each onboarding manually.",
    },
    {
      title: "Own the user experience",
      competitorDescription:
        "GUIDEcx onboarding happens through GUIDEcx's interface. Your brand, your design system, and your product UI are not part of the onboarding experience.",
      flowsDescription:
        "Flows meets you where you are. You can use your own UI components and technologies, giving you the full flexibility of code to build relevant, contextual workflows that fit your product, meet your quality bar, and don't get in the way.",
    },
    {
      title: "Pricing",
      competitorDescription:
        "GUIDEcx is an enterprise-oriented platform targeted at B2B companies with complex client implementations. Pricing is not publicly listed and requires sales engagement.",
      flowsDescription:
        "Flows offers transparent usage-based pricing with no hidden fees. You can start for free with 250 monthly tracked users and upgrade only when you need to. No sales calls, no hidden fees, just a clear pricing model that scales with your usage.",
    },
  ],
  ctaBanner: {
    title: "Guide users inside your product with Flows",
    description:
      "Build in-app adoption workflows that live inside your product. Start for free with Flows.",
  },
};
