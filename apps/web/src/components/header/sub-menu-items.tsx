import { css } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { Addon16, Banner16, Checklist16, Graph16, Upgrade16 } from "icons";
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
      href: routes.solutions.userOnboarding,
      icon: Checklist16,
      description: "Improve user activation and retention",
    },
    {
      title: "Feature adoption",
      href: routes.solutions.featureAdoption,
      icon: Graph16,
      description: "Drive feature adoption and engagement",
    },
    {
      title: "Product-led growth",
      href: routes.solutions.productLedGrowth,
      icon: Upgrade16,
      description: "Build growth loops to drive company KPIs",
    },
    {
      title: "Revenue expansion",
      href: routes.solutions.revenueExpansion,
      icon: Addon16,
      description: "Convert free trials to paying customers",
    },
    {
      title: "Product marketing",
      href: routes.solutions.productMarketing,
      icon: Banner16,
      description: "Launch in-app campaigns without engineering help",
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
            <Text color="newFg.neutral.muted">{solution.description}</Text>
          </Flex>
        </Link>
      ))}
    </Flex>
  );
};
