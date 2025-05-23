import { Box, Divider, Flex } from "@flows/styled-system/jsx";
import { Google16 } from "icons";
import { type ReactNode } from "react";
import { Text } from "ui";

export const ApplyViz = (): ReactNode => {
  return (
    <Box
      h={240}
      maxW={320}
      mx="auto"
      overflow="hidden"
      role="img"
      w="100%"
      pt="space24"
      bg="pane.bg.elevated"
      borderTopRadius="radius12"
      position="relative"
      maskImage="linear-gradient(
               rgb(0, 0, 0) 70%,
               rgba(0, 0, 0, 0.886) 76.6%,
               rgba(0, 0, 0, 0.733) 81.4%, 
               rgba(0, 0, 0, 0.557) 85.3%,
               rgba(0, 0, 0, 0.376) 88.3%,
               rgba(0, 0, 0, 0.21) 91%, 
               rgba(0, 0, 0, 0.082) 94%, 
               rgba(0, 0, 0, 0.01) 97.6%,
               rgba(0, 0, 0, 0) 100%)"
    >
      <Flex
        w="100%"
        p="space16"
        borderRadius="radius8"
        borderWidth="1px"
        borderColor="newBorder.neutral"
        shadow="l2"
        flexDirection="column"
        gap="space8"
        bg="pane.bg"
      >
        <Text variant="titleS">Sign up</Text>

        <Flex
          gap="space4"
          alignItems="center"
          justifyContent="center"
          px="space12"
          py="space8"
          borderRadius="radius6"
          borderWidth={1}
          borderColor="newBorder.neutral"
          flex={1}
        >
          <Google16 />
          <Text variant="titleXs">Google</Text>
        </Flex>

        <Flex alignItems="center" gap="space8">
          <Divider borderColor="newBorder.neutral.muted" />

          <Text color="newFg.neutral.subtle">Or</Text>
          <Divider borderColor="newBorder.neutral.muted" />
        </Flex>
        <Box
          px="space12"
          py="space8"
          borderRadius="radius6"
          borderWidth={1}
          borderColor="newBorder.neutral"
          flex={1}
        >
          <Text variant="bodyXs" color="newFg.neutral.muted">
            Email
          </Text>
        </Box>
        <Box
          px="space12"
          py="space8"
          borderRadius="radius6"
          borderWidth={1}
          borderColor="newBorder.neutral"
          flex={1}
        >
          <Text variant="bodyXs" color="newFg.neutral.muted">
            Password
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
