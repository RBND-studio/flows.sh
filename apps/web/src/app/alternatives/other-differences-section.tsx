import { Box, Flex } from "@flows/styled-system/jsx";
import { NewLine, Section, SectionIntro } from "components/ui";
import { Fragment, type ReactNode } from "react";
import { Text } from "ui";

type Props = {
  differences: {
    title: string;
    competitorDescription: string;
    flowsDescription: string;
  }[];
};

export const OtherDifferencesSection = ({ differences }: Props): ReactNode => {
  return (
    <>
      <SectionIntro title="Other differences" />
      <Section>
        <Box mx="auto" maxWidth={680} mt="space80">
          {differences.map((difference, index) => {
            const isLast = index === differences.length - 1;
            return (
              <Fragment key={difference.title}>
                <Text as="h3" variant="titleXl" mb="space24">
                  {difference.title}
                </Text>
                <Text variant="bodyM" color="newFg.neutral.muted" mb="space24">
                  {difference.competitorDescription}
                </Text>
                <Text variant="bodyM" color="newFg.neutral.muted">
                  {difference.flowsDescription}
                </Text>
                {!isLast && (
                  <Flex mx="auto" w="100%" maxWidth={880} my="space48">
                    <Box
                      h="1px"
                      w={{ base: "16px", md: "40px" }}
                      backgroundImage="linear-gradient(270deg, token(colors.newBorder.neutral.placeholder), transparent)"
                    />
                    <NewLine />
                    <Box
                      h="1px"
                      w={{ base: "16px", md: "40px" }}
                      backgroundImage="linear-gradient(90deg, token(colors.newBorder.neutral.placeholder), transparent)"
                    />
                  </Flex>
                )}
              </Fragment>
            );
          })}
        </Box>
      </Section>
    </>
  );
};
