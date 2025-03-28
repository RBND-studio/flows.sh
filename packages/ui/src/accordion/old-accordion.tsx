"use client";

import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { ChevronDown16 } from "icons";
import { type FC, useState } from "react";

import { Icon } from "../icon";
import { Text } from "../text";

type Props = {
  title: React.ReactNode;
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  /**
   * @defaultValue `unmount`
   */
  hideMode?: "unmount" | "css";
};

/**
 * @deprecated Use `Accordion` instead
 */
export const OldAccordion: FC<Props> = ({
  title,
  children,
  onOpenChange,
  open,
  hideMode,
  ...props
}) => {
  // eslint-disable-next-line react/hook-use-state -- useful for controlled components
  const state = useState(false);
  const expanded = open ?? state[0];
  const setExpanded = onOpenChange ?? state[1];
  const toggleExpanded = (): void => setExpanded(!expanded);

  return (
    <Box
      cardWrap="-"
      overflow="hidden"
      {...props}
      borderColor={expanded ? "border.strong" : "border"}
    >
      <Flex
        _hover={{
          bg: "bg.subtleHover",
        }}
        alignItems="center"
        borBottom={expanded ? "1px" : undefined}
        cursor="pointer"
        onClick={toggleExpanded}
        px="space12"
        py="space8"
      >
        <Box flex={1}>
          {typeof title === "string" ? <Text variant="titleM">{title}</Text> : title}
        </Box>

        <Icon
          className={css({
            transitionDuration: "fast",
            transitionTimingFunction: "easeInOut",
            transform: expanded ? "rotate(180deg)" : `rotate(0)`,
          })}
          icon={ChevronDown16}
        />
      </Flex>

      {expanded ? (
        <Box px="space12" py="space16">
          {children}
        </Box>
      ) : hideMode === "css" ? (
        <Box px="space12" py="space16" style={{ display: "none" }}>
          {children}
        </Box>
      ) : null}
    </Box>
  );
};
