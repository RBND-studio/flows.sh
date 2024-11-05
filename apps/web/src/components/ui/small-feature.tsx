import { Box, Flex } from "@flows/styled-system/jsx";
import { type ReactElement } from "react";
import { Text } from "ui";

type Props = {
  icon: ReactElement;
  title: string;
  description: string;
};

export const SmallFeature = ({ icon, title, description }: Props): ReactElement => {
  return (
    <Box width="100%">
      <Flex gap="space8" alignItems="center" mb="space8">
        {icon}
        <Text weight="600">{title}</Text>
      </Flex>
      <Text color="muted">{description}</Text>
    </Box>
  );
};
