// cspell:words typeform

import { css } from "@flows/styled-system/css";
import { Typeform20, TypeformFull20 } from "icons";

import { type AlternativeContentType } from "../types";
import { FREE_LIMIT } from "shared";

export const typeformContent: AlternativeContentType = {
  slug: "typeform",
  seoTitle: "Typeform alternative",
  title: "The in-product adoption alternative to Typeform",
  description:
    "Flows is the Typeform alternative for product teams who need in-product adoption tools, not standalone external forms and surveys.",
  competitor: {
    name: "Typeform",
    squareLogo: <Typeform20 role="img" aria-label="Typeform logo" />,
    fullLogo: (
      <TypeformFull20
        role="img"
        aria-label="Typeform logo"
        className={css({
          height: "20px",
          width: "auto",
        })}
      />
    ),
  },
  summary: {
    competitorContent:
      "Typeform is a conversational form and survey builder known for its polished, engaging multi-step experiences. Teams use Typeform for lead generation forms, customer research surveys, onboarding questionnaires, and external data collection - and its high completion rates make it genuinely effective at these use cases. But Typeform is built for standalone, external forms. It is not designed to run inside your product as part of a native in-app experience, and it has no product tours, onboarding checklists, or adoption tools.",
    flowsContent:
      "Flows is built specifically for in-product adoption. While Typeform excels at standalone external forms, Flows delivers product tours, onboarding checklists, contextual tooltips, and in-app surveys that feel native to your product. Everything is built with your own components and adapts to your design system - so guidance feels like part of your product, not a third-party overlay.",
  },
  comparisonTitle: "Flows vs Typeform: Key differences",
  comparisons: [
    {
      title: "In-app surveys",
      competitor: false,
      flows: true,
      description:
        "Flows delivers surveys natively inside your product with full adoption workflow integration. Typeform is designed for standalone external forms accessed via link or iframe embed.",
    },
    {
      title: "External forms",
      competitor: true,
      flows: false,
      description:
        "Typeform excels at standalone external forms - lead gen, research, and registration. Flows is focused on in-product adoption experiences rather than external data collection.",
    },
    {
      title: "Product tours",
      competitor: false,
      flows: true,
      description:
        "Flows supports full product tours with tooltips, modals, and step-by-step guidance. Typeform does not offer product tours.",
    },
    {
      title: "Onboarding checklists",
      competitor: false,
      flows: true,
      description:
        "Flows includes onboarding checklists to guide users through key actions. Typeform does not have this feature.",
    },
    {
      title: "Embeddable components",
      competitor: false,
      flows: true,
      description:
        "Flows embeds components natively into your product UI. Typeform can be embedded via iframe but runs as a separate experience detached from your product's design.",
    },
    {
      title: "Custom components",
      competitor: false,
      flows: true,
      description:
        "Flows allows you to use your design system and plug in components directly from your codebase. Typeform forms use Typeform's own visual style.",
    },
    {
      title: "Workflow logic",
      competitor: "Limited",
      flows: true,
      description:
        "Typeform supports conditional branching within forms. Flows supports full workflow logic across tours, checklists, and surveys for multi-step adoption experiences.",
    },
    {
      title: "Free plan",
      competitor: true,
      flows: true,
      description: `Both services offer a free plan. Typeform's free plan has a response limit; Flows includes ${FREE_LIMIT} monthly tracked users with full adoption features.`,
    },
    {
      title: "Localization",
      competitor: true,
      flows: true,
      description: "Both services support multiple languages for reaching a global audience.",
    },
  ],
  otherDifferences: [
    {
      title: "External forms vs in-product experiences",
      competitorDescription:
        "Typeform is designed for forms you send to people - survey links in emails, lead capture on landing pages, research questionnaires shared via URL. It is excellent at this. The conversational format drives high completion rates, and the design is polished enough to represent your brand in external contexts. But 'inside your product' is not where Typeform is built to live.",
      flowsDescription:
        "Flows is built for experiences inside your product. Product tours guide new users through your key features. Onboarding checklists keep users on track after signup. Contextual tooltips answer questions at the moment they arise. In-app surveys collect feedback without pulling users out of their workflow. These are fundamentally different from external forms - they need to feel native, load instantly, and adapt to your product's state.",
    },
    {
      title: "Beautiful forms vs adoption workflows",
      competitorDescription:
        "Typeform's strength is the form experience itself - the one-question-at-a-time format, smooth transitions, and high-conversion design patterns. For standalone survey use cases, this is genuinely valuable. But a beautiful form that sits on its own page does nothing to guide a user through your product's activation steps or surface the right feature at the right moment.",
      flowsDescription:
        "Flows is designed around the adoption workflow, not the form. You define what you want users to do, build the steps to get them there, and Flows delivers the right guidance at the right moment. Surveys are part of that workflow - you can ask a question after a user completes onboarding, branch based on their answer, and immediately route them to the next relevant experience.",
    },
    {
      title: "Own the user experience",
      competitorDescription:
        "Typeform forms are rendered in Typeform's UI - either as standalone pages or as iframes embedded into your product. Even when embedded, the Typeform experience is visually distinct from your product's design system. This works for external forms but creates a jarring shift when used in an in-product context.",
      flowsDescription:
        "Flows meets you where you are. You can use your own UI components and technologies, giving you full flexibility to build relevant, contextual workflows that fit your product, meet your quality bar, and don't get in the way.",
    },
    {
      title: "Built for developers",
      competitorDescription:
        "Typeform's API and developer tools are primarily focused on extracting form responses and embedding forms in external pages. The platform is optimized for designers and marketers building standalone form experiences, not developers building in-product adoption systems.",
      flowsDescription:
        "Developers aren't an afterthought in Flows, they are first-class users. We focus on the details that make building with Flows a joy: versioning, environments, APIs, and great documentation, to name a few.",
    },
  ],
  ctaBanner: {
    title: "Switch from Typeform to Flows today",
    description:
      "Get native in-product adoption experiences instead of external forms. Start building with Flows.",
  },
};
