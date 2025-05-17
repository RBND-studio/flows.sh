import { Box, Flex } from "@flows/styled-system/jsx";
import { Book16, Hat16, Slack16 } from "icons";
import { type ReactNode } from "react";
import { Icon, Text } from "ui";

export const EmbeddableComponentsIllustrations = (): ReactNode => {
  return (
    <Box
      h="100%"
      overflow="hidden"
      width="100%"
      p="space24"
      role="img"
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
      <Text variant="titleM" mb="space8" aria-hidden="true">
        Home
      </Text>
      <Banner />
      <Table />
    </Box>
  );
};

const Table = (): ReactNode => {
  return (
    <Flex
      borderWidth="1px"
      borderColor="newBorder.neutral"
      borderRadius="6px"
      flexDirection="column"
      mt="space8"
      aria-hidden="true"
    >
      {[
        { main: 130, secondary: 55, tertiary: 28, quaternary: 38 },
        { main: 145, secondary: 42, tertiary: 24, quaternary: 35 },
        { main: 110, secondary: 48, tertiary: 30, quaternary: 40 },
        { main: 155, secondary: 58, tertiary: 22, quaternary: 32 },
        { main: 120, secondary: 45, tertiary: 26, quaternary: 36 },
        { main: 135, secondary: 52, tertiary: 31, quaternary: 41 },
        { main: 150, secondary: 50, tertiary: 25, quaternary: 33 },
        { main: 140, secondary: 47, tertiary: 29, quaternary: 37 },
        { main: 160, secondary: 60, tertiary: 23, quaternary: 34 },
      ].map((row, index) => (
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
              width="100%"
              backgroundColor="newBg.neutral.strong"
              borderRadius="radius4"
              style={{
                maxWidth: `${row.main}px`,
              }}
            />
          </Box>
          <Box flex={1}>
            <Box
              height={10}
              width="100%"
              backgroundColor="newBg.neutral.strong"
              borderRadius="radius4"
              style={{
                maxWidth: `${row.secondary}px`,
              }}
            />
          </Box>
          <Box flex={1}>
            <Box
              height={10}
              width="100%"
              backgroundColor="newBg.neutral.strong"
              borderRadius="radius4"
              style={{
                maxWidth: `${row.tertiary}px`,
              }}
            />
          </Box>
          <Box flex={1}>
            <Box
              height={10}
              width="100%"
              backgroundColor="newBg.neutral.strong"
              borderRadius="radius4"
              style={{
                maxWidth: `${row.quaternary}px`,
              }}
            />
          </Box>
        </Flex>
      ))}
    </Flex>
  );
};

const Cards = [
  {
    title: "Getting started",
    description: "Follow these steps to get started.",
    icon: (
      <Box
        p="space4"
        bg="blockIcon.component.bg"
        color="blockIcon.component.fg"
        borderRadius="radius4"
      >
        <Icon color="inherit" icon={Hat16} />
      </Box>
    ),
  },
  {
    title: "Check docs",
    description: "Detailed information and guides.",
    icon: (
      <Box p="space4" bg="blockIcon.start.bg" color="blockIcon.start.fg" borderRadius="radius4">
        <Icon color="inherit" icon={Book16} />
      </Box>
    ),
  },
  {
    title: "Join community",
    description: "Join our community to connect with others.",
    icon: (
      <Box p="space4" bg="blockIcon.logic.bg" color="blockIcon.logic.fg" borderRadius="radius4">
        <Icon color="inherit" icon={Slack16} />
      </Box>
    ),
  },
];

const Banner = (): ReactNode => {
  return (
    <Box position="relative" aria-hidden="true">
      <Box position="absolute" w="100%" h="94">
        <Box
          w="100%"
          h="100%"
          position="absolute"
          borderRadius="radius6"
          borderWidth="1px"
          borderColor="newBorder.neutral.strong"
          borderStyle="dashed"
          animationName="embeddableSlotKeyframes"
          animationTimingFunction="ease-in-out"
          animationIterationCount="infinite"
          animationDuration="10s"
          opacity={0}
        />
        <Flex
          position="absolute"
          gap="space8"
          animationName="embeddableElementsKeyframes"
          animationTimingFunction="ease-in-out"
          animationIterationCount="infinite"
          animationDuration="10s"
          opacity={0}
        >
          {Cards.map((card) => (
            <Flex
              key={card.title}
              flexDirection="column"
              h={94}
              p="space8"
              borderRadius="radius6"
              borderWidth="1px"
              borderColor="newBorder.neutral"
              w="100%"
              alignItems="flex-start"
              overflow="hidden"
              _last={{
                display: "none",
              }}
              md={{
                _last: {
                  display: "flex",
                },
              }}
            >
              {card.icon}
              <Text variant="titleS" mt="space4">
                {card.title}
              </Text>
              <Text variant="bodyXxs" color="newFg.neutral.muted" mt="space2">
                {card.description}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Box>
      <Box
        animationName="embeddableBoxKeyframes"
        animationTimingFunction="ease-in-out"
        animationIterationCount="infinite"
        animationDuration="10s"
        maxHeight={94}
      />
    </Box>
  );
};
