import { css } from "@flows/styled-system/css";
import { InlineCode } from "app/examples/typography";
import { links } from "lib/links";

import { type TechnologyContentType } from "../types";

export const nextjsUserOnboardingContent: TechnologyContentType = {
  slug: "nextjs-user-onboarding",
  seoTitle: "Next.js user onboarding",
  title: (
    <>
      User onboarding for
      <br />
      Next.js apps
    </>
  ),
  description:
    "Flows integrates with Next.js, works client-side, and lets your team iterate on onboarding without code changes.",
  framework: {
    name: "Next.js",
  },
  featuresIntro: {
    title: "How Flows powers Next.js user onboarding",
    description:
      "Flows integrates into any Next.js setup. Build onboarding tours, checklists, and tooltips that trigger on first login, specific routes, or user actions.",
  },
  faqs: [
    {
      title: "How do I add user onboarding to a Next.js app?",
      content: (
        <>
          Add <InlineCode>FlowsProvider</InlineCode> to your root layout and pass user identity
          after authentication. Flows evaluates targeting rules client-side and triggers the right
          onboarding workflow automatically, with no custom logic needed in your pages or
          components. The{" "}
          <a
            href={links.docs.sdk.frameworks.nextjs}
            target="_blank"
            rel="noopener noreferrer"
            className={css({ textDecoration: "underline", display: "inline" })}
          >
            Next.js installation guide
          </a>{" "}
          walks you through the setup process with code examples.
        </>
      ),
      schemaContent:
        "Add FlowsProvider to your root layout and pass user identity after authentication. Flows evaluates targeting rules client-side and triggers the right onboarding workflow automatically, with no custom logic needed in your pages or components. The Next.js installation guide walks you through the setup process with code examples.",
    },
    {
      title: "Can onboarding flows trigger on specific Next.js routes?",
      content:
        "Yes. Flows detects client-side navigation and evaluates route-based trigger conditions automatically. You can set up onboarding steps that activate only when a user visits a specific page, without any route-specific code.",
    },
    {
      title: "Will Flows cause full page reloads when linking to a page in my app?",
      content: (
        <>
          No. You can pass Flows a Next.js <InlineCode>Link</InlineCode> component to use for any
          onboarding steps that link to other pages in your app. This ensures smooth client-side
          navigation without full page reloads.
        </>
      ),
      schemaContent:
        "No. You can pass Flows a Next.js Link component to use for any onboarding steps that link to other pages in your app. This ensures smooth client-side navigation without full page reloads.",
    },
    {
      title: "How does Flows handle first-time vs returning users in Next.js?",
      content: (
        <>
          Pass user metadata (like <InlineCode>createdAt</InlineCode> or a{" "}
          <InlineCode>hasCompletedOnboarding</InlineCode> flag) to the Flows SDK. Target new users
          with onboarding workflows and exclude returning users, all configured in the Flows
          dashboard, not in your codebase. See the guide on{" "}
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
        "Pass user metadata (like createdAt or a hasCompletedOnboarding flag) to the Flows SDK. Target new users with onboarding workflows and exclude returning users, all configured in the Flows dashboard, not in your codebase. See the guide on targeting only new users.",
    },
    {
      title: "Will onboarding flows affect my Next.js app's performance?",
      content:
        "Flows loads asynchronously and only activates workflows for users who match targeting rules. For most users in a session, there is zero overhead. The SDK is small and doesn't block rendering.",
    },
    {
      title: "Can we ship onboarding changes without redeploying?",
      content:
        "Yes. Once the Flows SDK is integrated, non-developers can create, edit, and publish onboarding workflows from the Flows dashboard. No code changes or redeployments needed. Iterate on onboarding as fast as you can think of the change.",
    },
  ],
  ctaBanner: {
    title: "Build better Next.js user onboarding today",
    description:
      "Integrate once and let your team iterate on onboarding without touching code. Flows works natively with Next.js App Router.",
  },
};
