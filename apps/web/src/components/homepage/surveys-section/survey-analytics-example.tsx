import { Box, Flex } from "@flows/styled-system/jsx";
import { token } from "@flows/styled-system/tokens";
import { Select16 } from "icons";
import type { JSX } from "react";
import { Icon, Text } from "ui";

const data = [
  {
    label: "Excellent",
    percentage: 70,
    color: token("colors.dataViz.purple.fg"),
  },
  {
    label: "Good",
    percentage: 100,
    color: token("colors.dataViz.brick.fg"),
  },
  {
    label: "Fair",
    percentage: 30,
    color: token("colors.dataViz.teal.fg"),
  },
  {
    label: "Poor",
    percentage: 10,
    color: token("colors.dataViz.yellow.fg"),
  },
];

export const SurveyAnalyticsExample = (): JSX.Element => {
  return (
    <Flex
      flexDirection="column"
      w="100%"
      p="space20"
      borderWidth={1}
      borderBottomWidth={0}
      borderColor="border.neutral"
      borderTopRadius="radius8"
      bg="bg.neutral"
      shadow="antimetal"
    >
      <Flex alignItems="center" gap="space6" mb="space8">
        <Flex p="space2" bg="blockIcon.start.bg" borderRadius="radius4">
          <Icon icon={Select16} color="blockIcon.start.fg" />
        </Flex>

        <Text variant="bodyS" fontWeight={600} hideOverflow>
          4. How would you rate your experience?
        </Text>
      </Flex>
      <Text variant="bodyXs" color="fg.neutral.muted" mb="space20">
        1,289 out of 1,500 people answered this question
      </Text>
      <Flex flexDirection="column" gap="space12" w="100%">
        {data.map((item) => (
          <BarChart
            key={item.label}
            label={item.label}
            percentage={item.percentage}
            color={item.color}
          />
        ))}
      </Flex>
    </Flex>
  );
};

const BarChart = ({
  label,
  percentage,
  color,
}: {
  label: string;
  percentage: number;
  color: string;
}) => {
  return (
    <Flex w="100%" gap="space8" alignItems="center">
      <Text variant="bodyXs" color="fg.neutral.muted" w={100}>
        {label}
      </Text>
      <Flex w="100%" h={16} overflow="hidden">
        <Box
          style={{ width: `${percentage}%`, backgroundColor: color }}
          h="100%"
          borderRadius="radius4"
        />
      </Flex>
    </Flex>
  );
};
