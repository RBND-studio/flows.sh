import type { Flow } from "@flows/js";
import { Flows } from "components/flows";
import type { FC, ReactNode } from "react";

const flows: Flow[] = [
  {
    id: "conditional-step",
    steps: [
      {
        title: `Select one of the options`,
        body: "By selecting one of the options the Flow will autmatically branch to the correct step",
        targetElement: ".conditional-step-select",
        wait: [
          {
            change: [
              {
                element: ".conditional-step-select",
                value: "1",
              },
            ],
            targetBranch: 0,
          },
          {
            change: [
              {
                element: ".conditional-step-select",
                value: "2",
              },
            ],
            targetBranch: 1,
          },
        ],
        hideNext: true,
        placement: "left",
      },
      [
        [
          {
            title: "You selected option A",
            targetElement: ".conditional-step-select",
            placement: "right",
          },
        ],
        [
          {
            title: "You selected option B",
            targetElement: ".conditional-step-select",
            placement: "right",
          },
        ],
      ],
    ],
  },
  // {
  //   id: "call-step",
  //   steps: [],
  // },
  {
    id: "wait-step",
    steps: [
      {
        targetElement: ".wait-step-continue",
        title: "Click to continue",
        body: "By clicking continue we will enter the wait step and Flow will be waiting for the user to click the resume button to continue.",
        placement: "left",
      },
      { wait: { clickElement: ".wait-step-continue" } },
      {
        targetElement: ".wait-step-continue",
        title: "Flow resumed",
        body: "By clicking the continue button, we resumed the flow.",
        placement: "right",
      },
    ],
  },
];

export const DemoFlows: FC<{ children?: ReactNode }> = ({ children }) => {
  return <Flows flows={flows}>{children}</Flows>;
};
