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

import darkPng from "./csat-survey-dark.png";
import lightPng from "./csat-survey-light.png";

import workflowPng from "./workflow.png";

export const csatSurveyContent: ContentType = {
  slug: "csat-survey",
  title: "Customer Satisfaction (CSAT) survey",
  description:
    "Collect Customer Satisfaction Score feedback in your React app with a non-intrusive survey popover.",
  images: {
    light: lightPng,
    dark: darkPng,
  },
  embed: {
    src: links.examples.csatSurvey,
    title: "CSAT survey example application - Flows",
  },
  sidebar: {
    framework: <NextJsFramework />,
    links: {
      liveDemo: links.examples.csatSurvey,
      sourceCode: links.examples.csatSurveySource,
    },
    tags: [
      "CSAT",
      "Survey",
      "Feedback",
      "Customer Satisfaction",
      "User Research",
      "Engagement",
      "Retention",
    ],
  },
  readme: (
    <>
      <Paragraph>
        This CSAT survey example shows how to collect Customer Satisfaction Score feedback in a
        React app using the built-in Survey Popover component from{" "}
        <InlineCode>@flows/react-components</InlineCode>. The survey triggers automatically, appears
        in the corner of the screen, and asks users to rate their satisfaction and optionally
        explain their answer, without interrupting their workflow.
      </Paragraph>
      <Paragraph>
        CSAT surveys measure satisfaction at a specific point in time, making them ideal for
        capturing sentiment after key interactions like completing a task, finishing an onboarding
        flow, or reaching a milestone. Running them in-product captures feedback while the
        experience is still fresh.
      </Paragraph>

      <Heading>Features</Heading>
      <Paragraph>
        When a user enters the workflow, the survey popover appears in the bottom-right corner of
        the screen. The survey walks users through three steps:
      </Paragraph>
      <UnorderedList>
        <li>
          <strong>Satisfaction rating</strong>: a 1-5 star scale asking how satisfied the user is
          with the product.
        </li>
        <li>
          <strong>Follow-up question</strong>: an open-ended freeform text field asking what could
          be improved. Marked as optional so users can skip it.
        </li>
        <li>
          <strong>End screen</strong>: a thank-you message acknowledging the response before the
          popover closes automatically.
        </li>
      </UnorderedList>
      <Paragraph>
        The workflow uses the Auto proceed after answer option on the rating step so the popover
        advances as soon as the user selects a score, reducing friction. The Auto close after submit
        option closes the popover once the end screen is reached.
      </Paragraph>
      <Paragraph>Below is a screenshot of how the workflow is set up in Flows:</Paragraph>

      <Image
        src={workflowPng}
        alt="Flows workflow setup for the CSAT survey example: satisfaction rating, follow-up freeform, and thank-you end screen"
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
          <ParagraphLink href={links.examples.csatSurveySource}>GitHub</ParagraphLink> and install
          the required dependencies in the project directory.
        </li>
        <li>
          Add your organization ID in the <InlineCode>providers.tsx</InlineCode> file.
        </li>
        <li>
          Recreate the CSAT survey workflow using the Survey block in your organization and publish
          it.
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
