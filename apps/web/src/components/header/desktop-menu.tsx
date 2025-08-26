import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import { ChevronDown16 } from "icons";
import Link from "next/link";
import { type ReactElement, type ReactNode } from "react";
import { Icon, Text } from "ui";

import { type MenuItemProps, menuItems } from "./menu-items";

export const DesktopMenu = (): ReactElement => {
  return (
    <NavigationMenu
      className={css({
        sm: { display: "block" },
        display: "none",
      })}
    >
      <NavigationMenuList
        className={css({
          display: "flex",
          gap: { base: "space4", md: "space8" },
        })}
      >
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <Item item={item} />
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

type ItemProps = {
  item: MenuItemProps;
};

const Item = ({ item }: ItemProps): ReactNode => {
  if (item.href) {
    return (
      <NavigationMenuLink asChild>
        <Link className={MainItemCss} href={item.href}>
          <Text variant="bodyS" color="inherit" weight="700" as="span">
            {item.title}
          </Text>
        </Link>
      </NavigationMenuLink>
    );
  }
  if (item.subItems) {
    return (
      <>
        <NavigationMenuTrigger className={MainItemCss}>
          <Text variant="bodyS" color="inherit" weight="700" as="span">
            {item.title}
          </Text>
          <Icon
            aria-hidden="true"
            icon={ChevronDown16}
            className={css({
              fastEaseInOut: "all",
            })}
          />
        </NavigationMenuTrigger>
        {/* TODO: note for redesign - explore smooth overlaping animations like radix has in their example  */}
        <NavigationMenuContent asChild>
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
          >
            <Box
              borderWidth="1px"
              borderColor="pane.border.elevated"
              backgroundColor="pane.bg.elevated"
              padding="space8"
              borderRadius="radius8"
            >
              <ul>
                {item.subItems.map((subItem) => (
                  <li key={subItem.title}>
                    <NavigationMenuLink asChild>
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
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </Box>
          </Box>
        </NavigationMenuContent>
      </>
    );
  }
};

const MainItemCss = css({
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
  "&[data-state=open] > svg": {
    transform: "rotate(180deg)",
  },
});
