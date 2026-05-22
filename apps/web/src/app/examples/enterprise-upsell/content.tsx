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
import darkPng from "./enterprise-upsell-dark.png";
import lightPng from "./enterprise-upsell-light.png";
import workflowPng from "./workflow.png";

export const enterpriseUpsellContent: ContentType = {
  slug: "enterprise-upsell",
  title: "Enterprise upsell",
  images: {
    light: lightPng,
    dark: darkPng,
  },
  description: "Nudge users to upgrade with an in-page promotion card",
  metaDescription:
    "Enterprise upsell example built with Flows - show a targeted in-page card to users without an enterprise plan at the right moment in their journey.",
  embed: {
    src: links.examples.enterpriseUpsell,
    title: "Enterprise upsell example application – Flows",
  },
  sidebar: {
    framework: <NextJsFramework />,
    links: {
      liveDemo: links.examples.enterpriseUpsell,
      sourceCode: links.examples.enterpriseUpsellSource,
    },
    tags: ["In-context", "In-page", "Product growth", "Promotion", "Slottable", "Upsell"],
  },
  readme: (
    <>
      <Paragraph>
        This example showcases an enterprise upsell card built with{" "}
        <InlineCode>@flows/react</InlineCode>, designed for SaaS products with free and paid tiers.
        In-page promotion is one of the most effective channels for driving free-to-paid conversion
        - especially compared to email outreach. The card strikes the balance between being
        informative and non-intrusive, meeting users at the right moment when they are most likely
        to upgrade.
      </Paragraph>

      <Heading>When to use</Heading>
      <UnorderedList>
        <li>
          When users on a free or lower-tier plan hit a feature that requires an enterprise plan -
          surfacing the upsell at the point of friction.
        </li>
        <li>
          To drive free-to-paid conversion without interrupting the user experience with a modal or
          redirect.
        </li>
        <li>
          For plan gating - showing relevant upgrade prompts only to users who haven't yet
          upgraded.
        </li>
        <li>
          As part of a product-led growth (PLG) motion, letting the product sell the upgrade rather
          than relying on sales outreach.
        </li>
      </UnorderedList>

      <Heading>Why it works</Heading>
      <UnorderedList>
        <li>
          Contextual targeting: the card only appears for users who don’t have an enterprise plan,
          so the message is always relevant.
        </li>
        <li>
          In-page placement: the upsell is embedded in the UI rather than delivered as a modal or
          email, so it doesn’t interrupt the user’s workflow.
        </li>
        <li>
          Dismissible: users can close the card if they’re not interested, reducing friction and
          keeping the experience respectful.
        </li>
        <li>
          Workflow-controlled: Flows manages who sees the card and when, so the upsell stays
          relevant as users’ plan status changes.
        </li>
      </UnorderedList>

      <Heading>How the enterprise upsell card works</Heading>
      <Paragraph>
        When a user without an enterprise plan visits the page, they will see a card promoting the
        upgrade - embedded in the page so it doesn’t block their workflow. The card’s buttons let
        the user upgrade, learn more, or dismiss it altogether.
      </Paragraph>
      <Paragraph>Below is a screenshot of how the workflow is set up in Flows:</Paragraph>

      <Image
        src={workflowPng}
        alt="Flows workflow setup for the enterprise upsell example"
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
          <ParagraphLink href={links.examples.enterpriseUpsellSource}>GitHub</ParagraphLink> and
          install the required dependencies in the project directory.
        </li>
        <li>
          Add your organization ID in the <InlineCode>providers.tsx</InlineCode> file.
        </li>
        <li>
          Create a new component in your organization with the following configuration:
          <UnorderedList>
            <li>
              <strong>UI component:</strong> EnterpriseUpsell
            </li>
            <li>
              <strong>Slottable:</strong> true
            </li>
            <li>
              <strong>Custom properties:</strong>
              <UnorderedList>
                <li>Title</li>
                <li>Description</li>
                <li>CTA title</li>
                <li>CTA link</li>
                <li>Learn more title</li>
                <li>Learn more link</li>
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
