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
import floatingPng from "./floating.png";
import darkPng from "./product-hunt-launch-announcement-dark.png";
import lightPng from "./product-hunt-launch-announcement-light.png";
import sidebarPng from "./sidebar.png";
import topBarPng from "./top-bar.png";

export const productHuntLaunchAnnouncementContent: ContentType = {
  slug: "product-hunt-launch-announcement",
  title: "Product Hunt launch announcement",
  description: "Launching your product on Product Hunt? Broadcast the launch inside your app.",
  images: {
    light: lightPng,
    dark: darkPng,
  },
  embed: {
    src: links.examples.productHuntLaunchAnnouncement,
    title: "Product Hunt launch announcement example application – Flows",
  },
  sidebar: {
    framework: <NextJsFramework />,
    links: {
      liveDemo: links.examples.productHuntLaunchAnnouncement,
      sourceCode: links.examples.productHuntLaunchAnnouncementSource,
    },
    tags: ["Announcement", "Engagement", "Floating", "Marketing", "Promotion", "Slottable"],
  },
  readme: (
    <>
      <Paragraph>
        This example showcases how to create a Product Hunt launch announcement using Flows. It is
        powered by <InlineCode>@flows/react</InlineCode> and custom components.
      </Paragraph>

      <Heading>Features</Heading>
      <Paragraph>
        This example showcases multiple components that can be used to announce your Product Hunt
        launch inside your app.
      </Paragraph>
      <Heading2>Sidebar card</Heading2>
      <Paragraph>
        The sidebar card is a great way to announce your Product Hunt launch without overlaying
        important content. It is a embeddable component that can be placed in the sidebar of your
        app using the <InlineCode>FlowsSlot</InlineCode> component.
      </Paragraph>
      <Image
        src={sidebarPng}
        alt="Sidebar card component rendered in the sidebar"
        width={1800}
        height={1040}
        className={css({
          borderRadius: "radius6",
          borderWidth: "1px",
          borderColor: "newBorder.neutral",
          borderStyle: "solid",
          mb: "space40",
        })}
      />
      <Heading2>Floating banner</Heading2>
      <Paragraph>
        A classic way to handle in app announcements. The floating banner shows up in the bottom
        right corner of the screen and can be dismissed by the user. It is easier to implement
        because it doesn’t require you to implement a slot in your app.
      </Paragraph>
      <Image
        src={floatingPng}
        alt="Floating banner component rendered in the bottom right corner of the screen"
        width={1800}
        height={1040}
        className={css({
          borderRadius: "radius6",
          borderWidth: "1px",
          borderColor: "newBorder.neutral",
          borderStyle: "solid",
          mb: "space40",
        })}
      />
      <Heading2>Top bar banner</Heading2>
      <Paragraph>
        Similarly to the sidebar card, the top bar banner is a great way to announce your Product
        Hunt launch without overlaying important content. It slides in from the top of the screen to
        catch the user’s attention. It is also an embeddable component that can be placed in the top
        bar of your app using the <InlineCode>FlowsSlot</InlineCode> component.
      </Paragraph>
      <Image
        src={topBarPng}
        alt="Top bar banner component rendered in the top bar"
        width={1800}
        height={1040}
        className={css({
          borderRadius: "radius6",
          borderWidth: "1px",
          borderColor: "newBorder.neutral",
          borderStyle: "solid",
          mb: "space40",
        })}
      />

      <Paragraph>
        Regardless of the component you choose, using Flows to announce your Product Hunt launch is
        a great way to increase visibility and engagement. The components are designed to be easy to
        use and integrate into your app, so you can focus on what matters most: your important day.
        Good luck with your launch!
      </Paragraph>

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
          <ParagraphLink href={links.examples.productHuntLaunchAnnouncementSource}>
            GitHub
          </ParagraphLink>{" "}
          and install the required dependencies in the project directory.
        </li>
        <li>
          Add your organization ID in the <InlineCode>providers.tsx</InlineCode> file.
        </li>
        <li>
          Create a new component for Sidebar Banner in your organization with the following
          configuration:
          <UnorderedList>
            <li>
              <strong>UI component:</strong> SidebarBanner
            </li>
            <li>
              <strong>Slottable:</strong> true
            </li>
            <li>
              <strong>Custom properties:</strong>
              <UnorderedList>
                <li>Title</li>
                <li>Description</li>
                <li>Href</li>
              </UnorderedList>
            </li>
            <li>
              <strong>Exit nodes:</strong>
              <UnorderedList>
                <li>continue</li>
              </UnorderedList>
            </li>
          </UnorderedList>
        </li>
        <li>
          Create a new component for Floating Banner in your organization with the following
          configuration:
          <UnorderedList>
            <li>
              <strong>UI component:</strong> FloatingBanner
            </li>
            <li>
              <strong>Slottable:</strong> false
            </li>
            <li>
              <strong>Custom properties:</strong>
              <UnorderedList>
                <li>Title</li>
                <li>Description</li>
                <li>Button label</li>
                <li>Href</li>
              </UnorderedList>
            </li>
            <li>
              <strong>Exit nodes:</strong>
              <UnorderedList>
                <li>continue</li>
              </UnorderedList>
            </li>
          </UnorderedList>
        </li>
        <li>
          Create a new component for Top Banner in your organization with the following
          configuration:
          <UnorderedList>
            <li>
              <strong>UI component:</strong> TopBanner
            </li>
            <li>
              <strong>Slottable:</strong> true
            </li>
            <li>
              <strong>Custom properties:</strong>
              <UnorderedList>
                <li>Text</li>
                <li>Href</li>
              </UnorderedList>
            </li>
            <li>
              <strong>Exit nodes:</strong>
              <UnorderedList>
                <li>continue</li>
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
