import { Box, Flex } from "@flows/styled-system/jsx";
import { Section } from "components/ui/section";
import { SectionIntro } from "components/ui/section-intro";
import { Fragment, type ReactNode } from "react";
import { Text } from "ui";

export type OtherDifferencesSectionType = {
  differences: {
    title: string;
    competitorDescription: string;
    flowsDescription: string;
  }[];
};

export const OtherDifferencesSection = ({
  differences,
}: OtherDifferencesSectionType): ReactNode => {
  return (
    <>
      <SectionIntro title="Other differences" />
      <Section bottomBorder pb="space40">
        <Box mx="auto" maxWidth={680}>
          {differences.map((difference, index) => {
            const isLast = index === differences.length - 1;
            return (
              <Fragment key={difference.title}>
                <Text as="h3" variant="titleXl" mb="space24">
                  {difference.title}
                </Text>
                <Text variant="bodyM" color="fg.neutral.muted" mb="space24">
                  {difference.competitorDescription}
                </Text>
                <Text variant="bodyM" color="fg.neutral.muted">
                  {difference.flowsDescription}
                </Text>
                {!isLast ? (
                  <Flex mx="auto" w="100%" maxWidth={880} my="space48">
                    <Box
                      h="1px"
                      w={{ base: "16px", md: "40px" }}
                      backgroundImage="linear-gradient(270deg, token(colors.border.neutral.placeholder), transparent)"
                    />
                    <Box flexGrow={1} h="1px" backgroundColor="border.neutral.placeholder" />
                    <Box
                      h="1px"
                      w={{ base: "16px", md: "40px" }}
                      backgroundImage="linear-gradient(90deg, token(colors.border.neutral.placeholder), transparent)"
                    />
                  </Flex>
                ) : (
                  <Box h={{ base: 40, md: 80 }} />
                )}
              </Fragment>
            );
          })}
        </Box>
      </Section>
    </>
  );
};
