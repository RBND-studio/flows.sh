import { Box, Flex } from "@flows/styled-system/jsx";
import { type ReactElement } from "react";
import { Badge, Text } from "ui";

export type SmallFeatureProps = {
  icon: ReactElement;
  title: string;
  description: string;
  comingSoon?: boolean;
  className?: string;
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const SmallFeature = ({
  icon,
  title,
  description,
  comingSoon,
  className,
  headingLevel,
}: SmallFeatureProps): ReactElement => {
  return (
    <Box width="100%" className={className}>
      <Flex gap="space8" alignItems="center" mb="space8">
        {icon}
        <Text weight="600" as={headingLevel}>
          {title}
        </Text>
        {comingSoon ? <Badge>Soon</Badge> : null}
      </Flex>
      <Text color="muted">{description}</Text>
    </Box>
  );
};
