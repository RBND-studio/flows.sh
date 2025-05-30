import { Box } from "@flows/styled-system/jsx";
import { type FC } from "react";

type Props = {
  className?: string;
  value: number;
  max: number;
};

export const Progress: FC<Props> = ({ max, value, className }) => {
  const width = (value / max) * 100 || 0;

  return (
    <Box
      position="relative"
      height="8px"
      overflow="hidden"
      className={className}
      borderRadius="100px"
      bg="newBg.neutral.subtle"
    >
      <Box
        position="absolute"
        style={{ width: `${width}%` }}
        left={0}
        top={0}
        height="100%"
        maxW="100%"
        bg="dataViz.blue.fg"
      />
    </Box>
  );
};
