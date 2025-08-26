import { Box, Flex } from "@flows/styled-system/jsx";
import { type FC, type ReactNode, type SVGProps } from "react";
import { Icon, Text } from "ui";

type Props = {
  title: string;
  description: string;
  icon: FC<SVGProps<SVGSVGElement>>;
};

export const FeatureWithIcon = ({ title, description, icon }: Props): ReactNode => {
  return (
    <Flex
      flexDirection="column"
      gap="space8"
      p={{ base: "space24", md: "space40" }}
      flex={1}
      bg="pane.bg.elevated"
    >
      <Box
        w="fit-content"
        p="space6"
        borderRadius="radius4"
        backgroundColor="newBg.neutral.strong"
        mb="space12"
      >
        <Icon icon={icon} />
      </Box>
      <Text variant="titleL">{title}</Text>
      <Text variant="bodyM" color="newFg.neutral.muted">
        {description}
      </Text>
    </Flex>
  );
};
