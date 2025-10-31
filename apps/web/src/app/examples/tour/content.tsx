import { css } from "@flows/styled-system/css";
import { SignupClick } from "components/utils/signup-click";
import { links } from "lib/links";
import Image from "next/image";
import { CodeHighlight } from "ui/server";

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
import introModalPng from "./intro-modal.png";
import lastModalPng from "./last-modal.png";
import tooltipsPng from "./tooltips.png";
import darkPng from "./tour-dark.png";
import lightPng from "./tour-light.png";
import waitPng from "./wait.png";
import workflowPng from "./workflow.png";

export const tourContent: ContentType = {
  slug: "tour",
  title: "Tour",
  images: {
    light: lightPng,
    dark: darkPng,
  },
  description: "Guide users along their journey through your product",
  embed: {
    src: links.examples.tour,
    title: "Tour example application – Flows",
  },
  sidebar: {
    framework: <NextJsFramework />,
    links: {
      liveDemo: links.examples.tour,
      sourceCode: links.examples.tourSource,
    },
    tags: [
      "Engagement",
      "Feature Adoption",
      "Guided Tour",
      "In-App Education",
      "Product Tour",
      "User Onboarding",
    ],
  },
  readme: (
    <>
      <Paragraph>Guide users through your product with interactive, in-app tours.</Paragraph>
      <Paragraph>
        A product tour helps new and returning users discover what’s new, understand your product
        faster, and reach value sooner. With Flows, you can build fully customizable, multi-step
        tours that live inside your application (not on top of it). Each step can be rendered inline
        or as a floating component using pre-built UI elements or your own custom designs, so your
        guides feel native to your product.
      </Paragraph>

      <Heading>Why product tours matter</Heading>
      <Paragraph>
        Product tours are one of the most effective ways to improve user onboarding, feature
        discovery, and product adoption. They help users:
      </Paragraph>
      <UnorderedList>
        <li>Explore new or updated features confidently.</li>
        <li>Understand key workflows without leaving your app.</li>
        <li>Reach activation milestones faster.</li>
        <li>Stay engaged as your product evolves.</li>
      </UnorderedList>

      <Paragraph>
        Unlike traditional onboarding tools, Flows gives you complete control over design and logic.
        You can embed custom UI components, define behavior with Flows, and let the SDK handle user
        states.
      </Paragraph>

      <Heading>About this example</Heading>
      <Paragraph>
        This example shows a multi-step guided tour built with Flows. It introduces users to key
        product areas using a combination of modals and tooltips. The tour features:
      </Paragraph>
      <UnorderedList>
        <li>Welcome modal: Greets users and sets the context.</li>
        <li>Feature highlights: Floating tooltips guide users to important elements.</li>
        <li>Completion step: Confirms success and encourages next actions.</li>
      </UnorderedList>
      <Paragraph>
        You can customize every part of this experience (copy, visuals, placement, and logic) while
        Flows manages the flow and state transitions for you.
      </Paragraph>

      <Heading>When to use a Product Tour</Heading>
      <Paragraph>
        Use a tour whenever you want to guide users through a defined journey, such as:
      </Paragraph>
      <UnorderedList>
        <li>Onboarding new users.</li>
        <li>Announcing new features or UI updates.</li>
        <li>Educating users on complex workflows.</li>
        <li>Re-engaging returning users after a redesign.</li>
      </UnorderedList>

      <Heading>Best practices for effective Tours</Heading>
      <Paragraph>A good product tour:</Paragraph>
      <UnorderedList>
        <li>
          Is concise and contextual. Keep steps focused on helping the user accomplish one goal.
        </li>
        <li>Matches your product’s tone and design. Use your existing UI style for familiarity.</li>
        <li>
          Guides, don’t interrupt. Provide helpful direction without taking over the experience.
        </li>
        <li>Adapts to user behavior. Don’t show steps users have already completed.</li>
        <li>Ends with clear next steps. Reinforce learning and encourage continued exploration.</li>
      </UnorderedList>
      <Paragraph>
        With Flows, you can design tours that feel built-in, not bolted-on, ensuring they’re always
        relevant and delightful.
      </Paragraph>

      <Heading>Workflow setup</Heading>
      <Paragraph>
        When a user opens the application for the first time, they encounter a welcome modal,
        followed by a series of tooltips, a wait step, and a final modal. All the UI elements are
        built using the pre-packaged components from{" "}
        <InlineCode>@flows/react-components</InlineCode>.
      </Paragraph>

      <Paragraph>
        Below is a screenshot demonstrating the workflow configuration for this Tour example:
      </Paragraph>

      <Image
        src={workflowPng}
        alt="Flows workflow setup for the Tour example"
        width={1800}
        height={1040}
        className={css({
          borderRadius: "radius6",
          borderWidth: "1px",
          borderColor: "newBorder.neutral",
          borderStyle: "solid",
          mb: "space24",
        })}
      />

      <Heading2>Welcome Modal</Heading2>

      <Paragraph>
        The welcome modal is defined using HTML in its body field. Flows renders HTML in any
        text-based input. The HTML is written using Tailwind CSS classes to style the content.
      </Paragraph>

      <Image
        src={introModalPng}
        alt="The intro modal setup for the Tour example"
        width={1800}
        height={1040}
        className={css({
          borderRadius: "radius6",
          borderWidth: "1px",
          borderColor: "newBorder.neutral",
          borderStyle: "solid",
          mb: "space24",
        })}
      />

      <Paragraph>Full HTML for the welcome modal:</Paragraph>

      <CodeHighlight
        codeClassName={css({
          fontSize: "15px",
        })}
      >
        <pre>
          <code className="html">
            {`<div class="max-w-[400px]">
  <img
    alt="Welcome image"
    class="mb-4 w-full rounded-lg"
    width="400"
    height="213"
    src="/welcome.png"
  />
  <p class="text-center text-lg font-semibold text-foreground">
    Welcome to the tour example!
  </p>
  <p class="text-l text-center text-foreground">
    This example shows how to use built-in components to create
    a product tour with Flows.
  </p>
</div>
`}
          </code>
        </pre>
      </CodeHighlight>

      <Heading2>Tooltips</Heading2>

      <Paragraph>
        Subsequent steps use the <InlineCode>TourTooltip</InlineCode> component from{" "}
        <InlineCode>@flows/react-components</InlineCode> to highlight specific elements and actions.
      </Paragraph>

      <OrderedList>
        <li>
          The first tooltip proceeds when the user navigates to a page containing{" "}
          <InlineCode>/new-project</InlineCode>.
        </li>
        <li>
          The second tooltip waits for the user to click one of the frameworks, identified by the{" "}
          <InlineCode>#framework</InlineCode> selector.
        </li>
        <li>The third tooltip allows navigation through standard tooltip buttons.</li>
      </OrderedList>

      <Image
        src={tooltipsPng}
        alt="The tooltips setup for the Tour example"
        width={1800}
        height={1077}
        className={css({
          borderRadius: "radius6",
          borderWidth: "1px",
          borderColor: "newBorder.neutral",
          borderStyle: "solid",
          mb: "space24",
        })}
      />

      <Heading2>Wait step</Heading2>

      <Paragraph>
        After the tooltips, the flow pauses until the user returns to the home page. The location
        filter uses a regex pattern (<InlineCode>^/$</InlineCode>) to detect the home page URL.
      </Paragraph>

      <Image
        src={waitPng}
        alt="The wait setup for the Tour example"
        width={1800}
        height={680}
        className={css({
          borderRadius: "radius6",
          borderWidth: "1px",
          borderColor: "newBorder.neutral",
          borderStyle: "solid",
          mb: "space24",
        })}
      />

      <Heading2>Final modal</Heading2>

      <Paragraph>
        The final step presents another modal using the same approach as the welcome modal—HTML
        content styled with Tailwind classes.
      </Paragraph>

      <Image
        src={lastModalPng}
        alt="The last modal setup for the Tour example"
        width={1800}
        height={1040}
        className={css({
          borderRadius: "radius6",
          borderWidth: "1px",
          borderColor: "newBorder.neutral",
          borderStyle: "solid",
          mb: "space24",
        })}
      />

      <Paragraph>Full HTML for the last modal:</Paragraph>

      <CodeHighlight
        codeClassName={css({
          fontSize: "15px",
        })}
      >
        <pre>
          <code className="html">
            {`<div class="max-w-[480px]">
  <p class="mb-4 text-center text-6xl">🎉</p>
  <p class="mb-1 text-center text-lg font-semibold text-foreground">
    That's it!
  </p>
  <p class="text-l mb-3 text-center text-foreground">
    This was a simple example of how you can use Flows to create 
    a user onboarding.
  </p>
  <p class="text-center text-sm text-foreground">
    Looking for more customization? Flows is built to be a "Headless
    product adoption platform," meaning you can build your own UI
    components with custom styling and logic for a native experience.
  </p>
</div>
`}
          </code>
        </pre>
      </CodeHighlight>

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
          <ParagraphLink href={links.examples.tourSource}>GitHub</ParagraphLink> and install the
          required dependencies in the project directory.
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

      <Paragraph>
        This tour example demonstrates how quickly you can create a guided user onboarding flow with
        Flows. Feel free to explore more advanced configurations and styling to tailor the
        experience for your users.
      </Paragraph>
    </>
  ),
};
