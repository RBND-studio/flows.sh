import { SignupClick } from "components/utils/signup-click";
import { links } from "lib/links";

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
import darkPng from "./waitlist-survey-dark.png";
import lightPng from "./waitlist-survey-light.png";

export const waitlistSurveyContent: ContentType = {
  slug: "waitlist-survey",
  title: "Waitlist survey",
  exampleWorkflowId: "5f9ddc78-ff45-4999-bfa2-780bb8e21234",
  description:
    "Collect early-access waitlist signups with a qualifying question, using a Flows survey.",
  metaDescription:
    "Build an early-access waitlist signup in React with Flows. Capture an email and a qualifying question in one survey popover instead of a plain form.",
  images: {
    light: lightPng,
    dark: darkPng,
  },
  embed: {
    src: links.examples.waitlistSurvey,
    title: "Waitlist survey example application - Flows",
  },
  sidebar: {
    framework: <NextJsFramework />,
    links: {
      liveDemo: links.examples.waitlistSurvey,
      sourceCode: links.examples.waitlistSurveySource,
    },
    tags: [
      "Waitlist",
      "Early Access",
      "Survey",
      "Survey Popover",
      "Lead Capture",
      "Feature Launch",
      "Growth",
      "React",
    ],
  },
  readme: (
    <>
      <Paragraph>
        This waitlist survey example shows how to collect early-access signups for an unreleased
        feature using a Flows survey instead of a plain HTML form.
      </Paragraph>
      <Paragraph>
        A plain waitlist form only captures an email. A short survey lets you also ask a qualifying
        question, so you know who to invite first when you start rolling the feature out.
      </Paragraph>

      <Heading>Features</Heading>
      <UnorderedList>
        <li>
          <strong>Join waitlist button</strong>: clicking it calls{" "}
          <InlineCode>startWorkflow(&quot;waitlist-survey.start&quot;)</InlineCode> to enter the
          workflow.
        </li>
        <li>
          <strong>Email question</strong>: a freeform question collects the visitor's work email.
        </li>
        <li>
          <strong>Qualifying question</strong>: a single choice question asks how they'd use the
          feature, so you can segment invites later.
        </li>
        <li>
          <strong>Confirmation</strong>: the survey's end screen confirms the signup without leaving
          the page.
        </li>
        <li>
          <strong>No custom component required</strong>: the survey is presented with the built-in{" "}
          Survey Popover component, anchored to a corner of the screen.
        </li>
      </UnorderedList>

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
          <ParagraphLink href={links.examples.waitlistSurveySource}>GitHub</ParagraphLink> and
          install the required dependencies in the project directory.
        </li>
        <li>
          Add your organization ID in the <InlineCode>providers.tsx</InlineCode> file.
        </li>
        <li>
          Import the workflow by clicking <strong>Use this example</strong> at the top of this page
          and publish it.
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
