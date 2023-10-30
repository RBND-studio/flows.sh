import type { Flow } from "@rbnd/flows";
import { Flows } from "components/flows";
import type { FC, ReactNode } from "react";

const flows: Flow[] = [
  {
    id: "wait-step",
    steps: [
      {
        element: ".wait-step-continue",
        title: "First step",
        body: "First we need to step into the wait step to see the flow can be stopped.",
      },
      {
        wait: { element: ".wait-step-continue" },
      },
      {
        element: ".wait-step-continue",
        title: "Flow resumed",
        body: "By clicking the continue button, we resumed the flow.",
      },
    ],
  },
];

export const DemoFlows: FC<{ children?: ReactNode }> = ({ children }) => {
  return <Flows flows={flows}>{children}</Flows>;
};
