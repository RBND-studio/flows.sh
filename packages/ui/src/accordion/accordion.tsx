"use client";

import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { ChevronDown16 } from "icons";
import { type CSSProperties, type FC, type Ref, useState } from "react";

import { Icon } from "../icon";
import { Text } from "../text";

type Props = {
  title: React.ReactNode;
  headerClassName?: string;
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  /**
   * @defaultValue `unmount`
   */
  hideMode?: "unmount" | "css";
  ref?: Ref<HTMLDivElement>;
  style?: CSSProperties;
};

export const Accordion: FC<Props> = ({
  title,
  children,
  onOpenChange,
  open,
  hideMode,
  headerClassName,
  ...props
}) => {
  // eslint-disable-next-line react/hook-use-state -- useful for controlled components
  const state = useState(false);
  const expanded = open ?? state[0];
  const setExpanded = onOpenChange ?? state[1];
  const toggleExpanded = (): void => setExpanded(!expanded);

  return (
    <Box overflow="hidden" {...props}>
      <Flex
        className={headerClassName}
        fastEaseInOut="background-color"
        _hover={{
          bg: "newBg.neutral.muted",
        }}
        alignItems="center"
        borderBottomWidth={expanded ? "1px" : undefined}
        borderBottomColor="newBorder.neutral"
        cursor="pointer"
        onClick={toggleExpanded}
        px="space12"
        py="space8"
      >
        <Box flex={1} overflow="hidden">
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
        <Box>{children}</Box>
      ) : hideMode === "css" ? (
        <Box style={{ display: "none" }}>{children}</Box>
      ) : null}
    </Box>
  );
};
