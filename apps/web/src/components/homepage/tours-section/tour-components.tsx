import { Box, Flex } from "@flows/styled-system/jsx";
import { Tooltip16 } from "icons";
import { Text } from "ui";

import { css } from "@flows/styled-system/css";
import { TooltipDemo } from "./components/tooltip-demo";
import { ModalDemo } from "./components/modal-demo";
import { HintDemo } from "./components/hint-demo";
import { CardDemo } from "./components/card-demo";
import { FloatingChecklistDemo } from "./components/floating-checklist-demo";
import { FeatureBento } from "components/feature-bento/feature-bento";

const components = [
  {
    title: "Tooltip",
    component: <TooltipDemo />,
  },
  {
    title: "Modal",
    component: <ModalDemo />,
  },
  {
    title: "Hint",
    component: <HintDemo />,
  },
  {
    title: "Card",
    component: <CardDemo />,
  },
  {
    title: "Checklist",
    component: <FloatingChecklistDemo />,
  },
];

export const TourComponents = () => {
  return (
    <>
      <FeatureBento
        icon={Tooltip16}
        title="Batteries included"
        description="Pixel perfect, production ready components at your fingertips. Use them out of the box or customize them to fit your product."
        headingLevel="h3"
        visualWrapperClassName={css({
          height: { base: 284, md: 334, lg: 384 },
          maxHeight: "unset",
        })}
        visual={
          <Box
            flex={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
            pointerEvents="none"
            role="img"
            aria-label="Rotating carousel of components including a tooltip, modal, hint, card, and checklist"
          >
            <Box
              position="absolute"
              bottom={{ base: -2175, md: -2125, lg: -2075 }}
              aria-hidden="true"
              zIndex={1}
            >
              <Box
                position="relative"
                className={css({ animation: "quarterRotate 30s linear infinite" })}
                transformOrigin="center center"
                h={2400}
                w={2400}
              >
                {[...components, ...components].map(({ title, component }, index) => {
                  const angle = (index / (components.length * 2)) * 180 - 120;
                  return (
                    <Flex
                      flexDirection="column"
                      alignItems="center"
                      key={index}
                      position="absolute"
                      style={{ transform: ` rotate(${angle}deg) ` }}
                      height={2400}
                      width={800}
                      left="33.333333%"
                    >
                      <Flex flexDirection="column" w={280}>
                        <Text variant="titleM" fontFamily="caveat" mb="space4">
                          {title}
                        </Text>
                        {component}
                      </Flex>
                    </Flex>
                  );
                })}
              </Box>
            </Box>
            <Box
              aria-hidden="true"
              background={{ base: "#000", _dark: "#fff" }}
              width="100%"
              borderRadius="100%"
              height={400}
              filter="blur(60px)"
              opacity={{ base: 0.15, _dark: 0.3 }}
              position="absolute"
              bottom={-400}
              left="50%"
              transform="translateX(-50%)"
            />
            <Box
              aria-hidden="true"
              w="100%"
              h={400}
              bottom={-300}
              mixBlendMode="overlay"
              opacity={{ base: 1, _dark: 1 }}
              // cspell:disable-next-line
              backgroundImage={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`}
              position="absolute"
              maskImage="radial-gradient(ellipse at center, black 0%, transparent 70%)"
            />
          </Box>
        }
      />
    </>
  );
};
