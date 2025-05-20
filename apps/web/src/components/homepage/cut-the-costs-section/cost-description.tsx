import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { EndLine, NewLine, NewLineDecorator } from "components/ui";
import { ArrowRight16 } from "icons";
import Link from "next/link";
import { type ReactNode } from "react";
import { routes } from "routes";
import { Text } from "ui";

export const CostDescription = (): ReactNode => {
  return (
    <Flex
      flexDirection="column"
      flex={1}
      mb={{
        base: "space40",
        md: 0,
      }}
    >
      <TopDecoration />
      <Flex w="100%" flex={1}>
        <EndLine
          className={css({
            height: "unset!",
            display: {
              base: "none",
              md: "block",
            },
          })}
          side="bottom"
          gradient={false}
        />
        <Flex
          flexDirection="column"
          justifyContent="center"
          mx="auto"
          alignItems={{
            base: "center",
            md: "flex-start",
          }}
          h="100%"
          maxWidth={{
            base: "100%",
            md: 368,
          }}
        >
          <Text as="h2" variant="title3xl">
            Cut the costs
          </Text>
          <Text
            variant="bodyL"
            color="newFg.neutral.muted"
            mx="auto"
            mt="space16"
            textWrap="balance"
            textAlign={{
              base: "center",
              md: "left",
            }}
          >
            Flows is designed to grow with you. Our pricing is usage-based so you only pay for what
            you really use, no steep subscription tiers that punish you for being successful.
            <br />
            <br />
            Our generous free tier means that early stage startups can use Flows for free.
          </Text>
          <Link
            className={css({
              textStyle: "titleL",
              color: "newFg.neutral",
              display: "flex",
              alignItems: "center",
              gap: "space4",
              mt: "space40",
              width: "fit-content",
              _hover: {
                "& svg": {
                  transform: "translateX(4px)",
                },
              },
              "& svg": {
                fastEaseInOut: "transform",
              },
            })}
            href={routes.pricing}
          >
            View pricing
            <ArrowRight16 />
          </Link>
        </Flex>
      </Flex>
      <BottomDecoration />
    </Flex>
  );
};

const TopDecoration = (): ReactNode => {
  return (
    <>
      <EndLine
        className={css({
          height: "62px!",
          display: {
            base: "none",
            md: "block",
          },
        })}
        side="top"
      />
      <Box
        display={{
          base: "none",
          md: "flex",
        }}
      >
        <NewLineDecorator />
        <NewLine />
      </Box>
    </>
  );
};

const BottomDecoration = (): ReactNode => {
  return (
    <>
      <Box
        display={{
          base: "none",
          md: "flex",
        }}
      >
        <NewLineDecorator />
        <NewLine />
      </Box>
      <EndLine
        className={css({
          height: "68px!",
          display: {
            base: "none",
            md: "block",
          },
        })}
        side="bottom"
      />
    </>
  );
};
