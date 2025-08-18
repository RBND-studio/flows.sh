import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { Close16 } from "icons";
import Image from "next/image";
import { type ReactNode } from "react";
import { Button, Icon, Text } from "ui";

import CoolImageJpg from "./cool-image.jpg";

export const NormalTooltip = (): ReactNode => {
  return (
    <Flex
      backgroundColor="pane.bg.elevated"
      borderRadius="6px"
      borderColor="newBorder.neutral"
      borderWidth="1px"
      width="100%"
      maxWidth={180}
      p="space12"
      flexDirection="column"
      shadow="newL2"
      alignItems="start"
      gap="space4"
    >
      <Text variant="titleM">Begin your journey</Text>
      <Text variant="bodyXs" color="newFg.neutral.muted">
        We’ve put together a few tips to help you get started.
      </Text>
      <Flex width="100%" alignItems="center" justifyContent="space-between">
        {/* Button is rendered as div to prevent taking focus and messing with aria-hidden */}
        <Button asChild variant="primary" size="small">
          <div
            className={css({
              pointerEvents: "none",
            })}
          >
            Next step
          </div>
        </Button>
      </Flex>
    </Flex>
  );
};

export const GreenTooltip = (): ReactNode => {
  return (
    <Flex
      backgroundColor="#218287"
      borderRadius="24px"
      borderColor="#218287"
      borderWidth="1px"
      width="100%"
      maxWidth={180}
      p="space12"
      flexDirection="column"
      shadow="newL2"
      alignItems="start"
      gap="space4"
      position="relative"
    >
      <Text variant="titleM" fontWeight="800" color="white">
        Helpful tips
      </Text>
      <Text variant="bodyXs" color="white">
        Explore the essentials of our product and how to use it.
      </Text>
      <Flex width="100%" alignItems="center" justifyContent="space-between">
        <Flex gap="space4">
          <Box height={8} width={8} backgroundColor="white" borderRadius="4px" />
          {[...Array(3)].map((_, index) => (
            <Box
              // eslint-disable-next-line react/no-array-index-key -- no better key
              key={index}
              height={8}
              width={8}
              backgroundColor="white"
              opacity={0.5}
              borderRadius="4px"
            />
          ))}
        </Flex>
        <Box
          mt="space4"
          px="space8"
          py="space4"
          textStyle="titleS"
          bg="white"
          borderRadius="13px"
          color="black"
        >
          Next
        </Box>
      </Flex>
      <Icon
        className={css({
          position: "absolute",
          top: "12px",
          right: "12px",
        })}
        icon={Close16}
        color="white"
      />
    </Flex>
  );
};

export const BlueTooltip = (): ReactNode => {
  return (
    <Flex
      backgroundColor="#2755F0"
      borderRadius="4px"
      borderColor="#2755F0"
      borderWidth="1px"
      width="100%"
      maxWidth={180}
      p="space12"
      flexDirection="column"
      shadow="newL2"
      alignItems="start"
      gap="space8"
      position="relative"
    >
      <Text variant="titleM" fontWeight="800" color="white">
        Getting started
      </Text>
      <Text variant="bodyXs" color="white">
        We’ll keep this quick and easy. Just a few steps to get you started.
      </Text>
      <Flex mt="space12" width="100%" alignItems="center" justifyContent="space-between">
        <Box borderRadius="2px" px="space8" py="space4" textStyle="titleS" bg="white" color="black">
          Next
        </Box>
        <Text variant="titleXs" color="white" opacity={0.75}>
          1 / 8
        </Text>
      </Flex>
      <Icon
        className={css({
          position: "absolute",
          top: "12px",
          right: "12px",
        })}
        icon={Close16}
        color="white"
      />
    </Flex>
  );
};

export const SaleDialog = (): ReactNode => {
  return (
    <Flex
      backgroundColor="pane.bg.elevated"
      borderRadius="6px"
      borderColor="newBorder.neutral"
      borderWidth="1px"
      width="100%"
      maxWidth={180}
      p="space12"
      flexDirection="column"
      shadow="newL2"
      alignItems="center"
      gap="space8"
      position="relative"
    >
      <Text variant="titleM" fontWeight="800">
        Flash sale!
      </Text>
      <Image
        src={CoolImageJpg}
        alt=""
        width={500}
        height={243}
        className={css({
          borderRadius: "6px",
        })}
      />
      <Text variant="bodyXs" color="newFg.neutral.muted" textAlign="center">
        We have a lot of cool discounts and offers.
      </Text>
      <Box
        mt="space4"
        px="space12"
        py="space6"
        textStyle="titleS"
        bg="#B46EBD"
        borderRadius="13px"
        color="white"
      >
        Let’s go
      </Box>
    </Flex>
  );
};
