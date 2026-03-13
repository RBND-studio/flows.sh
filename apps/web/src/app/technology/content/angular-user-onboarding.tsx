import { css } from "@flows/styled-system/css";
import { InlineCode } from "app/examples/typography";
import { links } from "lib/links";

import { type TechnologyContentType } from "../types";

export const angularUserOnboardingContent: TechnologyContentType = {
  slug: "angular-user-onboarding",
  seoTitle: "Angular user onboarding",
  title: (
    <>
      User onboarding for
      <br />
      Angular apps
    </>
  ),
  description:
    "Flows integrates with Angular as a service. Add user onboarding, trigger from route events, and keep your components untouched.",
  framework: {
    name: "Angular",
  },
  featuresIntro: {
    title: "How Flows powers Angular user onboarding",
    description:
      "Flows integrates with Angular's dependency injection system. Initialize it as a service, identify users after authentication, and trigger onboarding workflows from anywhere in your component tree.",
  },
  faqs: [
    {
      title: "How do I add user onboarding to an Angular app?",
      content: (
        <>
          Initialize the Flows SDK inside a root-level Angular service and call it after your auth
          service resolves user identity. From there, Flows evaluates targeting rules and activates
          the right onboarding workflow automatically, with no logic needed in individual
          components. See the{" "}
          <a
            href={links.docs.sdk.frameworks.angular}
            rel="noopener noreferrer"
            target="_blank"
            className={css({ textDecoration: "underline", display: "inline" })}
          >
            Angular installation guide
          </a>{" "}
          for step-by-step instructions and code examples.
        </>
      ),
      schemaContent:
        "Initialize the Flows SDK inside a root-level Angular service and call it after your auth service resolves user identity. From there, Flows evaluates targeting rules and activates the right onboarding workflow automatically, with no logic needed in individual components. See the Angular installation guide for step-by-step instructions and code examples.",
    },
    {
      title: "Can onboarding flows trigger on Angular Router navigation?",

      content:
        "Yes. Flows detects client-side navigation and re-evaluates trigger conditions on each route change. You can configure onboarding steps to activate only on specific routes without adding custom route guards or navigation hooks.",
    },
    {
      title: "How do I target new vs returning users in Angular?",
      content: (
        <>
          Pass user properties when initializing Flows, typically from your auth service after
          login. Set targeting rules in the Flows dashboard using properties like{" "}
          <InlineCode>createdAt</InlineCode> or a <InlineCode>hasOnboarded</InlineCode> flag, and
          Flows handles the rest without any component-level conditional logic. Check out our guide
          on{" "}
          <a
            href={links.docs.guide.targetNewUsers}
            rel="noopener noreferrer"
            target="_blank"
            className={css({ textDecoration: "underline", display: "inline" })}
          >
            targeting only new users
          </a>
          .
        </>
      ),
      schemaContent:
        "Pass user properties when initializing Flows, typically from your auth service after login. Set targeting rules in the Flows dashboard using properties like createdAt or a hasOnboarded flag, and Flows handles the rest without any component-level conditional logic. Check out our guide on targeting only new users.",
    },
    {
      title: "Does Flows interfere with Angular's change detection?",
      content:
        "No. Flows operates outside Angular's change detection cycle. Workflow state changes are event-driven and don't trigger unnecessary re-renders. If you need to reflect Flows state in your Angular components, you can wrap it in an observable or a signal.",
    },
    {
      title: "Does Flows work with both NgModule and standalone Angular apps?",
      content:
        "Yes. Flows doesn't depend on Angular's module system. Initialize the SDK in your bootstrapped provider or root module and it works the same way regardless of whether you're using NgModule-based or standalone component architecture.",
    },
  ],
  ctaBanner: {
    title: "Build better Angular user onboarding today",
    description:
      "A lightweight SDK that fits Angular's service-based architecture. Add onboarding workflows without touching your components.",
  },
};
