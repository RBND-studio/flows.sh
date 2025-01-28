import { css } from "@flows/styled-system/css";
import { SignupClick } from "components/utils/signup-click";
import { Slot16 } from "icons";
import { links } from "lib/links";
import Image from "next/image";

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
import workflowPng from "./workflow.png";

export const embeddedTipsContent: ContentType = {
  slug: "embedded-tips",
  title: "Embedded tips",
  icon: Slot16,
  description: "Inline contextual tips to help users learn about product and UI concepts",
  embed: {
    src: links.examples.embeddedTips,
    title: "Embedded tips example application – Flows",
  },
  sidebar: {
    framework: <NextJsFramework />,
    links: {
      liveDemo: links.examples.embeddedTips,
      sourceCode: links.examples.embeddedTipsSource,
    },
    tags: ["Adoption", "Education", "Engagement", "Onboarding", "Self-serve"],
  },
  readme: (
    <>
      <Paragraph>
        This example demonstrates how to use Flows to build contextual, embedded tips for onboarding
        users. Each page includes a simple tip designed to help users learn about important product
        and UI concepts.
      </Paragraph>
      <Heading>When to use</Heading>
      <Paragraph>
        Contextual tips are simple yet highly effective and super flexible. They can be used:
      </Paragraph>
      <UnorderedList>
        <li>
          Throughout the user journey for onboarding, education, announcements, or empty states.
        </li>
        <li>
          To teach key concepts contextually, ensuring users know how to use your product and get
          value from it.
        </li>
        <li>
          As entry points to important next steps, facilitating relevant onboarding and education
          flows.
        </li>
        <li>
          To integrate external content like documentation and support at the right time and place,
          driving a product-led growth (PLG) motion.
        </li>
      </UnorderedList>
      <Heading>Why it works</Heading>
      <UnorderedList>
        <li>
          Progressive disclosure: Tips reveal content incrementally and contextually while users
          interact with the app
        </li>
        <li>
          Seamless integration: Embedded tips feel like a natural part of the UI, avoiding
          distractions or spammy experiences.
        </li>
        <li>
          Simplicity: Tips are straightforward and often include an option to explore more
          information
        </li>
        <li>Ease of implementation: Their simplicity makes them quick and easy to set up.</li>
      </UnorderedList>
      <Paragraph>
        The embedded tips could be a simple bit of text, a banner, a card with video and links, or a
        carousel with many images. They can be used individually, or since they’re embedded, they
        can be combined with checklists and as a part of a multi-step workflow.
      </Paragraph>

      <Heading>Features</Heading>
      <Paragraph>
        When a user enters the workflow and visits one of the pages with{" "}
        <InlineCode>FlowsSlot</InlineCode> components, an inline tip will appear to help them learn
        about the features on the page. Each tip uses a custom component to render the content.
      </Paragraph>
      <Paragraph>Below is a screenshot of how the workflow is set up:</Paragraph>

      <Image
        src={workflowPng}
        alt="Flows workflow setup for the Card example"
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
          Sign up for Flows if you haven’t already. You can{" "}
          <SignupClick>
            <ParagraphLink target="_blank" href={links.signUp}>
              create a free account here
            </ParagraphLink>
          </SignupClick>
          .
        </li>
        <li>
          Clone the repository from{" "}
          <ParagraphLink href={links.examples.embeddedTipsSource}>GitHub</ParagraphLink> and install
          the required dependencies in the project directory.
        </li>
        <li>
          Add your organization ID in the <InlineCode>providers.tsx</InlineCode> file.
        </li>
        <li>
          Create three block templates based on the components found in{" "}
          <InlineCode>src/components/flows</InlineCode>
        </li>
        <li>Recreate the workflow in your organization and publish it.</li>
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
