"use client";

import { css, cva } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { SmartLink } from "components/ui";
import { ChevronDown16 } from "icons";
import { usePathname } from "next/navigation";
import type { ReactElement } from "react";
import { useState } from "react";
import { Icon, Text } from "ui";

import { type MenuItemProps, menuItems } from "./menu-items";

export const DesktopMenu = (): ReactElement => {
  const pathName = usePathname();
  const path = `/${pathName.split("/").slice(1, 2)[0]}`;

  return (
    <ul
      className={css({
        sm: { display: "flex", gap: "space8" },
        display: "none",
      })}
    >
      {menuItems.map((item) => (
        <li key={item.title}>
          <MainMenuItem item={item} path={path} />
        </li>
      ))}
    </ul>
  );
};

type MainMenuItemProps = {
  item: MenuItemProps;
  path: string;
};

const MainMenuItem = ({ item, path }: MainMenuItemProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  const Component = item.href ? SmartLink : "button";

  const MenuItemComp = (
    <Component
      href={item.href as unknown as string}
      onMouseEnter={item.subItems ? () => setIsOpen(true) : undefined}
      className={css({
        display: "flex",
        py: "space4",
        px: "space8",
        fastEaseInOut: "all",
        borderRadius: "radius4",
        backgroundColor: path === item.href ? "newBg.neutral.subtle" : "transparent",
        alignItems: "center",
        gap: "space4",
        zIndex: 1,
        cursor: "pointer",
        _hover: {
          backgroundColor: "newBg.neutral.subtle",
        },
      })}
    >
      <Text variant="bodyS" weight="700">
        {item.title}
      </Text>
      {item.subItems ? <Icon icon={ChevronDown16} className={iconClass({ open: isOpen })} /> : null}
    </Component>
  );

  if (item.subItems) {
    return (
      <Flex position="relative">
        {MenuItemComp}
        <Box
          // Prevents mouseEvent getting to the close layer between the menu and the subItems
          position="absolute"
          top="100%"
          height={4}
          width="100%"
          zIndex={1}
          display={isOpen ? "block" : "none"}
        />
        <Box
          position="absolute"
          padding="space8"
          borderWidth="1px"
          borderColor="pane.border.elevated"
          backgroundColor="pane.bg.elevated"
          top="calc(100% + 4px)"
          borderRadius="radius12"
          shadow="newL2"
          zIndex={1}
          animation="bottomSlideIn 0.3s ease-out"
          width="max-content"
          display={isOpen ? "block" : "none"}
        >
          {item.subItems(() => setIsOpen(false))}
        </Box>
        <Box
          position="fixed"
          top="0"
          left="0"
          right="0"
          bottom="0"
          onClick={() => setIsOpen(false)}
          onMouseEnter={() => setIsOpen(false)}
          display={isOpen ? "block" : "none"}
        />
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
