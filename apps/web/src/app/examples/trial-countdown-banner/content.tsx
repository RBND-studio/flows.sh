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
import darkPng from "./trial-countdown-banner-dark.png";
import lightPng from "./trial-countdown-banner-light.png";

export const trialCountdownBannerContent: ContentType = {
  slug: "trial-countdown-banner",
  title: "Trial countdown banner",
  exampleWorkflowId: "a4532f37-4520-426b-a402-d06c4ed0b22d",
  description:
    "Show a persistent trial countdown banner with an upgrade CTA, powered by a Flows workflow.",
  metaDescription:
    "Add a dismissible trial countdown banner to your React app with Flows. Drive the days-left count, copy, and upgrade link from a workflow instead of hardcoding trial-ending UI.",
  images: {
    light: lightPng,
    dark: darkPng,
  },
  embed: {
    src: links.examples.trialCountdownBanner,
    title: "Trial countdown banner example application - Flows",
  },
  sidebar: {
    framework: <NextJsFramework />,
    links: {
      liveDemo: links.examples.trialCountdownBanner,
      sourceCode: links.examples.trialCountdownBannerSource,
    },
    tags: [
      "Trial Banner",
      "Countdown",
      "Upgrade Prompt",
      "Monetization",
      "Conversion",
      "Top Bar",
      "Custom Component",
      "React",
    ],
  },
  readme: (
    <>
      <Paragraph>
        This trial countdown banner example shows how to display a persistent, dismissible banner
        that counts down the days left in a user's trial, using a custom component powered by Flows.
      </Paragraph>
      <Paragraph>
        Unlike a hardcoded banner tied to your billing logic, this one is driven by a Flows
        workflow. Target it at users on a trial plan, update the copy or urgency threshold from the
        workflow editor, and let Flows remember the dismissal per user, all without a code deploy.
      </Paragraph>

      <Heading>Features</Heading>
      <UnorderedList>
        <li>
          <strong>Trial end date</strong>: a date property (not a static number) drives the
          countdown, so it stays correct on every visit instead of drifting out of date.
        </li>
        <li>
          <strong>Message</strong>: a short, editable line of supporting copy.
        </li>
        <li>
          <strong>Upgrade action</strong>: a configurable button that links to your pricing page.
        </li>
        <li>
          <strong>Dismiss button</strong>: calls <InlineCode>close()</InlineCode> to advance the
          workflow and hide the banner. Flows remembers the dismissal so it does not reappear for
          that user.
        </li>
      </UnorderedList>
      <Paragraph>
        The banner is registered as a custom component in <InlineCode>providers.tsx</InlineCode> and
        rendered through a <InlineCode>FlowsSlot</InlineCode> placed above the main app layout.
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
          <ParagraphLink href={links.examples.trialCountdownBannerSource}>GitHub</ParagraphLink> and
          install the required dependencies in the project directory.
        </li>
        <li>
          Add your organization ID in the <InlineCode>providers.tsx</InlineCode> file.
        </li>
        <li>
          Import the workflow, including the <InlineCode>TrialCountdownBanner</InlineCode> component
          configuration, by clicking <strong>Use this example</strong> at the top of this page and
          publish it.
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
