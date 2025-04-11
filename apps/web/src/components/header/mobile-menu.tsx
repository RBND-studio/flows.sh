"use client";

import { css, cva } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { SmartLink } from "components/ui";
import { ChevronDown16, Menu16 } from "icons";
import { usePathname } from "next/navigation";
import { type FC, type ReactNode, useState } from "react";
import { Icon, IconButton, Text } from "ui";

import { type MenuItemProps, menuItems } from "./menu-items";

export const MobileMenu: FC = () => {
  const pathName = usePathname();
  const path = `/${pathName.split("/").slice(1, 2)[0]}`;
  const [open, setOpen] = useState(false);
  const toggleOpen = (): void => setOpen((p) => !p);
  const handleClose = (): void => setOpen(false);

  return (
    <>
      {/* eslint-disable-next-line no-restricted-syntax -- hamburger menu */}
      <IconButton
        className={css({ sm: { display: "none" }, px: "8px" })}
        onClick={toggleOpen}
        variant="ghost"
      >
        <Menu16 />
        <span className={css({ srOnly: true })}>Open main menu</span>
      </IconButton>
      <Box
        backgroundColor="newBg.neutral"
        borBottom="1px"
        display={open ? undefined : "none"}
        left={0}
        pb="space12"
        position="fixed"
        pt="space4"
        px="space16"
        sm={{ display: "none" }}
        top="49px"
        width="100%"
      >
        <ul className={css({ display: "flex", flexDir: "column" })}>
          {menuItems.map((item) => (
            <li key={item.title}>
              <MobileMainMenuItem item={item} path={path} handleClose={handleClose} />
            </li>
          ))}
        </ul>
      </Box>
    </>
  );
};

type MainMenuItemProps = {
  item: MenuItemProps;
  path: string;
  handleClose: () => void;
};

const MobileMainMenuItem = ({ item, path, handleClose }: MainMenuItemProps): ReactNode => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSubItemClick = (): void => {
    setIsOpen(false);
    handleClose();
  };

  const Component = item.href ? SmartLink : "button";

  const MenuItemComp = (
    <Component
      href={item.href as unknown as string}
      onClick={item.subItems ? () => setIsOpen(!isOpen) : handleClose}
      className={css({
        display: "flex",
        justifyContent: "space-between",
        borderRadius: "radius6",
        backgroundColor: path === item.href ? "newBg.neutral.subtle" : "transparent",
        alignItems: "center",
        py: "space12",
        px: "space8",
      })}
    >
      <Text variant="bodyM" weight="700">
        {item.title}
      </Text>
      {item.subItems ? <Icon icon={ChevronDown16} className={iconClass({ open: isOpen })} /> : null}
    </Component>
  );

  if (item.subItems) {
    return (
      <Flex flexDirection="column">
        {MenuItemComp}
        <Box mb="space16" display={isOpen ? "block" : "none"}>
          {item.subItems(handleSubItemClick)}
        </Box>
      </Flex>
    );
  }

  return MenuItemComp;
};

const iconClass = cva({
  base: {
    fastEaseInOut: "all",
  },
  variants: {
    open: {
      true: {
        transform: "rotate(180deg)",
      },
    },
  },
});
