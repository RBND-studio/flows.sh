import { css } from "@flows/styled-system/css";
import { InlineCode } from "app/examples/typography";
import { links } from "lib/links";

import { type TechnologyContentType } from "../types";

export const solidUserOnboardingContent: TechnologyContentType = {
  slug: "solid-user-onboarding",
  seoTitle: "SolidJS user onboarding",
  title: (
    <>
      User onboarding built
      <br />
      for SolidJS
    </>
  ),
  description:
    "Flows works alongside SolidJS signals and SolidStart. Add user onboarding without disrupting your reactivity model.",
  framework: {
    name: "SolidJS",
  },
  featuresIntro: {
    title: "How Flows powers SolidJS user onboarding",
    description:
      "Flows initializes client-side and works alongside SolidJS's fine-grained reactivity. Trigger onboarding workflows from effects, route events, or user actions without disrupting your signal graph.",
  },
  faqs: [
    {
      title: "How do I add user onboarding to a SolidJS app?",
      content: (
        <>
          Initialize the Flows SDK inside an <InlineCode>onMount</InlineCode> callback or a
          root-level effect and pass user identity and properties. Flows evaluates targeting rules
          independently and triggers the right onboarding workflow without adding reactive
          primitives to your own signal graph. See the{" "}
          <a
            href={links.docs.sdk.frameworks.solid}
            target="_blank"
            rel="noopener noreferrer"
            className={css({ textDecoration: "underline", display: "inline" })}
          >
            SolidJS installation guide
          </a>{" "}
          for step-by-step instructions and code examples.
        </>
      ),
      schemaContent:
        "Initialize the Flows SDK inside an onMount callback or a root-level effect and pass user identity and properties. Flows evaluates targeting rules independently and triggers the right onboarding workflow without adding reactive primitives to your own signal graph. See the SolidJS installation guide for step-by-step instructions and code examples.",
    },
    {
      title: "Does Flows work with SolidStart?",
      content: (
        <>
          Yes. Initialize Flows inside an <InlineCode>onMount</InlineCode> method to ensure it runs
          in the browser. SolidStart route transitions are detected automatically, so onboarding
          steps can trigger on specific page visits without custom router hooks.
        </>
      ),
      schemaContent:
        "Yes. Initialize Flows inside an onMount method to ensure it runs in the browser. SolidStart route transitions are detected automatically, so onboarding steps can trigger on specific page visits without custom router hooks.",
    },
    {
      title: "Can I use my own SolidJS components for onboarding UI?",
      content:
        "Yes. Flows is headless. You can use your own SolidJS components and Flows controls when they appear. Your reactivity model, stores, and component patterns stay exactly as they are.",
    },
    {
      title: "How does Flows interact with SolidJS signals?",
      content:
        "Flows manages its own internal state independently from your signal graph. If you need to, you can listen and react to workflow changes in your SolidJS components with supplied Flows methods.",
    },
    {
      title: "How do I target specific users with onboarding in SolidJS?",
      content: (
        <>
          Pass user properties (like <InlineCode>plan</InlineCode>,{" "}
          <InlineCode>createdAt</InlineCode>, or custom attributes) when initializing Flows.
          Targeting rules are defined in the Flows dashboard and evaluated locally, so new users get
          onboarding flows while returning users are automatically skipped. See the guide on{" "}
          <a
            href={links.docs.guide.targetNewUsers}
            target="_blank"
            rel="noopener noreferrer"
            className={css({ textDecoration: "underline", display: "inline" })}
          >
            targeting only new users
          </a>
          .
        </>
      ),
      schemaContent:
        "Pass user properties (like plan, createdAt, or custom attributes) when initializing Flows. Targeting rules are defined in the Flows dashboard and evaluated locally, so new users get onboarding flows while returning users are automatically skipped. See the guide on targeting only new users.",
    },
  ],
  ctaBanner: {
    title: "Build better SolidJS user onboarding today",
    description:
      "Flows works with fine-grained reactivity, not against it. Add onboarding to your SolidJS app without compromising performance.",
  },
};
