import { css, cva } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { ArrowLeft16 } from "icons";
import Link from "next/link";
import type { ReactElement, ReactNode } from "react";
import { routes } from "routes";
import { Icon, Text } from "ui";

type Props = {
  title: string;
  description: string;
  slug: string;
  date: string;
  mdx: ReactNode;

  detail?: boolean;
};

export const ChangelogItem = ({ detail, mdx, ...release }: Props): ReactElement => {
  const href = routes.changelogReleaseDetail({ releaseId: release.slug });
  const date = new Date(release.date).toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const dateComponent = detail ? (
    <Box>
      <Link href={routes.changelog}>
        <Flex gap="space4" alignItems="center" mb="space8">
          <Icon icon={ArrowLeft16} />
          <Text color="newFg.neutral.muted">All releases</Text>
        </Flex>
      </Link>
      <Text color="newFg.neutral.muted">{date}</Text>
    </Box>
  ) : (
    <Link href={href}>
      <Text color="newFg.neutral.muted">{date}</Text>
    </Link>
  );

  const titleComponent = detail ? (
    <Text variant="title2xl" as="h2" className={css({ mb: "space24" })}>
      {release.title}
    </Text>
  ) : (
    <Link href={href}>
      <Text variant="title2xl" as="h2" className={css({ mb: "space24" })}>
        {release.title}
      </Text>
    </Link>
  );

  return (
    <Flex
      gap="space40"
      justifyContent="center"
      borderBottomWidth={1}
      borderBottomColor="newBorder.neutral"
      py="space64"
      mdDown={{ flexDirection: "column", py: "space40" }}
      _last={{ border: "none" }}
      className={itemStyles({ detail })}
    >
      <Box maxWidth={200} width="100%" mt="space12">
        {dateComponent}
      </Box>
      <Box maxWidth={580}>
        {titleComponent}

        {mdx}
      </Box>
    </Flex>
  );
};

const itemStyles = cva({
  base: {
    gap: "space40",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "newBorder.neutral",
    py: "space64",
    mdDown: {
      flexDirection: "column",
      py: "space40",
    },
    _last: {
      borderBottomWidth: 0,
    },
  },
  variants: {
    detail: {
      true: {
        borderBottomWidth: 0,
      },
    },
  },
});
