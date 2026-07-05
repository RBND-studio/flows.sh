"use client";

import { css, cva } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { ChevronDown16, Menu16 } from "icons";
import Link from "next/link";
import { type ReactNode, useCallback, useState } from "react";
import { FancyIcon, Icon, IconButton, Text } from "ui";

import { type MenuItemProps, menuItems } from "./menu-items";
import { SmartLink } from "components/ui/smart-link";

export const MobileMenu = (): ReactNode => {
  const [open, setOpen] = useState(false);
  const toggleOpen = useCallback((): void => setOpen((p) => !p), []);
  const handleClose = useCallback((): void => setOpen(false), []);

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
      <MobileMenuPanel handleClose={handleClose} open={open} />
    </>
  );
};

type PanelProps = {
  open: boolean;
  handleClose: () => void;
};

const MobileMenuPanel = ({ open, handleClose }: PanelProps): ReactNode => {
  return (
    <Box
      display={open ? undefined : "none"}
      position="fixed"
      top={66}
      bottom={24}
      w="calc(100% - 32px)"
      left={16}
      right={16}
      overflow="hidden"
    >
      <Box
        backgroundColor="bg.neutral"
        py="space12"
        px="space16"
        overflowY="auto"
        h="100%"
        sm={{ display: "none" }}
        width="100%"
        borderRadius="radius12"
        borderWidth="1px"
        borderColor="border.neutral.placeholder"
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
                  gap: "space12",
                  borderRadius: "radius8",
                  alignItems: "center",
                  pl: "space8",
                  pr: "space12",
                  py: "space8",
                  fastEaseInOut: "all",
                  _hover: { backgroundColor: "bg.neutral.subtle" },
                })}
                key={subItem.title}
                onClick={handleSubItemClick}
              >
                {subItem.fancyIcon && (
                  <FancyIcon
                    color={subItem.fancyIcon.color}
                    className={css({
                      width: "40px",
                      height: "40px",
                      flexShrink: 0,
                      borderRadius: "radius8!",
                    })}
                  >
                    <Icon icon={subItem.fancyIcon.icon} color="inherit" />
                  </FancyIcon>
                )}

                {subItem.icon && (
                  <Flex
                    p="space12"
                    borderRadius="radius8"
                    borderWidth="1px"
                    borderColor="border.neutral"
                    backgroundColor="bg.neutral"
                  >
                    <Icon icon={subItem.icon} />
                  </Flex>
                )}
                <Flex flexDirection="column" gap="space2">
                  <Text variant="bodyS" weight="700">
                    {subItem.title}
                  </Text>
                  <Text color="fg.neutral.muted">{subItem.description}</Text>
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
