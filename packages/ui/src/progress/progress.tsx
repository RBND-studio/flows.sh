import { Box } from "@flows/styled-system/jsx";
import type { SystemStyleObject } from "@flows/styled-system/types";
import { type FC } from "react";

type Props = {
  className?: string;
  /** Style overrides, merged with the component's own styles so they win without `!` */
  css?: SystemStyleObject;
  value: number;
  max: number;
};

export const Progress: FC<Props> = ({ max, value, className, css: cssProp }) => {
  const width = (value / max) * 100 || 0;

  return (
    <Box
      position="relative"
      height="8px"
      overflow="hidden"
      className={className}
      css={cssProp}
      borderRadius="100px"
      bg="bg.neutral.subtle"
    >
      <Box
        position="absolute"
        style={{ width: `${width}%` }}
        left={0}
        top={0}
        height="100%"
        maxW="100%"
        bg="dataViz.blue.fg"
        fastEaseInOut="width"
      />
    </Box>
  );
};
