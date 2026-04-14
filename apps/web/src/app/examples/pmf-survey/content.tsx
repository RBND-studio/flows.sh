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

import darkPng from "./pmf-survey-dark.png";
import lightPng from "./pmf-survey-light.png";

import workflowPng from "./workflow.png";

export const pmfSurveyContent: ContentType = {
  slug: "pmf-survey",
  title: "Product-Market Fit (PMF) survey",
  description:
    "Measure product-market fit in your React app with a non-intrusive survey popover using the Sean Ellis method.",
  images: {
    light: lightPng,
    dark: darkPng,
  },
  embed: {
    src: links.examples.pmfSurvey,
    title: "PMF survey example application - Flows",
  },
  sidebar: {
    framework: <NextJsFramework />,
    links: {
      liveDemo: links.examples.pmfSurvey,
      sourceCode: links.examples.pmfSurveySource,
    },
    tags: [
      "PMF",
      "Product-Market Fit",
      "Survey",
      "Feedback",
      "User Research",
      "Engagement",
      "Retention",
    ],
  },
  readme: (
    <>
      <Paragraph>
        This PMF survey example shows how to measure product-market fit in a React app using the
        built-in Survey Popover component from <InlineCode>@flows/react-components</InlineCode>. The
        survey uses the Sean Ellis method, asking users how they would feel if they could no longer
        use the product - the single fastest way to gauge whether you have achieved product-market
        fit.
      </Paragraph>
      <Paragraph>
        PMF surveys work best when triggered after users have had enough time to experience real
        value from the product. Running them in-product rather than via email captures responses
        from active users, which produces more accurate and actionable data.
      </Paragraph>

      <Heading>Features</Heading>
      <Paragraph>
        When a user enters the workflow, the survey popover appears in the bottom-right corner of
        the screen. The survey walks users through three steps:
      </Paragraph>
      <UnorderedList>
        <li>
          <strong>PMF question</strong>: a single-choice question asking "How would you feel if you
          could no longer use this product?" with three options: "Very disappointed", "Somewhat
          disappointed", and "Not disappointed".
        </li>
        <li>
          <strong>Follow-up question</strong>: an open-ended freeform text field asking what the
          main benefit of the product is for them. Marked as optional so users can skip it.
        </li>
        <li>
          <strong>End screen</strong>: a thank-you message acknowledging the response before the
          popover closes automatically.
        </li>
      </UnorderedList>
      <Paragraph>
        The workflow uses the Auto close after submit option to close the popover once the end
        screen is reached, and Dismissible to let users close the survey without answering.
      </Paragraph>
      <Paragraph>Below is a screenshot of how the workflow is set up in Flows:</Paragraph>

      <Image
        src={workflowPng}
        alt="Flows workflow setup for the PMF survey example: single-choice PMF question, follow-up freeform, and thank-you end screen"
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
          <ParagraphLink href={links.examples.pmfSurveySource}>GitHub</ParagraphLink> and install
          the required dependencies in the project directory.
        </li>
        <li>
          Add your organization ID in the <InlineCode>providers.tsx</InlineCode> file.
        </li>
        <li>
          Recreate the PMF survey workflow using the Survey block in your organization and publish
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
