"use client";

import { css } from "@flows/styled-system/css";
import * as Portal from "@radix-ui/react-portal";
import { Check16 } from "icons";
import type { LegacyRef, ReactNode } from "react";
import { resolveValue, useToaster } from "react-hot-toast/headless";

import { Icon } from "../icon";
import { Spinner } from "../spinner";
import { Text } from "../text";

export const ToastProvider = (): ReactNode => {
  const { toasts, handlers } = useToaster();
  const { startPause, endPause, updateHeight } = handlers;
  if (typeof window === "undefined" || !toasts.length) {
    return null;
  }

  return (
    <Portal.Root
      className={css({
        zIndex: 100,
        position: "fixed",
        bottom: "space16",
        right: "space16",
      })}
      onMouseEnter={startPause}
      onMouseLeave={endPause}
    >
      <div
        className={css({
          position: "relative",
          bottom: 0,
          right: 0,
          top: 0,
          //height: "100%",
        })}
      >
        {toasts.map((toast) => {
          const ref: LegacyRef<HTMLDivElement> | undefined = (el): void => {
            if (el && typeof toast.height !== "number") {
              const height = el.getBoundingClientRect().height;
              updateHeight(toast.id, height);
            }
          };

          let icon;
          if (toast.type === "success") {
            icon = <Icon color="icon.success" icon={Check16} />;
          } else if (toast.type === "loading") {
            icon = <Spinner />;
          } else if (toast.type === "error") {
            icon = <Icon color="icon.danger" icon={Check16} />;
          } else if (toast.type === "blank") {
            icon = null;
          }

          const value = resolveValue(toast.message, toast);

          return (
            <div
              className={css({
                my: "space4",
                background: "bg.subtle",
                borderRadius: "radius12",
                paddingY: "space4",
                paddingX: "space8",
                border: "1px solid",
                borderColor: "border.strong",
                color: "text.white",
                whiteSpace: "nowrap",
                opacity: toast.visible ? 1 : 0,
                transition: "all 0.5s ease-out",
                display: "flex",
                gap: "space8",
                alignItems: "center",
              })}
              key={toast.id}
              ref={ref}
              {...toast.ariaProps}
            >
              {icon}

              {typeof value === "string" ? <Text>{value}</Text> : value}
            </div>
          );
        })}
      </div>
    </Portal.Root>
  );
};
