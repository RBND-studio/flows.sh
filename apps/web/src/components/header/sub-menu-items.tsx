import { css } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { Checklist16, Graph16 } from "icons";
import Link from "next/link";
import { type ReactNode } from "react";
import { routes } from "routes";
import { Icon, Text } from "ui";

type Props = {
  close: () => void;
};

export const SolutionsSubItems = ({ close }: Props): ReactNode => {
  const solutions = [
    {
      title: "User onboarding",
      href: routes.solution.userOnboarding,
      icon: Checklist16,
      description: "Improve user activation and retention",
    },
    {
      title: "Feature adoption",
      href: routes.solution.featureAdoption,
      icon: Graph16,
      description: "Drive feature adoption and engagement",
    },
  ];

  return (
    <Flex gap="space4" direction="column">
      {solutions.map((solution) => (
        <Link
          href={solution.href}
          className={css({
            display: "flex",
            gap: "space8",
            borderRadius: "radius8",
            alignItems: "center",
            pl: "space8",
            pr: "space12",
            py: "space8",
            fastEaseInOut: "all",
            _hover: { backgroundColor: "newBg.neutral.subtle" },
          })}
          key={solution.title}
          onClick={close}
        >
          <Flex
            p="space12"
            borderRadius="radius6"
            borderWidth="1px"
            borderColor="newBorder.neutral"
            backgroundColor="newBg.neutral"
          >
            <Icon icon={solution.icon} />
          </Flex>
          <Flex flexDirection="column" gap="space2">
            <Text variant="bodyS" weight="700">
              {solution.title}
            </Text>
            <Text color="muted">{solution.description}</Text>
          </Flex>
        </Link>
      ))}
    </Flex>
  );
};
