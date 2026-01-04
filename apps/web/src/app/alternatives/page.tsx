import { Flex } from "@flows/styled-system/jsx";
import { CtaBanner } from "components/cta-banner";
import { Section } from "components/ui";
import { getWebMetadata } from "lib/get-metadata";
import type { Metadata } from "next";
import type { ReactElement } from "react";
import { FancyLogo, Text } from "ui";

import { AlternativePreview } from "./alternative-preview";
import { alternativesContent } from "./content";

export const metadata: Metadata = getWebMetadata({
  title: "Compare Flows",
  description:
    "Flows is one of the best product adoption platforms on the market. See how we compare to the competition.",
});

const Page = (): ReactElement => {
  const alternativesCount = alternativesContent.length;
  const sortedAlternatives = alternativesContent.sort((a, b) =>
    a.competitor.name.localeCompare(b.competitor.name),
  );

  return (
    <>
      <Section maxWidth="720px!" mt={{ base: "space40", md: "space80" }}>
        <Flex align="center" justify="center" mb="space24">
          <FancyLogo size={48} />
        </Flex>
        <Text as="h1" variant="title4xl" textAlign="center" mb="space16" maxWidth={600} mx="auto">
          Compare Flows with all other solutions
        </Text>
        <Text textAlign="center" variant="bodyL" color="newFg.neutral.muted" textWrap="balance">
          We’ve compared Flows with {alternativesCount} other solutions. You can view the direct
          comparison to each of them below.
        </Text>
      </Section>
      <Section
        maxWidth="800px!"
        borderWidth={1}
        borderColor="newBorder.neutral.placeholder"
        borderRadius="radius8"
        mt="space40"
        mb="space80"
        md={{ mt: "space80", mb: "space120" }}
        overflow="hidden"
        bg="pane.bg.elevated"
        shadow="antimetal"
      >
        <ul>
          {sortedAlternatives.map((alternative) => (
            <AlternativePreview key={alternative.slug} alternative={alternative} />
          ))}
        </ul>
      </Section>
      <CtaBanner />
    </>
  );
};

export default Page;
