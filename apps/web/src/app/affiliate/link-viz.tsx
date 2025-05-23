import { Box, Flex } from "@flows/styled-system/jsx";
import { Copy16 } from "icons";
import { type ReactNode } from "react";
import { Icon, Text } from "ui";

export const LinkViz = (): ReactNode => {
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
        pb="space80"
        bg="pane.bg"
      >
        <Text variant="titleS">Refer and earn</Text>
        <Text variant="bodyXs" color="newFg.neutral.muted" mb="space24">
          Share your unique link with your audience and earn rewards for every successful referral.
        </Text>
        <Text variant="titleXs">Referral link</Text>
        <Flex
          px="space12"
          py="space8"
          borderRadius="radius6"
          borderWidth={1}
          borderColor="newBorder.neutral"
          flex={1}
          gap="space8"
          justifyContent="space-between"
        >
          <Text variant="bodyXs">flows.sh/QxSLhd</Text>
          <Icon icon={Copy16} color="newFg.neutral.muted" />
        </Flex>
      </Flex>
    </Box>
  );
};
