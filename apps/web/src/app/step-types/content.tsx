import { css, cx } from "@flows/styled-system/css";
import { ArrowRight16 } from "icons";
import Image from "next/image";
import type { FC } from "react";
import { Button, Dialog, DialogActions, DialogClose, DialogContent, DialogTitle, Text } from "ui";

const list: {
  title: string;
  description: string;
  visual: React.ReactNode;
  preview?: string;
}[] = [
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
    preview: "TODO",
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
    preview: "TODO",
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
    preview: "TODO",
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
  const firstTwo = list.slice(0, 2);
  const lastTwo = list.slice(2, 4);

  const cardStyle = css({
    display: "flex",
    flexDirection: "column",
    gap: "space24",
    padding: "space24",
    borderRadius: "radius24",
    borderColor: "border.strong",
    borderWidth: "1px",
    borderStyle: "solid",
    shadow: "l2",

    "& > img": {
      borderRadius: "radius12",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "border.strong",
      backgroundColor: "bg.muted",
    },
  });

  const wrapperStyle = css({
    display: "flex",
    flexDirection: "column",
    gap: "space40",
    flex: 1,
  });

  return (
    <div
      className={css({
        display: "flex",
        gap: "space40",
        width: "100%",
        flexDirection: "column",
        md: {
          flexDirection: "row",
        },
      })}
    >
      <div
        className={cx(
          css({
            marginTop: "0",
            md: {
              marginTop: "80px",
            },
          }),
          wrapperStyle,
        )}
      >
        {firstTwo.map((item) => {
          return (
            <div className={cardStyle} key={item.title}>
              {item.visual}
              <div>
                <Text className={css({ marginBottom: "space4" })} variant="titleXs">
                  {item.title}
                </Text>
                <Text color="muted">{item.description}</Text>
                <Dialog
                  trigger={
                    <button
                      className={css({
                        textStyle: "subtitleL",
                        color: "text.primary",
                        display: "flex",
                        alignItems: "center",
                        gap: "space4",
                        marginTop: "space8",
                        cursor: "pointer",
                        _hover: {
                          "& svg": {
                            transform: "translateX(4px)",
                          },
                        },
                        "& svg": {
                          transition: "transform 120ms ease-out",
                        },
                      })}
                      type="button"
                    >
                      View demo
                      <ArrowRight16 />
                    </button>
                  }
                >
                  <DialogTitle>{item.title}</DialogTitle>
                  <DialogContent>{item.description}</DialogContent>
                  <DialogActions>
                    <DialogClose asChild>
                      <Button size="small" variant="black">
                        Close
                      </Button>
                    </DialogClose>
                  </DialogActions>
                </Dialog>
              </div>
            </div>
          );
        })}
      </div>
      <div className={wrapperStyle}>
        {lastTwo.map((item) => {
          return (
            <div className={cardStyle} key={item.title}>
              {item.visual}
              <div>
                <Text className={css({ marginBottom: "space4" })} variant="titleXs">
                  {item.title}
                </Text>
                <Text color="muted">{item.description}</Text>
                {item.preview ? (
                  <button
                    className={css({
                      textStyle: "subtitleL",
                      color: "text.primary",
                      display: "flex",
                      alignItems: "center",
                      gap: "space4",
                      marginTop: "space8",
                      _hover: {
                        "& svg": {
                          transform: "translateX(4px)",
                        },
                      },
                      "& svg": {
                        transition: "transform 120ms ease-out",
                      },
                    })}
                    type="button"
                  >
                    View demo
                    <ArrowRight16 />
                  </button>
                ) : (
                  <Text className={css({ mt: "space8" })} color="disabled" variant="bodyM">
                    Preview coming soon
                  </Text>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
