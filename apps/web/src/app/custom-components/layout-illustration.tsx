import { Box, Flex } from "@flows/styled-system/jsx";
import { type JSX } from "react";

export const LayoutIllustration = (): JSX.Element => {
  return (
    <Flex width="100%" gap="space8" height="100%" overflow="hidden" mt="space24" role="img">
      <Box
        flex={1}
        background="newBg.neutral.muted"
        borderWidth="1px"
        borderColor="newBorder.neutral.muted"
        borderBottom={0}
        borderTopRadius="radius6"
        aria-hidden="true"
      />
      <Flex flexDirection="column" flex={1} gap="space8" aria-hidden="true">
        <Box
          flex={1}
          borderWidth="1px"
          borderColor="newBorder.neutral.strong"
          borderStyle="dashed"
          borderRadius="radius6"
          aria-hidden="true"
        />
        <Box
          flex={1}
          background="newBg.neutral.muted"
          borderWidth="1px"
          borderColor="newBorder.neutral.muted"
          borderBottom={0}
          borderTopRadius="radius6"
          aria-hidden="true"
        />
      </Flex>
      <Box
        flex={1}
        background="newBg.neutral.muted"
        borderWidth="1px"
        borderColor="newBorder.neutral.muted"
        borderBottom={0}
        borderTopRadius="radius6"
        aria-hidden="true"
      />
      <Box
        flex={1}
        background="newBg.neutral.muted"
        borderWidth="1px"
        borderColor="newBorder.neutral.muted"
        borderBottom={0}
        borderTopRadius="radius6"
        aria-hidden="true"
      />
      <Box
        flex={1}
        background="newBg.neutral.muted"
        borderWidth="1px"
        borderColor="newBorder.neutral.muted"
        borderBottom={0}
        borderTopRadius="radius6"
        aria-hidden="true"
      />
      <Box
        flex={1}
        background="newBg.neutral.muted"
        borderWidth="1px"
        borderColor="newBorder.neutral.muted"
        borderBottom={0}
        borderTopRadius="radius6"
        aria-hidden="true"
      />
    </Flex>
  );
};
