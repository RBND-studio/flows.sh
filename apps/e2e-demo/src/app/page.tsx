import { FlowsSlot } from "@flows/react";
import { Box, Flex } from "@flows/styled-system/jsx";
import { slots } from "lib/consts";
import type { JSX } from "react";
import { Text } from "ui";

export default function Home(): JSX.Element {
  return (
    <Flex
      flex={2}
      flexDirection="column"
      width="100%"
      height="100%"
      borderWidth="1px"
      borderColor="newBorder.neutral.muted"
      borderRadius="radius8"
      background="pane.bg.main"
      aria-hidden="true"
    >
      <Flex
        alignItems="center"
        width="100%"
        justifyContent="space-between"
        borderBottomWidth="1px"
        borderBottomColor="newBorder.neutral.muted"
        py="6px"
        pl="10px"
        pr="6px"
      >
        <Flex width="100%" alignItems="center" gap="space8">
          <Text variant="titleS">Main</Text>
        </Flex>
        <Flex gap="space8">
          <Box
            height={20}
            width={20}
            backgroundColor="newBg.neutral.subtle"
            borderRadius="radius4"
          />
          <Box
            height={20}
            width={20}
            backgroundColor="newBg.neutral.subtle"
            borderRadius="radius4"
            id="right-corner"
          />
        </Flex>
      </Flex>
      <Flex flexDirection="column" width="100%" height="100%" p="space8">
        <FlowsSlot id={slots.sharedBannerId} />
        <FlowsSlot id={slots.mainBannerId} />
        <Flex height="100%" gap="space8">
          <Box
            width="100%"
            height="100%"
            backgroundColor="newBg.neutral.muted"
            borderRadius="radius4"
            borderWidth="1px"
            borderColor="newBorder.neutral.muted"
            id="column-item"
          />
          <Box
            width="100%"
            height="100%"
            backgroundColor="newBg.neutral.muted"
            borderRadius="radius4"
            borderWidth="1px"
            borderColor="newBorder.neutral.muted"
          />
          <Box
            width="100%"
            height="100%"
            backgroundColor="newBg.neutral.muted"
            borderRadius="radius4"
            borderWidth="1px"
            borderColor="newBorder.neutral.muted"
          />
          <Box
            width="100%"
            height="100%"
            backgroundColor="newBg.neutral.muted"
            borderRadius="radius4"
            borderWidth="1px"
            borderColor="newBorder.neutral.muted"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
