"use client";

import { endFlow, startFlow } from "@flows/js";
import { css } from "@flows/styled-system/css";
import { useFlowsContext } from "components/flows";
import { ArrowRight16 } from "icons";
import { type FC, type ReactNode } from "react";
import { Button, Dialog, DialogActions, DialogClose, DialogContent, DialogTitle, Text } from "ui";

export type ItemType = {
  title: string;
  description: string;
  visual: React.ReactNode;
  preview?: {
    flowId: string;
    content: ReactNode;
  };
};

export const Item: FC<{ item: ItemType }> = ({ item }) => {
  const { runningFlowIds } = useFlowsContext();
  const flowId = item.preview?.flowId;
  const isRunning = !!flowId && runningFlowIds.includes(flowId);
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: "space24",
        padding: "space24",
        borderRadius: "radius24",
        borderColor: "border.strong",
        borderWidth: "1px",
        borderStyle: "solid",
        shadow: "l2",
        backgroundColor: "bg.card",

        "& > img": {
          borderRadius: "radius12",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "border.strong",
          backgroundColor: "bg.muted",
        },
      })}
      key={item.title}
    >
      {item.visual}
      <div>
        <Text as="h3" className={css({ marginBottom: "space4" })} variant="titleXl">
          {item.title}
        </Text>
        <Text color="muted" variant="bodyM">
          {item.description}
        </Text>
        {item.preview ? (
          <Dialog
            maxWidth={600}
            onOpenChange={(open) => {
              if (!flowId) return;
              if (open) startFlow(flowId);
              else endFlow(flowId);
            }}
            trigger={
              <button
                className={css({
                  textStyle: "titleL",
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
            <DialogContent>
              <Text className={css({ mb: "space12" })} variant="bodyM">
                {item.description}
              </Text>
              <div
                className={css({
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "200px",
                  backgroundColor: "bg.subtle",
                  borderRadius: "radius12",
                  ...(!isRunning ? { pointerEvents: "none", opacity: 0.3 } : {}),
                })}
              >
                {item.preview.content}
              </div>
            </DialogContent>
            <DialogActions>
              <DialogClose asChild>
                <Button shadow={false} variant="secondary">
                  Close
                </Button>
              </DialogClose>
              <Button onClick={() => flowId && startFlow(flowId)} variant="secondary">
                Restart
              </Button>
            </DialogActions>
          </Dialog>
        ) : (
          <Text className={css({ mt: "space8" })} color="disabled" variant="bodyM">
            Preview coming soon
          </Text>
        )}
      </div>
    </div>
  );
};
