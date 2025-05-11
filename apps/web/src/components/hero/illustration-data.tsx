import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { PlaceholderModal, PlaceholderTooltip } from "components/ui";
import { Question16 } from "icons";
import Image from "next/image";
import { Button, Icon, Text } from "ui";

import bannerImage from "./banner-image.jpg";

export const illustrationData = [
  {
    title: "User onboarding",
    element: (
      <Box position="relative">
        <Box
          height={24}
          width={24}
          backgroundColor="newBg.neutral"
          borderWidth="1px"
          borderColor="newBorder.neutral"
          borderRadius="radius4"
          animation="highlightFadeIn 0.6s ease-in-out"
          animationDelay="0.3s"
          animationFillMode="forwards"
        />
        <Box
          opacity={0}
          animation="fadein 0.6s ease-in-out"
          animationDelay="0.3s"
          animationFillMode="forwards"
          width={176}
          pt="space4"
          position="absolute"
          right={0}
          md={{ right: "unset" }}
        >
          <PlaceholderTooltip
            title="Get started"
            description="Start by creating your first issue in the project."
          />
        </Box>
      </Box>
    ),
  },
  {
    title: "Product adoption",
    element: (
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
        opacity={0}
        animation="fadein 0.6s ease-in-out"
        animationFillMode="forwards"
      >
        <Box
          smDown={{ display: "none" }}
          borderRadius="6px"
          width={72}
          height={40}
          flexShrink={0}
          overflow="hidden"
        >
          <Image src={bannerImage} alt="" />
        </Box>
        <Flex flexDirection="column" gap="2px">
          <Text variant="titleS">Try out the new Instant sync</Text>
          <Text variant="bodyXs">With instant sync, you can now sync your data in real-time.</Text>
        </Flex>
      </Flex>
    ),
  },
  {
    title: "In-app messaging",
    element: (
      <Flex
        flexDirection="column"
        p="space12"
        borderWidth="1px"
        borderColor="newBorder.neutral"
        borderRadius="6px"
        backgroundColor="pane.bg.elevated"
        mt="space8"
        alignItems="start"
        opacity={0}
        animation="fadein 0.6s ease-in-out"
        animationFillMode="forwards"
      >
        <Text variant="titleS">Planned maintenance</Text>
        <Text mb="space4" variant="bodyXs">
          We will be performing maintenance tomorrow.
        </Text>
        {/* Button is rendered as div to prevent taking focus and messing with aria-hidden */}
        <Button asChild size="small">
          <div>Show details</div>
        </Button>
      </Flex>
    ),
  },
  {
    title: "Growth experiments",
    element: (
      <Box
        position="absolute"
        opacity={0}
        animation="topSlideIn 0.4s ease-in-out"
        animationFillMode="forwards"
        bottom="32px"
        right="32px"
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
    title: "In-app help",
    element: (
      <Box position="relative" width="100%">
        <Icon
          className={css({
            opacity: 0,
            animation: "fadein 0.6s ease-in-out",
            animationFillMode: "forwards",
          })}
          icon={Question16}
        />
        <Box
          opacity={0}
          animation="fadein 0.6s ease-in-out"
          animationFillMode="forwards"
          position="absolute"
          maxWidth={180}
          width="100%"
          pt="space4"
        >
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
] as const;
