import { css, cva } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { Section } from "components/ui/section";
import { Decorator } from "components/ui/section/decorator";
import type { FC, ReactNode } from "react";
import { Icon, Text } from "ui";

type FeatureBentoWrapperProps = {
  children: ReactNode;
};

export const FeatureBentoWrapper = ({ children }: FeatureBentoWrapperProps): ReactNode => {
  return (
    <Section bottomBorder sideBorders decorator="split" sideDots>
      {children}
    </Section>
  );
};

export type FeatureBentoProps = {
  icon: FC<React.SVGProps<SVGSVGElement>>;
  headingLevel?: "h2" | "h3" | "h4" | "h5" | "h6";
  title: ReactNode;
  description: ReactNode;
  visual?: ReactNode;
  separator?: boolean;
  visualWrapperClassName?: string;
};

export const FeatureBento = ({
  icon,
  title,
  headingLevel = "h3",
  description,
  visual,
  separator,
  visualWrapperClassName,
}: FeatureBentoProps): ReactNode => {
  return (
    <Flex flexDirection="column" flex={1} overflow="hidden" className={separatorCss({ separator })}>
      <Flex
        flexDirection="column"
        mb="space32"
        pt={{ base: "space24", md: "space40" }}
        px={{ base: "space24", md: "space40" }}
      >
        <Icon icon={icon} />
        <Text as={headingLevel} variant="bodyM" fontWeight="800" mt="space12">
          {title}
        </Text>
        <Text variant="bodyM" maxW={500} mt="space2">
          {description}
        </Text>
      </Flex>

      {visual && (
        <Flex
          px={{ base: "space24", md: "space40" }}
          maxH={240}
          h="100%"
          className={visualWrapperClassName}
        >
          {visual}
        </Flex>
      )}
    </Flex>
  );
};

const separatorCss = cva({
  base: {},
  variants: {
    separator: {
      true: {
        borderRightWidth: { base: 0, md: 1 },
        borderBottomWidth: { base: 1, md: 0 },
        borderColor: "border.neutral",
      },
    },
  },
});

type DoubleFeatureBentoProps = {
  firstFeature: FeatureBentoProps;
  secondFeature: FeatureBentoProps;
};

export const DoubleFeatureBento = ({
  firstFeature,
  secondFeature,
}: DoubleFeatureBentoProps): ReactNode => {
  return (
    <Flex flexDirection={{ base: "column", md: "row" }}>
      <FeatureBento separator {...firstFeature} />
      <Flex
        justifyContent="space-between"
        mx="-space16"
        alignItems="center"
        pointerEvents="none"
        zIndex={1}
        h={0}
        display={{ base: "flex", md: "none" }}
      >
        <Decorator type="vertical" />
        <Decorator type="vertical" className={css({ transform: "scaleX(-1)" })} />
      </Flex>
      <FeatureBento {...secondFeature} />
    </Flex>
  );
};

export const HorizontalBentoSeparator = () => {
  return (
    <Flex
      justifyContent="space-between"
      h={1}
      mx="-space16"
      alignItems="center"
      pointerEvents="none"
      zIndex={1}
      position="relative"
    >
      <Decorator type="vertical" />
      <Box width="calc(100% - 32px)" height="1px" backgroundColor="border.neutral" />
      <Decorator type="vertical" className={css({ transform: "scaleX(-1)" })} />
    </Flex>
  );
};
