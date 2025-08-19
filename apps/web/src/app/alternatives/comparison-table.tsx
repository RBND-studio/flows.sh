import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { NewLine, Section } from "components/ui";
import { Check16, Question16 } from "icons";
import { type ReactNode } from "react";
import { Icon, Logo, Text, Tooltip } from "ui";

export type ComparisonProps = {
  title: string;
  hint?: string;
  competitor: boolean | string;
  flows: boolean | string;
};

type Props = {
  sectionTitle: ReactNode;
  competitorName: string;
  competitorLogo: ReactNode;
  comparisons: ComparisonProps[];
};

export const ComparisonTable = ({
  sectionTitle,
  competitorName,
  competitorLogo,
  comparisons,
}: Props): ReactNode => {
  return (
    <Section mt="space80" mb="space80">
      <Box mx={{ base: 0, md: "space16" }}>
        <Text as="h2" variant="title3xl">
          {sectionTitle}
        </Text>
        <Flex flexDirection="column" w="100%">
          <Flex
            w="100%"
            alignItems="flex-end"
            gap={{ base: "space12", md: "space16" }}
            py="space16"
          >
            <Text variant="titleS" color="newFg.neutral.muted" flex={1}>
              Key features
            </Text>
            <Flex flex={1} gap={{ base: "space4", md: "space16" }}>
              <CompanyEmblem name={competitorName} logo={competitorLogo} />
              <CompanyEmblem name="Flows" logo={<Logo size={20} type="pill" />} />
            </Flex>
          </Flex>
          <Flex w="100%" mx={{ base: 0, md: "-space24" }}>
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
        </Flex>
        {comparisons.map((comparison) => {
          const tableValue = (value: boolean | string): ReactNode => {
            if (value === true) {
              return (
                <Box bg="newBg.primary" p="space2" borderRadius="50%">
                  <Icon color="newFg.neutral.onPrimary" icon={Check16} />
                </Box>
              );
            }
            if (value === false) {
              return (
                <Text variant="bodyM" color="newFg.neutral.subtle">
                  –
                </Text>
              );
            }
            return (
              <Text variant="bodyS" align="center" textWrap="balance" color="newFg.neutral">
                {value}
              </Text>
            );
          };

          return (
            <Flex key={comparison.title} flexDirection="column" w="100%">
              <Flex
                w="100%"
                alignItems="center"
                gap={{ base: "space12", md: "space16" }}
                py="space16"
              >
                <Flex gap="space4" alignItems="center" flex={1}>
                  <p className={css({ lineHeight: "20px" })}>
                    <Text as="span" variant="bodyM" mr="space8">
                      {comparison.title}
                    </Text>

                    {comparison.hint ? (
                      <Tooltip
                        supportMobileTap
                        trigger={
                          <span
                            role="tooltip"
                            className={css({
                              display: "inline-block",
                              verticalAlign: "baseline",
                              mb: "-2px",
                            })}
                          >
                            <Icon icon={Question16} color="newFg.neutral.subtle" />
                          </span>
                        }
                        content={comparison.hint}
                      />
                    ) : null}
                  </p>
                </Flex>
                <Flex flex={1} gap={{ base: "space8", md: "space16" }}>
                  <Flex flex={1} justifyContent="center" alignItems="center">
                    {tableValue(comparison.competitor)}
                  </Flex>
                  <Flex flex={1} justifyContent="center" alignItems="center">
                    {tableValue(comparison.flows)}
                  </Flex>
                </Flex>
              </Flex>
              <Flex w="100%" mx={{ base: 0, md: "-space24" }}>
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
            </Flex>
          );
        })}
      </Box>
    </Section>
  );
};

const CompanyEmblem = ({ name, logo }: { name: string; logo: ReactNode }): ReactNode => {
  return (
    <Flex flex={1} gap="space12" flexDirection="column" alignItems="center" justifyContent="center">
      <Box
        p="space8"
        borderRadius="50%"
        bg="newBg.neutral"
        borderWidth="1px"
        borderColor="newBorder.neutral.placeholder"
        shadow="antimetal"
      >
        {logo}
      </Box>
      <Text variant="titleM">{name}</Text>
    </Flex>
  );
};
