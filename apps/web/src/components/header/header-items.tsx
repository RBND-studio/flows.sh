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
  target?: string;
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
  // TODO: Uncomment when docs are ready and header can handle mobiles
  // {
  //   title: "Docs",
  //   href: links.docs,
  // },
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
            mx: "space12",
            sm: {
              mx: "space24",
            },
          })}
          key={item.title}
        >
          <Text asChild color={path === item.href ? "default" : "subtle"} variant="titleS">
            <Link href={item.href} target={item.target}>
              {item.title}
            </Link>
          </Text>
        </li>
      ))}
    </ul>
  );
};
