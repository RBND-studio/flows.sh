import { Box, Flex } from "@flows/styled-system/jsx";
import { Button, Text } from "ui";

type Props = {
  title: string;
  description: string;
  buttonLabel?: string;
  showProgress?: boolean;
};

export const PlaceholderTooltip = ({
  title,
  description,
  buttonLabel = "Next",
  showProgress = true,
}: Props): JSX.Element => {
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
      aria-hidden="true"
    >
      <Text variant="titleM">{title}</Text>
      <Text variant="bodyXs" color="muted">
        {description}
      </Text>
      <Flex width="100%" alignItems="center" justifyContent="space-between">
        {showProgress ? (
          <Flex gap="space4">
            <Box height={8} width={8} backgroundColor="newBg.primary" borderRadius="4px" />
            {[...Array(3)].map((_, index) => (
              <Box
                // eslint-disable-next-line react/no-array-index-key -- no better key
                key={index}
                height={8}
                width={8}
                backgroundColor="newBg.neutral.strong"
                borderRadius="4px"
              />
            ))}
          </Flex>
        ) : null}

        <Button type="button" variant="primary" size="small">
          {buttonLabel}
        </Button>
      </Flex>
    </Flex>
  );
};
