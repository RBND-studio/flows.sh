"use client";

import { css } from "@flows/styled-system/css";
import * as Tabs from "@radix-ui/react-tabs";
import type { FC, ReactElement } from "react";

type Props = {
  tabs: string[];
  children?: ReactElement[];
};

export const CodeTabs: FC<Props> = ({ tabs, children }) => {
  return (
    <Tabs.Root defaultValue={"0"}>
      <Tabs.List
        className={css({
          display: "flex",
          borderBottomWidth: "1px",
          borderStyle: "solid",
          borderColor: "border.neutral",
          backgroundColor: "#f6f8fa",
          _dark: {
            backgroundColor: "#1c2128",
          },
        })}
      >
        {tabs.map((title, i) => (
          <Tabs.Trigger asChild key={title} value={i.toString()}>
            <FileTab title={title} />
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {children?.map((child, i) => (
        <Tabs.Content key={i} value={i.toString()}>
          {child}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};

const SIZE = 16;

const FileTab: FC<{ title: string }> = ({ title, ...props }) => {
  const extension = title?.split(".").pop();

  // File icons are stored in public/file-icons in both app and web
  // Additional icons can be found at
  // https://github.com/PKief/vscode-material-icon-theme/tree/main/icons
  const icon = (() => {
    switch (extension) {
      case "js":
        return "javascript";
      case "ts":
      case "gts":
        return "typescript";
      case "tsx":
        return "react_ts";
      case "jsx":
        return "react";
      case "css":
        return "css";
      case "json":
        return "json";
      case "html":
        return "html";
      case "vue":
        return "vue";
      case "svelte":
        return "svelte";
      case "astro":
        return "astro";
      default:
    }
  })();

  return (
    <button
      className={css({
        display: "flex",
        alignItems: "center",
        px: "space12",
        py: "space6",
        cursor: "pointer",
        borderRightWidth: "1px",
        borderStyle: "solid",
        borderColor: "border.neutral",
        fontSize: "13px",
        color: "fg.neutral.subtle",
        position: "relative",

        "&[data-state='active']": {
          color: "fg.neutral.muted",
          backgroundColor: "#fff",
          _dark: {
            backgroundColor: "#22272e",
          },

          "&::after": {
            content: "''",
            position: "absolute",
            width: "100%",
            height: "1px",
            backgroundColor: "inherit",
            bottom: "-1px",
            left: 0,
          },
        },
      })}
      {...props}
    >
      {icon ? (
        <img
          alt={icon}
          className={css({ mr: 4 })}
          height={SIZE}
          src={`/file-icons/${icon}.svg`}
          width={SIZE}
        />
      ) : null}
      {title}
    </button>
  );
};
