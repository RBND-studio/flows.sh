import { css } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { SignupClick } from "components/utils/signup-click";
import { links } from "lib/links";
import Link from "next/link";
import { type ReactElement } from "react";
import { routes } from "routes";
import { Button, Logo } from "ui";

import { DesktopMenu } from "./desktop-menu";
import { MobileMenu } from "./mobile-menu";

export const Header = (): ReactElement => {
  return (
    <header
      className={css({
        position: "sticky",
        top: 0,
        zIndex: 1000,
        px: "space24",
        width: "100%",
        borderBottomWidth: "1px",
        borderBottomColor: "border.neutral",
        backgroundColor: "pane.bg.web",
      })}
    >
      <Flex
        mdDown={{ justifyContent: "space-between" }}
        mx="auto"
        maxWidth={1080}
        py="space12"
        px="space16"
        borderLeftWidth={1}
        borderRightWidth={1}
        borderColor="border.neutral"
        alignItems="center"
        gap={{ base: "space8", lg: "space12" }}
      >
        <Link href={routes.home} aria-label="Home">
          <Logo
            type="type"
            size={20}
            className={css({ display: { base: "block", sm: "none", md: "block" } })}
          />
          <Logo
            type="pill"
            size={28}
            className={css({ display: { base: "none", sm: "block", md: "none" } })}
          />
        </Link>

        <Flex
          flex={1}
          sm={{ display: "flex" }}
          lg={{ ml: "space16" }}
          justifyContent="center"
          display="none"
        >
          <DesktopMenu />
        </Flex>

        <Flex gap="space8" alignItems="center" justifyContent="flex-end">
          <Button size="small" asChild variant="ghost">
            <a
              className={css({
                display: "block",
                sm: { display: "none" },
                md: { display: "block" },
              })}
              href={links.logIn}
            >
              Log in
            </a>
          </Button>
          <SignupClick>
            <Button size="small" asChild>
              <a href={links.signUp}>Sign up</a>
            </Button>
          </SignupClick>
          <MobileMenu />
        </Flex>
      </Flex>
    </header>
  );
};
