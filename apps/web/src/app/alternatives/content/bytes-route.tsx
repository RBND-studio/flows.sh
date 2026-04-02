import { type AlternativeContentType } from "../types";
import { BytesRoute20, BytesRouteFull20 } from "icons";
import { css } from "@flows/styled-system/css";

export const bytesRouteContent: AlternativeContentType = {
  slug: "bytes-route",
  seoTitle: "Bytes Route alternative",
  title: "The fully-featured Bytes Route alternative",
  description:
    "Flows is the Bytes Route alternative for product teams who want a code-first adoption platform with full component control and transparent, scalable pricing.",
  competitor: {
    name: "Bytes Route",
    squareLogo: <BytesRoute20 role="img" aria-label="Bytes Route logo" />,
    fullLogo: (
      <BytesRouteFull20
        role="img"
        aria-label="Bytes Route logo"
        className={css({
          height: "28px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "Bytes Route is a digital adoption platform for creating customized walkthroughs, tooltips, and in-app guides to help new users navigate software. It provides a visual editor for building guided experiences without code. Like most DAPs, it works by injecting its own overlay components on top of your product rather than integrating with your design system, and it targets teams looking for a plug-and-play onboarding solution.",
    flowsContent:
      "Flows is a modern alternative to Bytes Route for teams who want more than a plug-and-play DAP. With Flows, you build workflows using your own UI components—not overlay widgets—giving you full control over the look, feel, and behavior of your adoption experiences. Flows combines developer-first tooling with a collaborative dashboard so both developers and product managers can work without bottlenecks.",
  },
  comparisonTitle: "Flows vs Bytes Route: Key differences",
  comparisons: [
    {
      title: "Onboarding basics",
      competitor: true,
      flows: true,
      description:
        "Both services support guided walkthroughs, tooltips, and in-app guides for user onboarding.",
    },
    {
      title: "Embeddable components",
      competitor: false,
      flows: true,
      description:
        "Flows lets you embed components directly within your app's layout. Bytes Route uses overlay-style guides on top of your product.",
    },
    {
      title: "Custom components",
      competitor: false,
      flows: true,
      description:
        "Flows lets you use your own design system and components. Bytes Route relies on its own widget UI.",
    },
    {
      title: "Workflow logic",
      competitor: false,
      flows: true,
      description:
        "Flows supports branching workflows and conditional logic. Bytes Route guides are primarily linear.",
    },
    {
      title: "Analytics",
      competitor: true,
      flows: true,
      description: "Both provide analytics on guide performance and user progress.",
    },
    {
      title: "Targeting",
      competitor: true,
      flows: true,
      description: "Both support targeting specific user segments with relevant guides.",
    },
    {
      title: "Localization",
      competitor: true,
      flows: true,
      description:
        "Flows supports localization out of the box. Bytes Route has multi-language support for a limited set of languages.",
    },
    {
      title: "Resilient against ad blockers",
      competitor: false,
      flows: true,
      description:
        "Flows is bundled with your product, making it resilient against script blockers. External DAP scripts can be blocked by users.",
    },
    {
      title: "Free plan",
      competitor: true,
      flows: true,
      description:
        "Flows offers a free plan with 250 monthly tracked users. Bytes Route offers a free plan with 3 active product tours.",
    },
    {
      title: "Transparent pricing",
      competitor: true,
      flows: true,
      description:
        "Flows uses transparent, usage-based pricing. Bytes Route pricing is also publicly available.",
    },
  ],
  otherDifferences: [
    {
      title: "Your components, not theirs",
      competitorDescription:
        "Bytes Route overlays its own widget UI on top of your product. Walkthroughs are built from their component templates, which may clash with your design system or product quality bar.",
      flowsDescription:
        "Flows meets you where you are. You use your own UI components and technologies, giving you full control to build adoption experiences that feel native to your product.",
    },
    {
      title: "Built for developers and PMs",
      competitorDescription:
        "Bytes Route's visual editor is designed for non-technical users. Developer-facing APIs and programmatic control are limited.",
      flowsDescription:
        "Flows is built for both developers and non-developers. Developers own the components and integration; product managers control workflow logic and content without writing code.",
    },
    {
      title: "From guides to workflows",
      competitorDescription:
        "Bytes Route is designed for standard linear walkthroughs. Complex branching logic and multi-session journeys are difficult to express in its model.",
      flowsDescription:
        "Flows supports full workflows with branching logic, inline components, and long-running journeys that persist across sessions.",
    },
    {
      title: "Maintenance overhead",
      competitorDescription:
        "As your product UI changes, Bytes Route guides can break or become outdated. Keeping walkthroughs aligned with your product requires manual re-testing and updates.",
      flowsDescription:
        "Flows adapts naturally as your product changes, reducing maintenance overhead and the risk of broken onboarding experiences.",
    },
  ],
  ctaBanner: {
    title: "Switch from Bytes Route to Flows today",
    description:
      "Build product-native adoption workflows with your own components. Start for free with Flows.",
  },
};
