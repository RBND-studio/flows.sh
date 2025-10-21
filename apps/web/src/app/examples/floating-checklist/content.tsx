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
import darkPng from "./floating-checklist-dark.png";
import lightPng from "./floating-checklist-light.png";
import itemsPng from "./items.png";
import modalPng from "./modal.png";
import tourPng from "./tour.png";
import workflowPng from "./workflow.png";

export const floatingChecklistContent: ContentType = {
  slug: "floating-checklist",
  title: "Floating checklist",
  images: {
    light: lightPng,
    dark: darkPng,
  },
  description:
    "Interactive list of suggested setup actions the user can take. Floating in the corner of the screen.",
  embed: {
    src: links.examples.floatingChecklist,
    title: "Floating checklist example application – Flows",
  },
  sidebar: {
    framework: <NextJsFramework />,
    links: {
      liveDemo: links.examples.floatingChecklist,
      sourceCode: links.examples.floatingChecklistSource,
    },
    tags: [
      "Adoption",
      "Checklist",
      "Feature Discovery",
      "Floating",
      "Guided Experience",
      "Interactive",
      "Onboarding",
    ],
  },
  readme: (
    <>
      <Paragraph>
        This example showcases a custom floating checklist component that is displayed in the
        bottom-right corner of the screen. The checklist provides users with suggested setup actions
        to help them get started with the application.
      </Paragraph>
      <Paragraph>A solid user onboarding checklist includes:</Paragraph>
      <UnorderedList>
        <li>
          <strong>Achievable tasks</strong> - users should be able to complete the tasks in a
          reasonable amount of time.
        </li>
        <li>
          <strong>A progress bar</strong> - visible progress keeps users motivated.
        </li>
        <li>
          <strong>Action-oriented language</strong> - use <strong>Create a project</strong> instead
          of <strong>Project</strong>.
        </li>
        <li>
          <strong>Steps that lead to value</strong> - the checklist should guide users to the most
          valuable features.
        </li>
        <li>
          <strong>Not too many steps</strong> - avoid overwhelming users. Break long checklists into
          smaller stages if needed.
        </li>
        <li>
          <strong>Initial momentum</strong> - mark some easy tasks as completed to give users a
          sense of accomplishment from the start.
        </li>
      </UnorderedList>

      <Heading>Features</Heading>
      <Paragraph>
        When a user signs up, the floating checklist appears in the bottom-right corner. Tasks are
        marked as completed once the user fulfills the required conditions.
      </Paragraph>

      <Heading2>Progress tracking</Heading2>

      <Paragraph>
        Progress tracking is handled by the{" "}
        <ParagraphLink href={links.docs.blockProperties.stateMemory}>state memory</ParagraphLink>{" "}
        property. The state memory property is used to store the state of the checklist and update
        it when a task is completed. It can be triggered when user completes a selected block or
        when they click a button.
      </Paragraph>
      <Paragraph>For example:</Paragraph>
      <UnorderedList>
        <li>
          The first checklist item is completed when the user finishes the{" "}
          <strong>Create issue tour</strong>.
        </li>
        <li>
          The last item is marked complete when the user clicks <strong>Create project</strong> in
          the checklist.
        </li>
        <li>
          Users can skip any step by clicking <strong>Skip step</strong>.
        </li>
      </UnorderedList>

      <Heading2>Workflow setup</Heading2>

      <Paragraph>Below is a screenshot of how the workflow is set up in Flows:</Paragraph>

      <Image
        src={workflowPng}
        alt="Flows workflow setup for the Floating checklist example"
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

      <Heading2>Create issue tour setup</Heading2>
      <Paragraph>
        This example tour is triggered when the user clicks <strong>Create issue</strong>. The
        related checklist item is completed once the tour finishes.
      </Paragraph>

      <Image
        src={tourPng}
        alt="Create issue tour setup"
        width={1800}
        height={1040}
        className={css({
          borderRadius: "radius6",
          borderWidth: "1px",
          borderColor: "newBorder.neutral",
          borderStyle: "solid",
        })}
      />

      <Heading2>Modal setup</Heading2>
      <Paragraph>
        This example block is triggered when the user clicks <strong>Invite team</strong>. The
        checklist item is marked complete once the modal is closed.
      </Paragraph>

      <Image
        src={modalPng}
        alt="Invite team modal setup"
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
          <ParagraphLink href={links.examples.floatingChecklistSource}>GitHub</ParagraphLink> and
          install the required dependencies in the project directory.
        </li>
        <li>
          Add your organization ID in the <InlineCode>providers.tsx</InlineCode> file.
        </li>
        <li>
          Create a new component in your organization with the following configuration:
          <UnorderedList>
            <li>
              <strong>UI component:</strong> Checklist
            </li>
            <li>
              <strong>Slottable:</strong> false
            </li>
            <li>
              <strong>Custom properties:</strong>
              <UnorderedList>
                <li>Widget title</li>
                <li>Popup title</li>
                <li>Popup description</li>
                <li>
                  <strong>Items: array</strong>
                </li>
                <UnorderedList>
                  <li>Title</li>
                  <li>Description</li>
                  <li>Button label</li>
                  <li>Navigate to page</li>
                  <li>Start a block when clicked: block trigger</li>
                  <li>Mark as completed: state memory</li>
                </UnorderedList>
              </UnorderedList>
            </li>
            <li>
              <strong>Exit nodes:</strong>
              <UnorderedList>
                <li>complete</li>
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
