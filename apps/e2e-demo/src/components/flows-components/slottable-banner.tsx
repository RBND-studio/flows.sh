"use client";

import { Flex } from "@flows/styled-system/jsx";
import { Button, Text } from "ui";

type Props = {
  title: string;
  body: string;
  continueText: string;
  complete?: () => void;
  cancel?: () => void;
};

export const SlotableBanner = ({
  title,
  body,
  continueText,
  complete,
  cancel,
}: Props): React.ReactNode => {
  return (
    <Flex
      p="space8"
      borderWidth={1}
      borderColor="newBorder.neutral.strong"
      borderRadius={6}
      justifyContent="space-between"
      alignItems="center"
      mb="space8"
      backgroundColor="newBg.neutral.subtle"
    >
      <Flex flexDirection="column">
        <Text variant="titleS" as="h2">
          {title}
        </Text>
        <Text>{body}</Text>
      </Flex>
      <Flex gap="space8">
        <Button size="small" onClick={complete}>
          {continueText}
        </Button>
        {cancel ? (
          <Button variant="secondary" size="small" onClick={cancel}>
            Cancel
          </Button>
        ) : null}
      </Flex>
    </Flex>
  );
};
