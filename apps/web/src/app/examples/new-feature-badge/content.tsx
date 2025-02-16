import { css } from "@flows/styled-system/css";
import { SignupClick } from "components/utils/signup-click";
import { Upgrade16 } from "icons";
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
import workflowPng from "./workflow.png";

export const newFeatureContent: ContentType = {
  slug: "new-feature-badge",
  title: "New feature badge",
  icon: Upgrade16,
  description: "Highlight new features in your application with a badge.",
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
        This example showcases new feature badge powered by <InlineCode>@flows/react</InlineCode>{" "}
        and <InlineCode>floating-ui</InlineCode>.
      </Paragraph>
      <Paragraph>
        The badge is a small, floating element that can be positioned next to a new feature’s name,
        location, or any component you want to emphasize. It effectively draws attention to updates
        and changes in your application.
      </Paragraph>
      <Paragraph>
        As products continuously evolve, keeping users informed is essential. The new feature badge
        offers a straightforward and effective way to communicate these changes.
      </Paragraph>

      <Heading>Features</Heading>
      <Paragraph>
        When a user enters the workflow and visits one of the application pages, a new feature badge
        will appear next a specific element on the page, helping to draw attention to the new
        feature. The badge is using a custom component to create a floating element that can be
        positioned anywhere on the page.
      </Paragraph>
      <Paragraph>Below is a screenshot of how the workflow is set up in Flows:</Paragraph>

      <Image
        src={workflowPng}
        alt="Flows workflow setup for the New Feature Badge example"
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
          <ParagraphLink href={links.examples.newFeatureBadgeSource}>GitHub</ParagraphLink> and
          install the required dependencies in the project directory.
        </li>
        <li>
          Add your organization ID in the <InlineCode>providers.tsx</InlineCode> file.
        </li>
        <li>
          Create a new block template in your organization with the following configuration:
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
