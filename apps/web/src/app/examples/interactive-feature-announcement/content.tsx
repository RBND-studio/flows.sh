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
import darkPng from "./interactive-feature-announcement-dark.png";
import lightPng from "./interactive-feature-announcement-light.png";
import workflowPng from "./workflow.png";

export const interactiveFeatureAnnouncementContent: ContentType = {
  slug: "interactive-feature-announcement",
  title: "Interactive feature announcement",
  images: {
    light: lightPng,
    dark: darkPng,
  },
  description: "Show how your new feature works instead of just telling users about it.",
  embed: {
    src: links.examples.interactiveFeatureAnnouncement,
    title: "Interactive feature announcement example application – Flows",
  },
  sidebar: {
    framework: <NextJsFramework />,
    links: {
      liveDemo: links.examples.interactiveFeatureAnnouncement,
      sourceCode: links.examples.interactiveFeatureAnnouncementSource,
    },
    tags: ["Announcement", "Adoption", "Interactive", "Engagement"],
  },
  readme: (
    <>
      <Paragraph>
        This example showcases an interactive feature announcement powered by{" "}
        <InlineCode>@flows/react</InlineCode> to announce a new feature and give users a preview of
        how it works.
      </Paragraph>
      <Paragraph>
        Interactive feature announcements are a great way to introduce new features to users and
        help them understand how they work. Instead of just telling users about a new feature, you
        can show them how it works in an interactive way.
      </Paragraph>

      <Heading>Features</Heading>
      <Paragraph>
        When a user enters the Interactive Feature Announcement block in a workflow and, a modal
        appears. In this example, the modal is a custom UI component announcing the release of a
        dark mode support to the app. The modal gives users the option to select which theme they
        want to use (light, dark, or system default).
      </Paragraph>
      <Paragraph>Below is a screenshot of how the workflow is set up in Flows:</Paragraph>

      <Image
        src={workflowPng}
        alt="Flows workflow setup for the interactive feature announcement example"
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
          <ParagraphLink href={links.examples.interactiveFeatureAnnouncementSource}>
            GitHub
          </ParagraphLink>{" "}
          and install the required dependencies in the project directory.
        </li>
        <li>
          Add your organization ID in the <InlineCode>providers.tsx</InlineCode> file.
        </li>
        <li>
          Create a new component in your organization with the following configuration:
          <UnorderedList>
            <li>
              <strong>UI component:</strong> AnnouncementModal
            </li>
            <li>No other configuration is required for this example.</li>
          </UnorderedList>
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
