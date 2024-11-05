import { Box, Flex } from "@flows/styled-system/jsx";
import { Button, Text } from "ui";

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
        height={100}
        backgroundColor="newFg.neutral.muted"
      />
      <Text mb="space4" align="center" variant="titleS">
        {title}
      </Text>
      <Text mb="space12" align="center" variant="bodyXs">
        {description}
      </Text>
      <Button type="button" variant="primary" size="small">
        {buttonLabel}
      </Button>
    </Flex>
  );
};
