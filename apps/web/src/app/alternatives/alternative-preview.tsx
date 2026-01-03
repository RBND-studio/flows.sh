import { css, cx } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { ArrowRight16 } from "icons";
import Link from "next/link";
import { type FC } from "react";
import { routes } from "routes";
import { Text } from "ui";

import { type AlternativeContentType } from "./types";

type Props = {
  alternative: AlternativeContentType;
};

export const AlternativePreview: FC<Props> = ({ alternative }) => {
  return (
    <li
      className={css({
        borderBottomWidth: 1,
        borderBottomColor: "newBorder.neutral.placeholder",
        _last: { borderBottomWidth: 0 },
      })}
    >
      <Link
        href={routes.alternativeDetail(alternative.slug)}
        className={cx(
          css({
            p: "space24",
            fastEaseInOut: "background-color",
            _hover: { backgroundColor: "newBg.neutral.muted" },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "space24",
          }),
          "group",
        )}
      >
        <Flex alignItems="center" gap="space12">
          {alternative.competitor.squareLogo}
          <Text variant="titleM">
            <Text as="span" color="newFg.neutral.muted">
              Compare to
            </Text>{" "}
            {alternative.competitor.name}
          </Text>
        </Flex>
        <Flex
          p="space4"
          borderRadius="radius6"
          borderWidth={1}
          borderColor="newBorder.neutral"
          bg="newBg.neutral.subtle"
        >
          <ArrowRight16 />
        </Flex>
      </Link>
    </li>
  );
};
