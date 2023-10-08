import { css } from "@flows/styled-system/css";
import Image from "next/image";
import type { ReactElement } from "react";
import React from "react";
import { Text } from "ui";

interface FooterGroup {
  title: string;
  links: {
    title: string;
    href: string;
  }[];
}

const footerGroups: FooterGroup[] = [
  {
    title: "Product",
    links: [
      {
        title: "Overview",
        href: "#overview",
      },
      {
        title: "Pricing",
        href: "/pricing",
      },
      {
        title: "Changelog",
        href: "/changelog",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        title: "Blog",
        href: "/blog",
      },
      {
        title: "Github",
        href: "https://github.com/RBND-studio",
      },
    ],
  },
];

export const Footer = (): ReactElement => {
  return (
    <footer
      className={css({
        maxWidth: "1440px",
        mx: "auto",
        px: { base: "16px", md: "32px", lg: "64px", xl: "170px" },
        py: "40px",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
      })}
    >
      <div>
        <div
          className={css({
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
          })}
        >
          <Image alt="Logo" height={24} src="/images/logo/logo.svg" width={24} />
          <Text variant="bodyMBold">Flows</Text>
        </div>
        <div>
          <Text color="gray" variant="bodyS">
            Follow us
          </Text>
          <div
            className={css({
              display: "flex",
              alignItems: "center",
              gap: "16px",
            })}
          >
            <Text asChild variant="bodySSemiBold">
              <a href="a">Twitter</a>
            </Text>
            <Text asChild variant="bodySSemiBold">
              <a href="a">Github</a>
            </Text>
          </div>
        </div>
        <Text color="gray" variant="bodyS">
          © 2023 RBND studios
        </Text>
      </div>
      <div className={css({ display: "flex", gap: "32px" })}>
        {footerGroups.map((group) => (
          <div
            className={css({
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "8px",
            })}
            key={group.title}
          >
            <Text color="gray" variant="bodyS">
              {group.title}
            </Text>
            {group.links.map((link) => (
              <Text asChild key={link.href} variant="bodySSemiBold">
                <a
                  className={css({
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  })}
                  href={link.href}
                >
                  {link.title}
                </a>
              </Text>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};
