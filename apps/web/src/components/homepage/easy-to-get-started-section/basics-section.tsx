import { css } from "@flows/styled-system/css";
import { Box, Flex, Grid } from "@flows/styled-system/jsx";
import { PlaceholderModal, PlaceholderTooltip } from "components/ui";
import { QuestionMark16 } from "icons";
import { type ReactNode } from "react";
import { Icon, Text } from "ui";

const cards = [
  {
    title: "Tooltip",
    description: "Guide users exactly where they need to go.",
    element: (
      <Flex flexDirection="column" alignItems="center" role="img">
        <Flex
          alignItems="center"
          justifyContent="center"
          height={20}
          width={20}
          backgroundColor="newBg.neutral"
          borderWidth="1px"
          borderRadius="100%"
          borderColor="newBorder.primary"
          shadow="focus"
          aria-hidden="true"
        >
          <Icon icon={QuestionMark16} color="newFg.primary" />
        </Flex>
        <Box width={176} pt="space8" right={0} md={{ right: "unset" }}>
          <PlaceholderTooltip
            title="Learn more here"
            description="This is a tooltip that gives information."
            showProgress={false}
          />
        </Box>
      </Flex>
    ),
  },
  {
    title: "Hint",
    description: "Pulsating orb that draws attention to an element.",
    element: (
      <Flex flexDirection="column" alignItems="center" role="img">
        <Box
          mt="space4"
          backgroundColor="newBg.primary"
          borderRadius="50%"
          aria-hidden="true"
          width={16}
          height={16}
          position="relative"
          _after={{
            content: '""',
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            borderRadius: "50%",
            backgroundColor: "newBg.primary",
            animation: "ping 1.5s infinite",
          }}
        >
          <Box width={14} height={14} backgroundColor="newBg.primary" borderRadius="100%" />
        </Box>
        <Box width={176} pt="space12" right={0} md={{ right: "unset" }}>
          <PlaceholderTooltip
            title="New feature: Issues"
            description="This is a hint that pulsates to draw attention."
            buttonLabel="Learn more"
            showProgress={false}
          />
        </Box>
      </Flex>
    ),
  },
  {
    title: "Modal",
    description: "Catch attention to announce important information.",
    element: (
      <Flex justifyContent="center" alignItems="center" role="img">
        <Box aria-hidden="true">
          <PlaceholderModal
            title="New feature announcement"
            description="Modals are better for catching attention or more information."
          />
        </Box>
      </Flex>
    ),
  },
  {
    title: "Multi-step tour",
    description: "Guide users step-by-step through your product.",
    element: (
      <Box w="100%" position="relative" role="img">
        <Box aria-hidden="true" position="relative">
          <PlaceholderTooltip
            title="Get started"
            description="Start by creating your first issue in the project."
            className={css({
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: 0,
              zIndex: 3,
            })}
          />

          <PlaceholderTooltip
            title="Get started"
            description="Start by creating your first issue in the project."
            className={css({
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%) scale(0.8)",
              top: "30px",
              zIndex: 2,
              opacity: 0.8,
            })}
          />
          <PlaceholderTooltip
            title="Get started"
            description="Start by creating your first issue in the project."
            className={css({
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%) scale(0.6)",
              top: "55px",
              zIndex: 1,
              opacity: 0.6,
            })}
          />
        </Box>
      </Box>
    ),
  },
];

export const BasicsSection = (): ReactNode => {
  return (
    <Flex
      flexDirection="column"
      md={{
        mx: "space16",
        p: "space16",
        borderRadius: "28px",
      }}
      p="space8"
      borderWidth={1}
      borderColor="newBorder.neutral.placeholder"
      borderRadius="20px"
      mt="space16"
    >
      <Flex
        flexDirection="column"
        borderWidth={1}
        borderColor="newBorder.neutral"
        borderRadius="radius12"
        bg="newBg.neutral.subtle"
        px="space20"
        pt="space20"
        overflow="hidden"
        md={{
          px: "space24",
          pt: "space24",
        }}
      >
        <Text as="h3" mb="space12" variant="titleL">
          Everything you need out of the box
        </Text>
        <Text variant="bodyM" color="newFg.neutral.muted">
          Industry proven formfactors at your fingertips. <br />
          Ready to be customized to feel native to your product.
        </Text>
        <Grid
          mt={{
            base: "space16",
            md: "space24",
            lg: "space32",
          }}
          gap="space16"
          mb="-28px"
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
        >
          {cards.map((item) => (
            <Box
              key={item.title}
              p="space16"
              borderWidth={1}
              borderColor="newBorder.neutral.placeholder"
              borderRadius="radius12"
              bg="linear-gradient(180deg, token(colors.newBg.neutral) 20%, token(colors.newBg.neutral.muted) 80%)"
              h={280}
              w="100%"
              shadow="l2"
              fastEaseInOut="all"
              overflow="hidden"
              _hover={{
                md: {
                  transform: "translateY(-16px)",
                },
              }}
            >
              <Text mb="space8" as="h4" variant="titleM">
                {item.title}
              </Text>
              <Text variant="bodyM" color="newFg.neutral.muted" mb="space16">
                {item.description}
              </Text>
              {item.element}
            </Box>
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
};
