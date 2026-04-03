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
import darkPng from "./survey-popover-dark.png";
import lightPng from "./survey-popover-light.png";
import workflowPng from "./workflow.png";

export const surveyPopoverContent: ContentType = {
  slug: "survey-popover",
  title: "Survey Popover",
  description:
    "Collect user feedback with a non-intrusive survey popover that floats in the corner of the screen.",
  images: {
    light: lightPng,
    dark: darkPng,
  },
  embed: {
    src: links.examples.surveyPopover,
    title: "Survey Popover example application - Flows",
  },
  sidebar: {
    framework: <NextJsFramework />,
    links: {
      liveDemo: links.examples.surveyPopover,
      sourceCode: links.examples.surveyPopoverSource,
    },
    tags: ["Feedback", "Engagement", "Research", "NPS", "Survey"],
  },
  readme: (
    <>
      <Paragraph>
        This example showcases a built-in Survey Popover component powered by{" "}
        <InlineCode>@flows/react-components</InlineCode>. The survey popover appears in the corner
        of the screen and collects structured feedback from users without interrupting their
        workflow.
      </Paragraph>
      <Paragraph>Survey popovers are useful for:</Paragraph>
      <UnorderedList>
        <li>
          <strong>NPS (Net Promoter Score)</strong> to measure customer loyalty by asking users how
          likely they are to recommend your product.
        </li>
        <li>
          <strong>CSAT (Customer Satisfaction)</strong> to gauge satisfaction after a key
          interaction or milestone.
        </li>
        <li>
          <strong>Feature research</strong> to understand how users discover and adopt new features.
        </li>
        <li>
          <strong>Churn reason collection</strong> to learn why users are leaving before they
          cancel.
        </li>
        <li>
          <strong>Post-action feedback</strong> to capture sentiment right after a user completes an
          important task.
        </li>
      </UnorderedList>

      <Heading>Features</Heading>
      <Paragraph>
        When a user enters the workflow, the survey popover appears in the bottom-right corner of
        the screen. Users can answer one question at a time and navigate through the survey with
        Next and Submit buttons.
      </Paragraph>
      <Paragraph>The survey popover supports the following question types:</Paragraph>
      <UnorderedList>
        <li>
          <strong>Freeform</strong>: open-ended text input for qualitative answers.
        </li>
        <li>
          <strong>Single choice</strong>: radio buttons for selecting one option, with optional
          "Other" field.
        </li>
        <li>
          <strong>Multiple choice</strong>: checkboxes for selecting multiple options, with optional
          "Other" field.
        </li>
        <li>
          <strong>Rating</strong>: numeric, star, or emoji scale with configurable min/max values
          and labels.
        </li>
        <li>
          <strong>Link</strong>: a clickable link question to direct users to external resources.
        </li>
        <li>
          <strong>End screen</strong>: a closing message shown after the survey is submitted.
        </li>
      </UnorderedList>
      <Paragraph>Additional configuration options include:</Paragraph>
      <UnorderedList>
        <li>
          <strong>Position</strong>: place the popover in any corner:{" "}
          <InlineCode>top-left</InlineCode>, <InlineCode>top-right</InlineCode>,{" "}
          <InlineCode>bottom-left</InlineCode>, or <InlineCode>bottom-right</InlineCode> (default).
        </li>
        <li>
          <strong>Dismissible</strong>: allow users to close the survey without completing it.
        </li>
        <li>
          <strong>Auto-close after submit</strong>: automatically dismiss the popover once the
          survey is submitted.
        </li>
        <li>
          <strong>Auto-proceed after answer</strong>: advance to the next question automatically
          once the user selects an answer.
        </li>
      </UnorderedList>
      <Paragraph>Below is a screenshot of how the workflow is set up in Flows:</Paragraph>

      <Image
        src={workflowPng}
        alt="Flows workflow setup for the Survey Popover example"
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
          <ParagraphLink href={links.examples.surveyPopoverSource}>GitHub</ParagraphLink> and
          install the required dependencies in the project directory.
        </li>
        <li>
          Add your organization ID in the <InlineCode>providers.tsx</InlineCode> file.
        </li>
        <li>Recreate the workflow using the Survey block in your organization and publish it.</li>
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
