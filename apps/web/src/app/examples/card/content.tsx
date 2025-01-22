import { css } from "@flows/styled-system/css";
import { SignupClick } from "components/utils/signup-click";
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

export const content: ContentType = {
  title: "Card example",
  description: "A custom card component built to render content inside your product, not above it.",
  embed: {
    src: links.examples.card,
    title: "Card example application – Flows",
  },
  sidebar: {
    framework: <NextJsFramework />,
    links: {
      liveDemo: links.examples.card,
      sourceCode: links.examples.cardSource,
    },
    tags: ["Announcement", "Adoption", "Slottable"],
  },
  readme: (
    <>
      <Paragraph>
        This example showcases an inline card component powered by{" "}
        <InlineCode>@flows/react</InlineCode> which uses <InlineCode>FlowsSlot</InlineCode> to
        display content based on the user’s workflow state.
      </Paragraph>
      <Paragraph>
        Cards are particularly useful for presenting contextual information—such as new feature
        announcements or helpful tips—without overwhelming the user.
      </Paragraph>

      <Heading>Features</Heading>
      <Paragraph>
        When a user enters the Card block in a workflow and visits the home page, the card component
        appears in the <InlineCode>homepage-slot</InlineCode>. In this example, the card is a custom
        UI element displaying a title and body text with two buttons to continue or close the card.
      </Paragraph>
      <Paragraph>
        The card offers two exit nodes—continue and close—that allow users to either proceed to the
        next workflow step or close the card if more blocks are connected.
      </Paragraph>
      <Paragraph>Below is a screenshot of how the Card block is set up in the workflow:</Paragraph>

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
          <ParagraphLink href={links.examples.cardSource}>GitHub</ParagraphLink> and install the
          required dependencies in the project directory.
        </li>
        <li>
          Add your organization ID in the <InlineCode>providers.tsx</InlineCode> file.
        </li>
        <li>
          Create a new block template in your organization with the following configuration:
          <UnorderedList>
            <li>
              <strong>UI component:</strong> FlowsCard
            </li>
            <li>
              <strong>Slottable:</strong> true
            </li>
            <li>
              <strong>Custom properties:</strong>
              <UnorderedList>
                <li>Title</li>
                <li>Body</li>
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
