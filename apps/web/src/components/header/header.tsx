import { css } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { MobileMenu } from "components/header/mobile-menu";
import { BottomLine } from "components/ui";
import { SignupClick } from "components/utils/signup-click";
import Link from "next/link";
import type { ReactElement } from "react";
import { routes } from "routes";
import { links } from "shared";
import { Button, Logo } from "ui";

import { DesktopMenu } from "./desktop-menu";

export const Header = (): ReactElement => {
  return (
    <header
      className={css({
        backgroundColor: "bg",
        borderBottomWidth: "1px",
        borderBottomColor: "newBorder.neutral",
        paddingX: "space16",
        position: "sticky",
        top: 0,
        zIndex: 10,
      })}
    >
      <Flex mx="auto" py="space8" alignItems="center" maxWidth="1024px" gap="space16">
        <Link href={routes.home} aria-label="Home">
          <Logo type="type" size={20} />
        </Link>

        <Flex ml="space32" flex={1}>
          <DesktopMenu />
        </Flex>
        <Flex gap="space8" justifyContent="flex-end">
          <Button asChild variant="secondary">
            <a href={links.logIn}>Log in</a>
          </Button>
          <SignupClick>
            <Button asChild>
              <a href={links.signUp}>Sign up</a>
            </Button>
          </SignupClick>
        </Flex>
        <MobileMenu />
      </Flex>
      <BottomLine />
    </header>
  );
};
