import { css } from "@flows/styled-system/css";
import { SignupClick } from "components/utils/signup-click";
import { BlockTemplate16 } from "icons";
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

export const hintContent: ContentType = {
  slug: "hint",
  title: "Hint",
  icon: BlockTemplate16,
  description: "Self-guided contextual hints that help with feature discovery and education.",
  embed: {
    src: links.examples.hint,
    title: "Hint example application – Flows",
  },
  sidebar: {
    framework: <NextJsFramework />,
    links: {
      liveDemo: links.examples.hint,
      sourceCode: links.examples.hintSource,
    },
    tags: ["Adoption", "Announcement", "Education", "Engagement", "Self-serve"],
  },
  readme: (
    <>
      <Paragraph>
        This example showcases a set of custom hints powered by
        <InlineCode>@flows/react</InlineCode> and <InlineCode>@floating-ui/react-dom</InlineCode>.
      </Paragraph>
      <Paragraph>
        Hints provide users with on-demand and contextual guidance. Hints use small beacons that
        encourage users to focus on certain features, then progressively disclose more information
        when the user interacts with them.
      </Paragraph>
      <Paragraph>Hints are useful for:</Paragraph>
      <UnorderedList>
        <li>Contextual education and help</li>
        <li>To draw attention to a new feature without interrupting a user’s workflow.</li>
        <li>Gently nudge users to explore, learn, or take action.</li>
      </UnorderedList>

      <Heading>Features</Heading>
      <Paragraph>
        When a user enters the workflow and visits the home page, three hints are shown to gently
        nudge users to explore the features of the application. The hint next to the description
        label is linked to another hint that shows up after the previous hint is completed.
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
          <ParagraphLink href={links.examples.hintSource}>GitHub</ParagraphLink> and install the
          required dependencies in the project directory.
        </li>
        <li>
          Add your organization ID in the <InlineCode>providers.tsx</InlineCode> file.
        </li>
        <li>
          Create a new block template in your organization with the following configuration:
          <UnorderedList>
            <li>
              <strong>UI component:</strong> FlowsHint
            </li>
            <li>
              <strong>Slottable:</strong> false
            </li>
            <li>
              <strong>Custom properties:</strong>
              <UnorderedList>
                <li>Title</li>
                <li>Body</li>
                <li>Button label</li>
                <li>Target element</li>
                <li>Side: top, right, bottom, left</li>
                <li>Offset X: number</li>
                <li>Offset Y: number</li>
              </UnorderedList>
            </li>
            <li>
              <strong>Exit nodes:</strong>
              <UnorderedList>
                <li>continue</li>
                <li>close</li>
              </UnorderedList>
            </li>
          </UnorderedList>
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
