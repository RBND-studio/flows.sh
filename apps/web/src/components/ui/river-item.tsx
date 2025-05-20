import { Box } from "@flows/styled-system/jsx";
import { type ReactNode } from "react";
import { Text } from "ui";

import { Section } from "./section";

type Props = {
  title: string;
  description: string;
  visual: ReactNode;
};

export const RiverItem = ({ title, description, visual }: Props): ReactNode => {
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
          maxWidth: 464,
        }}
        gap="space12"
        flex="1 0 auto"
      >
        <Text as="h3" mb="space12" variant="title2xl">
          {title}
        </Text>
        <Text color="newFg.neutral.muted" variant="bodyL">
          {description}
        </Text>
      </Box>
      <Box
        my={{
          base: 0,
          md: "space40",
        }}
        width="100%"
        height={330}
        outlineStyle="solid"
        outlineWidth="1px"
        outlineColor="newBorder.neutral"
        borderRadius="radius8"
        overflow="hidden"
        shadow="antimetal"
      >
        {visual}
      </Box>
    </Section>
  );
};
