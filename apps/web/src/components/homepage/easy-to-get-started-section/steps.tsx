import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { EndLine, LinesWrapper, NewLine, NewLineDecorator } from "components/ui";
import { links } from "lib/links";
import { Fragment, type ReactNode } from "react";
import { Text } from "ui";

const linkStyles = css({
  fontWeight: "600",
  color: "newFg.neutral",
  _hover: {
    textDecoration: "underline",
  },
});

const steps = [
  {
    number: "01",
    title: "Install the SDK",
    description: (
      <>
        Get started in minutes with our{" "}
        <a href={links.docs.sdk.overview} target="_blank" className={linkStyles} rel="noopener">
          SDKs
        </a>{" "}
        and{" "}
        <a href={links.sdk.overview} target="_blank" className={linkStyles} rel="noopener">
          templates
        </a>
        . No complex setup required.
      </>
    ),
  },
  {
    number: "02",
    title: "Create a workflow",
    description: "Want to create a product tour or show an announcement? We make that easy.",
  },
  {
    number: "03",
    title: "Choose who can see it",
    description:
      "Target each workflow to specific user segments. Show the right message to the right people.",
  },
];

export const Steps = (): ReactNode => {
  return (
    <>
      <LinesWrapper justifyContent="space-between">
        <EndLine side="top" />
        <EndLine side="top" />
      </LinesWrapper>
      <LinesWrapper>
        <EndLine side="left" />
        <NewLineDecorator />
        <NewLine />
        <NewLineDecorator
          className={css({
            display: "none",
            md: {
              display: "block",
            },
          })}
        />
        <NewLine />
        <NewLineDecorator
          className={css({
            display: "none",
            md: {
              display: "block",
            },
          })}
        />
        <NewLine />
        <NewLineDecorator />
        <EndLine side="right" />
      </LinesWrapper>

      <Flex
        flexDirection="column"
        md={{
          flexDirection: "row",
        }}
        w="100%"
      >
        <EndLine
          side="bottom"
          gradient={false}
          className={css({
            height: "unset!",
          })}
        />
        {steps.map((step) => (
          <Fragment key={step.number}>
            <Box
              w="100%"
              px="space8"
              py="space24"
              md={{
                py: "space40",
                px: "space24",
              }}
            >
              <Text
                mb="space20"
                variant="titleL"
                fontFamily="monospace"
                color="newFg.neutral.subtle"
                textAlign="center"
                md={{
                  textAlign: "left",
                }}
              >
                {step.number}
              </Text>
              <Text
                mb="space12"
                variant="titleL"
                textAlign="center"
                md={{
                  textAlign: "left",
                }}
              >
                {step.title}
              </Text>
              <Text
                variant="bodyM"
                color="newFg.neutral.muted"
                textAlign="center"
                md={{
                  textAlign: "left",
                }}
              >
                {step.description}
              </Text>
            </Box>
            <EndLine
              side="bottom"
              gradient={false}
              className={css({
                height: "unset!",
              })}
            />
          </Fragment>
        ))}
      </Flex>

      <LinesWrapper>
        <EndLine side="left" />
        <NewLineDecorator />
        <NewLine />
        <NewLineDecorator
          className={css({
            display: "none",
            md: {
              display: "block",
            },
          })}
        />
        <NewLine />
        <NewLineDecorator
          className={css({
            display: "none",
            md: {
              display: "block",
            },
          })}
        />
        <NewLine />
        <NewLineDecorator />
        <EndLine side="right" />
      </LinesWrapper>
      <LinesWrapper justifyContent="space-between">
        <EndLine side="bottom" />
        <EndLine side="bottom" />
      </LinesWrapper>
    </>
  );
};
