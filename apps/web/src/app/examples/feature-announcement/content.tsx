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
import darkPng from "./feature-announcement-dark.png";
import lightPng from "./feature-announcement-light.png";
import workflowPng from "./workflow.png";

export const featureAnnouncementContent: ContentType = {
  slug: "feature-announcement",
  title: "Feature announcement",
  description: "Let users know about new features with a full page announcement.",
  images: {
    light: lightPng,
    dark: darkPng,
  },
  embed: {
    src: links.examples.featureAnnouncement,
    title: "Feature announcement example application – Flows",
  },
  sidebar: {
    framework: <NextJsFramework />,
    links: {
      liveDemo: links.examples.featureAnnouncement,
      sourceCode: links.examples.featureAnnouncementSource,
    },
    tags: ["Adoption", "Announcement", "Dialog", "Explainer", "Modal", "User Engagement"],
  },
  readme: (
    <>
      <Paragraph>
        This example showcases a full page dialog feature announcement powered by{" "}
        <InlineCode>@flows/react</InlineCode> to announce a new feature to users.
      </Paragraph>
      <Paragraph>
        Feature announcements are a great way to introduce new features to users and help them
        understand how they work, however they can sometimes be dismissed too quickly if they
        interrupt the user’s workflow.
      </Paragraph>

      <Paragraph>A solid feature announcement should:</Paragraph>
      <UnorderedList>
        <li>
          <strong>DO: </strong> Clearly explain the new feature and its benefits.
        </li>
        <li>
          <strong>DO: </strong> Use engaging visuals to capture the user’s attention.
        </li>
        <li>
          <strong>DO: </strong> Provide a clear call-to-action to encourage users to try the new
          feature.
        </li>
        <li>
          <strong>DON’T: </strong> Overwhelm users with too much information at once.
        </li>
        <li>
          <strong>DON’T: </strong> Interrupt the user’s workflow unnecessarily.
        </li>
      </UnorderedList>

      <Heading>Features</Heading>
      <Paragraph>
        When an existing user comes back to the app the feature announcement will be displayed to
        them right away. In this example the dialog is a custom UI component that is made up of
        multiple steps that explain the new feature.
      </Paragraph>
      <Paragraph>Below is a screenshot of how the workflow is set up in Flows:</Paragraph>

      <Image
        src={workflowPng}
        alt="Flows workflow setup for the feature announcement example"
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
          <ParagraphLink href={links.examples.featureAnnouncementSource}>GitHub</ParagraphLink> and
          install the required dependencies in the project directory.
        </li>
        <li>
          Add your organization ID in the <InlineCode>providers.tsx</InlineCode> file.
        </li>
        <li>Create a new component in your organization with the following configuration:</li>

        <UnorderedList>
          <li>
            <strong>UI component:</strong> FeatureAnnouncement
          </li>
          <li>
            <strong>Slottable:</strong> false
          </li>
          <li>
            <strong>Custom properties:</strong>
            <UnorderedList>
              <li>Main title</li>
              <li>Steps (array):</li>
              <UnorderedList>
                <li>Title</li>
                <li>Description</li>
                <li>Illustration</li>
              </UnorderedList>
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
