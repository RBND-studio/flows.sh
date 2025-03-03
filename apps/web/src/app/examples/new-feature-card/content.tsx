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
import darkPng from "./new-feature-card-dark.png";
import lightPng from "./new-feature-card-light.png";
import workflowPng from "./workflow.png";

export const newFeatureCardContent: ContentType = {
  slug: "new-feature-card",
  title: "New feature card",
  images: {
    light: lightPng,
    dark: darkPng,
  },
  description: "Announce new features or updates with a card that shows up in your app’s sidebar.",
  embed: {
    src: links.examples.newFeatureCard,
    title: "New feature card example application – Flows",
  },
  sidebar: {
    framework: <NextJsFramework />,
    links: {
      liveDemo: links.examples.newFeatureCard,
      sourceCode: links.examples.newFeatureCardSource,
    },
    tags: ["Announcement", "Adoption", "Slottable", "Promotion", "In-page"],
  },
  readme: (
    <>
      <Paragraph>
        This example showcases announcement card powered by <InlineCode>@flows/react</InlineCode>.
        The card is displayed in the sidebar of your app and can be used to announce new features,
        product launches, or marketing efforts.
      </Paragraph>

      <Paragraph>
        The card is interactive and can be clicked to view more details of visit the feature. Once
        clicked, the card will redirect the user to the destination URL and mark the card as read.
      </Paragraph>

      <Heading>Features</Heading>
      <Paragraph>
        If users matches your criteria, they will enter the workflow and see the card in the
        sidebar. The card will be displayed until the user clicks on it or the workflow is turned
        off.
      </Paragraph>
      <Paragraph>
        You can customize the text, description, and url of the card in the workflow settings. The
        illustration is fixed, but could be replaced with a custom image.
      </Paragraph>
      <Paragraph>Below is a screenshot of how the workflow is set up in Flows:</Paragraph>

      <Image
        src={workflowPng}
        alt="Flows workflow setup for the new feature card example"
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
          <ParagraphLink href={links.examples.newFeatureCardSource}>GitHub</ParagraphLink> and
          install the required dependencies in the project directory.
        </li>
        <li>
          Add your organization ID in the <InlineCode>providers.tsx</InlineCode> file.
        </li>
        <li>
          Create a new block template in your organization with the following configuration:
          <UnorderedList>
            <li>
              <strong>UI component:</strong> NewFeatureCard
            </li>
            <li>
              <strong>Slottable:</strong> true
            </li>
            <li>
              <strong>Custom properties:</strong>
              <UnorderedList>
                <li>Title</li>
                <li>Description</li>
                <li>Href</li>
              </UnorderedList>
            </li>
            <li>
              <strong>Exit nodes:</strong>
              <UnorderedList>
                <li>continue</li>
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
