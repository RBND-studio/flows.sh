import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { PlaceholderTooltip } from "components/ui";
import { Banner16, Check16, Checklist16, Hint16, Modal16, Star16, Tour16 } from "icons";
import Image from "next/image";
import { Button, Icon, Text } from "ui";

import bannerImage from "./banner-image.jpg";

const checklistItems = ["Create your first issue", "Add a comment", "Invite a team member"];

export const demoTabsData = [
  {
    icon: Checklist16,
    label: "Onboarding checklists",
    element: (
      <Box
        position="absolute"
        opacity={0}
        animation="bottomSlideIn 0.4s ease-in-out"
        animationFillMode="forwards"
        top="32px"
        right="32px"
        aria-hidden="true"
      >
        <Box
          alignItems="center"
          justifyContent="center"
          borderRadius="radius12"
          backgroundColor="pane.bg.elevated"
          borderWidth="1px"
          borderColor="pane.border.elevated"
          p="space16"
          width="290px"
          shadow="antimetal"
        >
          <Box mb="space8">
            <Text mb="space4" variant="titleM">
              Get started with Acme
            </Text>
            <Text variant="bodyXs" color="newFg.neutral.muted">
              Follow these steps to get started with Acme. You can always come back to this later.
            </Text>
          </Box>
          {/* Progress bar */}
          <Flex gap="space8" alignItems="center" mb="space16">
            <Text>1/4</Text>
            <Box bg="newBg.neutral.subtle" borderRadius="radius4" w="100%" h={8} overflow="hidden">
              <Box w="25%" h={8} bg="newBg.primary" borderRadius="radius4" />
            </Box>
          </Flex>

          {checklistItems.map((item, index) => (
            <Flex
              key={item}
              p="space12"
              borderWidth="1px"
              borderColor="newBorder.neutral"
              borderRadius="radius8"
              mb="space8"
              alignItems="center"
              gap="space6"
              bg="newBg.neutral.muted"
            >
              {index === 0 ? (
                <Flex borderRadius="50%" bg="newBg.primary" p="1px">
                  <Icon color="newFg.neutral.onPrimary" icon={Check16} />
                </Flex>
              ) : (
                <Box
                  w={18}
                  h={18}
                  borderRadius="50%"
                  borderWidth="2px"
                  borderColor="newBorder.neutral"
                />
              )}
              <Text
                textDecoration={index === 0 ? "line-through" : "none"}
                color={index === 0 ? "newFg.neutral.muted" : "newFg.neutral"}
              >
                {item}
              </Text>
            </Flex>
          ))}
        </Box>
      </Box>
    ),
  },
  {
    icon: Tour16,
    label: "Product tours",
    element: (
      <Box position="relative" aria-hidden="true">
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
    icon: Modal16,
    label: "Announcements",
    element: (
      <Flex
        p="space24"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        opacity={0}
        animation="bottomSlideIn 0.4s ease-in-out"
        animationFillMode="forwards"
        top={0}
        left={0}
        bottom={0}
        right={0}
        background="rgba(0, 0, 0, 0.5)"
        aria-hidden="true"
      >
        <Flex
          borderRadius="radius12"
          backgroundColor="pane.bg.elevated"
          borderWidth="1px"
          borderColor="pane.border.elevated"
          p="space6"
          width="280px"
          flexDirection="column"
        >
          <Flex
            w="100%"
            bg="radial-gradient(circle at top left,#3fff95,#25a8ff)"
            h={128}
            borderRadius="radius6"
            alignItems="flex-end"
            justifyContent="center"
            overflow="hidden"
            borderWidth="1px"
            borderColor="newBorder.neutral"
          >
            <Flex
              p="space8"
              bg="newBg.neutral"
              borderRadius="radius8"
              borderWidth="1px"
              borderColor="newBorder.neutral"
              flexDirection="column"
              gap="space12"
              mb="-10px"
              shadow="newL2"
            >
              <Flex alignItems="center" gap="space4">
                <Box w={16} h={16} borderRadius="radius4" bg="newBg.neutral.strong" />
                <Box w={120} h={10} borderRadius="radius4" bg="newBg.neutral.subtle" />
              </Flex>
              <Flex flexDirection="column" gap="space6">
                <Box w={180} h={10} borderRadius="radius4" bg="newBg.neutral.subtle" />
                <Box w={160} h={10} borderRadius="radius4" bg="newBg.neutral.subtle" />
                <Box w={175} h={10} borderRadius="radius4" bg="newBg.neutral.subtle" />
                <Box w={80} h={10} borderRadius="radius4" bg="newBg.neutral.subtle" />
              </Flex>
            </Flex>
          </Flex>
          <Flex flexDirection="column" p="space12" alignItems="center">
            <Text variant="titleM" align="center" mb="space2">
              Introducing issues
            </Text>
            <Text align="center" mb="space16">
              Issues help you track tasks, bugs, and feature requests in your projects.
            </Text>
            {/* Button is rendered as div to prevent taking focus and messing with aria-hidden */}
            <Button size="small" asChild>
              <div
                className={css({
                  pointerEvents: "none",
                })}
              >
                Explore issues
              </div>
            </Button>
          </Flex>
        </Flex>
      </Flex>
    ),
  },
  {
    icon: Banner16,
    label: "Banners",
    element: (
      <Flex
        p="space12"
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
        aria-hidden="true"
      >
        <Box
          smDown={{ display: "none" }}
          borderRadius="6px"
          width={88}
          height={48}
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
    icon: Hint16,
    label: "Badges",
    element: (
      <Box
        flexDirection="column"
        alignItems="flex-start"
        px="space8"
        pb="space8"
        pt="space12"
        bg="newBg.neutral"
        borderRadius="radius4"
        borderWidth="1px"
        borderColor="newBorder.neutral"
        shadow="newL1"
        opacity={0}
        animation="fadein 0.6s ease-in-out"
        animationFillMode="forwards"
        aria-hidden="true"
      >
        <Box w={120} h={10} borderRadius="radius4" bg="newBg.neutral.strong" mb="space8" />
        <Box mb="space12">
          <Box
            mb="space4"
            maxW={240}
            w="100%"
            h={8}
            borderRadius="radius4"
            bg="newBg.neutral.subtle"
          />
          <Box
            mb="space4"
            maxW={180}
            w="100%"
            h={8}
            borderRadius="radius4"
            bg="newBg.neutral.subtle"
          />
          <Box maxW={120} w="100%" h={8} borderRadius="radius4" bg="newBg.neutral.subtle" />
        </Box>
        <Flex gap="space4" alignItems="center">
          <Flex
            px="space2"
            borderWidth="1px"
            borderColor="newBorder.neutral"
            borderRadius="radius4"
            gap="space4"
          >
            <Text variant="bodyXs" color="newFg.neutral.muted">
              2 hours
            </Text>
          </Flex>
          <Flex
            bg="newBg.primary"
            gap="space4"
            alignItems="center"
            color="newFg.neutral.onPrimary"
            borderRadius="radius4"
            py="1px"
            pl="space2"
            pr="space4"
          >
            <Icon icon={Star16} color="inherit" />
            <Text variant="bodyXs" color="inherit" fontWeight="600">
              New
            </Text>
          </Flex>
        </Flex>
      </Box>
    ),
  },
];
