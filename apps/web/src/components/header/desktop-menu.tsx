"use client";

import { NavigationMenu } from "@base-ui/react/navigation-menu";
import { css } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { ChevronDown16 } from "icons";
import Link from "next/link";
import { type ReactElement, type ReactNode } from "react";
import { FancyIcon, Icon, Text } from "ui";

import { type MenuItemProps, menuItems } from "./menu-items";

export const DesktopMenu = (): ReactElement => {
  return (
    <NavigationMenu.Root
      className={css({
        sm: { display: "block" },
        display: "none",
      })}
    >
      <NavigationMenu.List
        className={css({
          display: "flex",
          gap: { base: "space4", md: "space8" },
        })}
      >
        {menuItems.map((item) => (
          <NavigationMenu.Item key={item.title} value={item.title}>
            <Item item={item} />
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>

      <NavigationMenu.Portal>
        <NavigationMenu.Positioner
          className={positionerCss}
          collisionPadding={{ top: 8, bottom: 8, left: 24, right: 24 }}
          sideOffset={12}
        >
          <NavigationMenu.Popup className={popupCss}>
            <NavigationMenu.Viewport className={viewportCss} />
          </NavigationMenu.Popup>
        </NavigationMenu.Positioner>
      </NavigationMenu.Portal>
    </NavigationMenu.Root>
  );
};

type ItemProps = {
  item: MenuItemProps;
};

const Item = ({ item }: ItemProps): ReactNode => {
  if (item.href) {
    // oxlint-disable-next-line anchor-has-content, control-has-associated-label -- Base UI render prop, content comes from NavigationMenu.Link children
    const link = item.href.startsWith("http") ? <a href={item.href} /> : <Link href={item.href} />;
    return (
      <NavigationMenu.Link className={mainItemCss} closeOnClick render={link}>
        <Text variant="bodyS" color="inherit" weight="700" as="span">
          {item.title}
        </Text>
      </NavigationMenu.Link>
    );
  }
  if (item.subItems) {
    return (
      <>
        <NavigationMenu.Trigger className={mainItemCss}>
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
        </NavigationMenu.Trigger>
        <NavigationMenu.Content className={contentCss}>
          <ul>
            {item.subItems.map((subItem) => (
              <li key={subItem.title}>
                <NavigationMenu.Link
                  closeOnClick
                  render={<Link href={subItem.href} />}
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
                </NavigationMenu.Link>
              </li>
            ))}
          </ul>
        </NavigationMenu.Content>
      </>
    );
  }
};

const mainItemCss = css({
  display: "flex",
  py: "space6",
  px: "space8",
  fastEaseInOut: "all",
  borderRadius: "radius8",
  color: "fg.neutral.muted",
  alignItems: "center",
  gap: "space4",
  zIndex: 1,
  cursor: "pointer",
  _hover: {
    color: "fg.neutral",
    backgroundColor: "special.translucentHover",
  },
  "&[data-popup-open]": {
    color: "fg.neutral",
    backgroundColor: "special.translucentHover",
  },
  "&[data-popup-open] > svg": {
    transform: "rotate(180deg)",
  },
});

const positionerCss = css({
  boxSizing: "border-box",
  zIndex: 1000,
  width: "var(--positioner-width)",
  height: "var(--positioner-height)",
  maxWidth: "var(--available-width)",
  transitionProperty: "top, left, right, bottom",
  transitionDuration: "0.35s",
  transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
  "&[data-instant]": {
    transition: "none",
  },
});

const popupCss = css({
  position: "relative",
  boxSizing: "border-box",
  width: "var(--popup-width)",
  height: "var(--popup-height)",
  borderWidth: "1px",
  borderColor: "border.neutral",
  background: "pane.bg.elevated",
  borderBottomRadius: "radius12",
  shadow: "antimetal",
  transformOrigin: "var(--transform-origin)",
  transitionProperty: "opacity, transform, width, height",
  transitionDuration: "0.35s",
  transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
  "&[data-starting-style], &[data-ending-style]": {
    opacity: 0,
    transform: "scale(0.9)",
  },
});

const viewportCss = css({
  position: "relative",
  width: "100%",
  height: "100%",
  overflow: "hidden",
});

const contentCss = css({
  boxSizing: "border-box",
  width: "max-content",
  height: "100%",
  padding: "space8",
  transitionProperty: "opacity, transform",
  transitionDuration: "0.35s",
  transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
  "&[data-starting-style], &[data-ending-style]": {
    opacity: 0,
  },
  "&[data-starting-style][data-activation-direction='left']": {
    transform: "translateX(-50%)",
  },
  "&[data-starting-style][data-activation-direction='right']": {
    transform: "translateX(50%)",
  },
  "&[data-ending-style][data-activation-direction='left']": {
    transform: "translateX(50%)",
  },
  "&[data-ending-style][data-activation-direction='right']": {
    transform: "translateX(-50%)",
  },
});
