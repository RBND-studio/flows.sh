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
// TODO: Replace with actual image
import workflowPng from "./workflow.png";

export const -- PLOP EXAMPLE CAMEL HERE --Content: ContentType = {
  slug: "-- PLOP EXAMPLE SLUG HERE --",
  title: "-- PLOP TITLE HERE --",
  icon: Modal16, //TODO: Replace with actual icon
  description: "TODO: replace with actual description",
  embed: {
    src: links.examples.-- PLOP EXAMPLE DEMO HERE --,
    title: "-- PLOP TITLE HERE -- example application – Flows",
  },
  sidebar: {
    framework: <NextJsFramework />,
    links: {
      liveDemo: links.examples.-- PLOP EXAMPLE DEMO HERE --,
      sourceCode: links.examples.-- PLOP EXAMPLE SOURCE HERE --,
    },
    tags: ["Announcement", "Adoption", "Slottable"],
  },
  readme: (
    <>
      <Paragraph>
        This example showcases SOMETHING powered by{" "}
        <InlineCode>@flows/react</InlineCode>
      </Paragraph>

      <Heading>Features</Heading>
      <Paragraph>
        SOMETHING
      </Paragraph>
      <Paragraph>Below is a screenshot of how the workflow is set up in Flows:</Paragraph>

      <Image
        src={workflowPng}
        alt="Flows workflow setup for the Card example" //TODO replace with actual alt text
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
          <ParagraphLink href={links.examples.-- PLOP EXAMPLE SOURCE HERE --}>GitHub</ParagraphLink> and install the
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
