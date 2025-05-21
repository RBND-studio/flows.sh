import { css } from "@flows/styled-system/css";
import { Box } from "@flows/styled-system/jsx";
import Link from "next/link";
import { type ReactNode } from "react";
import { Button, Text } from "ui";

type Props = {
  title: string;
  description: string;
  viz: ReactNode;
  linkUrl: string;
};

export const SolutionCard = ({ title, description, viz, linkUrl }: Props): ReactNode => {
  return (
    <Box
      bg="pane.bg.elevated"
      borderWidth={1}
      borderColor="newBorder.neutral.placeholder"
      borderRadius="radius12"
      shadow="antimetal"
    >
      {viz}
      <Box
        p="space16"
        md={{
          p: "space24",
        }}
      >
        <Text mb="space12" variant="titleL">
          {title}
        </Text>
        <Text mb="space16" variant="bodyM" color="newFg.neutral.muted">
          {description}
        </Text>
        <Button variant="secondary" asChild size="large">
          <Link
            className={css({
              width: "100%",
            })}
            href={linkUrl}
          >
            View solution
          </Link>
        </Button>
      </Box>
    </Box>
  );
};
