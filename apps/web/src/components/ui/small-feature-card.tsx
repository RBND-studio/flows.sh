import { Box, Flex } from "@flows/styled-system/jsx";
import { type FC, type ReactNode, type SVGProps } from "react";
import { Icon, Text } from "ui";

export type SmallFeatureCardProps = {
  title: string;
  description: string;
  icon: FC<SVGProps<SVGSVGElement>>;
};

export const SmallFeatureCard = ({
  title,
  description,
  icon,
}: SmallFeatureCardProps): ReactNode => {
  return (
    <Box
      p="space8"
      md={{
        p: "space12",
      }}
    >
      <Flex
        w="100%"
        md={{
          w: 160,
        }}
        bg="pane.bg.elevated"
        borderRadius="radius12"
        borderWidth={1}
        borderColor="newBorder.neutral.placeholder"
        shadow="antimetal"
        overflow="hidden"
        position="relative"
        className="group"
      >
        <Flex
          w="100%"
          alignItems="center"
          gap="space20"
          pt="space32"
          pb="space16"
          px="space16"
          flexDirection="column"
        >
          <Flex py="space12" px="space24" bg="newBg.neutral.subtle" borderRadius="radius8 ">
            <Icon icon={icon} color="newFg.neutral" />
          </Flex>
          <Text as="h3" variant="titleS">
            {title}
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          background="pane.bg.elevated"
          position="absolute"
          top="space16"
          left="space16"
          right="space16"
          bottom="space16"
          alignItems="center"
          justifyContent="center"
          opacity={0}
          scale={0.9}
          fastEaseInOut="all"
          _groupHover={{
            opacity: 1,
            scale: 1,
          }}
        >
          <Text align="center" mb="space4" variant="titleS">
            {title}
          </Text>
          <Text align="center" textWrap="balance" variant="bodyS" color="newFg.neutral.muted">
            {description}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};
