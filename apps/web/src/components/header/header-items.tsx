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
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Changelog",
    href: "/changelog",
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
            mr: "32px",
          })}
          key={item.title}
        >
          <Text asChild color={path === item.href ? "black" : "gray"} variant="subtitleS">
            <Link href={item.href}>{item.title}</Link>
          </Text>
        </li>
      ))}
    </ul>
  );
};
