"use client";

import { css } from "@flows/styled-system/css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactElement } from "react";
import React from "react";
import { Text } from "ui";

type HeaderItem = {
  title: string;
  href: string;
};

const HEADER_ITEMS: HeaderItem[] = [
  {
    title: "Product",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

export const HeaderItems = (): ReactElement => {
  const pathName = usePathname();
  const path = `/${pathName.split("/").slice(1, 2)[0]}`;

  return (
    <ul>
      {HEADER_ITEMS.map((item) => (
        <li
          className={css({
            display: "inline-block",
            mr: "space32",
          })}
          key={item.title}
        >
          <Text asChild color={path === item.href ? "default" : "subtle"} variant="subtitleS">
            <Link href={item.href}>{item.title}</Link>
          </Text>
        </li>
      ))}
    </ul>
  );
};
