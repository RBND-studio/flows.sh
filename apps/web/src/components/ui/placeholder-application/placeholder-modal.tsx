import { Box, Flex } from "@flows/styled-system/jsx";
import { Button, Text } from "ui";

export const PlaceholderModal = (): JSX.Element => {
  return (
    <Flex
      flexDirection="column"
      p="space16"
      borderRadius="radius8"
      borderColor="newBorder.neutral"
      borderWidth="1px"
      backgroundColor="pane.bg.elevated"
      shadow="newL2"
      gap="space12"
      alignItems="center"
    >
      <Box width="100%" borderRadius="6px" height={100} backgroundColor="newFg.neutral.muted" />
      <Text align="center" variant="titleS">
        New feature announcement
      </Text>
      <Text align="center" variant="bodyXs">
        Lorem ipsum dolor sit amet. Some more text here to be written
      </Text>
      <Button type="button" variant="primary" size="small">
        Continue
      </Button>
    </Flex>
  );
};
