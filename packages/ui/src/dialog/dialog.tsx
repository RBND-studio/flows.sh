"use client";

import { css, cva, cx } from "@flows/styled-system/css";
import * as RadixDialog from "@radix-ui/react-dialog";
import { Close16 } from "icons";
import type { FC, ReactNode } from "react";

import { IconButton } from "../icon-button";
import { Text } from "../text";

type Props = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: ReactNode;
  children?: ReactNode;
  /**
   * @defaultValue 400
   */
  maxWidth?: (typeof contentCss.variantMap.maxWidth)[number];
};

export const Dialog: FC<Props> = ({ open, onOpenChange, trigger, children, maxWidth = 400 }) => {
  return (
    <RadixDialog.Root onOpenChange={onOpenChange} open={open}>
      {trigger ? <RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger> : null}
      <RadixDialog.Portal>
        <RadixDialog.Overlay
          className={css({
            backgroundColor: "pane.bg.translucentOverlay",
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
          onSubmit={(e) => e.stopPropagation()}
          className={contentCss({ maxWidth })}
          aria-describedby={undefined}
        >
          {children}
          <RadixDialog.Close
            asChild
            aria-label="Close"
            className={css({
              position: "absolute",
              top: "space16",
              right: "space16",
            })}
          >
            {/* eslint-disable-next-line no-restricted-syntax -- close button */}
            <IconButton size="small" variant="ghost">
              <Close16 />
            </IconButton>
          </RadixDialog.Close>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};

const contentCss = cva({
  base: {
    backgroundColor: "pane.bg.main",
    borderWidth: "1px",
    borderColor: "newBorder.neutral",
    width: "100%",
    borderRadius: "radius12",
    position: "fixed",
    zIndex: 10,
    top: "50%",
    left: "50%",
    translate: "-50% -50%",
    boxShadow: "newL2",
    "&[data-state=open]": {
      animationName: "enter",
      animationDuration: "120ms",
    },
    "&[data-state=closed]": {
      animationName: "exit",
      animationDuration: "120ms",
    },
  },
  variants: {
    maxWidth: {
      400: { maxWidth: "400px" },
      500: { maxWidth: "500px" },
      600: { maxWidth: "600px" },
      1200: { maxWidth: "1200px" },
    },
  },
});

export const DialogClose = RadixDialog.Close;

export const DialogTitle: FC<{ children?: ReactNode; className?: string }> = ({
  className,
  children,
  ...props
}) => {
  return (
    <RadixDialog.Title className={cx(css({ px: "space16", py: "space16" }), className)} {...props}>
      <Text variant="titleM">{children}</Text>
    </RadixDialog.Title>
  );
};

export const DialogContent: FC<{ children?: ReactNode; className?: string }> = ({
  className,
  ...props
}) => {
  return <div className={cx(css({ px: "space16" }), className)} {...props} />;
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
          gap: "space8",
          px: "space16",
          py: "space16",
        }),
        className,
      )}
      {...props}
    />
  );
};
