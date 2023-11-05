import { css } from "@flows/styled-system/css";
import Image from "next/image";
import { type FC } from "react";
import { Button } from "ui";

import { Item, type ItemType } from "./item";

const list: ItemType[] = [
  {
    title: "Conditional step",
    description:
      "Show different steps based on the user's input, their segmentation, or any other condition. Conditional flows are infinitely nestable and can be used to create complex flows.",
    visual: (
      <Image
        alt="Flowchart illustration of conditional step with two branches
      "
        height={840}
        src="/images/homepage/conditional-step.png"
        width={1458}
      />
    ),
    preview: {
      flowId: "conditional-step",
      content: (
        <select className="conditional-step-select">
          <option value="">Select...</option>
          <option value="1">Option A</option>
          <option value="2">Option B</option>
        </select>
      ),
    },
  },
  {
    title: "Call step",
    description:
      "Call steps are versatile steps that can be used to trigger any action such as opening a menu, changing a state in UI, or anything else that you can do with JavaScript.",
    visual: (
      <Image
        alt="Flowchart illustration of call step that opens a dropdown menu in UI"
        height={840}
        src="/images/homepage/call-step.png"
        width={1458}
      />
    ),
    // preview: { flowId: "call-step", content: null },
  },
  {
    title: "Wait step",
    description:
      "Give users time to complete a task before showing the next step. Wait for a specific amount of time or until the user completes a specific action. Then the flow will continue automatically.",
    visual: (
      <Image
        alt="Flowchart illustration of wait step that waits for user to click a button"
        height={840}
        src="/images/homepage/wait-step.png"
        width={1458}
      />
    ),
    preview: {
      flowId: "wait-step",
      content: (
        <Button className="wait-step-continue" variant="secondary">
          Resume flow
        </Button>
      ),
    },
  },
  {
    title: "AI decision",
    description:
      "Send user input to AI to analyze it and decide on the best route the user should take in the onboarding flow. AI steps allow you to create conditions from forms and other unpredictable controls.",
    visual: (
      <Image
        alt="Flowchart illustration of AI decision step that sends user input to AI to analyze it and decide on the best route the user should take in the onboarding flow"
        height={840}
        src="/images/homepage/ai-decision-step.png"
        width={1458}
      />
    ),
  },
];

export const Content: FC = () => {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: "space40",
        md: { flexDirection: "row" },
      })}
    >
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: "space40",
          md: { mt: "80px" },
        })}
      >
        {list.slice(0, 2).map((item) => (
          <Item item={item} key={item.title} />
        ))}
      </div>
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: "space40",
        })}
      >
        {list.slice(2).map((item) => (
          <Item item={item} key={item.title} />
        ))}
      </div>
    </div>
  );
};
