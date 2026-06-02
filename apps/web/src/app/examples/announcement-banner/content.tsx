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

import darkPng from "./announcement-banner-dark.png";
import lightPng from "./announcement-banner-light.png";

import workflowPng from "./workflow.png";

export const announcementBannerContent: ContentType = {
  slug: "announcement-banner",
  title: "Announcement banner",
  description: "Add a dismissible announcement banner at the top of your app for feature launches.",
  metaDescription:
    "Add a dismissible in-app announcement banner to the top of your web app with Flows. Control copy, link, timing, and user targeting from the workflow editor without a code deploy.",
  images: {
    light: lightPng,
    dark: darkPng,
  },
  embed: {
    src: links.examples.announcementBanner,
    title: "Announcement banner example application - Flows",
  },
  sidebar: {
    framework: <NextJsFramework />,
    links: {
      liveDemo: links.examples.announcementBanner,
      sourceCode: links.examples.announcementBannerSource,
    },
    tags: [
      "Announcement Banner",
      "Notification Bar",
      "Top Bar",
      "In-App Messaging",
      "Feature Announcement",
      "Product Update",
      "Feature Launch",
      "Adoption",
      "Engagement",
    ],
  },
  readme: (
    <>
      <Paragraph>
        This announcement banner example shows how to display a full-width dismissible notification
        bar at the top of your app using a custom component powered by Flows. Use it to announce
        feature launches, product updates, promotions, or any time-sensitive message without
        interrupting the user with a modal or popover.
      </Paragraph>
      <Paragraph>
        Unlike a hardcoded banner, this one is driven by a Flows workflow. You control the copy,
        link, and timing from the Flows editor. Target specific user segments, schedule the banner
        for a release date, and retire it automatically once users dismiss it. No code deploy
        required to update the message.
      </Paragraph>

      <Heading>Features</Heading>
      <Paragraph>
        When a user enters the workflow, the banner slides in at the top of the application with a
        smooth animation. It includes:
      </Paragraph>
      <UnorderedList>
        <li>
          <strong>Badge</strong>: a small labeled chip (e.g. "New") that signals the announcement
          type at a glance.
        </li>
        <li>
          <strong>Message</strong>: a short announcement text configured in the workflow editor and
          updated without a code deploy.
        </li>
        <li>
          <strong>Learn more link</strong>: a configurable URL that opens the full announcement,
          changelog entry, or landing page in a new tab.
        </li>
        <li>
          <strong>Dismiss button</strong>: an X button that calls <InlineCode>close()</InlineCode>{" "}
          to advance the workflow and remove the banner. Flows remembers the dismissal so the banner
          does not reappear.
        </li>
      </UnorderedList>
      <Paragraph>
        The banner is registered as a custom component in <InlineCode>providers.tsx</InlineCode> and
        rendered via a <InlineCode>FlowsSlot</InlineCode> placed above the main app layout. Flows
        injects the component into that slot when the workflow step is active.
      </Paragraph>
      <Paragraph>Below is a screenshot of how the workflow is set up in Flows:</Paragraph>

      <Image
        src={workflowPng}
        alt="Flows workflow setup for the announcement banner example: a single custom AnnouncementBanner block with badge, text, href, and linkText properties"
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
          <ParagraphLink href={links.examples.announcementBannerSource}>GitHub</ParagraphLink> and
          install the required dependencies in the project directory.
        </li>
        <li>
          Add your organization ID in the <InlineCode>providers.tsx</InlineCode> file.
        </li>
        <li>
          Recreate the announcement banner workflow using the custom{" "}
          <InlineCode>AnnouncementBanner</InlineCode> block in your organization and publish it.
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
