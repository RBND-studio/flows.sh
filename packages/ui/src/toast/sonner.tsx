"use client";

import { css } from "@flows/styled-system/css";
import type { FC } from "react";
import { Toaster as SonnerToaster } from "sonner";
import { Spinner } from "../spinner";

export const Toaster: FC = () => {
  return (
    <SonnerToaster
      icons={{
        loading: <Spinner size={16} />,
      }}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast: css({
            width: "100%",
            borderRadius: "radius8",
            py: "space12",
            px: "space16",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "newBorder.neutral",
            textStyle: "bodyS",
            display: "flex",
            gap: "space8",
            "& div[data-content]": {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            },
            backgroundColor: "pane.bg.elevated",
            color: "newFg.neutral",
          }),
          title: css({
            textStyle: "bodyS!",
            fontWeight: "600!",
          }),
          description: css({
            color: "newFg.neutral.muted!",
          }),
          success: css({
            backgroundColor: "newBg.success.muted",
            borderColor: "newBorder.success.subtle",

            "& div svg": {
              color: "newFg.success",
            },
          }),
          warning: css({
            backgroundColor: "newBg.warning.muted",
            borderColor: "newBorder.warning.subtle",
            "& div svg": {
              color: "newFg.warning.light",
            },
          }),
          error: css({
            backgroundColor: "newBg.danger.muted",
            borderColor: "newBorder.danger.subtle",
            "& div svg": {
              color: "newFg.danger",
            },
          }),
          info: css({
            backgroundColor: "newBg.primary.muted",
            borderColor: "newBorder.primary.subtle",
            "& div svg": {
              color: "newFg.primary",
            },
          }),
          loading: css({
            backgroundColor: "newBg.neutral",
            borderColor: "newBorder.neutral.subtle",
            "& [data-icon]": {
              position: "relative",
              width: 20,
              height: 20,
            },
          }),
        },
      }}
    />
  );
};

export { toast } from "sonner";
