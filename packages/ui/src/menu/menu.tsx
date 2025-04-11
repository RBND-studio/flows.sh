import { css, cx } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { Slot } from "@radix-ui/react-slot";
import type { ComponentProps, FC, ReactNode } from "react";
import { forwardRef } from "react";

import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from "../popover";
import { Separator } from "../separator";

type Props = {
  trigger: ReactNode;
  children?: ReactNode;
  align?: ComponentProps<typeof PopoverContent>["align"];
  open?: boolean;
};

export const Menu: FC<Props> = ({ trigger, children, align, open }) => {
  return (
    <Popover open={open}>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent align={align ?? "start"}>
        <Flex flexDir="column" justifyContent="center" minW="240px" p="6px">
          {children}
        </Flex>
      </PopoverContent>
    </Popover>
  );
};

type MenuItemProps = {
  children?: ReactNode;
  asChild?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  active?: boolean;
  /**
   * @defaultValue true
   */
  closeOnClick?: boolean;
};
export const MenuItem: FC<MenuItemProps> = forwardRef<HTMLButtonElement, MenuItemProps>(
  function MenuItem(
    { children, asChild, disabled, className, closeOnClick, active, ...props },
    ref,
  ) {
    const Component = asChild ? Slot : "button";

    const component = (
      <Component
        ref={ref}
        data-highlighted={active ? "" : undefined}
        {...props}
        className={cx(
          css({
            display: "flex",
            alignItems: "center",
            gap: "space8",
            py: "6px",
            px: "6px",
            my: "1px",
            borderRadius: "5px",
            cursor: disabled ? "default" : "pointer",
            width: "100%",
            fastEaseInOut: "all",
            textStyle: "bodyS",
            color: disabled ? "text.disabled" : undefined,

            _highlighted: {
              bg: "newBg.primary.subtle",
              _hover: {
                bg: "newBg.primary.subtle",
              },
            },
            _hover: {
              bg: disabled ? "transparent" : "newBg.neutral.subtle",
            },
            "& svg": {
              color: disabled ? "text.disabled" : undefined,
            },
          }),

          className,
        )}
      >
        {children}
      </Component>
    );

    if (!closeOnClick) return component;

    return <PopoverClose asChild>{component}</PopoverClose>;
  },
);

export const MenuSeparator: FC<{ className?: string }> = ({ className }) => {
  return <Separator className={cx(css({ mx: "-6px", w: "auto", my: "6px" }), className)} />;
};
