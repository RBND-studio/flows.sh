import { css } from "@flows/styled-system/css";
import { InlineCode } from "app/examples/typography";
import { links } from "lib/links";

import { type TechnologyContentType } from "../types";

export const javascriptUserOnboardingContent: TechnologyContentType = {
  slug: "javascript-user-onboarding",
  seoTitle: "JavaScript user onboarding",
  title: (
    <>
      User onboarding for
      <br />
      any JavaScript app
    </>
  ),
  description:
    "Flows works with any JavaScript stack. Add user onboarding to vanilla JS or legacy codebases without a new framework.",
  framework: {
    name: "JavaScript",
  },
  featuresIntro: {
    title: "How Flows works with JavaScript",
    description:
      "The Flows JavaScript SDK is framework-agnostic. Load it via npm, call init with user identity, and Flows handles onboarding workflow activation from there.",
  },
  faqs: [
    {
      title: "How do I add user onboarding to a vanilla JavaScript app?",
      content: (
        <>
          Load the Flows SDK via npm, call <InlineCode>init()</InlineCode> with your organization ID
          and user identity, and define your onboarding workflows in the Flows dashboard. No
          framework, build tool, or bundler required. See the{" "}
          <a
            href={links.docs.sdk.javascriptInstallation}
            target="_blank"
            rel="noopener noreferrer"
            className={css({ textDecoration: "underline", display: "inline" })}
          >
            JavaScript installation guide
          </a>{" "}
          for step-by-step setup instructions.
        </>
      ),
      schemaContent:
        "Load the Flows SDK via npm, call init() with your organization ID and user identity, and define your onboarding workflows in the Flows dashboard. No framework, build tool, or bundler required. See the JavaScript installation guide for step-by-step setup instructions.",
    },

    {
      title: "How do I target specific users in a JavaScript app?",
      content: (
        <>
          Pass user properties as a plain object when calling <InlineCode>init()</InlineCode>. These
          can include any attributes your backend exposes, such as plan, signup date, or feature
          flags. Targeting rules are defined in the Flows dashboard and evaluated client-side, so no
          additional server logic is needed. See the guide on{" "}
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
        "Pass user properties as a plain object when calling init(). These can include any attributes your backend exposes, such as plan, signup date, or feature flags. Targeting rules are defined in the Flows dashboard and evaluated client-side, so no additional server logic is needed. See the guide on targeting only new users.",
    },
    {
      title: "Can I render custom UI for onboarding in vanilla JavaScript?",
      content:
        "Yes. Flows is headless. You can use any HTML custom element to render Flows components. This will allow you to use existing UI patterns, template or a component library without adopting a new rendering approach.",
    },
    {
      title: "Can non-developers update onboarding without redeploying?",
      content:
        "Yes. Once the Flows SDK is on the page, product managers and designers can create and update onboarding workflows entirely from the Flows dashboard. No JavaScript changes, or redeployments needed.",
    },
  ],
  ctaBanner: {
    title: "Add user onboarding to any JavaScript app",
    description:
      "No framework required. Flows works with whatever JavaScript framework you're running.",
  },
};
