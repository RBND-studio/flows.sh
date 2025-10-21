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
import darkPng from "./feature-hint-dark.png";
import lightPng from "./feature-hint-light.png";
import workflowPng from "./workflow.png";

export const featureHintContent: ContentType = {
  slug: "feature-hint",
  title: "Feature hint",
  description: "Dismissible hint used to highlight a new feature in your product.",
  images: {
    light: lightPng,
    dark: darkPng,
  },
  embed: {
    src: links.examples.featureHint,
    title: "Feature hint example application – Flows",
  },
  sidebar: {
    framework: <NextJsFramework />,
    links: {
      liveDemo: links.examples.featureHint,
      sourceCode: links.examples.featureHintSource,
    },
    tags: ["Announcement", "Adoption", "Floating"],
  },
  readme: (
    <>
      <Paragraph>
        This example showcases a custom feature hint component that can be used to highlight new
        features in your product. The component is designed to be dismissible, allowing users to
        easily close it once they have acknowledged the new feature. The feature hint is built using
        the <InlineCode>@flows/react</InlineCode> and <InlineCode>@floating-ui/react</InlineCode>{" "}
        SDKs, and uses Flows to manage its state and behavior.
      </Paragraph>

      <Paragraph>
        The component has two optional buttons: a primary button used to acknowledge the new feature
        and a secondary button that can be used to link to a page with more information about the
        feature or announcement post.
      </Paragraph>

      <Heading>Features</Heading>
      <Paragraph>
        When user enters the workflow and visits the home page, the feature hint will be displayed
        floating above the new Acme AI feature icon.
      </Paragraph>
      <Paragraph>Below is a screenshot of how the workflow is set up in Flows:</Paragraph>

      <Image
        src={workflowPng}
        alt="Flows workflow setup for the Feature hint example"
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
          <ParagraphLink href={links.examples.featureHintSource}>GitHub</ParagraphLink> and install
          the required dependencies in the project directory.
        </li>
        <li>
          Add your organization ID in the <InlineCode>providers.tsx</InlineCode> file.
        </li>
        <li>
          Create a new component in your organization with the following configuration:
          <UnorderedList>
            <li>
              <strong>UI component:</strong> FeatureHint
            </li>
            <li>
              <strong>Slottable:</strong> false
            </li>
            <li>
              <strong>Custom properties:</strong>
              <UnorderedList>
                <li>Title</li>
                <li>Description</li>
                <li>Image URL</li>
                <li>Target element</li>
                <li>Placement: top, right, bottom, left</li>
                <li>Offset: number</li>
                <li>CTA label</li>
                <li>CTA URL</li>
                <li>Learn more label</li>
                <li>Learn more URL</li>
              </UnorderedList>
            </li>
            <li>
              <strong>Exit nodes:</strong>
              <UnorderedList>
                <li>continue</li>
                <li>close</li>
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
