import { css } from "@flows/styled-system/css";
import { HeaderItems } from "components/header/header-items";
import Image from "next/image";
import Link from "next/link";
import type { ReactElement } from "react";
import React from "react";
import { Button, Text } from "ui";

export const Header = (): ReactElement => {
  return (
    <header
      className={css({
        backgroundColor: "bg",
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        borderBottomColor: "border",
        paddingX: "space16",
        position: "sticky",
        top: 0,
        zIndex: 10,
      })}
    >
      <div
        className={css({
          mx: "auto",
          py: "space12",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1100px",
        })}
      >
        <Link
          className={css({
            display: "inline-flex",
            alignItems: "center",
            gap: "space8",
          })}
          href="/"
        >
          <Image alt="Logo" height={28} src="/images/logo/logo.svg" width={28} />
          <Text variant="bodyMBold">Flows</Text>
        </Link>
        <HeaderItems />
        <Button asChild size="small" variant="black">
          <Link href="/#cta">Join waitlist</Link>
        </Button>
      </div>
    </header>
  );
};
