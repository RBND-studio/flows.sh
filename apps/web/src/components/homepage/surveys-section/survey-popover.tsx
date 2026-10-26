import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import type { SystemStyleObject } from "@flows/styled-system/types";
import type { ReactNode } from "react";
import { Button, Text } from "ui";

type Props = {
  className?: string;
  /** Style overrides, merged with the component's own styles so they win without `!` */
  css?: SystemStyleObject;
  title: string;
  children: ReactNode;
};

export const SurveyPopover = ({ className, css: cssProp, title, children }: Props) => {
  return (
    <Box
      className={className}
      css={cssProp}
      p="space16"
      bg="pane.bg.elevated"
      borderWidth={1}
      borderColor="pane.border.elevated"
      shadow="antimetal"
      borderRadius="radius12"
      w={240}
    >
      <Text variant="titleS">{title}</Text>
      <Box mt="space8">{children}</Box>
    </Box>
  );
};

type SurveyScaleProps = {
  options: string[];
  topLabel: string;
  bottomLabel: string;
};

export const SurveyScale = ({ options, topLabel, bottomLabel }: SurveyScaleProps) => {
  return (
    <Box>
      <Flex
        borderRadius="radius6"
        borderWidth={1}
        borderColor="border.neutral"
        overflow="hidden"
        gap={1}
        bg="border.neutral"
      >
        {options.map((option, index) => (
          <Flex
            key={index}
            alignItems="center"
            justifyContent="center"
            flex={1}
            py="space6"
            bg="bg.neutral.muted"
          >
            <Text variant="titleXs">{option}</Text>
          </Flex>
        ))}
      </Flex>
      <Flex justifyContent="space-between" mt="space8">
        <Text variant="bodyXs" color="fg.neutral.muted">
          {topLabel}
        </Text>
        <Text variant="bodyXs" color="fg.neutral.muted">
          {bottomLabel}
        </Text>
      </Flex>
    </Box>
  );
};

type SurveySelectOptionsProps = {
  options: string[];
};

export const SurveySelectOptions = ({ options }: SurveySelectOptionsProps) => {
  return (
    <Box>
      {options.map((option, index) => (
        <Flex
          key={index}
          alignItems="center"
          justifyContent="center"
          py="space6"
          bg="bg.neutral.muted"
          borderRadius="radius6"
          borderWidth={1}
          borderColor="border.neutral"
          mb="space8"
        >
          <Text variant="titleXs">{option}</Text>
        </Flex>
      ))}
    </Box>
  );
};

type SurveyFreeformProps = {
  placeholder: string;
};

export const SurveyFreeform = ({ placeholder }: SurveyFreeformProps) => {
  return (
    <>
      {/* oxlint-disable-next-line jsx-a11y/control-has-associated-label */}
      <textarea
        placeholder={placeholder}
        className={css({
          width: "100%",
          height: 80,
          padding: "8px",
          borderWidth: "1px",
          borderColor: "border.neutral",
          borderRadius: "radius6",
          backgroundColor: "bg.neutral.muted",
          resize: "none",
          textStyle: "bodyXs",
          pointerEvents: "none",
        })}
      />
      <Button
        css={{
          pointerEvents: "none",
        }}
        size="small"
        w="100%"
        asChild
      >
        <div>Submit</div>
      </Button>
    </>
  );
};
