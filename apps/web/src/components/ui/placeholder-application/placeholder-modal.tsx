import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import Image from "next/image";
import type { JSX } from "react";
import { Button, Text } from "ui";

import modalImage from "./modal-image.jpg";

type Props = {
  title: string;
  description: string;
  buttonLabel?: string;
  className?: string;
};

export const PlaceholderModal = ({
  title,
  description,
  buttonLabel = "Continue",
  className,
}: Props): JSX.Element => {
  return (
    <Flex
      flexDirection="column"
      p="space16"
      borderRadius="radius8"
      borderColor="newBorder.neutral"
      borderWidth="1px"
      backgroundColor="pane.bg.elevated"
      shadow="newL2"
      alignItems="center"
      maxWidth={240}
      className={className}
      aria-hidden="true"
    >
      <Box
        mb="space12"
        width="100%"
        borderRadius="6px"
        height="100%"
        maxHeight={100}
        overflow="hidden"
      >
        <Image src={modalImage} alt="" />
      </Box>
      <Text mb="space4" align="center" variant="titleS">
        {title}
      </Text>
      <Text mb="space12" color="newFg.neutral.muted" align="center" variant="bodyXs">
        {description}
      </Text>
      {/* Button is rendered as div to prevent taking focus and messing with aria-hidden */}
      <Button asChild variant="primary" size="small">
        <div
          className={css({
            pointerEvents: "none",
          })}
        >
          {buttonLabel}
        </div>
      </Button>
    </Flex>
  );
};
