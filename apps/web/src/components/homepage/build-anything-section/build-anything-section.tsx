import { css } from "@flows/styled-system/css";
import { token } from "@flows/styled-system/tokens";
import { Text } from "ui";
import { Box, Flex } from "@flows/styled-system/jsx";
import { Decorator } from "components/ui/section/decorator";
import { ExamplesCarousel } from "./examples-carousel";

export const BuildAnythingSection = () => {
  return (
    <>
      <Box
        w="100%"
        px="space24"
        position="relative"
        pt="space72"
        pb="space80"
        backgroundImage={`radial-gradient(circle, ${token("colors.special.dotBg")} 1px, transparent 1px)`}
        backgroundSize="8px 8px"
        backgroundRepeat="repeat"
        backgroundPosition="top"
        bg="pane.bg.secondary"
      >
        <Text as="h2" variant="title3xl" align="center" color="fg.neutral.subtle" mb="space64">
          Build <span className={css({ color: "fg.neutral", fontWeight: 800 })}>anything</span> with
          Flows
        </Text>
        <ExamplesCarousel />
        {/* Edge fade overlays instead of maskImage — a mask on the section forces
            the whole subtree to re-composite every frame of the carousel animation */}
        <Box
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          width="15%"
          pointerEvents="none"
          zIndex={1}
          backgroundImage={`linear-gradient(to right, ${token("colors.pane.bg.web")}, transparent)`}
          display={{ base: "none", md: "block" }}
        />
        <Box
          position="absolute"
          top={0}
          bottom={0}
          right={0}
          width="15%"
          pointerEvents="none"
          zIndex={1}
          backgroundImage={`linear-gradient(to left, ${token("colors.pane.bg.web")}, transparent)`}
          display={{ base: "none", md: "block" }}
        />
      </Box>

      <Flex
        justifyContent="space-between"
        h={1}
        alignItems="center"
        pointerEvents="none"
        zIndex={1}
        position="relative"
      >
        <Box width="100%" height="1px" backgroundColor="border.neutral" />
        <Flex
          justifyContent="space-between"
          position="absolute"
          bottom={0}
          left={-16}
          right={-16}
          pointerEvents="none"
          zIndex={1}
          h={0}
          alignItems="center"
          maxWidth={1112}
          width="calc(100% - 16px)"
          marginX="auto"
        >
          <Decorator type="horizontal-flipped-no-line" />
          <Decorator
            type="horizontal-flipped-no-line"
            className={css({ transform: "scaleX(-1)" })}
          />
        </Flex>
      </Flex>
    </>
  );
};
