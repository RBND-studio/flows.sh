import { css } from "@flows/styled-system/css";
import Image from "next/image";
import type { ReactElement } from "react";
import { CodeHighlight } from "ui/server";

export type Variant = {
  name: string;
  items: {
    title: string;
    description: string;
  }[];
  visual: ReactElement;
};

export const variants: Variant[] = [
  {
    name: "No-Code",
    items: [
      {
        title: "Create flows with an WYSIWYG editor",
        description:
          "Flows comes with an easy to use editor that allows you to create and publish flows in minutes.",
      },
      {
        title: "Change flows on the fly",
        description:
          "With our cloud solution you can update your flows anytime, and publish the changes with a single click.",
      },
      {
        title: "No performance penalty",
        description:
          "Flows is developed with performance at it’s core. Your flows will look native regardless of whether they are loaded from our cloud or your code.",
      },
    ],
    visual: (
      <Image alt="No code" height={1280} src="/images/homepage/no-code-platform.png" width={1928} />
    ),
  },
  {
    name: "In-Code",
    items: [
      {
        title: "Define flows in your codebase",
        description:
          "Onboarding flows can be stored as a separate files inside your codebase and launched automatically or with a function.",
      },
      {
        title: "Automatic tracking",
        description:
          "Flows SDK automatically tracks data of your flows to give you insights into how they perform. You can opt-out or provide your own tracking.",
      },
    ],
    visual: (
      <CodeHighlight className={css({ height: "408px", margin: "0!" })}>
        <pre>
          <code className="flows.ts">{`import { init } from "@flows/js"; // Fully typed

init({
  projectId: "my-project",
  flows: [
    {
      id: "my-first-flow",
      element: "#start-flow-1",
      steps: [
        {
          element: "#start-flow-1",
          title: "Welcome to FlowsJS!",
          body: "This is a demo of FlowsJS. Click the button below to continue.",
        },
        {
          title: "This is a modal",
          body: "This is a modal. It is an useful way to show larger amounts of information.",
        },
      ],
    },
  ],
});
`}</code>
        </pre>
      </CodeHighlight>
    ),
  },
  {
    name: "Both",
    items: [
      {
        title: "Combine both approaches",
        description:
          "Store stable flows in you codebase for stability and create experiments or quick announcements with no-code.",
      },
    ],
    visual: (
      <div
        className={css({
          position: "relative",
          height: "408px",
          maxWidth: "616px",
          margin: "0 auto",
        })}
      >
        <Image
          alt="No code"
          height={1280}
          src="/images/homepage/no-code-platform.png"
          width={1928}
        />
        <CodeHighlight
          className={css({
            height: "220px",
            maxWidth: "300px",
            margin: "0!",
            position: "absolute",
            width: "100%",
            bottom: 0,
            right: 0,
            sm: {
              height: "260px",
              maxWidth: "480px",
            },
          })}
        >
          <pre>
            <code className="index.html">{`<head>
    <title>Vanilla JS example - Flows JS</title>

    <!-- How you would use Flows in your own code -->
    <!-- Make sure to lock specific version to avoid braking changes. See docs for more info. -->
    <script src="https://cdn.jsdelivr.net/npm/@flows/js/dist/index.global.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@flows/js/css.min/flows.css" />

    <script src="flows.js"></script>

    <!-- See more examples in our SDK repo - https://github.com/RBND-studio/flows-js/tree/main/examples -->
</head>
`}</code>
          </pre>
          <pre>
            <code className="flows.js">{`window.FlowsJS?.init({
  projectId: "vanilla-demo",
  // Stable flows in your code
  // rest loads from our cloud
  flows: [
    {
      id: "my-first-flow",
      element: "#start-flow-1",
      steps: [
        {
          element: "#start-flow-1",
          title: "Welcome to FlowsJS!",
          body: "This is a demo of FlowsJS. Click the button below to continue.",
        },
        {
          title: "This is a modal",
          body: "This is a modal. It is an useful way to show larger amounts of information.",
        },
      ],
    },
  ],
});
`}</code>
          </pre>
        </CodeHighlight>
      </div>
    ),
  },
];
