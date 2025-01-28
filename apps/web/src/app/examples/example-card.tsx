import { css } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import Link from "next/link";
import { type FC, type ReactNode, type SVGProps } from "react";
import { Icon, Text } from "ui";

type Props = {
  title: string;
  description: string;
  href: string;
  icon: FC<SVGProps<SVGSVGElement>>;
};

export const ExampleCard = ({ title, description, href, icon }: Props): ReactNode => {
  return (
    <Link
      href={href}
      className={css({
        shadow: "newL1",
        borderRadius: "radius8",
        borderWidth: "1px",
        borderColor: "pane.border.elevated",
        backgroundColor: "pane.bg.elevated",
        fastEaseInOut: "all",
        overflow: "hidden",

        _hover: {
          shadow: "newL2",
          borderColor: "newBorder.neutral.strong",
        },
      })}
    >
      <Flex
        py="space40"
        justifyContent="center"
        alignItems="center"
        layerStyle="dotBackground"
        borderBottomWidth="1px"
        borderBottomColor="newBorder.neutral"
      >
        <Flex
          p="space12"
          backgroundColor="newBg.neutral"
          borderRadius="radius8"
          shadow="newL1"
          borderWidth="1px"
          borderColor="newBorder.neutral"
        >
          <Icon icon={icon} color="newFg.neutral" />
        </Flex>
      </Flex>
      <Flex p="12" gap="space4" flexDirection="column">
        <Text weight="600">{title}</Text>
        <Text variant="bodyXs" color="muted">
          {description}
        </Text>
      </Flex>
    </Link>
  );
};
