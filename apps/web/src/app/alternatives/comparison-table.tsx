import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { Section } from "components/ui";
import { Check16, Close16 } from "icons";
import { type ReactNode } from "react";
import { Icon, Logo, Text } from "ui";

export type ComparisonProps = {
  title: string;
  description?: string;
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
    <Section mt="space120" mb="space80">
      <Box mx="auto" maxWidth={800}>
        <Text as="h2" variant="title2xl">
          {sectionTitle}
        </Text>
        <table>
          <thead
            className={css({
              borderBottomWidth: "1px",
              borderBottomColor: "newBorder.neutral.placeholder",
              w: "100%",
            })}
          >
            <tr>
              <th
                className={css({
                  w: "50%",
                  p: "space16",
                  verticalAlign: "bottom",
                })}
              >
                <Text variant="titleS" color="newFg.neutral.muted" flex={1}>
                  Key features
                </Text>
              </th>
              <th
                className={css({
                  w: "25%",
                  p: "space16",
                })}
              >
                <CompanyEmblem name={competitorName} logo={competitorLogo} />
              </th>
              <th
                className={css({
                  w: "25%",
                  p: "space16",
                })}
              >
                <CompanyEmblem name="Flows" logo={<Logo size={20} type="pill" />} />
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisons.map((comparison) => {
              const tableValue = (value: boolean | string): ReactNode => {
                if (value === true) {
                  return (
                    <Box
                      bg="newBg.success.muted"
                      p="space2"
                      borderRadius="50%"
                      borderWidth="1px"
                      borderColor="newBorder.success.subtle"
                      w="fit-content"
                      mx="auto"
                      aria-label="Yes"
                    >
                      <Icon color="newFg.success" icon={Check16} />
                    </Box>
                  );
                }
                if (value === false) {
                  return (
                    <Box
                      bg="newBg.danger.muted"
                      p="space2"
                      borderRadius="50%"
                      borderWidth="1px"
                      borderColor="newBorder.danger.subtle"
                      w="fit-content"
                      mx="auto"
                      aria-label="No"
                    >
                      <Icon color="newFg.danger" icon={Close16} />
                    </Box>
                  );
                }
                return (
                  <Text variant="bodyS" align="center" textWrap="balance" color="newFg.neutral">
                    {value}
                  </Text>
                );
              };

              return (
                <tr
                  key={comparison.title}
                  className={css({
                    w: "100%",
                    borderBottomWidth: "1px",
                    borderBottomColor: "newBorder.neutral.placeholder",
                  })}
                >
                  <td className={css({ w: "50%", p: "space16" })}>
                    <Text as="h3" variant="titleM">
                      {comparison.title}
                    </Text>
                    {comparison.description ? (
                      <Text variant="bodyS" color="newFg.neutral.muted" mt="space2">
                        {comparison.description}
                      </Text>
                    ) : null}
                  </td>

                  <td className={css({ w: "25%", p: "space16" })}>
                    {tableValue(comparison.competitor)}
                  </td>
                  <td className={css({ w: "25%", p: "space16" })}>
                    {tableValue(comparison.flows)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
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
        color="newFg.neutral"
      >
        {logo}
      </Box>
      <Text variant="titleM" whiteSpace="nowrap">
        {name}
      </Text>
    </Flex>
  );
};
