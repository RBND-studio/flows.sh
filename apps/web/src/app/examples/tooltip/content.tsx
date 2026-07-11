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
import darkPng from "./tooltip-dark.png";
import lightPng from "./tooltip-light.png";
import workflowPng from "./workflow.png";

export const tooltipContent: ContentType = {
  slug: "tooltip",
  title: "Tooltip",
  exampleWorkflowId: "a59f5a78-e3ec-4b8b-ba99-5c49f459f656",
  description: "Guide users through your app by anchoring contextual tooltips to UI elements",
  metaDescription:
    "Build a multi-step in-app tooltip tour with Flows. Point users to key features using the built-in Tooltip component - no custom UI required.",
  images: {
    light: lightPng,
    dark: darkPng,
  },
  embed: {
    src: links.examples.tooltip,
    title: "Tooltip example application - Flows",
  },
  sidebar: {
    framework: <NextJsFramework />,
    links: {
      liveDemo: links.examples.tooltip,
      sourceCode: links.examples.tooltipSource,
    },
    tags: [
      "Tooltip",
      "Feature Adoption",
      "Feature Discovery",
      "In-App Guidance",
      "Product Tour",
      "User Onboarding",
      "Activation",
    ],
  },
  readme: (
    <>
      <Paragraph>
        Add contextual in-app tooltips to your app and guide users to the features that matter most.
        This example uses the built-in <InlineCode>Tooltip</InlineCode> component from{" "}
        <InlineCode>@flows/react-components</InlineCode> to anchor floating tooltip steps to
        specific UI elements using CSS selectors - no custom component code required.
      </Paragraph>
      <Paragraph>
        Tooltip-based tours are one of the most effective ways to drive feature adoption and reduce
        time-to-value. Because each tooltip points directly at the relevant element, users get
        hands-on context exactly where they need it, rather than reading static documentation.
      </Paragraph>

      <Heading>Features</Heading>
      <Paragraph>
        The workflow in this example walks users through an analytics dashboard in four steps:
      </Paragraph>
      <UnorderedList>
        <li>
          Stats row - Draws attention to the KPI cards at the top of the page and explains what each
          metric represents.
        </li>
        <li>
          Main chart - Anchors a tooltip to the visitors-over-time chart and explains how to
          interpret trends.
        </li>
        <li>
          Top pages - Highlights the top-pages panel so users know where to find page-level
          breakdowns.
        </li>
        <li>
          Create report button - Ends the tour by pointing users to the primary action so they can
          act on what they just learned.
        </li>
      </UnorderedList>
      <Paragraph>
        Each step is a <InlineCode>BasicsV2Tooltip</InlineCode> block from{" "}
        <InlineCode>@flows/react-components/tour</InlineCode>. The block targets an element by CSS
        selector, positions the floating tooltip on the correct side, and advances the workflow when
        the user clicks <strong>Next</strong>. Users can also dismiss the tour at any time via the
        close button. No custom components are needed - the entire tour runs on Flows built-in UI.
      </Paragraph>

      <Paragraph>Below is a screenshot of how the workflow is set up in Flows:</Paragraph>

      <Image
        src={workflowPng}
        alt="Flows workflow setup for the in-app tooltip tour example"
        width={1800}
        height={1040}
        className={css({
          borderRadius: "radius6",
          borderWidth: "1px",
          borderColor: "border.neutral",
          borderStyle: "solid",
          mb: "space24",
        })}
      />

      <Heading>When to use in-app tooltips</Heading>
      <Paragraph>
        Contextual tooltips work best when you want to call attention to a specific UI element
        without interrupting the user's workflow. Common use cases include:
      </Paragraph>
      <UnorderedList>
        <li>Onboarding new users to an unfamiliar dashboard or feature set.</li>
        <li>Announcing a new feature by pointing directly to it in context.</li>
        <li>Guiding users through a multi-step workflow for the first time.</li>
        <li>Re-engaging returning users after a redesign or navigation change.</li>
        <li>Reducing support tickets by explaining non-obvious UI patterns in place.</li>
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
          <ParagraphLink href={links.examples.tooltipSource}>GitHub</ParagraphLink> and install the
          required dependencies in the project directory.
        </li>
        <li>
          Add your organization ID in the <InlineCode>providers.tsx</InlineCode> file.
        </li>
        <li>
          Recreate the tooltip tour workflow using the built-in <strong>Tooltip</strong> block.
          Target the element IDs from <InlineCode>home.tsx</InlineCode>:{" "}
          <InlineCode>#stats-row</InlineCode>, <InlineCode>#main-chart</InlineCode>,{" "}
          <InlineCode>#top-pages</InlineCode>, and <InlineCode>#create-report-button</InlineCode>.
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
