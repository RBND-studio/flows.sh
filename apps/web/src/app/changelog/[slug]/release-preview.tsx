import { css } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { ArrowLeft16, ArrowRight16 } from "icons";
import { type ChangelogPost } from "lib/mdx";
import Link from "next/link";
import { type FC } from "react";
import { routes } from "routes";
import { Icon, Text } from "ui";

type Props = {
  release: ChangelogPost;
  variant: "prev" | "next";
};

export const ReleasePreview: FC<Props> = ({ release, variant }) => {
  const href = routes.changelogReleaseDetail({ releaseId: release.slug });

  return (
    <Link
      href={href}
      className={css({
        borderWidth: 1,
        borderColor: "newBorder.neutral",
        borderRadius: "radius8",
        p: "space12",
        display: "block",
        fastEaseInOut: "background-color",
        cursor: "pointer",
        _hover: {
          bg: "newBg.neutral",
        },
      })}
    >
      <Flex flexDirection="column" gap="space4">
        {variant === "next" && (
          <Flex gap="space4" alignItems="center">
            <Icon icon={ArrowLeft16} />
            <Text>Next</Text>
          </Flex>
        )}
        {variant === "prev" && (
          <Flex gap="space4" alignItems="center">
            <Text>Previous</Text>
            <Icon icon={ArrowRight16} />
          </Flex>
        )}
        <Flex flexDirection="column" flex="1">
          <Text as="h2" variant="bodyS" weight="600" flex="1">
            {release.title}
          </Text>
        </Flex>
      </Flex>
    </Link>
  );
};
