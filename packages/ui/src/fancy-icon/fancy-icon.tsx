import { cva, cx } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { type ReactNode } from "react";

type FancyIconProps = {
  color?: "blue" | "red" | "green" | "purple";
  children: ReactNode;
  className?: string;
};

export const FancyIcon = ({ children, color, className }: FancyIconProps): ReactNode => {
  return (
    <Flex
      borderRadius="radius8"
      position="relative"
      overflow="hidden"
      shadow="antimetal"
      width="40px"
      height="40px"
      justifyContent="center"
      alignItems="center"
      borderWidth="1px"
      borderColor={{ base: "rgba(255, 255, 255, 0.25)", _dark: "rgba(255, 255, 255, 0.1)" }}
      className={cx(iconColor({ bg: color }), className)}
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="linear-gradient(-135deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 25%, rgba(255, 255, 255, 0.9) 40%, rgba(255, 255, 255, 0.4) 55%, rgba(255, 255, 255, 0) 100%)"
        opacity={{ base: 0.6, _dark: 0.4 }}
      />
      <Box position="relative" zIndex={2} color="inherit">
        {children}
      </Box>
    </Flex>
  );
};

const iconColor = cva({
  base: {
    backgroundColor: "neutral.850",
    color: "neutral.0",
  },
  variants: {
    bg: {
      blue: { backgroundColor: "dataViz.blue.fg" },
      red: { backgroundColor: "newFg.danger" },
      green: { backgroundColor: "dataViz.green.fg" },
      purple: { backgroundColor: "dataViz.purple.fg" },
    },
  },
});
