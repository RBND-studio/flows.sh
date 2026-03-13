// cspell:words navigations

import { css } from "@flows/styled-system/css";
import { InlineCode } from "app/examples/typography";
import { links } from "lib/links";

import { type TechnologyContentType } from "../types";

export const svelteUserOnboardingContent: TechnologyContentType = {
  slug: "svelte-user-onboarding",
  seoTitle: "Svelte user onboarding",
  title: (
    <>
      User onboarding for
      <br />
      Svelte and SvelteKit
    </>
  ),
  description:
    "Flows integrates with Svelte and SvelteKit via a lightweight SDK. Add user onboarding and iterate without code changes.",
  framework: {
    name: "Svelte",
  },
  featuresIntro: {
    title: "How Flows powers Svelte user onboarding",
    description:
      "Flows integrates into Svelte apps via a lightweight client-side SDK. Initialize it in an onMount callback, pass user identity, and trigger onboarding workflows on page load, route change, or user action.",
  },
  faqs: [
    {
      title: "How do I add user onboarding to a Svelte app?",
      content: (
        <>
          Call the Flows SDK inside an <InlineCode>onMount</InlineCode> callback in your root layout
          component and pass user identity and properties. Flows then handles targeting and workflow
          activation automatically, without adding any onboarding logic to your individual Svelte
          components. See the{" "}
          <a
            href={links.docs.sdk.frameworks.svelte}
            target="_blank"
            rel="noopener noreferrer"
            className={css({ textDecoration: "underline", display: "inline" })}
          >
            Svelte installation guide
          </a>{" "}
          for step-by-step instructions and code examples.
        </>
      ),
      schemaContent:
        "Call the Flows SDK inside an onMount callback in your root layout component and pass user identity and properties. Flows then handles targeting and workflow activation automatically, without adding any onboarding logic to your individual Svelte components. See the Svelte installation guide for step-by-step instructions and code examples.",
    },
    {
      title: "Does Flows work with SvelteKit?",
      content: (
        <>
          Yes. Initialize Flows in your SvelteKit root layout's <InlineCode>onMount</InlineCode> to
          ensure it runs only in the browser. SvelteKit client-side navigations are detected
          automatically, so onboarding steps trigger correctly across route changes.
        </>
      ),
      schemaContent:
        "Yes. Initialize Flows in your SvelteKit root layout's onMount to ensure it runs only in the browser. SvelteKit client-side navigations are detected automatically, so onboarding steps trigger correctly across route changes.",
    },
    {
      title: "Can I use Svelte stores to react to onboarding state?",
      content:
        "Yes. Flows exposes event callbacks you can use to write workflow state into a Svelte writable store. From there, any component that subscribes to the store will react automatically, keeping your onboarding UI consistent with Svelte's reactivity model.",
    },
    {
      title: "How do I target first-time users in a Svelte or SvelteKit app?",
      content: (
        <>
          Pass user properties when initializing Flows, such as <InlineCode>isNewUser</InlineCode>{" "}
          or <InlineCode>signupDate</InlineCode>. Targeting rules are configured in the Flows
          dashboard and evaluated locally, so returning users are automatically excluded without any
          conditional logic in your Svelte components. See the guide on{" "}
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
        "Pass user properties when initializing Flows, such as isNewUser or signupDate. Targeting rules are configured in the Flows dashboard and evaluated locally, so returning users are automatically excluded without any conditional logic in your Svelte components. See the guide on targeting only new users.",
    },
    {
      title: "Does Flows affect SvelteKit's server-side rendering?",
      content: (
        <>
          No. Flows is a client-side SDK and never runs during SSR. Wrapping initialization in the{" "}
          <InlineCode>onMount</InlineCode> hook guarantees it only loads in the browser, so your
          SvelteKit pages render on the server as normal.
        </>
      ),
      schemaContent:
        "No. Flows is a client-side SDK and never runs during SSR. Wrapping initialization in the onMount hook guarantees it only loads in the browser, so your SvelteKit pages render on the server as normal.",
    },
  ],
  ctaBanner: {
    title: "Build better Svelte user onboarding today",
    description:
      "A lightweight SDK that fits Svelte's compiler-first philosophy. Add onboarding to your Svelte or SvelteKit app without the bloat.",
  },
};
