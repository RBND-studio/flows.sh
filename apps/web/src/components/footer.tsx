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
        backgroundColor: "bg.muted",
        paddingX: "space16",
        borderTopWidth: "1px",
        borderTopStyle: "solid",
        borderTopColor: "border",
      })}
    >
      <div
        className={css({
          maxWidth: "1100px",
          mx: "auto",
          py: "space40",
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
              gap: "space8",
              marginBottom: "space24",
            })}
          >
            <Image alt="Logo" height={24} src="/images/logo/logo.svg" width={24} />
            <Text variant="bodyMBold">Flows</Text>
          </div>
          <div
            className={css({
              marginBottom: "space16",
            })}
          >
            <Text color="subtle" variant="bodyS">
              Follow us
            </Text>
            <div
              className={css({
                display: "flex",
                alignItems: "center",
                gap: "space16",
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
          <Text color="subtle" variant="bodyS">
            © 2023 RBND studios
          </Text>
        </div>
        <div className={css({ display: "flex", gap: "space48" })}>
          {footerGroups.map((group) => (
            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "space8",
              })}
              key={group.title}
            >
              <Text color="subtle" variant="bodyS">
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
      </div>
    </footer>
  );
};
