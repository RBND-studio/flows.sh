import { css } from "@flows/styled-system/css";
import { ProductFruits20, ProductFruitsFull20 } from "icons";

import { type AlternativeContentType } from "../types";

export const productfruitsContent: AlternativeContentType = {
  slug: "productfruits",
  seoTitle: "Product Fruits alternative",
  title: "The developer-friendly Product Fruits alternative",
  description:
    "Flows is the Product Fruits alternative for teams who want full control over their onboarding UI and a developer-first workflow.",
  competitor: {
    name: "Product Fruits",
    squareLogo: <ProductFruits20 role="img" aria-label="Product Fruits logo" />,
    fullLogo: (
      <ProductFruitsFull20
        role="img"
        aria-label="Product Fruits logo"
        className={css({
          height: "24px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "Product Fruits is a no-code product adoption platform offering tours, checklists, surveys, and an in-app help widget. While it covers a broad range of onboarding features at an affordable price, customization is limited to their predefined templates and styling options. Teams that need deeper control over UI and behavior often find themselves hitting the ceiling.",
    flowsContent:
      "Flows is a modern alternative to Product Fruits built for teams who want to own their user experience. With Flows, you build workflows using your own components and design system, combining the flexibility of code with the ease of a headless CMS. Product managers, designers, and developers share a platform that gives them each what they need.",
  },
  comparisonTitle: "Flows vs Product Fruits: Key differences",
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
        "Product Fruits customization is limited to their template builder and CSS overrides. Flows gives you full control over both UI and logic.",
    },
    {
      title: "Free plan",
      competitor: false,
      flows: true,
      description:
        "Flows offers a free plan with 250 monthly tracked users. Product Fruits offers only a time-limited trial.",
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
      competitor: true,
      flows: true,
      description:
        "Both services offer transparent pricing. Flows uses usage-based pricing that scales predictably.",
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
      title: "Own the user experience",
      competitorDescription:
        "Product Fruits uses predefined UI components for tours, checklists, and surveys. While functional, they don't match your product's design system and can feel like a third-party overlay.",
      flowsDescription:
        "Flows meets you where you are. You can use your own UI components and technologies, giving you the full flexibility of code to build relevant, contextual workflows that fit your product, meet your quality bar, and don't get in the way.",
    },
    {
      title: "Built for developers",
      competitorDescription:
        "Product Fruits focuses on providing a no-code solution for non-technical users, but this comes at the cost of developer experience. Deeper customization and integration with modern tech stacks can be challenging.",
      flowsDescription:
        "Developers aren't an afterthought in Flows, they are first-class users. We focus on the details that make building with Flows a joy: versioning, environments, APIs, and great documentation, to name a few.",
    },
    {
      title: "Customer support",
      competitorDescription:
        "Product Fruits offers support through their help center and email, with priority support on higher plans.",
      flowsDescription:
        "Flows is a small company built and run by a team that cares deeply about your success. Whether you're on the free plan or a paid one, you get fast, thoughtful support directly from the people building the product.",
    },
    {
      title: "Pricing",
      competitorDescription:
        "Product Fruits offers transparent pricing, but costs increase as your MAU count grows and you need access to more features.",
      flowsDescription:
        "Flows offers transparent usage-based pricing with no hidden fees. You can start for free with 250 monthly active users and upgrade only when you need to. No sales calls, no hidden fees, just a clear pricing model that scales with your usage.",
    },
  ],
  ctaBanner: {
    title: "Switch from Product Fruits to Flows today",
    description: "Build product adoption experiences you fully control. Start building with Flows.",
  },
};
