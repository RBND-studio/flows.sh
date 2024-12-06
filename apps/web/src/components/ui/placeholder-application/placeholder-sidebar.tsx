import { Box, Flex } from "@flows/styled-system/jsx";

type Props = {
  sidebarTooltipSlot?: JSX.Element;
  sidebarBannerSlot?: JSX.Element;
};

export const PlaceholderSidebar = ({
  sidebarTooltipSlot,
  sidebarBannerSlot,
}: Props): JSX.Element => {
  return (
    <>
      <DesktopSidebar
        sidebarTooltipSlot={sidebarTooltipSlot}
        sidebarBannerSlot={sidebarBannerSlot}
      />
      <MobileSidebar
        sidebarTooltipSlot={sidebarTooltipSlot}
        sidebarBannerSlot={sidebarBannerSlot}
      />
    </>
  );
};

const MobileSidebar = ({ sidebarTooltipSlot, sidebarBannerSlot }: Props): JSX.Element => {
  return (
    <Box aria-hidden="true" display="none" mdDown={{ display: "unset" }}>
      <Flex alignItems="center" gap="space8">
        <Box height={24} width={24} backgroundColor="newFg.neutral.muted" borderRadius="radius4" />
        <Box
          height={10}
          maxWidth={68}
          width="100%"
          backgroundColor="newBg.neutral.strong"
          borderRadius="radius4"
          mr="auto"
        />
        {sidebarTooltipSlot ? (
          sidebarTooltipSlot
        ) : (
          <Box
            height={24}
            width={24}
            backgroundColor="newBg.neutral"
            borderWidth="1px"
            borderColor="newBorder.neutral"
            borderRadius="radius4"
          />
        )}
      </Flex>
      {sidebarBannerSlot}
    </Box>
  );
};

const DesktopSidebar = ({ sidebarTooltipSlot, sidebarBannerSlot }: Props): JSX.Element => {
  return (
    <Flex
      mdDown={{ display: "none" }}
      width="100%"
      flexDirection="column"
      gap="space16"
      maxWidth={162}
      height="100%"
      flex={1}
      aria-hidden="true"
    >
      <Flex alignItems="center" gap="space8">
        <Box height={24} width={24} backgroundColor="newFg.neutral.muted" borderRadius="radius4" />
        <Box
          height={10}
          maxWidth={68}
          width="100%"
          backgroundColor="newBg.neutral.strong"
          borderRadius="radius4"
          mr="auto"
        />
        {sidebarTooltipSlot ? (
          sidebarTooltipSlot
        ) : (
          <Box
            height={24}
            width={24}
            backgroundColor="newBg.neutral"
            borderWidth="1px"
            borderColor="newBorder.neutral"
            borderRadius="radius4"
          />
        )}
      </Flex>
      <Flex flexDirection="column" gap="space16" height="100%">
        <Flex flexDirection="column" gap="space8">
          <Box
            height={10}
            maxWidth={85}
            width="100%"
            backgroundColor="newBg.neutral.strong"
            borderRadius="radius4"
          />
          <Box
            height={10}
            maxWidth={112}
            width="100%"
            backgroundColor="newBg.neutral.strong"
            borderRadius="radius4"
          />
        </Flex>
        <Flex flexDirection="column" gap="space8">
          <Box
            height={8}
            maxWidth={76}
            width="100%"
            backgroundColor="newBg.neutral.subtle"
            borderRadius="radius4"
          />
          <Box
            height={10}
            maxWidth={90}
            width="100%"
            backgroundColor="newBg.neutral.strong"
            borderRadius="radius4"
          />
          <Box
            height={10}
            maxWidth={110}
            width="100%"
            backgroundColor="newBg.neutral.strong"
            borderRadius="radius4"
          />
          <Box
            height={10}
            maxWidth={96}
            width="100%"
            backgroundColor="newBg.neutral.strong"
            borderRadius="radius4"
          />
        </Flex>
        <Flex flexDirection="column" gap="space8">
          <Box
            height={8}
            maxWidth={88}
            width="100%"
            backgroundColor="newBg.neutral.subtle"
            borderRadius="radius4"
          />
          <Box
            height={10}
            maxWidth={98}
            width="100%"
            backgroundColor="newBg.neutral.strong"
            borderRadius="radius4"
          />
          <Box
            height={10}
            maxWidth={94}
            width="100%"
            backgroundColor="newBg.neutral.strong"
            borderRadius="radius4"
          />
          <Box
            height={10}
            maxWidth={102}
            width="100%"
            backgroundColor="newBg.neutral.strong"
            borderRadius="radius4"
          />
          <Box
            height={10}
            maxWidth={106}
            width="100%"
            backgroundColor="newBg.neutral.strong"
            borderRadius="radius4"
          />
          <Box
            height={10}
            maxWidth={80}
            width="100%"
            backgroundColor="newBg.neutral.strong"
            borderRadius="radius4"
          />
          <Box
            height={10}
            maxWidth={88}
            width="100%"
            backgroundColor="newBg.neutral.strong"
            borderRadius="radius4"
          />
          <Box
            height={10}
            maxWidth={98}
            width="100%"
            backgroundColor="newBg.neutral.strong"
            borderRadius="radius4"
          />
          <Box
            height={10}
            maxWidth={92}
            width="100%"
            backgroundColor="newBg.neutral.strong"
            borderRadius="radius4"
          />
          <Box
            height={10}
            maxWidth={72}
            width="100%"
            backgroundColor="newBg.neutral.strong"
            borderRadius="radius4"
          />
        </Flex>
      </Flex>
      {sidebarBannerSlot ? (
        sidebarBannerSlot
      ) : (
        <Box
          flexShrink={0}
          width="100%"
          borderRadius="radius4"
          height={56}
          backgroundColor="newBg.neutral.strong"
        />
      )}
    </Flex>
  );
};
