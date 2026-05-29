import { css } from "@flows/styled-system/css";
import { SignupClick } from "components/utils/signup-click";
import { links } from "lib/links";
import Image from "next/image";
import { routes } from "routes";

import { NextJsFramework } from "../frameworks";
import { type ContentType } from "../types";
import {
  Heading,
  Heading2,
  InlineCode,
  OrderedList,
  Paragraph,
  ParagraphLink,
  UnorderedList,
} from "../typography";

import darkPng from "./in-app-changelog-dark.png";
import lightPng from "./in-app-changelog-light.png";

import workflowPng from "./workflow.png";

export const inAppChangelogContent: ContentType = {
  slug: "in-app-changelog",
  title: "In-App Changelog",
  description:
    "Add an in-app changelog to your product to inform users about new features and updates.",
  metaDescription:
    "Live in-app changelog example built with Flows. A sidebar button opens a popover with recent product updates. Per-entry read tracking with state memory - no backend needed.",
  images: {
    light: lightPng,
    dark: darkPng,
  },
  embed: {
    src: links.examples.inAppChangelog,
    title: "In-App Changelog example application - Flows",
  },
  sidebar: {
    framework: <NextJsFramework />,
    links: {
      liveDemo: links.examples.inAppChangelog,
      sourceCode: links.examples.inAppChangelogSource,
    },
    tags: [
      "Slottable",
      "State Memory",
      "Changelog",
      "Product Updates",
      "Unread Badge",
      "Feature Adoption",
      "React",
    ],
  },
  readme: (
    <>
      <Paragraph>
        An in-app changelog keeps users informed about new features and product updates without
        pulling them away from your app. This example shows how to build a persistent changelog
        button in the sidebar using a custom <InlineCode>ChangelogButton</InlineCode> component and{" "}
        <InlineCode>@flows/react</InlineCode> - with per-entry read tracking powered by state
        memory, no backend required.
      </Paragraph>

      <Heading>What is an in-app changelog?</Heading>
      <Paragraph>
        An in-app changelog is a feed of recent product updates embedded directly in your app. It
        lets users discover new features, improvements, and bug fixes at their own pace - without
        needing to check a separate blog or email newsletter.
      </Paragraph>
      <Paragraph>Common uses for an in-app changelog:</Paragraph>
      <UnorderedList>
        <li>
          <strong>Feature announcements</strong> - let users know about new functionality the moment
          they log in.
        </li>
        <li>
          <strong>Improvement updates</strong> - surface performance improvements or UX changes that
          users might otherwise miss.
        </li>
        <li>
          <strong>Release notes</strong> - give power users a running log of what has changed across
          versions.
        </li>
        <li>
          <strong>Re-engagement</strong> - bring back dormant users by showing them what is new
          since their last session.
        </li>
      </UnorderedList>

      <Heading>In-app changelog best practices</Heading>
      <Paragraph>
        A well-designed product changelog widget balances visibility with restraint:
      </Paragraph>
      <UnorderedList>
        <li>
          <strong>Persistent, not intrusive</strong> - a sidebar button lets users check updates
          when they want to, rather than interrupting their workflow with a modal.
        </li>
        <li>
          <strong>Track what users have read</strong> - an unread badge tells users something is new
          without forcing them to open the popover to find out.
        </li>
        <li>
          <strong>Keep entries short</strong> - one sentence per entry is enough. Link to a full
          post for users who want more detail.
        </li>
        <li>
          <strong>Date every entry</strong> - dates give context and signal that the product is
          actively maintained.
        </li>
        <li>
          <strong>Update without deploying</strong> - manage changelog content in your workflow
          tool, not in code, so non-engineers can publish updates.
        </li>
      </UnorderedList>

      <Heading>How this example works</Heading>
      <Paragraph>
        The example uses a <strong>Slottable</strong> workflow block in Flows to inject a custom{" "}
        <InlineCode>ChangelogButton</InlineCode> component into a <InlineCode>FlowsSlot</InlineCode>{" "}
        placed at the bottom of the app sidebar. The button and its entries are fully configured in
        Flows - no code changes are needed to add or update entries.
      </Paragraph>

      <Heading2>The changelog button</Heading2>
      <Paragraph>
        The <InlineCode>ChangelogButton</InlineCode> renders a button in the sidebar slot. Clicking
        it opens a popover listing the configured changelog entries. Each entry shows a date, a
        title, and links to the full changelog post. A footer link at the bottom of the popover
        points to the complete changelog page.
      </Paragraph>
      <Paragraph>
        When there are unread entries, the button shows a blue badge with the unread count. Inside
        the popover, each unread entry has a blue dot next to its date.
      </Paragraph>

      <Heading2>Read tracking with state memory</Heading2>
      <Paragraph>
        Each entry in the <InlineCode>entries</InlineCode> array has an optional{" "}
        <InlineCode>seen</InlineCode> property typed as{" "}
        <ParagraphLink href={links.docs.blockProperties.stateMemory}>state memory</ParagraphLink>.
        Flows persists the boolean value per user - so once an entry is marked as read, it stays
        read across sessions without any server-side code.
      </Paragraph>
      <Paragraph>An entry is marked as read in two ways:</Paragraph>
      <UnorderedList>
        <li>
          <strong>Hover for 2 seconds</strong> - a timer starts on{" "}
          <InlineCode>mouseEnter</InlineCode> and is cancelled if the user moves away before 2
          seconds elapse. This avoids marking entries seen when the user is just scrolling past.
        </li>
        <li>
          <strong>Click</strong> - clicking an entry link marks it seen immediately, since the user
          is actively engaging with it.
        </li>
      </UnorderedList>

      <Heading2>Workflow setup</Heading2>
      <Paragraph>Below is a screenshot of how the workflow is set up in Flows:</Paragraph>

      <Image
        src={workflowPng}
        alt="Flows Slottable workflow setup for the In-App Changelog example with state memory per entry"
        width={1800}
        height={1040}
        className={css({
          borderRadius: "radius6",
          borderWidth: "1px",
          borderColor: "newBorder.neutral",
          borderStyle: "solid",
        })}
      />

      <Heading2>Component configuration</Heading2>
      <Paragraph>
        The <InlineCode>ChangelogButton</InlineCode> component accepts the following props,
        configured in the Flows workflow editor:
      </Paragraph>
      <UnorderedList>
        <li>
          <strong>Label</strong> - optional button label (defaults to "What's new")
        </li>
        <li>
          <strong>Changelog Url</strong> - URL for the "View full changelog" footer link
        </li>
        <li>
          <strong>Entries</strong> - array of changelog entries, each with:
          <UnorderedList>
            <li>
              <strong>Title</strong> - short description of the update
            </li>
            <li>
              <strong>Date</strong> - display date (e.g. "May 2025")
            </li>
            <li>
              <strong>Url</strong> - link to the full changelog post
            </li>
            <li>
              <strong>Seen</strong> - state memory property for per-user read tracking
            </li>
          </UnorderedList>
        </li>
      </UnorderedList>

      <Heading>Related examples</Heading>
      <Paragraph>
        If you want to proactively announce a major update rather than letting users discover it
        themselves, consider pairing this pattern with a{" "}
        <ParagraphLink href={routes.exampleDetail("feature-announcement")}>
          feature announcement
        </ParagraphLink>{" "}
        or a{" "}
        <ParagraphLink href={routes.exampleDetail("new-feature-badge")}>
          new feature badge
        </ParagraphLink>{" "}
        that points users to the changelog button on their first visit.
      </Paragraph>

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
          <ParagraphLink href={links.examples.inAppChangelogSource}>GitHub</ParagraphLink> and
          install the required dependencies in the project directory.
        </li>
        <li>
          Add your organization ID in the <InlineCode>providers.tsx</InlineCode> file.
        </li>
        <li>
          Recreate the changelog workflow using the <strong>Slottable</strong> block, target the{" "}
          <InlineCode>changelog-slot</InlineCode> slot, select{" "}
          <InlineCode>ChangelogButton</InlineCode> as the component, and add your entries - each
          with a <InlineCode>seen</InlineCode> property set to <strong>State memory</strong>.
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
          <ParagraphLink target="_blank" href={links.docs.blockProperties.stateMemory}>
            State memory documentation
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
