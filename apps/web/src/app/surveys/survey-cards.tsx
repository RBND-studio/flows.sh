import { css } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { Check16, Star16, StarFilled16 } from "icons";
import { type ReactNode } from "react";
import { Button, Icon, Text } from "ui";

export const cardStyle = css({
  borderRadius: "radius12",
  backgroundColor: "pane.bg.elevated",
  borderWidth: "1px",
  borderColor: "pane.border.elevated",
  p: "space16",
  width: "280px",
  flexDirection: "column",
  gap: "space8",
  shadow: "newL2",
  position: "absolute",
});

export const NpsCard = (): ReactNode => {
  const scores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Flex className={cardStyle} transform="rotate(-10deg) translate(-130px, 24px)" zIndex={1}>
      <Flex flexDirection="column" gap="space4">
        <Text variant="titleS">How likely are you to recommend us?</Text>
      </Flex>
      <Flex>
        {scores.map((score) => (
          <Flex
            key={score}
            flex={1}
            alignItems="center"
            justifyContent="center"
            h={24}
            borderRightWidth="1px"
            borderTopWidth="1px"
            borderBottomWidth="1px"
            borderColor="newBorder.neutral"
            bg="newBg.neutral.muted"
            color="newFg.neutral"
            fontSize="10px"
            _first={{ borderLeftRadius: "radius4", borderLeftWidth: "1px" }}
            _last={{ borderRightRadius: "radius4" }}
          >
            {score}
          </Flex>
        ))}
      </Flex>
      <Flex justifyContent="space-between" w="100%">
        <Text variant="bodyXs" color="newFg.neutral.muted">
          Not likely
        </Text>
        <Text variant="bodyXs" color="newFg.neutral.muted">
          Very likely
        </Text>
      </Flex>
    </Flex>
  );
};

export const CsatCard = (): ReactNode => {
  return (
    <Flex className={cardStyle} transform="rotate(10deg) translate(130px, 24px)" zIndex={1}>
      <Flex flexDirection="column" gap="space4">
        <Text variant="titleS">How would you rate your experience?</Text>
        <Text variant="bodyXs" color="newFg.neutral.muted">
          Select the number of stars
        </Text>
      </Flex>
      <Flex justifyContent="center" py="space8">
        {[1, 2, 3, 4, 5].map((star) => (
          <Flex
            key={star}
            flex={1}
            alignItems="center"
            justifyContent="center"
            h={24}
            borderRightWidth="1px"
            borderTopWidth="1px"
            borderBottomWidth="1px"
            borderColor="newBorder.neutral"
            bg="newBg.neutral.muted"
            _first={{ borderLeftRadius: "radius4", borderLeftWidth: "1px" }}
            _last={{ borderRightRadius: "radius4" }}
          >
            <Icon
              icon={star <= 4 ? StarFilled16 : Star16}
              color={star <= 4 ? "#f4be35" : "newFg.neutral.placeholder"}
            />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export const PmfCard = (): ReactNode => {
  const options = ["Very disappointed", "Somewhat disappointed", "Not disappointed"];
  return (
    <Flex className={cardStyle} position="relative" zIndex={3}>
      <Text variant="titleS">How would you feel if you could no longer use our product?</Text>
      <Flex flexDirection="column" gap="space8">
        {options.map((option) => (
          <Flex
            key={option}
            gap="space4"
            alignItems="center"
            p="space6"
            borderRadius="radius8"
            borderWidth="1px"
            borderColor={
              option === "Very disappointed" ? "newBorder.neutral.dark" : "newBorder.neutral"
            }
            bg={option === "Very disappointed" ? "newBg.neutral.strong" : "newBg.neutral.muted"}
          >
            <Flex
              w={16}
              h={16}
              borderRadius="radius4"
              borderWidth="2px"
              flexShrink={0}
              alignItems="center"
              justifyContent="center"
              borderColor={
                option === "Very disappointed" ? "newBorder.neutral.dark" : "newBorder.neutral"
              }
              bg={option === "Very disappointed" ? "newBorder.neutral.dark" : "transparent"}
            >
              {option === "Very disappointed" && (
                <Icon icon={Check16} color="newFg.neutral.onBlack" />
              )}
            </Flex>
            <Text
              variant="bodyXs"
              color={option === "Very disappointed" ? "newFg.neutral" : "newFg.neutral.muted"}
            >
              {option}
            </Text>
          </Flex>
        ))}
      </Flex>
      <Button size="small" asChild>
        <div className={css({ pointerEvents: "none" })}>Submit</div>
      </Button>
    </Flex>
  );
};

export const SurveyFan = (): ReactNode => {
  return (
    <Flex flex={1} alignItems="center" justifyContent="center" position="relative">
      <NpsCard />
      <CsatCard />
      <PmfCard />
    </Flex>
  );
};
