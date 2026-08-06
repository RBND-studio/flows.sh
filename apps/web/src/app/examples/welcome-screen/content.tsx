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
import darkPng from "./modal-dark.png";
import lightPng from "./modal-light.png";
import workflowPng from "./workflow.png";

export const welcomeScreenContent: ContentType = {
  slug: "welcome-screen",
  title: "Welcome Screen",
  description: "Greet new users with a welcome screen modal on first login to boost activation.",
  images: {
    light: lightPng,
    dark: darkPng,
  },
  embed: {
    src: links.examples.welcomeScreen,
    title: "Welcome Screen example application – Flows",
  },
  sidebar: {
    framework: <NextJsFramework />,
    links: {
      liveDemo: links.examples.welcomeScreen,
      sourceCode: links.examples.welcomeScreenSource,
    },
    tags: ["Welcome Screen", "Modal", "User Onboarding", "First Impression", "Activation", "React"],
  },
  readme: (
    <>
      <Paragraph>
        This example shows a welcome screen: the full screen modal that greets new users the first
        time they open your app, built with the Modal component from{" "}
        <InlineCode>@flows/react-components</InlineCode>. A strong welcome screen sets the tone,
        explains the value users are about to get, and points them at their first action so they
        reach that first win faster.
      </Paragraph>

      <Heading>Features</Heading>
      <Paragraph>
        When a user opens the project management dashboard for the first time, a welcome modal
        appears on top of the app. It combines a friendly greeting, a short value statement, and a
        primary &quot;Get started&quot; call to action that closes the screen and drops the user
        into the product. Because the workflow targets first-time users only, returning users skip
        the welcome screen and go straight to their dashboard.
      </Paragraph>
      <Paragraph>Below is a screenshot of how the workflow is set up in Flows:</Paragraph>

      <Image
        src={workflowPng}
        alt="Flows workflow setup for the Welcome Screen example"
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
          <ParagraphLink href={links.examples.welcomeScreenSource}>GitHub</ParagraphLink> and
          install the required dependencies in the project directory.
        </li>
        <li>
          Add your organization ID in the <InlineCode>providers.tsx</InlineCode> file.
        </li>
        <li>Recreate the welcome screen workflow using the Modal block and publish it.</li>
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
