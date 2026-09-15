import { SignupClick } from "components/utils/signup-click";
import { links } from "lib/links";

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
import darkPng from "./upgrade-cta-banner-dark.png";
import lightPng from "./upgrade-cta-banner-light.png";

export const upgradeCTABannerContent: ContentType = {
  slug: "upgrade-cta-banner",
  title: "Upgrade CTA banner",
  description:
    "Nudge free-plan users to upgrade with a persistent, usage-based banner powered by Flows.",
  metaDescription:
    "Add a persistent usage-based upgrade banner to your React app with Flows. Show plan usage and an upgrade CTA without blocking the page like a paywall modal.",
  images: {
    light: lightPng,
    dark: darkPng,
  },
  embed: {
    src: links.examples.upgradeCTABanner,
    title: "Upgrade CTA banner example application - Flows",
  },
  sidebar: {
    framework: <NextJsFramework />,
    links: {
      liveDemo: links.examples.upgradeCTABanner,
      sourceCode: links.examples.upgradeCTABannerSource,
    },
    tags: [
      "Upgrade Prompt",
      "Upsell",
      "Usage Limit",
      "Monetization",
      "Conversion",
      "Top Bar",
      "Custom Component",
      "React",
    ],
  },
  readme: (
    <>
      <Paragraph>
        This upgrade CTA banner example shows how to nudge free-plan users toward upgrading with a
        persistent, ambient banner instead of a blocking paywall modal, using a custom component
        powered by Flows.
      </Paragraph>
      <Paragraph>
        Where a paywall modal interrupts the user at the moment they hit a locked feature, this
        banner stays visible while they keep working, tied to how close they are to a plan limit.
        Both patterns have their place: use the banner for ambient, ongoing pressure and a{" "}
        <ParagraphLink href={links.examples.paywallModal}>paywall modal</ParagraphLink> for a hard
        stop at a specific feature.
      </Paragraph>

      <Heading>Features</Heading>
      <UnorderedList>
        <li>
          <strong>Usage label and progress bar</strong>: computed from the app's own state via
          React context, not from Flows, so the banner always shows the note count the user is
          actually looking at on the page.
        </li>
        <li>
          <strong>Upgrade action</strong>: a configurable button that links to your pricing page.
        </li>
        <li>
          <strong>Dismiss button</strong>: calls <InlineCode>close()</InlineCode> to advance the
          workflow and hide the banner for that session.
        </li>
      </UnorderedList>
      <Paragraph>
        The banner is registered as a custom component in <InlineCode>providers.tsx</InlineCode> and
        rendered through a <InlineCode>FlowsSlot</InlineCode> placed above the main app layout. Only
        its message and upgrade link are configured in the workflow, everything usage-related comes
        from the app.
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
          <ParagraphLink href={links.examples.upgradeCTABannerSource}>GitHub</ParagraphLink> and
          install the required dependencies in the project directory.
        </li>
        <li>
          Add your organization ID in the <InlineCode>providers.tsx</InlineCode> file.
        </li>
        <li>
          Import the workflow, including the <InlineCode>UpgradeCtaBanner</InlineCode> component
          configuration, by clicking <strong>Use this example</strong> at the top of this page and
          publish it.
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
