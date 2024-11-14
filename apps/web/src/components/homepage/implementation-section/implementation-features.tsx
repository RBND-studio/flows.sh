import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { PlaceholderModal, PlaceholderTable, PlaceholderTooltip, Section } from "components/ui";
import { Text } from "ui";

export const ImplementationFeatures = (): JSX.Element => {
  return (
    <Section
      display="flex"
      gap="space40"
      pt="space48"
      pb="space48"
      flexDirection="column"
      md={{ flexDirection: "row", pt: "space96", pb: "space96" }}
    >
      <Box width="100%">
        <Text mb="space12" variant="titleXl">
          Inline components
        </Text>
        <Text mb="space32" color="muted" variant="bodyL">
          Render inline components directly within your app’s UI using Slots as anchors.
        </Text>
        <Box
          borderColor="newBorder.neutral"
          borderWidth="1px"
          overflow="hidden"
          width="100%"
          height="288px"
          borderRadius={6}
          position="relative"
          background="pane.bg.secondary"
          role="img"
        >
          <Box
            position="absolute"
            bottom={0}
            left={0}
            height={48}
            background="linear-gradient(0deg, token(colors.pane.bg.secondary), transparent)"
            width="100%"
            aria-hidden="true"
          />
          <PlaceholderTable />
        </Box>
      </Box>
      <Box width="100%">
        <Text mb="space12" variant="titleXl">
          Floating components
        </Text>
        <Text mb="space32" color="muted" variant="bodyL">
          Show tooltips, modals, and banners anywhere in your app to guide users.
        </Text>
        <Flex
          alignItems="center"
          justifyContent="center"
          borderColor="newBorder.neutral"
          borderWidth="1px"
          layerStyle="dotBackground"
          width="100%"
          height="288px"
          borderRadius={6}
          p="space12"
          gap="space24"
          role="img"
        >
          <PlaceholderTooltip
            title="Click here"
            description="Tooltips are great for guiding users through a process."
          />

          <PlaceholderModal
            title="New feature announcement"
            description="Modals are better for catching attention or more information."
            className={css({
              display: "none",
              md: { display: "flex" },
            })}
          />
        </Flex>
      </Box>
    </Section>
  );
};
