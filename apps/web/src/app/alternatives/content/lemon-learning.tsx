import { type AlternativeContentType } from "../types";
import { Text } from "ui";
import { Box, Flex } from "@flows/styled-system/jsx";

export const lemonLearningContent: AlternativeContentType = {
  slug: "lemon-learning",
  seoTitle: "Lemon Learning alternative",
  title: "The modern and affordable Lemon Learning alternative",
  description:
    "Flows is the Lemon Learning alternative for product teams who want flexible in-app adoption without enterprise complexity or opaque pricing.",
  competitor: {
    name: "Lemon Learning",
    squareLogo: (
      <Box
        w={20}
        h={20}
        bg="rgb(250, 225, 0)"
        role="img"
        aria-label="Lemon Learning logo"
        borderRadius="50%"
      />
    ),
    fullLogo: (
      <Flex align="center" gap="space8">
        <Box w={20} h={20} bg="rgb(250, 225, 0)" borderRadius="50%" />
        <Text variant="titleL">Lemon Learning</Text>
      </Flex>
    ),
  },
  summary: {
    competitorContent:
      "Lemon Learning is an enterprise digital adoption platform providing interactive in-app guidance, AI assistance, and analytics for large organizations. It's built for enterprise IT and change management teams rolling out internal software. Pricing is not public and requires a demo, making it inaccessible to smaller teams or anyone who wants to evaluate the product before talking to sales.",
    flowsContent:
      "Flows is a modern alternative to Lemon Learning designed for product teams who want to ship great adoption experiences without enterprise overhead. With Flows, you build workflows using your own components and design system, set up in minutes, and pay only for what you use. No enterprise contracts, no demo calls, just a clear tool for building better in-app guidance.",
  },
  comparisonTitle: "Flows vs Lemon Learning: Key differences",
  comparisons: [
    {
      title: "Onboarding basics",
      competitor: true,
      flows: true,
      description:
        "Both services support in-app guided walkthroughs and contextual tooltips for user onboarding.",
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
      title: "Free plan",
      competitor: false,
      flows: true,
      description:
        "Flows offers a free plan with 250 monthly tracked users. Lemon Learning requires a demo and enterprise contract.",
    },
    {
      title: "Self-serve setup",
      competitor: false,
      flows: true,
      description:
        "Flows lets you sign up, integrate, and start building in minutes. Lemon Learning requires a sales process to get started.",
    },
    {
      title: "Localization",
      competitor: true,
      flows: true,
      description: "Both services support localization, allowing you to serve a global audience.",
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
        "Flows uses transparent, usage-based pricing. Lemon Learning does not publish pricing and requires a demo.",
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
      competitor: false,
      flows: true,
      description:
        "Flows includes built-in NPS, CSAT, PMF, and custom surveys for collecting user feedback. Lemon Learning does not offer native survey capabilities.",
    },
  ],
  otherDifferences: [
    {
      title: "Product teams vs enterprise IT",
      competitorDescription:
        "Lemon Learning is built for enterprise IT and change management departments deploying internal tools at scale. The platform's complexity, pricing model, and implementation process reflect this enterprise-first audience.",
      flowsDescription:
        "Flows is built for product teams who want to guide their own users. Whether it's onboarding, feature adoption, or education, Flows helps you build experiences that are part of your product.",
    },
    {
      title: "Own the user experience",
      competitorDescription:
        "Lemon Learning overlays its own guided UI on top of your application. The experience uses their design components, not yours, and can feel separate from your product.",
      flowsDescription:
        "Flows meets you where you are. You can use your own UI components and technologies, giving you the full flexibility of code to build relevant, contextual workflows that fit your product, meet your quality bar, and don't get in the way.",
    },
    {
      title: "Built for developers",
      competitorDescription:
        "Lemon Learning focuses on non-technical content creators and IT administrators. Developer-facing APIs and programmatic control are secondary.",
      flowsDescription:
        "Developers aren't an afterthought in Flows, they are first-class users. We focus on the details that make building with Flows a joy: versioning, environments, APIs, and great documentation, to name a few.",
    },
    {
      title: "Pricing",
      competitorDescription:
        "Lemon Learning doesn't publish pricing and requires a demo to get started. Enterprise contracts are tailored to each organization, making it hard to evaluate cost upfront.",
      flowsDescription:
        "Flows offers transparent usage-based pricing with no hidden fees. You can start for free with 250 monthly tracked users and upgrade only when you need to. No sales calls, no hidden fees, just a clear pricing model that scales with your usage.",
    },
  ],
  ctaBanner: {
    title: "Switch from Lemon Learning to Flows today",
    description:
      "Get powerful in-app adoption without enterprise complexity. Start building with Flows in minutes.",
  },
};
