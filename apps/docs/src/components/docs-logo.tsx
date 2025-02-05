import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import type { JSX } from "react";
import { Logo } from "ui";

export const DocsLogo = (): JSX.Element => {
  return (
    <Flex alignItems="center" gap="space12">
      <Logo type="type" size={20} />
      <Box background="border.strong" height="20px" width="1px" />
      <p
        className={css({
          color: "text.subtle!",
          fastEaseInOut: "color",
          "&:hover": {
            color: "text!",
          },
        })}
      >
        Docs
      </p>
    </Flex>
  );
};
