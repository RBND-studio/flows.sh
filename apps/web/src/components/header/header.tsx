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
        maxWidth: "1440px",
        mx: "auto",
        px: { base: "16px", md: "32px", lg: "64px", xl: "170px" },
        py: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      })}
    >
      <div
        className={css({
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
        })}
      >
        <Image alt="Logo" height={28} src="/images/logo/logo.svg" width={28} />
        <Text variant="bodyMBold">Flows</Text>
      </div>
      <HeaderItems />
      <Button asChild size="small" variant="black">
        <Link href="/#cta">Join waitlist</Link>
      </Button>
    </header>
  );
};
