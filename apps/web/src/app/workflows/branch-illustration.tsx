import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { token } from "@flows/styled-system/tokens";
import type { SystemStyleObject } from "@flows/styled-system/types";
import type { BlockType } from "@flows/types";
import type { JSX } from "react";
import { BlockIcon, Text } from "ui";

export const BranchIllustration = (): JSX.Element => {
  return (
    <Flex
      aria-hidden="true"
      flexDirection="column"
      alignItems="center"
      w="100%"
      mb={{ base: "space24", md: 0 }}
    >
      <Flex flexDirection="column" alignItems="center" gap="space6">
        <LineArrowDown />
        <Block name="On paid plan?" type="filter" icon="filter" />
      </Flex>
      <Flex position="relative">
        <ArrowConnector className={css({ transform: "scaleX(-1)" })} />
        <ArrowConnector className={css({ ml: "-1px" })} />
        <Box
          h={10}
          w={10}
          borderRadius="50%"
          borderWidth="1px"
          borderColor="border.neutral"
          bg="bg.neutral"
          shadow="l1"
          position="absolute"
          left="50%"
          top="-4px"
          transform="translateX(-50%)"
        />
        <Badge
          text="Yes"
          css={{
            position: "absolute",
            left: "20%",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />
        <Badge
          text="No"
          css={{
            position: "absolute",
            right: "20%",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />
      </Flex>
      <Flex gap={{ base: "space16", md: "space40" }} mt="space4">
        <Block name="Feature tour" type="tour" icon="tour" />
        <Block name="Upgrade hint" type="component" icon="hint" />
      </Flex>
    </Flex>
  );
};

type BlockProps = {
  name: string;
  type: BlockType;
  icon: string;
};

const Block = ({ name, type, icon }: BlockProps): JSX.Element => {
  return (
    <Flex
      backgroundColor="bg.neutral"
      shadow="newL1"
      borderRadius="radius8"
      py="space8"
      pr="space12"
      pl="space8"
      gap="space6"
      borderWidth="1px"
      borderColor="border.neutral"
      alignItems="center"
      textWrap="nowrap"
    >
      <BlockIcon blockType={type} blockIcon={icon} />
      <Text weight="600">{name}</Text>
    </Flex>
  );
};

const LineArrowDown = (): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="25" viewBox="0 0 8 25" fill="none">
      <path
        d="M3.33 24.35c.2.2.51.2.7 0l3.19-3.18a.5.5 0 1 0-.71-.7l-2.83 2.82-2.83-2.83a.5.5 0 1 0-.7.71zM3.68 0h-.5v24h1V0z"
        fill="url(#wf-branch-gradient)"
      />
      <defs>
        <linearGradient
          id="wf-branch-gradient"
          x1="4.18164"
          y1="-2.18557e-08"
          x2="4.18164"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={token.var("colors.border.neutral.strong")} stopOpacity="0" />
          <stop offset="1" stopColor={token.var("colors.border.neutral.strong")} />
        </linearGradient>
      </defs>
    </svg>
  );
};

const Badge = ({
  text,
  className,
  css: cssProp,
}: {
  text: string;
  className?: string;
  /** Style overrides, merged with the component's own styles so they win without `!` */
  css?: SystemStyleObject;
}): JSX.Element => {
  return (
    <Flex
      className={className}
      css={cssProp}
      backgroundColor="bg.neutral"
      shadow="newL1"
      borderRadius="radius8"
      px="space4"
      py="space2"
      borderWidth="1px"
      borderColor="border.neutral"
    >
      <Text variant="bodyXs" fontFamily="monospace">
        {text}
      </Text>
    </Flex>
  );
};

const ArrowConnector = ({ className }: { className?: string }): JSX.Element => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="102"
      height="45"
      viewBox="0 0 102 45"
      fill={token.var("colors.border.neutral.strong")}
    >
      <path d="M97.85 44.35a.5.5 0 0 1-.7 0l-3.19-3.18a.5.5 0 1 1 .71-.7l2.83 2.82 2.83-2.83a.5.5 0 0 1 .7.71zM.5 0H1v18H0V0zm4 22v-.5h89v1h-89zm93 4h.5v18h-1V26zm-4-4v-.5A4.5 4.5 0 0 1 98 26h-1a3.5 3.5 0 0 0-3.5-3.5zm-93-4H1a3.5 3.5 0 0 0 3.5 3.5v1A4.5 4.5 0 0 1 0 18z" />
    </svg>
  );
};
