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
import darkPng from "./referral-widget-dark.png";
import lightPng from "./referral-widget-light.png";

export const referralWidgetContent: ContentType = {
  slug: "referral-widget",
  title: "Referral widget",
  description: "Add an invite-and-earn referral widget to your settings page, powered by Flows.",
  metaDescription:
    "Embed a referral program widget in your React app with Flows. Show a shareable invite link and reward copy from a workflow instead of building a referral page from scratch.",
  images: {
    light: lightPng,
    dark: darkPng,
  },
  embed: {
    src: links.examples.referralWidget,
    title: "Referral widget example application - Flows",
  },
  sidebar: {
    framework: <NextJsFramework />,
    links: {
      liveDemo: links.examples.referralWidget,
      sourceCode: links.examples.referralWidgetSource,
    },
    tags: [
      "Referral Program",
      "Invite Widget",
      "Growth",
      "Settings Page",
      "Custom Component",
      "Slottable",
      "Engagement",
      "React",
    ],
  },
  readme: (
    <>
      <Paragraph>
        This referral widget example shows how to embed an "invite and earn" widget into a settings
        page using a custom component powered by Flows.
      </Paragraph>
      <Paragraph>
        Instead of building a dedicated referrals page and wiring up reward copy in your own code,
        the widget's messaging, reward offer, and referral link all come from a Flows workflow. Run
        different reward amounts for different user segments, or update the copy, without a deploy.
      </Paragraph>

      <Heading>Features</Heading>
      <UnorderedList>
        <li>
          <strong>Reward copy</strong>: a title, description, and reward line (e.g. "Get $10 for
          every friend who joins") are all workflow properties.
        </li>
        <li>
          <strong>Shareable link</strong>: a referral code is rendered as a copyable link.
        </li>
        <li>
          <strong>Copy button</strong>: copies the link to the clipboard and calls{" "}
          <InlineCode>continue()</InlineCode>, so you can track who has copied their link.
        </li>
        <li>
          <strong>Dismiss button</strong>: calls <InlineCode>close()</InlineCode> to let the user
          hide the widget.
        </li>
      </UnorderedList>
      <Paragraph>
        The widget is registered as a custom component in <InlineCode>providers.tsx</InlineCode> and
        rendered through a <InlineCode>FlowsSlot</InlineCode> placed on the settings page.
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
          <ParagraphLink href={links.examples.referralWidgetSource}>GitHub</ParagraphLink> and
          install the required dependencies in the project directory.
        </li>
        <li>
          Add your organization ID in the <InlineCode>providers.tsx</InlineCode> file.
        </li>
        <li>
          Import the workflow, including the <InlineCode>ReferralWidget</InlineCode> component
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
