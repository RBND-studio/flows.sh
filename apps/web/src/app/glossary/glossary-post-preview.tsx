import { css, cx } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { ArrowRight16 } from "icons";
import { type GlossaryPost } from "lib/mdx";
import Link from "next/link";
import { type FC } from "react";
import { routes } from "routes";
import { Text } from "ui";

type Props = {
  post: GlossaryPost;
};

export const GlossaryPostPreview: FC<Props> = ({ post }) => {
  return (
    <Link
      href={routes.glossaryPostDetail({ slug: post.slug })}
      className={cx(
        css({
          p: "space24",
          borderBottomWidth: 1,
          borderBottomColor: "newBorder.neutral.placeholder",
          fastEaseInOut: "background-color",
          _last: { borderBottomWidth: 0 },
          _hover: { backgroundColor: "newBg.neutral.muted" },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "space24",
        }),
        "group",
      )}
    >
      <Box>
        <Text variant="titleM" mb="space4">
          {post.title}
        </Text>
        <Text variant="bodyS" color="newFg.neutral.muted" textWrap="balance">
          {post.description}
        </Text>
      </Box>
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
  );
};
