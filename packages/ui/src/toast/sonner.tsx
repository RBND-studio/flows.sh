import { css } from "@flows/styled-system/css";
import type { FC } from "react";
import { toast as sonnerToast, Toaster as SonnerToaster } from "sonner";

// TODO: @OPesicka - make da toast beautifuler
export const Toaster: FC = () => {
  return (
    <SonnerToaster
      toastOptions={{
        unstyled: true,
        classNames: {
          toast: css({
            width: "100%",
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
            backgroundColor: "bg",
            color: "text",
            borderColor: "border",
          }),
          title: css({
            textStyle: "titleM",
          }),
          description: css({
            color: "text.muted!",
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
