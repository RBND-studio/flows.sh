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
import darkPng from "./getting-started-dashboard-dark.png";
import lightPng from "./getting-started-dashboard-light.png";
import workflowPng from "./workflow.png";

export const gettingStartedDashboardContent: ContentType = {
  slug: "getting-started-dashboard",
  title: "Getting started dashboard",
  description: "Show users learning resources and onboarding tips when they first sign up.",
  images: {
    light: lightPng,
    dark: darkPng,
  },
  embed: {
    src: links.examples.gettingStartedDashboard,
    title: "Getting started dashboard example application – Flows",
  },
  sidebar: {
    framework: <NextJsFramework />,
    links: {
      liveDemo: links.examples.gettingStartedDashboard,
      sourceCode: links.examples.gettingStartedDashboardSource,
    },
    tags: ["Slottable", "Adoption", "Onboarding", "In-app help hub", "Tour"],
  },
  readme: (
    <>
      <Paragraph>
        This example showcases a getting started dashboard powered by{" "}
        <InlineCode>@flows/react</InlineCode> to help onboard new users to your application.
      </Paragraph>
      <Paragraph>
        A getting started dashboard is a centralized location where users can find resources,
        tutorials, and tips to help them get started with your application. It can also provide
        quick access to important features and settings.
      </Paragraph>

      <Paragraph>Best practices:</Paragraph>
      <UnorderedList>
        <li>Make sure that users can easily access the dashboard when they need it.</li>
        <li>Give users the ability to re-launch onboarding tours as needed.</li>
        <li>Offer an option to hide the dashboard if users find it distracting.</li>
        <li>Include a progress tracker to show users how much they have completed.</li>
        <li>Use clear and concise language to explain each step of the onboarding process.</li>
        <li>Provide actionable call-to-actions.</li>
      </UnorderedList>

      <Heading>Features</Heading>
      <Paragraph>
        When a user opens the application, they are greeted with an onboarding dashboard, which contains a
        demo video, a link to a list of tutorials, and a button to launch an interactive tour.
      </Paragraph>

      <Paragraph>Below is a screenshot of how the workflow is set up in Flows:</Paragraph>

      <Image
        src={workflowPng}
        alt="Flows workflow setup for the getting started dashboard example"
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
          <ParagraphLink href={links.examples.gettingStartedDashboardSource}>GitHub</ParagraphLink>{" "}
          and install the required dependencies in the project directory.
        </li>
        <li>
          Add your organization ID in the <InlineCode>providers.tsx</InlineCode> file.
        </li>
        <li>Create a new component in your organization with the following configuration:</li>
        <UnorderedList>
          <li>
            <strong>UI component:</strong> GettingStarted
          </li>
          <li>
            <strong>Slottable:</strong> true
          </li>
          <li>
            <strong>Custom properties:</strong>
            <UnorderedList>
              <li>Title</li>
              <li>Learn link</li>
              <li>Trigger tour</li>
              <li>Plugin link</li>
            </UnorderedList>
          </li>
          <li>
            <strong>Exit nodes:</strong>
            <UnorderedList>
              <li>close</li>
            </UnorderedList>
          </li>
        </UnorderedList>
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
