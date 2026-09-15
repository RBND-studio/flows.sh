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
import darkPng from "./empty-state-cta-dark.png";
import lightPng from "./empty-state-cta-light.png";

export const emptyStateCTAContent: ContentType = {
  slug: "empty-state-cta",
  title: "Empty state CTA",
  exampleWorkflowId: "6784b41d-9680-4bea-b502-0200bb19a911",
  description:
    "Turn an empty state into a guided first action with a built-in Flows Card component.",
  metaDescription:
    "Add a call-to-action card to any empty state in your React app with Flows. Guide new accounts to their first action without hardcoding empty-state copy.",
  images: {
    light: lightPng,
    dark: darkPng,
  },
  embed: {
    src: links.examples.emptyStateCTA,
    title: "Empty state CTA example application - Flows",
  },
  sidebar: {
    framework: <NextJsFramework />,
    links: {
      liveDemo: links.examples.emptyStateCTA,
      sourceCode: links.examples.emptyStateCTASource,
    },
    tags: [
      "Empty State",
      "Card",
      "Call To Action",
      "User Onboarding",
      "Activation",
      "First-Time User Experience",
      "Slottable",
      "React",
    ],
  },
  readme: (
    <>
      <Paragraph>
        This empty state CTA example shows how to replace a static "no data" message with a guided
        call-to-action card, using the built-in Card component from Flows.
      </Paragraph>
      <Paragraph>
        Empty states are one of the highest-leverage moments in onboarding: it's the first time a
        new account has nothing in it. Instead of writing that copy directly into your app, driving
        it from a Flows workflow lets you target the message to specific user segments and rewrite
        it without a deploy.
      </Paragraph>

      <Heading>Features</Heading>
      <UnorderedList>
        <li>
          <strong>Empty project list</strong>: the demo app renders a project list that starts with
          zero items.
        </li>
        <li>
          <strong>Slotted Card</strong>: a <InlineCode>FlowsSlot</InlineCode> is placed inside the
          empty area. A workflow's built-in Card block renders into that slot with a title, body,
          and a primary "Create project" button.
        </li>
        <li>
          <strong>No custom component required</strong>: the Card ships as part of the Basics V2
          built-in library, so there is no extra React component to register.
        </li>
      </UnorderedList>

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
          <ParagraphLink href={links.examples.emptyStateCTASource}>GitHub</ParagraphLink> and
          install the required dependencies in the project directory.
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
