import { css, cx } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { type EmblaViewportRefType } from "embla-carousel-react";
import { type Route } from "next";
import Link from "next/link";
import { type ReactNode } from "react";
import { Text } from "ui";

type Props = {
  emblaRef: EmblaViewportRefType;
  slides: {
    title: string;
    description: string;
    viz: ReactNode;
    linkUrl: Route;
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
      <Flex touchAction="pan-y" md={{}} marginLeft="-24px" alignItems="stretch">
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
            <Link
              href={item.linkUrl}
              aria-label={`View solution for ${item.title}`}
              className={cx(
                css({
                  display: "flex",
                  bg: "pane.bg.elevated",
                  borderWidth: "1px",
                  borderColor: "newBorder.neutral.placeholder",
                  borderRadius: "radius12",
                  shadow: "antimetal",
                  userSelect: "none",
                  height: "100%",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  fastEaseInOut: "all",
                  _hover: {
                    borderColor: "newBorder.neutral.strong",
                  },
                }),
                "group",
              )}
            >
              {item.viz}
              <Box
                p="space16"
                md={{
                  p: "space24",
                }}
              >
                <Text
                  mb="space12"
                  variant="titleL"
                  fastEaseInOut="color"
                  _groupHover={{
                    color: "newFg.primary",
                  }}
                >
                  {item.title}
                </Text>
                <Text mb="space8" variant="bodyM" color="newFg.neutral.muted">
                  {item.description}
                </Text>
              </Box>
            </Link>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
