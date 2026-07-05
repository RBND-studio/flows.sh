import { Box, Flex } from "@flows/styled-system/jsx";
import { Action16, Delay16, Versioning16 } from "icons";
import { Icon, Text } from "ui";
import workflowEditorLightPng from "./workflow-editor-light.png";
import workflowEditorDarkPng from "./workflow-editor-dark.png";
import { ThemeImage } from "components/theme-image";

export const WorkflowFeatures = () => {
  return (
    <Flex flexDirection="column" borderBottomWidth={1} borderBottomColor="border.neutral">
      <Flex p="space8" overflow="hidden" w="100%" display={{ base: "none", md: "flex" }}>
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
          borderWidth={1}
          borderColor="bg.neutral.subtle"
        >
          <Box
            borderTopRadius="radius8"
            borderLeftWidth={1}
            borderRightWidth={1}
            borderTopWidth={1}
            borderColor="border.neutral"
            overflow="hidden"
            shadow="antimetal"
          >
            <ThemeImage
              srcLight={workflowEditorLightPng}
              srcDark={workflowEditorDarkPng}
              alt=""
              height={1500}
              width={2982}
              placeholder="blur"
            />
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
    icon: Versioning16,
    title: "Branching logic",
    description:
      "Show different steps based on user role, plan, or what they've already completed.",
  },
  {
    icon: Delay16,
    title: "Delays and scheduling",
    description:
      "Reach users at the right moment, not all at once. Avoid overwhelming signups or reaching users too early.",
  },
  {
    icon: Action16,
    title: "Take actions",
    description:
      "Update user properties, add users to segments, or trigger webhooks when a condition is met.",
  },
];
