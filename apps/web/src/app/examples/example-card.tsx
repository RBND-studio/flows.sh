import { css } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { ThemeImage } from "components/theme-image";
import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import { type ReactNode } from "react";
import { Text } from "ui";

type Props = {
  title: string;
  description: string;
  href: string;
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  lightImage: string | StaticImport;
  darkImage: string | StaticImport;
  alt: string;
};

export const ExampleCard = ({
  title,
  description,
  href,
  headingLevel,
  lightImage,
  darkImage,
  alt,
}: Props): ReactNode => {
  return (
    <Link
      href={href}
      className={css({
        shadow: "newL1",
        borderRadius: "radius8",
        borderWidth: "1px",
        borderColor: "pane.border.elevated",
        backgroundColor: "pane.bg.elevated",
        fastEaseInOut: "all",
        overflow: "hidden",

        _hover: {
          shadow: "newL2",
          borderColor: "newBorder.neutral.strong",
        },
      })}
    >
      <Flex p="space16" gap="space4" flexDirection="column">
        {/* TODO: fix lineheight for titleM in general when we deprecate Flows 1.0 */}
        <Text lineHeight="20px" variant="titleM" as={headingLevel}>
          {title}
        </Text>
        <Text textWrap="balance" variant="bodyXs" color="muted">
          {description}
        </Text>
      </Flex>
      <Flex overflow="hidden" px="space16" pb="space16">
        <Flex
          overflow="hidden"
          borderWidth="1px"
          borderColor="newBorder.neutral"
          borderRadius="radius6"
        >
          <ThemeImage
            srcLight={lightImage}
            srcDark={darkImage}
            width={600}
            height={384}
            alt={alt}
          />
        </Flex>
      </Flex>
    </Link>
  );
};
