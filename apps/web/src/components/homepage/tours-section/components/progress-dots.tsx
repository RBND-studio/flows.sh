import { Box, Flex } from "@flows/styled-system/jsx";

type Props = {
  count: number;
  active: number;
  justify?: "center" | "flex-start";
};

export const ProgressDots = ({ count, active, justify = "flex-start" }: Props) => (
  <Flex gap="space6" alignItems="center" justifyContent={justify}>
    {Array.from({ length: count }).map((_, i) => (
      <Box
        key={i}
        w="10px"
        h="10px"
        borderRadius="radius100"
        flexShrink={0}
        bg={i === active ? "button.black.bg.rest" : "bg.neutral.strong"}
      />
    ))}
  </Flex>
);
