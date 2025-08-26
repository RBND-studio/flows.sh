import { Box, Flex } from "@flows/styled-system/jsx";
import { PlaceholderModal, PlaceholderTooltip } from "components/ui";
import { type JSX } from "react";

export const ComponentsIllustration = (): JSX.Element => {
  return (
    <Box position="relative" width="100%" height="100%" mt="space32">
      <Box position="absolute" left={0} bottom={0} transform="rotate(-25deg)">
        <PlaceholderTooltip
          title="Learn more here"
          description="This is a tooltip that gives information."
          showProgress={false}
        />
      </Box>
      <Flex justifyContent="center" position="absolute" w="100%">
        <PlaceholderModal
          title="New feature announcement"
          description="Modals are better for catching attention or more information."
        />
      </Flex>
      <Flex
        position="absolute"
        right={0}
        bottom={-32}
        transform="rotate(25deg)"
        flexDirection="column"
        alignItems="center"
        role="img"
      >
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
    </Box>
  );
};
