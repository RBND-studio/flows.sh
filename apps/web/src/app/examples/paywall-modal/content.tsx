import { SignupClick } from "components/utils/signup-click";
import { links } from "lib/links";

import { NextJsFramework } from "../frameworks";
import { type ContentType } from "../types";
import {
  Heading,
  InlineCode,
  OrderedList,
  Paragraph,
  ParagraphLink,
  UnorderedList,
} from "../typography";
import darkPng from "./paywall-modal-dark.png";
import lightPng from "./paywall-modal-light.png";

export const paywallModalContent: ContentType = {
  slug: "paywall-modal",
  title: "Paywall modal",
  exampleWorkflowId: "e2811e6f-8e95-4613-8a8b-4307b7443529",
  description: "Show a paywall modal when free users click a Pro-only feature, powered by Flows.",
  metaDescription:
    "Trigger an upgrade paywall modal in React when a user clicks a locked Pro feature, using Flows and the built-in Modal component. No modal state to manage in your own code.",
  images: {
    light: lightPng,
    dark: darkPng,
  },
  embed: {
    src: links.examples.paywallModal,
    title: "Paywall modal example application - Flows",
  },
  sidebar: {
    framework: <NextJsFramework />,
    links: {
      liveDemo: links.examples.paywallModal,
      sourceCode: links.examples.paywallModalSource,
    },
    tags: [
      "Paywall",
      "Modal",
      "Upgrade Prompt",
      "Feature Gating",
      "Monetization",
      "Pricing",
      "Conversion",
      "React",
    ],
  },
  readme: (
    <>
      <Paragraph>
        This paywall modal example shows how to interrupt a free user with an upgrade prompt the
        moment they click a Pro-only feature, using the built-in Modal component from Flows.
      </Paragraph>
      <Paragraph>
        Instead of hardcoding a pricing pitch into every locked feature in your app, you attach a
        single click handler that starts a Flows workflow. The copy, plan pitch, and button link all
        live in the workflow editor, so you can rewrite the pitch or run an A/B test without a
        deploy.
      </Paragraph>

      <Heading>Features</Heading>
      <UnorderedList>
        <li>
          <strong>Locked navigation item</strong>: the demo app's "Advanced reports" page is marked
          with a lock icon. Clicking it calls{" "}
          <InlineCode>startWorkflow(&quot;paywall-modal.start&quot;)</InlineCode> instead of
          navigating away.
        </li>
        <li>
          <strong>Modal</strong>: a centered Modal block (part of the built-in Basics V2 library)
          opens with the plan pitch, a primary <InlineCode>Upgrade to Pro</InlineCode> button, and a
          dismiss button.
        </li>
        <li>
          <strong>No custom component required</strong>: this example uses only a built-in
          component, so there is no React code to register beyond the standard Flows provider setup.
        </li>
      </UnorderedList>
      <Paragraph>
        Because the modal only appears on demand, it never blocks users who are just browsing. Pair
        it with a Start block's user property filters to only show the paywall to users on the free
        plan.
      </Paragraph>

      <Heading>Getting started</Heading>
      <OrderedList>
        <li>
          Sign up for Flows if you haven't already. You can{" "}
          <SignupClick>
            <ParagraphLink target="_blank" href={links.signUp}>
              create a free account here
            </ParagraphLink>
          </SignupClick>
          .
        </li>
        <li>
          Clone the repository from{" "}
          <ParagraphLink href={links.examples.paywallModalSource}>GitHub</ParagraphLink> and install
          the required dependencies in the project directory.
        </li>
        <li>
          Add your organization ID in the <InlineCode>providers.tsx</InlineCode> file.
        </li>
        <li>
          Import the workflow by clicking <strong>Use this example</strong> at the top of this page
          and publish it.
        </li>
        <li>
          Run the development server with <InlineCode>pnpm dev</InlineCode>.
        </li>
      </OrderedList>

      <Heading>Learn more</Heading>
      <Paragraph>To learn more about Flows take a look at the following resources:</Paragraph>
      <UnorderedList>
        <li>
          <ParagraphLink target="_blank" href={links.docs.home}>
            Flows documentation
          </ParagraphLink>
        </li>
        <li>
          <ParagraphLink target="_blank" href={links.slack}>
            Join our community
          </ParagraphLink>
        </li>
      </UnorderedList>
    </>
  ),
};
