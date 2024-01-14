import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { ChevronDown16 } from "icons";
import { type FC, useState } from "react";

import { Icon } from "../icon";
import { Text } from "../text";

type Props = {
  title: React.ReactNode;
  children?: React.ReactNode;
};

export const Accordion: FC<Props> = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = (): void => setExpanded((prev) => !prev);

  return (
    <Box cardWrap="-" overflow="hidden">
      <Flex
        alignItems="center"
        borBottom={expanded ? "1px" : undefined}
        cursor="pointer"
        onClick={toggleExpanded}
        px="space12"
        py="space8"
      >
        <Box flex={1}>
          <Text variant="titleM">{title}</Text>
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
      ) : null}
    </Box>
  );
};
