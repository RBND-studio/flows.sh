import { css } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { CustomUIComponentsIllustration, EmbeddableComponentsIllustrations } from "components/ui";
import { ArrowRight16 } from "icons";
import { links } from "lib/links";
import Link from "next/link";
import { type ReactNode } from "react";
import { routes } from "routes";
import { Text } from "ui";

const cards = [
  {
    title: "Embeddable components",
    description:
      "Render inline components directly within your app’s UI. Don’t just put tooltips over your product.",
    linkUrl: routes.features.embeddableComponents,
    linkText: "Learn more",
    element: <EmbeddableComponentsIllustrations />,
  },
  {
    title: "Custom UI components",
    description:
      "Leverage our APIs and your design system for full control. Build your own components and create a native experience.",
    linkUrl: links.examples.floatinChecklistPage,
    linkText: "See example",
    element: <CustomUIComponentsIllustration />,
  },
];

export const CustomizeCards = (): ReactNode => {
  return (
    <Flex
      gap="space24"
      flexDirection="column"
      md={{
        flexDirection: "row",
        mx: "space16",
      }}
      position="relative"
    >
      {cards.map((item) => (
        <Flex
          flexDirection="column"
          h={460}
          w="100%"
          justifyContent="flex-end"
          borderRadius="radius12"
          background="pane.bg.elevated"
          borderWidth={1}
          borderColor="newBorder.neutral.placeholder"
          shadow="antimetal"
          key={item.title}
          overflow="hidden"
        >
          {item.element}
          <Flex flexDirection="column" p="space24">
            <Text as="h3" mb="space12" variant="titleL">
              {item.title}
            </Text>
            <Text mb="space24" variant="bodyM" color="newFg.neutral.muted">
              {item.description}
            </Text>
            <Link
              className={css({
                textStyle: "titleL",
                color: "newFg.neutral",
                display: "flex",
                alignItems: "center",
                gap: "space4",
                width: "fit-content",
                _hover: {
                  "& svg": {
                    transform: "translateX(4px)",
                  },
                },
                "& svg": {
                  fastEaseInOut: "transform",
                },
              })}
              href={item.linkUrl}
            >
              {item.linkText}
              <ArrowRight16 />
            </Link>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};
