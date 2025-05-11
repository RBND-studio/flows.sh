"use client";

import { css, cva } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { SmartLink } from "components/ui";
import { ChevronDown16 } from "icons";
import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Icon, Text } from "ui";

import { type MenuItemProps, menuItems } from "./menu-items";

export const DesktopMenu = (): ReactElement => {
  return (
    <ul
      className={css({
        sm: { display: "flex", gap: "space8" },
        display: "none",
      })}
    >
      {menuItems.map((item) => (
        <li key={item.title}>
          <MainMenuItem item={item} />
        </li>
      ))}
    </ul>
  );
};

type MainMenuItemProps = {
  item: MenuItemProps;
};

const MainMenuItem = ({ item }: MainMenuItemProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Handle client-side mounting for the portal
  useEffect(() => {
    setMounted(true);
  }, []);

  const Component = item.href ? SmartLink : "button";

  const MenuItemComp = (
    <Component
      href={item.href as unknown as string}
      onMouseEnter={item.subItems ? () => setIsOpen(true) : undefined}
      className={css({
        display: "flex",
        py: "space6",
        px: "space8",
        fastEaseInOut: "all",
        borderRadius: "radius8",
        color: "newFg.neutral.muted",
        alignItems: "center",
        gap: "space4",
        zIndex: 1,
        cursor: "pointer",
        _hover: {
          color: "newFg.neutral",
          backgroundColor: "special.translucentHover",
        },
      })}
    >
      <Text variant="bodyS" color="inherit" weight="700">
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
          height={12}
          width="100%"
          zIndex={1}
          display={isOpen ? "block" : "none"}
        />
        <Box
          position="absolute"
          padding="space4"
          borderWidth="1px"
          borderColor="newBorder.neutral.placeholder"
          background="special.glassMorph"
          backdropFilter="blur(4px)"
          top="calc(100% + 12px)"
          borderRadius="radius12"
          zIndex={1}
          animation="bottomSlideIn 0.3s ease-out"
          width="max-content"
          display={isOpen ? "block" : "none"}
        >
          <Box
            borderWidth="1px"
            borderColor="pane.border.elevated"
            backgroundColor="pane.bg.elevated"
            padding="space8"
            borderRadius="radius8"
          >
            {item.subItems(() => setIsOpen(false))}
          </Box>
        </Box>

        {/* Render overlay with portal to escape stacking context */}
        {mounted && isOpen
          ? createPortal(
              <Box
                position="fixed"
                top="0"
                left="0"
                right="0"
                bottom="0"
                onClick={() => setIsOpen(false)}
                onMouseEnter={() => setIsOpen(false)}
              />,
              document.body,
            )
          : null}
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
