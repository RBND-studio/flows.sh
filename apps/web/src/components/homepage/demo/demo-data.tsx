import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { PlaceholderModal, PlaceholderTooltip } from "components/ui";
import { Banner16, Comment16, Flows16, Question16 } from "icons";
import { Button, Icon, Text } from "ui";

export const tabs = [
  {
    icon: Comment16,
    title: "User onboarding",
    sidebarTooltipSlot: (
      <Box position="relative">
        <Box
          height={24}
          width={24}
          backgroundColor="newBg.neutral"
          borderWidth="1px"
          borderColor="newBorder.primary"
          borderRadius="radius4"
          shadow="focus"
        />
        <Box width={176} pt="space4" position="absolute" right={0} md={{ right: "unset" }}>
          <PlaceholderTooltip
            title="Get started"
            description="Start by creating your first issue in the project."
          />
        </Box>
      </Box>
    ),
  },
  {
    icon: Flows16,
    title: "Product adoption",
    bannerSlot: (
      <Flex
        p="space8"
        borderWidth="1px"
        alignItems="center"
        borderColor="newBorder.primary"
        borderRadius="6px"
        gap="space8"
        shadow="focus"
        backgroundColor="pane.bg.elevated"
        mb="space8"
      >
        <Box
          borderRadius="6px"
          width="100%"
          maxWidth={72}
          height={40}
          backgroundColor="newFg.neutral.muted"
        />
        <Flex flexDirection="column" gap="2px">
          <Text variant="titleS">Try out the new Instant sync</Text>
          <Text variant="bodyXs">With instant sync, you can now sync your data in real-time.</Text>
        </Flex>
      </Flex>
    ),
  },
  {
    icon: Banner16,
    title: "In-app messaging",
    sidebarBannerSlot: (
      <Flex
        flexDirection="column"
        p="space12"
        borderWidth="1px"
        borderColor="newBorder.neutral"
        borderRadius="6px"
        backgroundColor="pane.bg.elevated"
        mt="space8"
        alignItems="start"
      >
        <Text variant="titleS">Planned maintenance</Text>
        <Text mb="space4" variant="bodyXs">
          We will be performing maintenance tomorrow.
        </Text>
        <Button size="small">Show details</Button>
      </Flex>
    ),
  },
  {
    icon: Comment16,
    title: "Growth experiments",
    slideout: (
      <Box
        position="absolute"
        // center in the box
        width="100%"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        md={{
          bottom: "32px",
          right: "32px",
          left: "unset",
          top: "unset",
          transform: "unset",
          width: "unset",
        }}
      >
        <PlaceholderModal
          title="Discount on our annual plan"
          description="Get 20% off when you upgrade to our annual plan."
          buttonLabel="Upgrade now"
          className={css({
            mx: "auto",
            md: { mx: "unset" },
          })}
        />
      </Box>
    ),
  },
  {
    icon: Comment16,
    title: "In-app help",
    helpSlot: (
      <Box position="relative" width="100%">
        <Icon icon={Question16} />
        <Box position="absolute" maxWidth={180} width="100%" pt="space4">
          <PlaceholderTooltip
            title="Issue view"
            description="This view shows all issues in your project."
            buttonLabel="Learn more"
            showProgress={false}
          />
        </Box>
      </Box>
    ),
  },
];
