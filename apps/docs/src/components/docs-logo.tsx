import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import Link from "next/link";
import type { JSX } from "react";
import { links } from "shared";
import { Logo } from "ui";

import { DOMAIN } from "../lib/constants";

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
        href={links(DOMAIN).homePage}
      >
        <Logo type="type" size={20} />
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
