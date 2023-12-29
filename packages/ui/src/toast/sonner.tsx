import { css } from "@flows/styled-system/css";
import React from "react";
import { toast as sonnerToast, Toaster as SonnerToaster } from "sonner";

// TODO: @OPesicka - make da toast beautifuler
export const Toaster = (): React.JSX.Element => {
  return (
    <SonnerToaster
      toastOptions={{
        unstyled: true,
        classNames: {
          toast: css({
            width: "100%",
            color: "text.white",
            borderRadius: "radius12",
            py: "space8",
            px: "space16",
            border: "1px solid",
            textStyle: "bodyS",
            display: "flex",
            gap: "space8",
            "& div svg": {
              mt: "space4",
            },
          }),
          default: css({
            backgroundColor: "bg.subtle",
            borderColor: "border.strong",
          }),
          success: css({
            backgroundColor: "bg.success",
            borderColor: "bg.success",
            "& div svg": {
              color: "green",
            },
          }),
          warning: css({
            backgroundColor: "border.warning",
            borderColor: "bg.warning",
            "& div svg": {
              color: "orange",
            },
          }),
          error: css({
            backgroundColor: "bg.danger",
            borderColor: "bg.danger",
            "& div svg": {
              color: "red",
            },
          }),
          info: css({
            backgroundColor: "bg.info",
            borderColor: "bg.info",
            "& div svg": {
              color: "blue",
            },
          }),
        },
      }}
    />
  );
};

export const toast = sonnerToast;
