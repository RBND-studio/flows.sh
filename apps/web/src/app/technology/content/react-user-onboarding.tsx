import { css } from "@flows/styled-system/css";
import { InlineCode } from "app/examples/typography";
import { links } from "lib/links";

import { type TechnologyContentType } from "../types";

export const reactUserOnboardingContent: TechnologyContentType = {
  slug: "react-user-onboarding",
  seoTitle: "React user onboarding",
  title: (
    <>
      React user onboarding
      <br />
      with your own components
    </>
  ),
  description:
    "Flows is a headless user onboarding SDK for React. Use your own components and iterate without code changes.",
  framework: {
    name: "React",
  },
  featuresIntro: {
    title: "How Flows powers React user onboarding",
    description:
      "From first login to activation, Flows gives you everything you need to build onboarding that converts: product tours, checklists, tooltips, and more, all inside your React app.",
  },
  faqs: [
    {
      title: "What's the best way to onboard new users in a React app?",
      content:
        "Effective user onboarding in React combines contextual tooltips, guided product tours, and inline checklists. With Flows, you can build all of these using your own React components and orchestrate them as a workflow, so users get a personalized, sequential experience without you writing complex state logic.",
    },
    {
      title: "How do I trigger onboarding flows for new React users?",
      content: (
        <>
          Pass user properties (like <InlineCode>isNewUser</InlineCode> or{" "}
          <InlineCode>signupDate</InlineCode>) to the Flows SDK and create targeting rules in the
          dashboard. Flows automatically triggers the right workflow for the right user without
          conditional rendering boilerplate in your components. Read our guide on{" "}
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
        "Pass user properties (like isNewUser or signupDate) to the Flows SDK and create targeting rules in the dashboard. Flows automatically triggers the right workflow for the right user without conditional rendering boilerplate in your components. Read our guide on targeting only new users.",
    },
    {
      title: "Can I create multi-step onboarding with React?",
      content:
        "Yes. Flows workflows support multi-step sequences with branching logic, completion tracking across sessions, and progress persistence. Build a checklist, a step-by-step tour, or a combination, all managed by Flows while your UI stays in React.",
    },
    {
      title: "How do I measure onboarding success in my React app?",
      content:
        "Flows includes built-in analytics that track workflow starts, completions, and drop-off at each step. You get per-workflow metrics without needing to instrument every component manually or configure a separate analytics tool.",
    },
    {
      title: "Can non-developers update onboarding flows in a React app?",
      content: (
        <>
          Yes. Once developers integrate the Flows SDK and register components, product managers and
          designers can create and update onboarding workflows in the Flows dashboard without any
          code changes or redeployments. See the{" "}
          <a
            href={links.docs.sdk.reactInstallation}
            target="_blank"
            rel="noopener noreferrer"
            className={css({ textDecoration: "underline", display: "inline" })}
          >
            React installation guide
          </a>{" "}
          for details on how to set Flows up in your app.
        </>
      ),
      schemaContent:
        "Yes. Once developers integrate the Flows SDK and register components, product managers and designers can create and update onboarding workflows in the Flows dashboard without any code changes or redeployments. See the React installation guide for details on how to set Flows up in your app.",
    },
  ],
  ctaBanner: {
    title: "Build better React user onboarding today",
    description:
      "Stop hard-coding onboarding logic. Use Flows to build flexible, data-driven onboarding experiences that guide users to activation.",
  },
};
