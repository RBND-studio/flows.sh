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

import darkPng from "./microsurvey-dark.png";
import lightPng from "./microsurvey-light.png";

import workflowPng from "./workflow.png";

export const microsurveyContent: ContentType = {
  slug: "microsurvey",
  title: "Microsurvey",
  description: "Capture quick in-app feedback with a microsurvey widget.",
  metaDescription:
    "See a live microsurvey example built with Flows. Add a 5-point emoji rating widget to any app and collect quick in-app feedback with a single click.",
  images: {
    light: lightPng,
    dark: darkPng,
  },
  embed: {
    src: links.examples.microsurvey,
    title: "Microsurvey example application - Flows",
  },
  sidebar: {
    framework: <NextJsFramework />,
    links: {
      liveDemo: links.examples.microsurvey,
      sourceCode: links.examples.microsurveySource,
    },
    tags: [
      "Microsurvey",
      "In-App Feedback",
      "Emoji Rating",
      "Quick Feedback",
      "User Feedback",
      "Survey",
      "CSAT",
      "Feature Feedback",
    ],
  },
  readme: (
    <>
      <Paragraph>
        This microsurvey example shows how to embed a 5-point emoji reaction widget in an analytics
        dashboard using the built-in Survey Popover component from{" "}
        <InlineCode>@flows/react-components</InlineCode>. The survey triggers automatically, appears
        in the corner of the screen, and captures a rating with a single click - without
        interrupting the user&apos;s workflow.
      </Paragraph>
      <Paragraph>
        Microsurveys trade depth for breadth. A single emoji question captures sentiment in under
        three seconds, making them ideal for gathering feedback on specific features, reports, or
        moments in your product where a full NPS or CSAT survey would feel out of place.
      </Paragraph>

      <Heading>Features</Heading>
      <Paragraph>
        When a user enters the workflow, the survey popover appears in the bottom-right corner of
        the screen. The survey walks users through two steps:
      </Paragraph>
      <UnorderedList>
        <li>
          <strong>Emoji rating</strong>: a 1-5 emoji scale from very unhappy to very happy, asking
          how useful the current report was.
        </li>
        <li>
          <strong>End screen</strong>: a thank-you message acknowledging the response before the
          popover closes automatically.
        </li>
      </UnorderedList>
      <Paragraph>
        The workflow uses the Auto proceed after answer option on the rating step so the popover
        submits as soon as the user picks an emoji - no button click needed. The Auto close after
        submit option closes the popover once the end screen is reached.
      </Paragraph>
      <Paragraph>Below is a screenshot of how the workflow is set up in Flows:</Paragraph>

      <Image
        src={workflowPng}
        alt="Flows workflow setup for the Microsurvey example: 5-point emoji rating and thank-you end screen"
        width={1800}
        height={1040}
        className={css({
          borderRadius: "radius6",
          borderWidth: "1px",
          borderColor: "border.neutral",
          borderStyle: "solid",
        })}
      />
      <Heading>Getting started</Heading>
      <OrderedList>
        <li>
          Sign up for Flows if you haven&apos;t already. You can{" "}
          <SignupClick>
            <ParagraphLink target="_blank" href={links.signUp}>
              create a free account here
            </ParagraphLink>
          </SignupClick>
          .
        </li>
        <li>
          Clone the repository from{" "}
          <ParagraphLink href={links.examples.microsurveySource}>GitHub</ParagraphLink> and install
          the required dependencies in the project directory.
        </li>
        <li>
          Add your organization ID in the <InlineCode>providers.tsx</InlineCode> file.
        </li>
        <li>
          Recreate the microsurvey workflow using the Survey block in your organization and publish
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
