import { css } from "@flows/styled-system/css";
import { SignupClick } from "components/utils/signup-click";
import { Versioning16 } from "icons";
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

export const enterpriseUpsellContent: ContentType = {
  slug: "enterprise-upsell",
  title: "Enterprise upsell",
  icon: Versioning16,
  description: "Nudge users to upgrade with an in-page promotion card",
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
        This example showcases enterprise upsell card powered by{" "}
        <InlineCode>@flows/react</InlineCode>. In-page promotion is one of the most effective
        channels for product upsell especially compared to email outreach. This upsell card strikes
        the balance between being informative and non-intrusive. It is designed to meet the user at
        the right moment when they are most likely to be interested in the product.
      </Paragraph>

      <Heading>Features</Heading>
      <Paragraph>
        When a user that doesn’t have an enterprise plan visits the page, they will see a card that
        promotes the enterprise plan in a non-intrusive way. The card is designed to be informative
        and not obstructive to the user experience. The user can use the cards buttons to upgrade,
        learn more or dismiss the card altogether.
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
          Create a new block template in your organization with the following configuration:
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
