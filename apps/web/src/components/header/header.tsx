import { css } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { MobileMenu } from "components/header/mobile-menu";
import Image from "next/image";
import Link from "next/link";
import type { ReactElement } from "react";
import React from "react";
import { Text } from "ui";

import { DesktopMenu } from "./desktop-menu";
import { JoinWaitlist } from "./join-waitlist";

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
          maxWidth: "960px",
          gap: "space8",
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
          <Image alt="Logo" height={28} priority src="/images/logo/logo.svg" width={28} />
          <Text variant="bodyM" weight="700">
            Flows
          </Text>
        </Link>
        <Flex flex={1} justifyContent="center">
          <DesktopMenu />
        </Flex>
        <JoinWaitlist />
        <MobileMenu />
      </div>
    </header>
  );
};
