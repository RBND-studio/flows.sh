import { cva } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { type ReactNode } from "react";
import { Text } from "ui";

import { Section } from "./section";

type Props = {
  title: string;
  description: string;
  visual: ReactNode;
  first?: boolean;
  last?: boolean;
};

export const RiverItem = ({ title, description, visual, first, last }: Props): ReactNode => {
  return (
    <Section
      display="flex"
      gap="space40"
      alignItems="center"
      flexDirection="column"
      mb="space64"
      md={{ flexDirection: "row", gap: "space64", mb: "0" }}
    >
      <Box
        width="100%"
        md={{
          maxWidth: 376,
        }}
        gap="space12"
      >
        <Text as="h3" mb="space12" variant="title2xl">
          {title}
        </Text>
        <Text variant="bodyL">{description}</Text>
      </Box>
      <Flex
        width="100%"
        position="relative"
        className={wrapClass({ first, last })}
        md={{
          layerStyle: "dotBackground",
          borderLeftWidth: "1px",
          borderLeftColor: "newBorder.neutral",
          borderRightWidth: "1px",
          borderRightColor: "newBorder.neutral",
          py: "space40",
        }}
      >
        <Flex
          width="100%"
          height={330}
          outlineStyle="solid"
          outlineWidth="1px"
          outlineColor="newBorder.neutral"
          borderRadius="radius8"
          overflow="hidden"
          shadow="solid"
        >
          {visual}
        </Flex>
      </Flex>
    </Section>
  );
};

const wrapClass = cva({
  base: {},
  variants: {
    first: {
      true: {
        _after: {
          content: '""',
          display: "none",
          md: { display: "block" },
          position: "absolute",
          top: 0,
          right: -1,
          left: -1,
          height: 40,
          zIndex: 1,
          backgroundImage:
            "linear-gradient(180deg, token(colors.newBg.neutral) 0%, transparent 100%)",
        },
      },
    },
    last: {
      true: {
        _after: {
          content: '""',
          display: "none",
          md: { display: "block" },
          position: "absolute",
          bottom: 0,
          right: -1,
          left: -1,
          height: 40,
          zIndex: 1,
          backgroundImage:
            "linear-gradient(0deg, token(colors.newBg.neutral) 0%, transparent 100%)",
        },
      },
    },
  },
});
