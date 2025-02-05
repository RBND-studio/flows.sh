import { css } from "@flows/styled-system/css";
import { SignupClick } from "components/utils/signup-click";
import { Modal16 } from "icons";
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

export const modalContent: ContentType = {
  slug: "modal",
  title: "Modal",
  icon: Modal16,
  description: "A dialog to focus user attention on relevant information",
  embed: {
    src: links.examples.modal,
    title: "Modal example application – Flows",
  },
  sidebar: {
    framework: <NextJsFramework />,
    links: {
      liveDemo: links.examples.modal,
      sourceCode: links.examples.modalSource,
    },
    tags: ["Adoption", "Education", "Engagement", "Onboarding"],
  },
  readme: (
    <>
      <Paragraph>
        This example showcases a modal powered by <InlineCode>@flows/react-components</InlineCode>.
      </Paragraph>
      <Paragraph>
        Modals are useful to focus the user’s attention on just one thing. But since they are
        disruptive by design, only use them when necessary to avoid annoying your users.
      </Paragraph>
      <Paragraph>
        Use modals to welcome new users to your app, announce major updates, or give users timely
        warnings and alerts.
      </Paragraph>

      <Heading>Features</Heading>
      <Paragraph>
        When a user opens the application for the first time, they encounter a simple modal,
        followed by a modal with custom HTML content.
      </Paragraph>
      <Paragraph>Below is a screenshot of how the workflow is set up:</Paragraph>

      <Image
        src={workflowPng}
        alt="Flows workflow setup for the Modal example"
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
          <ParagraphLink href={links.examples.tourSource}>GitHub</ParagraphLink> and install the
          required dependencies in the project directory.
        </li>
        <li>
          Add your organization ID in the <InlineCode>providers.tsx</InlineCode> file.
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
