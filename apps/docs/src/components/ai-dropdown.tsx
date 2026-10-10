// cSpell:words Scira
"use client";
import { css } from "@flows/styled-system/css";
import { ChevronDown16, ExternalLink16 } from "icons";
import { type FC } from "react";
import { IconButton, Menu, MenuItem } from "ui";

type Props = {
  markdownUrl: string;
  githubUrl: string;
};

export const AiDropdown: FC<Props> = ({ markdownUrl, githubUrl }) => {
  const fullMarkdownUrl =
    typeof window !== "undefined" ? new URL(markdownUrl, window.location.origin) : "loading";
  const q = `Read ${fullMarkdownUrl}, I want to ask questions about it.`;
  const items = [
    {
      title: "Open in GitHub",
      href: githubUrl,
      icon: (
        <svg fill="currentColor" role="img" viewBox="0 0 24 24">
          <title>GitHub</title>
          <path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.7 4.7 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3" />
        </svg>
      ),
    },
    {
      // cspell:disable-next-line
      title: "Open in Scira AI",
      href: `https://scira.ai/?${new URLSearchParams({
        q,
      })}`,
      icon: (
        <svg viewBox="0 0 910 934" fill="none" xmlns="http://www.w3.org/2000/svg">
          <title>Scira AI</title>
          <path
            d="M647.66 197.78q-117.8-13.1-130.89-130.9-13.08 117.8-130.89 130.9 117.8 13.08 130.9 130.89 13.08-117.8 130.88-130.9"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          <path
            d="M516.77 304.22c-6.47-28.73-18.56-52.13-36.43-70-17.88-17.88-41.28-29.97-70-36.44 28.72-6.48 52.12-18.57 70-36.44 17.87-17.88 29.96-41.28 36.43-70 6.48 28.72 18.57 52.12 36.44 70 17.88 17.87 41.28 29.96 70 36.44-28.72 6.47-52.12 18.56-70 36.43-17.87 17.88-29.96 41.28-36.44 70"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          <path
            d="M857.5 508.12Q716.14 492.4 700.43 351.05q-15.7 141.36-157.07 157.07 141.37 15.7 157.07 157.06 15.7-141.36 157.07-157.06"
            stroke="currentColor"
            strokeWidth="20"
            strokeLinejoin="round"
          />
          <path
            d="M700.43 615.96c-8.58-26.91-21.85-49.6-40.05-67.8s-40.88-31.46-67.79-40.04c26.9-8.59 49.6-21.86 67.8-40.05 18.19-18.2 31.46-40.89 40.04-67.8 8.59 26.91 21.86 49.6 40.05 67.8 18.2 18.19 40.88 31.46 67.8 40.05-26.91 8.58-49.6 21.85-67.8 40.04-18.2 18.2-31.47 40.89-40.05 67.8"
            stroke="currentColor"
            strokeWidth="20"
            strokeLinejoin="round"
          />
          <path
            d="M889.95 121.24q-88.35-9.82-98.17-98.17-9.8 88.35-98.17 98.17 88.35 9.81 98.17 98.16 9.82-88.35 98.17-98.16"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          <path
            d="M791.78 196.8c-5.08-19.86-13.91-36.23-26.62-48.94-12.7-12.71-29.08-21.54-48.93-26.62 19.85-5.09 36.22-13.92 48.93-26.62 12.7-12.71 21.54-29.08 26.62-48.94 5.09 19.86 13.92 36.23 26.62 48.94 12.71 12.7 29.08 21.53 48.94 26.62-19.86 5.08-36.23 13.91-48.94 26.62-12.7 12.7-21.53 29.08-26.62 48.93"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          <path
            d="M760.63 764.34a420.93 420.93 0 1 1-492.51-649.9"
            stroke="currentColor"
            strokeWidth="30"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Open in ChatGPT",
      href: `https://chatgpt.com/?${new URLSearchParams({
        hints: "search",
        q,
      })}`,
      icon: (
        <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <title>OpenAI</title>
          <path d="M22.28 9.82a6 6 0 0 0-.51-4.91 6.05 6.05 0 0 0-6.51-2.9A6.07 6.07 0 0 0 4.98 4.18a6 6 0 0 0-4 2.9 6.05 6.05 0 0 0 .75 7.1 6 6 0 0 0 .5 4.9 6.05 6.05 0 0 0 6.52 2.9A6 6 0 0 0 13.26 24a6.1 6.1 0 0 0 5.77-4.2 6 6 0 0 0 4-2.9 6.1 6.1 0 0 0-.75-7.08m-9.02 12.6a4.5 4.5 0 0 1-2.88-1.03l.15-.08 4.77-2.76a.8.8 0 0 0 .4-.68v-6.74l2.02 1.17.03.05v5.58a4.5 4.5 0 0 1-4.49 4.5M3.6 18.3a4.5 4.5 0 0 1-.54-3.01l.15.09 4.78 2.75a.8.8 0 0 0 .78 0l5.84-3.36v2.33l-.03.06-4.84 2.79A4.5 4.5 0 0 1 3.6 18.3M2.34 7.9a4.5 4.5 0 0 1 2.37-1.98v5.68a.8.8 0 0 0 .38.68l5.82 3.35-2.02 1.17h-.07L3.99 14a4.5 4.5 0 0 1-1.65-6.14zm16.6 3.85L13.1 8.36l2.02-1.16h.07l4.83 2.8a4.5 4.5 0 0 1-.68 8.1v-5.68a.8.8 0 0 0-.4-.67m2-3.02-.13-.09-4.78-2.78a.8.8 0 0 0-.78 0L9.4 9.23V6.9l.03-.06 4.83-2.8a4.5 4.5 0 0 1 6.68 4.67zM8.32 12.86 6.29 11.7l-.04-.06V6.07a4.5 4.5 0 0 1 7.37-3.45l-.14.08L8.7 5.46a.8.8 0 0 0-.39.68zm1.1-2.36L12 9l2.6 1.5v3L12 15l-2.6-1.5Z" />
        </svg>
      ),
    },
    {
      title: "Open in Claude",
      href: `https://claude.ai/new?${new URLSearchParams({
        q,
      })}`,
      icon: (
        <svg fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>Anthropic</title>
          <path d="M17.3 3.54h-3.67l6.7 16.92H24Zm-10.6 0L0 20.46h3.74l1.37-3.55h7l1.38 3.55h3.74l-6.7-16.92Zm-.38 10.22 2.3-5.94 2.29 5.94Z" />
        </svg>
      ),
    },
    {
      title: "Open in T3 Chat",
      href: `https://t3.chat/new?${new URLSearchParams({
        q,
      })}`,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        >
          <title>T3 Chat</title>
          <path d="M3 16.34a2 2 0 0 1 .09 1.17L2.02 20.8a1 1 0 0 0 1.24 1.17l3.41-1a2 2 0 0 1 1.1.1 10 10 0 1 0-4.78-4.73" />
        </svg>
      ),
    },
  ];

  return (
    <Menu
      trigger={
        // eslint-disable-next-line no-restricted-syntax -- not needed
        <IconButton variant="secondary" borderLeftRadius={0} borderLeftWidth={0}>
          <ChevronDown16 />
        </IconButton>
      }
    >
      {items.map((item) => (
        <MenuItem asChild key={item.href}>
          <a href={item.href} rel="noreferrer noopener nofollow" target="_blank">
            <span className={css({ width: 16 })}>{item.icon}</span>
            {item.title}
            <ExternalLink16 />
          </a>
        </MenuItem>
      ))}
    </Menu>
  );
};
