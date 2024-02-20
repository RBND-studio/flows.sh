import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import Image from "next/image";
import Link from "next/link";
import { Text } from "ui";

export const DocsLogo = (): JSX.Element => {
  return (
    <Flex alignItems="center" gap="space12">
      <Link
        className={css({
          fastEaseInOut: "opacity",
          "&:hover": {
            opacity: 0.7,
          },
        })}
        href="https://flows.sh"
      >
        <span className={css({ display: "flex", gap: "space8", alignItems: "center" })}>
          <Image alt="Logo" height={28} src="/docs/logo.svg" width={28} />
          <Text className={css({ color: "inherit" })} variant="bodyM" weight="700">
            Flows
          </Text>
        </span>
      </Link>
      <Box background="border.strong" height="20px" width="1px" />
      <Link
        className={css({
          color: "text.subtle!",
          fastEaseInOut: "color",
          "&:hover": {
            color: "text!",
          },
        })}
        href="/"
      >
        Docs
      </Link>
    </Flex>
  );
};
