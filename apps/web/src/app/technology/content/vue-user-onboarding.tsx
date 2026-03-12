import { css } from "@flows/styled-system/css";
import { InlineCode } from "app/examples/typography";
import { links } from "lib/links";

import { type TechnologyContentType } from "../types";

export const vueUserOnboardingContent: TechnologyContentType = {
  slug: "vue-user-onboarding",
  seoTitle: "Vue user onboarding",
  title: (
    <>
      User onboarding for
      <br />
      Vue 3 and Nuxt
    </>
  ),
  description:
    "Flows works with Vue 3 and Nuxt as a plugin. Add user onboarding and iterate without touching your components.",
  framework: {
    name: "Vue",
  },
  featuresIntro: {
    title: "How Flows powers Vue user onboarding",
    description:
      "Flows plugs into Vue as a plugin and exposes methods for managing onboarding workflows. Build guided tours, checklists, and contextual hints, all rendered with your own Vue components.",
  },
  faqs: [
    {
      title: "How do I add user onboarding to a Vue 3 app?",
      content: (
        <>
          Create the Flows plugin and enable it with <InlineCode>app.use(flowsPlugin)</InlineCode>{" "}
          or <InlineCode>defineNuxtPlugin()</InlineCode> and pass user identity. Use built-in
          components or pass your own components without needing to manage user state. The{" "}
          <a
            href={links.docs.sdk.frameworks.vue}
            target="_blank"
            rel="noopener noreferrer"
            className={css({ textDecoration: "underline", display: "inline" })}
          >
            Vue installation guide
          </a>{" "}
          walks you through the setup process with code examples.
        </>
      ),
      schemaContent:
        "Create the Flows plugin and enable it with app.use(flowsPlugin) or defineNuxtPlugin() and pass user identity. Use built-in components or pass your own components without needing to manage user state. The Vue installation guide walks you through the setup process with code examples.",
    },
    {
      title: "Can onboarding flows trigger on Vue Router navigation?",
      content:
        "Yes. Flows listens to client-side navigation events and evaluates route-based trigger conditions automatically. Set up onboarding steps that activate on specific routes without adding navigation guards.",
    },
    {
      title: "How do I target new vs returning users in Vue?",
      content: (
        <>
          Pass user properties when identifying users, such as <InlineCode>isNewUser</InlineCode> or
          signup date. Flows evaluates these properties locally against targeting rules defined in
          the dashboard, so returning users are automatically excluded from onboarding flows. See
          the guide on{" "}
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
        "Pass user properties when identifying users, such as isNewUser or signup date. Flows evaluates these properties locally against targeting rules defined in the dashboard, so returning users are automatically excluded from onboarding flows. See the guide on targeting only new users.",
    },
    {
      title: "How do I access onboarding state in Vue components?",
      content:
        "Flows exposes a set of methods you can call anywhere after you initialize the SDK. Use them to read active blocks, workflow state and more.",
    },
    {
      title: "Does Flows work with Nuxt for user onboarding?",
      content:
        "Yes. Add Flows as a Nuxt client-side plugin to ensure it runs in the browser. Nuxt route changes are detected automatically, and you can use SSR-safe guards to prevent initialization issues during server rendering.",
    },
  ],
  ctaBanner: {
    title: "Build better Vue user onboarding today",
    description:
      "A Vue SDK that feels native. Guide your users to activation with onboarding flows that live inside your app.",
  },
};
