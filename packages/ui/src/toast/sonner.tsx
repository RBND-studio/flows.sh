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
            borderColor: "border.neutral",
            textStyle: "bodyS",
            display: "flex",
            gap: "space8",
            "& div[data-content]": {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            },
            backgroundColor: "pane.bg.elevated",
            color: "fg.neutral",
          }),
          title: css({
            textStyle: "bodyS!",
            fontWeight: "600!",
          }),
          description: css({
            color: "fg.neutral.muted!",
          }),
          success: css({
            backgroundColor: "bg.success.muted",
            borderColor: "border.success.subtle",

            "& div svg": {
              color: "fg.success",
            },
          }),
          warning: css({
            backgroundColor: "bg.warning.muted",
            borderColor: "border.warning.subtle",
            "& div svg": {
              color: "fg.warning.light",
            },
          }),
          error: css({
            backgroundColor: "bg.danger.muted",
            borderColor: "border.danger.subtle",
            "& div svg": {
              color: "fg.danger",
            },
          }),
          info: css({
            backgroundColor: "bg.primary.muted",
            borderColor: "border.primary.subtle",
            "& div svg": {
              color: "fg.primary",
            },
          }),
          loading: css({
            backgroundColor: "bg.neutral",
            borderColor: "border.neutral.subtle",
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
