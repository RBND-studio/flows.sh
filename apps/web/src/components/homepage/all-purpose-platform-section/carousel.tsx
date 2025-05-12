import { Box, Flex } from "@flows/styled-system/jsx";
import { type EmblaViewportRefType } from "embla-carousel-react";
import { type ReactNode } from "react";
import { Text } from "ui";

type Props = {
  emblaRef: EmblaViewportRefType;
  slides: {
    title: string;
    description: string;
    viz: ReactNode;
  }[];
};

export const Carousel = ({ slides, emblaRef }: Props): ReactNode => {
  return (
    <Box
      md={{
        mx: "space16",
      }}
      my="space32"
      ref={emblaRef}
    >
      <Flex touchAction="pan-y" md={{}} marginLeft="-24px">
        {slides.map((item) => (
          <Box
            key={item.title}
            minWidth={0}
            flex="0 0 90%"
            md={{
              flex: "0 0 33.334%",
            }}
            paddingLeft="space24"
          >
            <Box
              bg="pane.bg.elevated"
              borderWidth={1}
              borderColor="newBorder.neutral.placeholder"
              borderRadius="radius12"
              userSelect="none"
              shadow="antimetal"
            >
              {item.viz}
              <Box
                p="space16"
                md={{
                  p: "space24",
                }}
              >
                <Text mb="space12" variant="titleL">
                  {item.title}
                </Text>
                <Text variant="bodyM" color="newFg.neutral.muted">
                  {item.description}
                </Text>
              </Box>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
