import { type AlternativeContentType } from "../types";
import { UserTour20, UserTourFull20 } from "icons";
import { css } from "@flows/styled-system/css";

export const usertourContent: AlternativeContentType = {
  slug: "usertour",
  seoTitle: "Usertour alternative",
  title: "The developer-first Usertour alternative",
  description:
    "Flows is the Usertour alternative for teams who want a code-first product adoption platform with full component control and transparent pricing.",
  competitor: {
    name: "Usertour",
    squareLogo: <UserTour20 role="img" aria-label="Usertour logo" />,
    fullLogo: (
      <UserTourFull20
        role="img"
        aria-label="Usertour logo"
        className={css({
          height: "24px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "Usertour is an open-source, self-hostable user onboarding platform for creating in-app product tours, checklists, and surveys. It markets itself as a self-hosted alternative to Userflow and Appcues, giving teams control over their data and infrastructure. While it covers the essentials of no-code onboarding, it uses its own overlay UI components rather than integrating with your design system, and self-hosting adds infrastructure overhead.",
    flowsContent:
      "Flows is a modern product adoption platform built for teams who want code-first control without the overhead of self-hosting. With Flows, you build workflows using your own UI components and design system—no overlays, no third-party widget UI. Flows handles state, orchestration, analytics, and targeting while you focus on building a product-native adoption experience.",
  },
  comparisonTitle: "Flows vs Usertour: Key differences",
  comparisons: [
    {
      title: "Product tours",
      competitor: true,
      flows: true,
      description:
        "Both Usertour and Flows support guided product tours and step-by-step user onboarding.",
    },
    {
      title: "Checklists",
      competitor: true,
      flows: true,
      description:
        "Both support onboarding checklists to guide users through key activation steps.",
    },
    {
      title: "Surveys",
      competitor: true,
      flows: false,
      description:
        "Usertour includes in-app surveys. Flows focuses on workflow-driven adoption rather than survey collection.",
    },
    {
      title: "Custom components",
      competitor: false,
      flows: true,
      description:
        "Flows lets you use your own UI components from your codebase. Usertour uses its own overlay widget UI.",
    },
    {
      title: "Embeddable components",
      competitor: false,
      flows: true,
      description:
        "Flows supports inline components embedded within your app's UI. Usertour relies on overlay-based tooltips and modals.",
    },
    {
      title: "Self-hostable",
      competitor: true,
      flows: false,
      description:
        "Usertour can be self-hosted for full data control. Flows is a cloud-hosted platform.",
    },
    {
      title: "Workflow logic",
      competitor: false,
      flows: true,
      description:
        "Flows supports branching workflows and conditional logic. Usertour's flows are more linear.",
    },
    {
      title: "Analytics",
      competitor: true,
      flows: true,
      description: "Both provide analytics on user progress and flow completion.",
    },
    {
      title: "Targeting",
      competitor: true,
      flows: true,
      description:
        "Both support user targeting and segmentation for showing flows to specific user groups.",
    },
    {
      title: "Localization",
      competitor: true,
      flows: true,
      description: "Both support localization for serving a global audience.",
    },
    {
      title: "Free plan",
      competitor: true,
      flows: true,
      description:
        "Usertour offers a free plan or a self-hosted option. Flows offers a free plan with 250 monthly tracked users.",
    },
  ],
  otherDifferences: [
    {
      title: "Your components, not theirs",
      competitorDescription:
        "Usertour renders its own widget UI on top of your product. The onboarding experience uses Usertour's design, not yours, which can feel inconsistent with the rest of your product.",
      flowsDescription:
        "Flows meets you where you are. You use your own UI components and design system, giving you full control to build adoption experiences that feel native to your product.",
    },
    {
      title: "Cloud vs self-hosted",
      competitorDescription:
        "Usertour is self-hosted, giving teams full control over their data and infrastructure. This is valuable for privacy-sensitive use cases but adds operational overhead for most teams.",
      flowsDescription:
        "Flows is cloud-hosted, meaning zero infrastructure to manage. You get enterprise-grade reliability, automatic updates, and a secure, managed environment out of the box.",
    },
    {
      title: "From linear tours to full workflows",
      competitorDescription:
        "Usertour covers standard onboarding patterns: tours, checklists, and surveys. Complex branching logic and multi-session journeys require workarounds.",
      flowsDescription:
        "Flows supports full workflows with branching logic, inline components, and long-running journeys that persist across sessions and adapt to user behavior.",
    },
    {
      title: "Built for developers",
      competitorDescription:
        "Usertour is primarily designed for non-technical users creating flows through a visual editor using its own widget components.",
      flowsDescription:
        "Developers are first-class users in Flows. Versioning, environments, APIs, and great documentation make building with Flows a genuinely good developer experience.",
    },
    {
      title: "Pricing",
      competitorDescription:
        "Usertour's open-source edition is free to self-host, but self-hosting carries infrastructure costs and ongoing maintenance. A cloud plan is available with separate pricing.",
      flowsDescription:
        "Flows offers transparent usage-based pricing with no hidden fees. Start for free with 250 monthly tracked users and upgrade only when you need to.",
    },
  ],
  ctaBanner: {
    title: "Switch from Usertour to Flows today",
    description:
      "Build product-native adoption workflows with your own components. Start for free with Flows.",
  },
};
