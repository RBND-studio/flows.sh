"use client";

import { css, cva } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { MobileMenu } from "components/header/mobile-menu";
import { SignupClick } from "components/utils/signup-click";
import { Menu16 } from "icons";
import { links } from "lib/links";
import Link from "next/link";
import { type ReactElement, useCallback, useEffect, useRef, useState } from "react";
import { routes } from "routes";
import { Button, IconButton, Logo } from "ui";

import { DesktopMenu } from "./desktop-menu";

// TODO: refactor this to move as much as possible to a server component
export const Header = (): ReactElement => {
  const [open, setOpen] = useState(false);
  const toggleOpen = useCallback((): void => setOpen((p) => !p), []);
  const handleClose = useCallback((): void => setOpen(false), []);
  const ref = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([e]) => {
        navRef.current?.toggleAttribute("data-stuck", e.intersectionRatio < 1);
      },
      { threshold: [1] },
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={css({
        position: "sticky",
        // Needed for the intersection observer
        top: "-0.1px",
        zIndex: 1000,
        pt: "space8",
        px: "space24",
        width: "100%",
      })}
      ref={ref}
    >
      <Flex
        ref={navRef}
        className={headerCss()}
        lg={{ gap: "space16" }}
        mdDown={{ justifyContent: "space-between" }}
      >
        <Link href={routes.home} aria-label="Home">
          <Logo type="type" size={20} />
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
          {/* eslint-disable-next-line no-restricted-syntax -- hamburger menu */}
          <IconButton
            className={css({ sm: { display: "none" }, px: "8px" })}
            onClick={toggleOpen}
            variant="ghost"
          >
            <Menu16 />
            <span className={css({ srOnly: true })}>Open main menu</span>
          </IconButton>
        </Flex>
      </Flex>
      <MobileMenu handleClose={handleClose} open={open} />
    </header>
  );
};

const headerCss = cva({
  base: {
    borderWidth: "1px",
    borderColor: "transparent",
    mx: "auto",
    maxWidth: "1024px",
    py: "space8",
    px: 0,
    display: "flex",
    alignItems: "center",
    gap: "space8",
    fastEaseInOut: "all",
    "&[data-stuck]": {
      backgroundColor: "pane.bg.translucentBackground",
      borderRadius: "radius12",
      borderWidth: "1px",
      borderColor: "newBorder.neutral",
      shadow: "newL1",
      backdropFilter: "blur(4px)",
      maxWidth: "1016px",
      px: "space16",
    },
  },
});
