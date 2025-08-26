"use client";

import { css, cva } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { SmartLink } from "components/ui";
import { ChevronDown16 } from "icons";
import Link from "next/link";
import { type FC, type ReactNode, useState } from "react";
import { Icon, Text } from "ui";

import { type MenuItemProps, menuItems } from "./menu-items";

type Props = {
  open: boolean;
  handleClose: () => void;
};

export const MobileMenu: FC<Props> = ({ open, handleClose }): ReactNode => {
  return (
    <Box
      backgroundColor="newBg.neutral"
      display={open ? undefined : "none"}
      position="absolute"
      py="space12"
      px="space16"
      sm={{ display: "none" }}
      top="66px"
      width="calc(100% - 48px)"
      borderRadius="radius12"
      borderWidth="1px"
      borderColor="newBorder.neutral.placeholder"
      shadow="newL1"
    >
      <ul className={css({ display: "flex", flexDir: "column" })}>
        {menuItems.map((item) => (
          <li key={item.title}>
            <MobileMainMenuItem item={item} handleClose={handleClose} />
          </li>
        ))}
      </ul>
    </Box>
  );
};

type MainMenuItemProps = {
  item: MenuItemProps;
  handleClose: () => void;
};

const MobileMainMenuItem = ({ item, handleClose }: MainMenuItemProps): ReactNode => {
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
          <Flex gap="space4" direction="column">
            {item.subItems.map((subItem) => (
              <Link
                href={subItem.href}
                className={css({
                  display: "flex",
                  gap: "space8",
                  borderRadius: "radius8",
                  alignItems: "center",
                  pl: "space8",
                  pr: "space12",
                  py: "space8",
                  fastEaseInOut: "all",
                  _hover: { backgroundColor: "newBg.neutral.subtle" },
                })}
                key={subItem.title}
                onClick={handleSubItemClick}
              >
                <Flex
                  p="space12"
                  borderRadius="radius6"
                  borderWidth="1px"
                  borderColor="newBorder.neutral"
                  backgroundColor="newBg.neutral"
                >
                  <Icon icon={subItem.icon} />
                </Flex>
                <Flex flexDirection="column" gap="space2">
                  <Text variant="bodyS" weight="700">
                    {subItem.title}
                  </Text>
                  <Text color="newFg.neutral.muted">{subItem.description}</Text>
                </Flex>
              </Link>
            ))}
          </Flex>
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
