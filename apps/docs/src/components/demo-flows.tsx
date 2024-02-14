import { init } from "@flows/js/core";
import type { FC } from "react";
import { useEffect } from "react";

export const DemoFlows: FC = () => {
  useEffect(() => {
    void init({
      flows: [
        {
          id: "tooltip",
          rootElement: ".tooltip-root",
          frequency: "every-time",
          steps: [
            {
              title: "Tooltip",
              body: "This is a content of a tooltip.",
              targetElement: ".tooltip-target",
              placement: "right",
              // overlay: true,
            },
          ],
        },
        // {
        //   id: "modal",
        //   rootElement: ".modal-root",
        //   frequency: "every-time",
        //   steps: [
        //     {
        //       title: "Modal",
        //       body: "This is a content of a modal.",
        //     },
        //   ],
        // },
      ],
    });
  }, []);

  return null;
};
