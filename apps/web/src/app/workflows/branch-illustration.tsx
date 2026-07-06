import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { token } from "@flows/styled-system/tokens";
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
          className={css({
            position: "absolute",
            left: "20%",
            top: "50%",
            transform: "translateY(-50%)",
          })}
        />
        <Badge
          text="No"
          className={css({
            position: "absolute",
            right: "20%",
            top: "50%",
            transform: "translateY(-50%)",
          })}
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
        d="M3.32809 24.3536C3.52335 24.5488 3.83993 24.5488 4.0352 24.3536L7.21718 21.1716C7.41244 20.9763 7.41244 20.6597 7.21718 20.4645C7.02191 20.2692 6.70533 20.2692 6.51007 20.4645L3.68164 23.2929L0.853214 20.4645C0.657952 20.2692 0.34137 20.2692 0.146108 20.4645C-0.0491546 20.6597 -0.0491546 20.9763 0.146108 21.1716L3.32809 24.3536ZM3.68164 0L3.18164 2.18557e-08L3.18164 24L3.68164 24L4.18164 24L4.18164 -2.18557e-08L3.68164 0Z"
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

const Badge = ({ text, className }: { text: string; className?: string }): JSX.Element => {
  return (
    <Flex
      className={className}
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
      <path d="M97.8536 44.3536C97.6583 44.5488 97.3417 44.5488 97.1464 44.3536L93.9645 41.1716C93.7692 40.9763 93.7692 40.6597 93.9645 40.4645C94.1597 40.2692 94.4763 40.2692 94.6716 40.4645L97.5 43.2929L100.328 40.4645C100.524 40.2692 100.84 40.2692 101.036 40.4645C101.231 40.6597 101.231 40.9763 101.036 41.1716L97.8536 44.3536ZM0.5 0H1V18H0.5H0V0H0.5ZM4.5 22V21.5H93.5V22V22.5H4.5V22ZM97.5 26H98V44H97.5H97V26H97.5ZM93.5 22V21.5C95.9853 21.5 98 23.5147 98 26H97.5H97C97 24.067 95.433 22.5 93.5 22.5V22ZM0.5 18H1C1 19.933 2.567 21.5 4.5 21.5V22V22.5C2.01472 22.5 0 20.4853 0 18H0.5Z" />
    </svg>
  );
};
