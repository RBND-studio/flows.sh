import { css, cx } from "@flows/styled-system/css";
import { Box } from "@flows/styled-system/jsx";
import Link from "next/link";
import { type ReactNode } from "react";
import { Text } from "ui";

type Props = {
  title: string;
  description: string;
  viz: ReactNode;
  linkUrl: string;
};

export const SolutionCard = ({ title, description, viz, linkUrl }: Props): ReactNode => {
  return (
    <Link
      href={linkUrl}
      aria-label={`View solution for ${title}`}
      className={cx(
        css({
          bg: "pane.bg.elevated",
          borderWidth: "1px",
          borderColor: "newBorder.neutral.placeholder",
          borderRadius: "radius12",
          shadow: "antimetal",
          fastEaseInOut: "all",
          _hover: {
            borderColor: "newBorder.neutral.strong",
          },
        }),
        "group",
      )}
    >
      {viz}
      <Box
        p="space16"
        md={{
          p: "space24",
        }}
      >
        <Text
          mb="space12"
          variant="titleL"
          fastEaseInOut="color"
          _groupHover={{
            color: "newFg.primary",
          }}
        >
          {title}
        </Text>
        <Text mb="space16" variant="bodyM" color="newFg.neutral.muted">
          {description}
        </Text>
      </Box>
    </Link>
  );
};
