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
import darkPng from "./feature-announcement-dark.png";
import lightPng from "./feature-announcement-light.png";
import workflowPng from "./workflow.png";

export const featureAnnouncementContent: ContentType = {
  slug: "feature-announcement",
  title: "Feature announcement",
  description: "Let users know about new features with a full page announcement.",
  images: {
    light: lightPng,
    dark: darkPng,
  },
  embed: {
    src: links.examples.featureAnnouncement,
    title: "Feature announcement example application – Flows",
  },
  sidebar: {
    framework: <NextJsFramework />,
    links: {
      liveDemo: links.examples.featureAnnouncement,
      sourceCode: links.examples.featureAnnouncementSource,
    },
    tags: ["Adoption", "Announcement", "Dialog", "Explainer", "Modal", "User Engagement"],
  },
  readme: (
    <>
      <Paragraph>
        Feature announcements are one of the most effective ways to introduce new features to users
        inside your product. A well-designed in-app feature announcement helps users understand
        what’s new, why it matters, and how to try it, without disrupting their workflow.
      </Paragraph>
      <Paragraph>
        This example showcases a new feature announcement example built with{" "}
        <InlineCode>@flows/react</InlineCode>, using a full-page announcement modal to clearly
        explain a new feature and guide users toward action.
      </Paragraph>

      <Heading>What is a feature announcement?</Heading>
      <Paragraph>
        A feature announcement is an in-app message that introduces new or updated functionality to
        existing users. Unlike release notes or emails, in-app feature announcements appear directly
        inside your product, ensuring users see and understand what’s new at the right moment.
      </Paragraph>
      <Paragraph>Common formats include:</Paragraph>
      <UnorderedList>
        <li>Announcement modals</li>
        <li>Full-page dialogs</li>
        <li>Banners or tooltips</li>
        <li>Multi-step feature walkthroughs</li>
      </UnorderedList>
      <Paragraph>
        In this example, we use a full-page announcement modal to announce a new product feature in
        a clear, focused way.
      </Paragraph>

      <Heading>Feature announcement example</Heading>
      <Paragraph>
        This feature announcement example is shown to returning users when they open the app. It
        uses a custom UI component with multiple steps to:
      </Paragraph>
      <UnorderedList>
        <li>Introduce the new feature</li>
        <li>Explain its key benefits</li>
        <li>Show how it works</li>
        <li>Encourage users to try it immediately</li>
      </UnorderedList>
      <Paragraph>
        By breaking the announcement into steps, users can quickly understand the feature without
        being overwhelmed by too much information at once.
      </Paragraph>

      <Heading>Feature announcement UI and UX best practices</Heading>
      <Paragraph>
        When designing a feature announcement UI, it’s important to balance visibility with user
        experience. Poorly timed or overly aggressive announcements can frustrate users and get
        dismissed.
      </Paragraph>
      <Paragraph>A strong feature announcement UX should follow these guidelines:</Paragraph>

      <Paragraph>
        <strong>DO:</strong>
      </Paragraph>
      <UnorderedList>
        <li>Clearly explain the new feature and its benefits</li>
        <li>Use engaging visuals to capture attention</li>
        <li>Provide a clear call-to-action (CTA)</li>
        <li>Keep messaging concise and focused</li>
      </UnorderedList>

      <Paragraph>
        <strong>DON’T:</strong>
      </Paragraph>
      <UnorderedList>
        <li>Overwhelm users with too much information at once</li>
        <li>Interrupt users in the middle of critical workflows</li>
        <li>Show the same announcement repeatedly after dismissal</li>
      </UnorderedList>
      <Paragraph>
        Following these principles helps ensure your new feature announcement drives adoption
        instead of annoyance.
      </Paragraph>

      <Heading>In-app feature announcements with Flows</Heading>
      <Paragraph>
        Flows makes it easy to create in-app feature announcements using custom UI components that
        render inside your application. Instead of layering generic UI on top of your product, you
        can build announcement modals that match your design system and product experience.
      </Paragraph>
      <Paragraph>In this example:</Paragraph>
      <UnorderedList>
        <li>The announcement is implemented as a custom dialog component</li>
        <li>The logic and state are handled by Flows</li>
        <li>The UI is fully customizable</li>
        <li>The announcement is shown only to relevant users</li>
      </UnorderedList>
      <Paragraph>
        Below is a screenshot showing how this feature announcement workflow is configured in Flows:
      </Paragraph>
      <Image
        src={workflowPng}
        alt="Flows workflow setup for the feature announcement example"
        width={1800}
        height={1040}
        className={css({
          borderRadius: "radius6",
          borderWidth: "1px",
          borderColor: "newBorder.neutral",
          borderStyle: "solid",
        })}
      />

      <Heading>How to announce new features using announcement modals</Heading>
      <Paragraph>
        If you’re wondering how to announce new features effectively, announcement modals are a
        proven approach, especially for important product updates.
      </Paragraph>
      <Paragraph>They work best when:</Paragraph>
      <UnorderedList>
        <li>The feature represents meaningful new functionality</li>
        <li>Users need context or explanation</li>
        <li>You want to drive immediate engagement</li>
      </UnorderedList>
      <Paragraph>
        This example demonstrates how to create an announcement modal that introduces a new feature
        without disrupting the overall user experience.
      </Paragraph>

      <Heading>Getting started</Heading>
      <Paragraph>To create your own new feature announcement with Flows:</Paragraph>
      <OrderedList>
        <li>
          <SignupClick>
            <ParagraphLink target="_blank" href={links.signUp}>
              Sign up
            </ParagraphLink>
          </SignupClick>{" "}
          for Flows and create a free account.
        </li>
        <li>
          Clone the example repository from{" "}
          <ParagraphLink href={links.examples.featureAnnouncementSource}>GitHub</ParagraphLink>.
        </li>
        <li>Install the required dependencies.</li>
        <li>
          Add your organization ID in the <InlineCode>providers.tsx</InlineCode> file.
        </li>
        <li>Create a new component in your organization with the following configuration:</li>

        <UnorderedList>
          <li>
            <strong>UI component:</strong> FeatureAnnouncement
          </li>
          <li>
            <strong>Slottable:</strong> false
          </li>
          <li>
            <strong>Custom properties:</strong>
            <UnorderedList>
              <li>Main title</li>
              <li>Steps (array):</li>
              <UnorderedList>
                <li>Title</li>
                <li>Description</li>
                <li>Illustration</li>
              </UnorderedList>
            </UnorderedList>
          </li>
          <li>
            <strong>Exit nodes:</strong>
            <UnorderedList>
              <li>close</li>
            </UnorderedList>
          </li>
        </UnorderedList>

        <li>Recreate the workflow in your organization and publish it.</li>
        <li>
          Run the development server with <InlineCode>pnpm dev</InlineCode>.
        </li>
      </OrderedList>

      <Paragraph>
        Once set up, your feature announcement modal will be ready to display to users at the right
        time.
      </Paragraph>

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
        <li>
          <ParagraphLink target="_blank" href={links.examplesList}>
            Explore other examples
          </ParagraphLink>
        </li>
      </UnorderedList>
    </>
  ),
};
