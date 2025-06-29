import { css } from "@flows/styled-system/css";
import { SignupClick } from "components/utils/signup-click";
import { links } from "lib/links";
import Image from "next/image";

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
import itemsPng from "./items.png";
import darkPng from "./onboarding-hub-dark.png";
import lightPng from "./onboarding-hub-light.png";
import widgetPng from "./widget.png";
import workflowPng from "./workflow.png";

export const onboardingHubContent: ContentType = {
  slug: "onboarding-hub",
  title: "Onboarding hub",
  description: "A home in your app for onboarding and help resources",
  images: {
    light: lightPng,
    dark: darkPng,
  },
  embed: {
    src: links.examples.onboardingHub,
    title: "Onboarding hub example application – Flows",
  },
  sidebar: {
    framework: <NextJsFramework />,
    links: {
      liveDemo: links.examples.onboardingHub,
      sourceCode: links.examples.onboardingHubSource,
    },
    tags: ["Checklist", "Tour", "In-app help hub", "Onboarding", "Slottable"],
  },
  readme: (
    <>
      <Paragraph>
        This example showcases an onboarding hub with a checklist powered by{" "}
        <InlineCode>@flows/react</InlineCode>
      </Paragraph>
      <Paragraph>
        An onboarding hub is a home in your app for onboarding and help resources. They’re super
        flexible and could include a getting started checklist, general tips for the best next step,
        and entry points to interactive tours, documentation, and support. The onboarding hub
        typically has a permanent place in the navigation until dismissed or completed.
      </Paragraph>

      <Heading>When to use</Heading>
      <Paragraph>
        Products where the user needs more content, support, and documentation to setup the product
        and reach their aha moment, such as developer tools, financial tools, and some collaborative
        apps and marketing tools.
      </Paragraph>

      <Heading>Why it works</Heading>
      <Paragraph>
        Since the most important resources are centralized, the user knows where to go for the next
        steps or if they get stuck. The pattern gives you the flexibility to create the experience,
        content, and entry points that are best for your users and product. Since it’s integrated
        into the navigation and pages, it doesn’t distract users from completing their tasks.
      </Paragraph>

      <Heading>Possible drawbacks</Heading>
      <Paragraph>
        Since the hub is its own space, it is not contextual to the user’s flow in the product (but
        it could provide entry points to contextual experiences).
      </Paragraph>

      <Heading>Features</Heading>
      <Paragraph>
        When a user open the application, they are greeted with a sidebar widget that calls out the
        getting started page. The user can click on the widget to open the onboarding hub, which
        contains a checklist of suggested setup actions, a button to launch a product tour, and a
        list of useful links to documentation and support resources.
      </Paragraph>

      <Heading2>Workflow setup</Heading2>

      <Paragraph>Below is a screenshot of how the workflow is set up in Flows:</Paragraph>

      <Image
        src={workflowPng}
        alt="Flows workflow setup for the onboarding hub example"
        width={1800}
        height={1040}
        className={css({
          borderRadius: "radius6",
          borderWidth: "1px",
          borderColor: "newBorder.neutral",
          borderStyle: "solid",
        })}
      />

      <Heading2>Checklist items setup</Heading2>
      <Paragraph>Each checklist item includes the following properties:</Paragraph>
      <UnorderedList>
        <li>
          <strong>Title</strong>
        </li>
        <li>
          <strong>Description</strong>
        </li>
        <li>
          <strong>Button label</strong>
        </li>
        <li>
          <strong>Optional url to navigate to</strong> - navigates to a URL when the user clicks the
          button
        </li>
        <li>
          <strong>Optional block trigger</strong> - starts a block when the user clicks the button
        </li>
        <li>
          <strong>State memory</strong> - condition to mark the item as completed
        </li>
      </UnorderedList>
      <Image
        src={itemsPng}
        alt="Checklist item configuration"
        width={1800}
        height={820}
        className={css({
          borderRadius: "radius6",
          borderWidth: "1px",
          borderColor: "newBorder.neutral",
          borderStyle: "solid",
        })}
      />

      <Heading2>Sidebar widget setup</Heading2>
      <Paragraph>
        The sidebar widget has two objectives: to call out the onboarding hub and to inform the user
        of their progress in the onboarding process. The widget loads the checklist state from Flows
        and displays the number of completed items. When the user clicks on the widget, it opens the
        onboarding hub.
      </Paragraph>

      <Image
        src={widgetPng}
        alt="Sidebar widget configuration"
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
          <ParagraphLink href={links.examples.onboardingHubSource}>GitHub</ParagraphLink> and
          install the required dependencies in the project directory.
        </li>
        <li>
          Add your organization ID in the <InlineCode>providers.tsx</InlineCode> file.
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
