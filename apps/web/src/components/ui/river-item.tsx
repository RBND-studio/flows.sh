import { Box } from "@flows/styled-system/jsx";
import { type ReactNode } from "react";
import { Text } from "ui";

import { Section } from "./section";

type Props = {
  title: string;
  description: string;
  visual: ReactNode;
  last?: boolean;
};

export const RiverItem = ({ title, description, visual, last }: Props): ReactNode => {
  return (
    <Section
      display="flex"
      gap={{ base: "space40", md: "space64" }}
      alignItems="center"
      flexDirection={{ base: "column", md: "row" }}
      sideBorders
      bottomBorder
      decorator={last ? "split" : "vertical"}
      px={{ base: "space8", md: "space40" }}
      py="space8"
    >
      <Box
        width="100%"
        md={{
          maxWidth: 464,
        }}
        gap="space12"
        flex="1 0 auto"
        px={{ base: "space16", md: 0 }}
        pt={{ base: "space24", md: 0 }}
      >
        <Text as="h3" mb="space12" variant="title2xl">
          {title}
        </Text>
        <Text color="fg.neutral.muted" variant="bodyL">
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
        outlineColor="border.neutral"
        borderRadius="radius12"
        overflow="hidden"
        shadow="antimetal"
      >
        {visual}
      </Box>
    </Section>
  );
};
