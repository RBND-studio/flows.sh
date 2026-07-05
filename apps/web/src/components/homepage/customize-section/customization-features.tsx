import { Box, Flex } from "@flows/styled-system/jsx";
import { CustomComponentExample } from "app/custom-components/custom-component-example";
import { CustomComponentExampleCode } from "app/custom-components/custom-component-example-code";
import { Code16, Component16, Paintbrush16 } from "icons";
import { Icon, Text } from "ui";

export const CustomizationFeatures = () => {
  return (
    <Flex flexDirection="column" borderBottomWidth={1} borderBottomColor="border.neutral">
      <Flex p="space8" h={{ base: "auto", md: 506 }} overflow="hidden" w="100%">
        <Flex
          overflow="hidden"
          h="100%"
          bg="bg.neutral.subtle"
          w="100%"
          borderRadius="radius8"
          alignItems="center"
          justifyContent="center"
          pt={{ base: "space8", md: "space32" }}
          px={{ base: "space8", md: "space32" }}
          pb={{ base: "space8", md: 0 }}
          borderWidth={1}
          borderColor="bg.neutral.subtle"
        >
          <Box
            borderTopRadius="radius8"
            borderBottomRadius={{ base: "radius8", md: 0 }}
            h="100%"
            overflow="hidden"
            w="100%"
            borderColor="border.neutral"
            borderTopWidth={1}
            borderLeftWidth={1}
            borderRightWidth={1}
            borderBottomWidth={{ base: 1, md: 0 }}
            shadow="antimetal"
          >
            <CustomComponentExample codeExample={<CustomComponentExampleCode />} />
          </Box>
        </Flex>
      </Flex>
      <Flex
        py={{ base: "space32", md: "space64" }}
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: "space40", md: "unset" }}
      >
        {features.map(({ icon, title, description }) => (
          <Flex flexDirection="column" px={{ base: "space24", md: "space40" }} key={title} flex={1}>
            <Icon icon={icon} />
            <Text as="h3" variant="bodyM" fontWeight="800" mt="space12">
              {title}
            </Text>
            <Text variant="bodyM" maxW={500} mt="space2">
              {description}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

const features = [
  {
    icon: Component16,
    title: "Custom components",
    description:
      "Build with your own design system. No more generic widgets that clash with your product's UI.",
  },
  {
    icon: Paintbrush16,
    title: "Customize the theme",
    description:
      "Change colors, typography, and spacing to match your app without rebuilding everything from scratch.",
  },
  {
    icon: Code16,
    title: "Build with our open-source SDKs",
    description:
      "That give you full control. Documented, extensible, and built by developers for developers.",
  },
];
