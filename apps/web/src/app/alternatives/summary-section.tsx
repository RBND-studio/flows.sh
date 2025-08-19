import { Box } from "@flows/styled-system/jsx";
import { Section } from "components/ui";
import { type ReactNode } from "react";
import { Text } from "ui";

type Props = {
  competitorContent: ReactNode;
  flowsContent: ReactNode;
};

export const SummarySection = ({ competitorContent, flowsContent }: Props): ReactNode => {
  return (
    <Section>
      <Box
        p="space8"
        borderWidth={1}
        borderColor="newBorder.neutral.placeholder"
        borderRadius="20px"
        mx="auto"
        maxWidth={800}
      >
        <Box
          py={{ base: "space24", md: "space40" }}
          px={{ base: "space24", md: "space48" }}
          borderWidth={1}
          borderColor="newBorder.neutral"
          borderRadius="radius12"
          bg="newBg.neutral.subtle"
        >
          <Text variant="titleXl" mb={{ base: "space16", md: "space24" }} as="h2">
            TL;DR comparison summary
          </Text>
          <Text variant="bodyM" mb="space24" color="newFg.neutral.muted">
            {competitorContent}
          </Text>
          <Text variant="bodyM" color="newFg.neutral.muted">
            {flowsContent}
          </Text>
        </Box>
      </Box>
    </Section>
  );
};
