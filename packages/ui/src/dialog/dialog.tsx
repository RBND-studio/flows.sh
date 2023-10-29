"use client";

import { css, cx } from "@flows/styled-system/css";
import * as RadixDialog from "@radix-ui/react-dialog";
import { Close16 } from "icons";
import type { FC, ReactNode } from "react";

import { Icon } from "../icon";
import { Text } from "../text";

type Props = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: ReactNode;
  children?: ReactNode;
};

export const Dialog: FC<Props> = ({ open, onOpenChange, trigger, children }) => {
  return (
    <RadixDialog.Root onOpenChange={onOpenChange} open={open}>
      {trigger ? <RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger> : null}
      <RadixDialog.Portal>
        <RadixDialog.Overlay
          className={css({
            // TODO: add semantic token
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            position: "fixed",
            zIndex: 10,
            backdropFilter: "blur(4px)",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            "&[data-state=open]": {
              animationName: "fadein",
              animationDuration: "120ms",
            },
            "&[data-state=closed]": {
              animationName: "fadeout",
              animationDuration: "120ms",
            },
          })}
        />
        <RadixDialog.Content
          className={css({
            backgroundColor: "bg",
            // TODO: come up with a systematic way for dialog widths
            maxWidth: "400px",
            width: "100%",
            borderRadius: "radius16",
            position: "fixed",
            zIndex: 10,
            top: "50%",
            left: "50%",
            translate: "-50% -50%",
            // TODO:
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "border.strong",
            // TODO:
            boxShadow: "l2",
            "&[data-state=open]": {
              animationName: "enter",
              animationDuration: "120ms",
            },
            "&[data-state=closed]": {
              animationName: "exit",
              animationDuration: "120ms",
            },
          })}
        >
          <RadixDialog.Close
            aria-label="Close"
            className={css({
              position: "absolute",
              top: "space12",
              right: "space12",
              cursor: "pointer",
            })}
          >
            {/* TODO: use icon button when it's ready */}
            <Icon icon={Close16} />
          </RadixDialog.Close>
          {children}
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};

export const DialogClose = RadixDialog.Close;

export const DialogTitle: FC<{ children?: ReactNode; className?: string }> = ({
  className,
  children,
  ...props
}) => {
  return (
    <RadixDialog.Title
      className={cx(css({ px: "space12", pt: "space8", pb: "space16" }), className)}
      {...props}
    >
      <Text variant="titleXs">{children}</Text>
    </RadixDialog.Title>
  );
};

export const DialogContent: FC<{ children?: ReactNode; className?: string }> = ({
  className,
  ...props
}) => {
  return <div className={cx(css({ px: "space12" }), className)} {...props} />;
};

export const DialogActions: FC<{ children?: ReactNode; className?: string }> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cx(
        css({
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: "space12",
          py: "space8",
        }),
        className,
      )}
      {...props}
    />
  );
};
