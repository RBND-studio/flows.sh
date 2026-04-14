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

import darkPng from "./nps-survey-dark.png";
import lightPng from "./nps-survey-light.png";

import workflowPng from "./workflow.png";

export const npsSurveyContent: ContentType = {
  slug: "nps-survey",
  title: "Net Promoter Score (NPS) survey",
  description:
    "Collect Net Promoter Score feedback in your React app with a non-intrusive survey popover.",
  images: {
    light: lightPng,
    dark: darkPng,
  },
  embed: {
    src: links.examples.npsSurvey,
    title: "NPS survey example application - Flows",
  },
  sidebar: {
    framework: <NextJsFramework />,
    links: {
      liveDemo: links.examples.npsSurvey,
      sourceCode: links.examples.npsSurveySource,
    },
    tags: [
      "NPS",
      "Survey",
      "Feedback",
      "User Research",
      "Customer Loyalty",
      "Engagement",
      "Retention",
    ],
  },
  readme: (
    <>
      <Paragraph>
        This NPS survey example shows how to collect Net Promoter Score feedback in a React app
        using the built-in Survey Popover component from{" "}
        <InlineCode>@flows/react-components</InlineCode>. The survey triggers automatically, appears
        in the corner of the screen, and guides users through a rating question and a follow-up,
        without interrupting their workflow.
      </Paragraph>
      <Paragraph>
        NPS surveys are one of the most widely used tools for measuring customer loyalty and
        predicting churn. Running them in-product rather than via email captures feedback at the
        moment users are actively engaged, which produces higher response rates and more accurate
        scores.
      </Paragraph>

      <Heading>Features</Heading>
      <Paragraph>
        When a user enters the workflow, the survey popover appears in the bottom-right corner of
        the screen. The survey walks users through three steps:
      </Paragraph>
      <UnorderedList>
        <li>
          <strong>NPS rating</strong>: a 0-10 numeric scale asking how likely the user is to
          recommend the product, with "Not likely" and "Very likely" labels at each end.
        </li>
        <li>
          <strong>Follow-up question</strong>: an open-ended freeform text field asking for the
          reason behind the score. Marked as optional so users can skip it.
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
        alt="Flows workflow setup for the NPS survey example: rating question, follow-up freeform, and thank-you end screen"
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
          <ParagraphLink href={links.examples.npsSurveySource}>GitHub</ParagraphLink> and install
          the required dependencies in the project directory.
        </li>
        <li>
          Add your organization ID in the <InlineCode>providers.tsx</InlineCode> file.
        </li>
        <li>
          Recreate the NPS survey workflow using the Survey block in your organization and publish
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
