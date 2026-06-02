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
import darkPng from "./new-feature-badge-dark.png";
import lightPng from "./new-feature-badge-light.png";
import workflowPng from "./workflow.png";
import { routes } from "routes";

export const newFeatureContent: ContentType = {
  slug: "new-feature-badge",
  title: "New feature badge",
  images: {
    light: lightPng,
    dark: darkPng,
  },
  description: "Highlight new features in your application with a badge.",
  metaDescription:
    "See a live new feature badge UI example built with Flows. Learn how to highlight new features in your app with a floating badge component.",
  embed: {
    src: links.examples.newFeatureBadge,
    title: "New feature badge example application – Flows",
  },
  sidebar: {
    framework: <NextJsFramework />,
    links: {
      liveDemo: links.examples.newFeatureBadge,
      sourceCode: links.examples.newFeatureBadgeSource,
    },
    tags: ["Announcement", "Adoption", "Engagement", "Floating"],
  },
  readme: (
    <>
      <Paragraph>
        A new feature badge is a lightweight UI element that draws attention to new or updated
        functionality directly in your app. This example shows how to build one using{" "}
        <InlineCode>@flows/react</InlineCode> and <InlineCode>floating-ui</InlineCode>.
      </Paragraph>
      <Paragraph>
        Unlike modals or banners, the badge sits inline next to the feature itself - a subtle visual
        highlight that guides users to what's new without interrupting their workflow.
      </Paragraph>

      <Heading>What is a new feature badge?</Heading>
      <Paragraph>
        A new feature badge is a small indicator placed next to a navigation item, button, or menu
        entry to signal that something is new or recently updated. It's one of the most low-friction
        ways to drive feature discovery - users see it in context, at the right moment.
      </Paragraph>
      <Paragraph>Common uses include:</Paragraph>
      <UnorderedList>
        <li>Marking a new sidebar link or navigation item</li>
        <li>Highlighting a newly added setting or preference</li>
        <li>Drawing attention to a new dashboard widget or report</li>
      </UnorderedList>

      <Heading>New feature badge UI</Heading>
      <Paragraph>
        The badge in this example is a floating UI element powered by{" "}
        <InlineCode>floating-ui</InlineCode>, which handles positioning relative to any target
        element on the page. It can be anchored to any component and placed on any side.
      </Paragraph>
      <Paragraph>Key characteristics of a well-designed new feature badge UI:</Paragraph>
      <UnorderedList>
        <li>Small and unobtrusive - it should complement the UI, not dominate it</li>
        <li>Positioned close to the relevant element</li>
        <li>Dismissed automatically after the user engages with the feature</li>
        <li>Consistent with your product's design system</li>
      </UnorderedList>
      <Paragraph>
        When a user enters the workflow and visits one of the application pages, the new feature
        badge UI element appears next to a specific element on the page, acting as a visual
        highlight for the new feature.
      </Paragraph>
      <Paragraph>Below is a screenshot of how the workflow is set up in Flows:</Paragraph>
      <Image
        src={workflowPng}
        alt="Flows workflow setup for the new feature badge UI example"
        width={1800}
        height={1040}
        className={css({
          borderRadius: "radius6",
          borderWidth: "1px",
          borderColor: "border.neutral",
          borderStyle: "solid",
        })}
      />

      <Heading>Best practices</Heading>
      <Paragraph>
        A new feature badge works best when the feature is already visible in the UI and just needs
        a nudge. For features that need more explanation, consider a{" "}
        <ParagraphLink href={routes.exampleDetail("feature-announcement")}>
          feature announcement modal
        </ParagraphLink>{" "}
        instead.
      </Paragraph>
      <Paragraph>
        <strong>DO:</strong>
      </Paragraph>
      <UnorderedList>
        <li>Show the badge only to users who haven't seen the new feature yet</li>
        <li>Keep the label short - one to three words</li>
        <li>Dismiss it automatically after the user interacts with the feature</li>
      </UnorderedList>
      <Paragraph>
        <strong>DON'T:</strong>
      </Paragraph>
      <UnorderedList>
        <li>Use badges for every update - save them for meaningful new functionality</li>
        <li>Keep the badge visible indefinitely</li>
        <li>Show a badge for features the user can't yet access</li>
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
          <ParagraphLink href={links.examples.newFeatureBadgeSource}>GitHub</ParagraphLink> and
          install the required dependencies in the project directory.
        </li>
        <li>
          Add your organization ID in the <InlineCode>providers.tsx</InlineCode> file.
        </li>
        <li>
          Create a new component in your organization with the following configuration:
          <UnorderedList>
            <li>
              <strong>UI component:</strong> NewFeatureBadge
            </li>
            <li>
              <strong>Slottable:</strong> false
            </li>
            <li>
              <strong>Custom properties:</strong>
              <UnorderedList>
                <li>Title</li>
                <li>Target element</li>
                <li>Side: top, right, bottom, left</li>
                <li>Offset X: number</li>
                <li>Offset Y: number</li>
              </UnorderedList>
            </li>
            <li>
              <strong>Exit nodes:</strong>
              <UnorderedList>
                <li>No exit nodes needed</li>
              </UnorderedList>
            </li>
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
