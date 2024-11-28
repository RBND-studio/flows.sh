import { Box, Flex } from "@flows/styled-system/jsx";
import { Text } from "ui";

export const PlaceholderTable = (): JSX.Element => {
  return (
    <Flex p="space16" gap="space12" flexDirection="column" aria-hidden="true">
      <Text variant="titleM">Home</Text>
      <Banner />
      <Table />
    </Flex>
  );
};

const Banner = (): JSX.Element => {
  return (
    <Flex
      p="space8"
      borderWidth="1px"
      alignItems="center"
      borderColor="newBorder.primary"
      borderRadius="6px"
      gap="space8"
      shadow="focus"
      backgroundColor="pane.bg.elevated"
    >
      <Box
        borderRadius="6px"
        width="100%"
        maxWidth={72}
        height={40}
        backgroundColor="newFg.neutral.muted"
      />
      <Flex flexDirection="column" gap="2px">
        <Text variant="titleS">Announcing Instant sync</Text>
        <Text variant="bodyXs">With instant sync, you can now sync your data in real-time.</Text>
      </Flex>
    </Flex>
  );
};

const Table = (): JSX.Element => {
  return (
    <Flex
      borderWidth="1px"
      borderColor="newBorder.neutral"
      borderRadius="6px"
      flexDirection="column"
    >
      {[...Array(7)].map((_, index) => (
        <Flex
          // eslint-disable-next-line react/no-array-index-key -- no better key
          key={index}
          p="space8"
          gap="space8"
          borderBottomWidth="1px"
          borderBottomColor="newBorder.neutral"
          _last={{ borderBottomWidth: 0 }}
        >
          <Box flex={2}>
            <Box
              height={10}
              maxWidth={140}
              width="100%"
              backgroundColor="newBg.neutral.strong"
              borderRadius="radius4"
            />
          </Box>
          <Box flex={1}>
            <Box
              height={10}
              maxWidth={46}
              width="100%"
              backgroundColor="newBg.neutral.strong"
              borderRadius="radius4"
            />
          </Box>
          <Box flex={1}>
            <Box
              height={10}
              maxWidth={32}
              width="100%"
              backgroundColor="newBg.neutral.strong"
              borderRadius="radius4"
            />
          </Box>{" "}
          <Box flex={1}>
            <Box
              height={10}
              maxWidth={42}
              width="100%"
              backgroundColor="newBg.neutral.strong"
              borderRadius="radius4"
            />
          </Box>
        </Flex>
      ))}
    </Flex>
  );
};
