import { css } from "@flows/styled-system/css";
import { SignupClick } from "components/utils/signup-click";
import { links } from "lib/links";
import Image from "next/image";

import { NextJsFramework } from "../frameworks";
import { type ContentType } from "../types";
import {
  Heading,
  Heading2,
  InlineCode,
  OrderedList,
  Paragraph,
  ParagraphLink,
  UnorderedList,
} from "../typography";

import darkPng from "./churn-prevention-dark.png";
import lightPng from "./churn-prevention-light.png";

import workflowPng from "./workflow.png";

export const churnPreventionFlowContent: ContentType = {
  slug: "churn-prevention-flow",
  title: "Churn prevention flow",
  description: "Reduce cancellations with a multi-step churn prevention flow.",
  metaDescription:
    "Build a churn prevention flow in your app - pause offer, exit survey with per-reason branching, and targeted retention offers. Live demo and source code included.",
  images: {
    light: lightPng,
    dark: darkPng,
  },
  embed: {
    src: links.examples.churnPreventionFlow,
    title: "Churn prevention flow example application - Flows",
  },
  sidebar: {
    framework: <NextJsFramework />,
    links: {
      liveDemo: links.examples.churnPreventionFlow,
      sourceCode: links.examples.churnPreventionFlowSource,
    },
    tags: [
      "Churn Prevention",
      "Cancellation Flow",
      "Exit Survey",
      "Retention",
      "Survey",
      "Subscription",
      "Engagement",
    ],
  },
  readme: (
    <>
      <Paragraph>
        Reduce subscription cancellations with a multi-step churn prevention flow built with{" "}
        <InlineCode>@flows/react</InlineCode>. This example shows how to intercept a cancellation
        attempt, offer a lower-commitment alternative, collect a cancellation reason, and route the
        user to a targeted retention offer - all without writing one-off modal logic.
      </Paragraph>
      <Paragraph>
        The standout technique is a custom <InlineCode>CancelReasons</InlineCode> component that
        exposes one exit node per cancellation reason. The Flows workflow branches differently for
        each answer, so price-sensitive users see a discount, users citing missing features get a
        feedback prompt, and users who say they are not getting value are offered a free onboarding
        session. Any team member can update the copy or add new branches in the Flows editor without
        touching the codebase.
      </Paragraph>

      <Heading>Why churn prevention flows matter</Heading>
      <Paragraph>
        Users who reach the cancel button have high intent to leave, but many are open to an
        alternative if it is presented at the right moment. A well-designed cancellation flow
        recovers a meaningful portion of would-be churners and turns the cancellation event into a
        source of actionable product feedback.
      </Paragraph>
      <UnorderedList>
        <li>
          <strong>Recover revenue at the last moment.</strong> A pause offer or discount converts
          users who are leaving for price or timing reasons, not product reasons.
        </li>
        <li>
          <strong>Collect high-quality feedback.</strong> Users who are about to cancel are more
          honest than users responding to a generic NPS survey. Exit reasons are a direct signal for
          your product roadmap.
        </li>
        <li>
          <strong>Route users to the right response.</strong> A single generic "are you sure?" modal
          treats every cancellation the same. Branching on the exit reason lets you respond with
          something actually relevant.
        </li>
        <li>
          <strong>Iterate without deploys.</strong> Flows manages the flow logic, so you can A/B
          test copy, add new branches, or remove steps from the editor after the initial build.
        </li>
      </UnorderedList>

      <Heading>When to use a churn prevention flow</Heading>
      <UnorderedList>
        <li>
          Any SaaS product with a recurring subscription where users can self-serve cancel through
          the billing settings.
        </li>
        <li>
          Products with a free trial or freemium tier where trial-to-paid conversion is a key metric
          - the same pattern applies when a trial expires.
        </li>
        <li>
          Teams that want exit survey data without building and maintaining a custom survey UI.
        </li>
        <li>
          Growth and product teams who need to experiment with retention offers without waiting for
          engineering cycles.
        </li>
      </UnorderedList>

      <Heading>How this example works</Heading>
      <Paragraph>
        The demo shows a SaaS billing settings page with the current plan, usage metrics, and a
        "Cancel subscription" button. Clicking it calls <InlineCode>startWorkflow()</InlineCode>{" "}
        from <InlineCode>@flows/react</InlineCode>, which triggers the churn prevention workflow
        manually. The workflow then walks the user through three stages:
      </Paragraph>

      <Heading2>Stage 1 - Pause offer</Heading2>
      <Paragraph>
        A Modal block asks if the user wants to pause their subscription for up to 3 months instead
        of cancelling. Users who accept exit the workflow immediately - no further steps. This stage
        recovers users who are leaving for temporary reasons like budget freezes or inactivity.
      </Paragraph>

      <Heading2>Stage 2 - Cancel reasons</Heading2>
      <Paragraph>
        Users who decline the pause offer see the custom <InlineCode>CancelReasons</InlineCode>{" "}
        component - a modal listing five cancellation reasons. Each option calls a distinct prop (
        <InlineCode>tooExpensive</InlineCode>, <InlineCode>missingFeatures</InlineCode>,{" "}
        <InlineCode>notUsingIt</InlineCode>, <InlineCode>switchingToCompetitor</InlineCode>,{" "}
        <InlineCode>other</InlineCode>), which maps to its own exit node in Flows. The workflow
        editor wires each exit node to a different next block, enabling per-reason branching without
        any conditional logic in the component itself.
      </Paragraph>

      <Heading2>Stage 3 - Targeted retention offer</Heading2>
      <Paragraph>Each cancellation reason routes to a different response:</Paragraph>
      <UnorderedList>
        <li>
          <strong>Too expensive</strong> - a discount modal offers a percentage off the next few
          months. Users who accept exit retained; users who decline exit cancelled.
        </li>
        <li>
          <strong>Missing features</strong> - a modal prompts the user to submit a feature request
          and promises a notification when it ships.
        </li>
        <li>
          <strong>Not using it enough</strong> - a modal offers a free onboarding session with the
          team to help the user get more value.
        </li>
        <li>
          <strong>Switching to a competitor</strong> - the user exits immediately without an
          additional offer.
        </li>
        <li>
          <strong>Other</strong> - the user exits immediately.
        </li>
      </UnorderedList>

      <Heading>Workflow setup</Heading>
      <Paragraph>Below is a screenshot of how the workflow is set up in Flows:</Paragraph>

      <Image
        src={workflowPng}
        alt="Flows workflow setup for the churn prevention flow example: manual start, pause offer modal, cancel reasons custom component with per-reason exit nodes, and targeted retention modals"
        width={1800}
        height={1040}
        className={css({
          borderRadius: "radius6",
          borderWidth: "1px",
          borderColor: "newBorder.neutral",
          borderStyle: "solid",
        })}
      />

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
          <ParagraphLink href={links.examples.churnPreventionFlowSource}>GitHub</ParagraphLink> and
          install the required dependencies in the project directory.
        </li>
        <li>
          Add your organization ID in the <InlineCode>providers.tsx</InlineCode> file.
        </li>
        <li>
          Create the <InlineCode>CancelReasons</InlineCode> custom component in your Flows
          organization. Set the UI component key to <InlineCode>CancelReasons</InlineCode>, add
          string properties for <InlineCode>title</InlineCode> and{" "}
          <InlineCode>description</InlineCode>, and add exit nodes for{" "}
          <InlineCode>tooExpensive</InlineCode>, <InlineCode>missingFeatures</InlineCode>,{" "}
          <InlineCode>notUsingIt</InlineCode>, <InlineCode>switchingToCompetitor</InlineCode>,{" "}
          <InlineCode>other</InlineCode>, and <InlineCode>close</InlineCode>.
        </li>
        <li>
          Recreate the churn prevention workflow using a <strong>Manual start</strong> block (key:{" "}
          <InlineCode>churn-prevention-flow.start</InlineCode>), a pause offer{" "}
          <strong>Modal</strong>, the <strong>CancelReasons</strong> block, and the targeted
          retention <strong>Modal</strong> blocks, then publish it.
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
