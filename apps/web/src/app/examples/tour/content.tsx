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
    tags: ["Adoption", "Education", "Engagement", "Onboarding"],
  },
  readme: (
    <>
      <Paragraph>
        This example showcases a product tour powered by <InlineCode>@flows/react</InlineCode> and
        the built-in components from <InlineCode>@flows/react-components</InlineCode>.
      </Paragraph>
      <Paragraph>
        Tours are multi-step flows used to guide users through new, undiscovered, or changed
        products and features.
      </Paragraph>
      <Paragraph>Good tours:</Paragraph>
      <UnorderedList>
        <li>Are concise and direct (try to limit them to five steps).</li>
        <li>
          Match the user’s context (don’t show a tour for a feature the user has already explored).
        </li>
        <li>Use short, meaningful copy.</li>
      </UnorderedList>

      <Heading>Features</Heading>
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
