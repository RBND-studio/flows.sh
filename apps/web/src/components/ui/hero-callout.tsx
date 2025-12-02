import { css, cx } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { ArrowRight16 } from "icons";
import { type Route } from "next";
import Link from "next/link";
import { type FC } from "react";
import { Icon, Text } from "ui";

type Props = {
  title: string;
  link: Route;
  delay?: number;
};

export const HeroCallout: FC<Props> = ({ title, link, delay }) => {
  const animationDelay = delay ? `${delay}s` : "0s";

  const isExternal = link.startsWith("http");

  const Component = isExternal ? "a" : Link;

  return (
    <Component
      href={link}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cx(
        css({
          position: "relative",
          display: "flex",
          paddingX: "space16",
          paddingY: "space6",
          backgroundColor: "dataViz.blue.fg",
          borderRadius: "radius24",
          alignItems: "center",
          gap: "space8",
          margin: "0 auto",
          borderWidth: 1,
          borderColor: { base: "rgba(255, 255, 255, 0.25)", _dark: "rgba(255, 255, 255, 0.1)" },
          opacity: 0,
          animation: "topSlideIn 0.6s ease-out",
          animationDelay,
          animationFillMode: "forwards",
          fastEaseInOut: "all",
          shadow: "antimetal",
          overflow: "hidden",
          _hover: {
            shadow: "l2",
          },
        }),
        "group",
      )}
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="linear-gradient(-135deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 25%, rgba(255, 255, 255, 0.9) 40%, rgba(255, 255, 255, 0.4) 55%, rgba(255, 255, 255, 0) 100%)"
        opacity={{ base: 0.4, _dark: 0.3 }}
        fastEaseInOut="all"
        _groupHover={{
          transform: "scale(1.25) translateX(8px)",
        }}
      />
      <Flex alignItems="center" gap="space8" position="relative" zIndex={1}>
        <Text fontWeight={600} color="neutral.0">
          {title}
        </Text>
        <Icon
          icon={ArrowRight16}
          color="neutral.0"
          className={css({
            fastEaseInOut: "all",
            _groupHover: {
              transform: "translateX(2px)",
            },
          })}
        />
      </Flex>
    </Component>
  );
};
