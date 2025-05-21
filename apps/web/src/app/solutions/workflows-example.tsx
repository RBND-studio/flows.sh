import { Box, Flex } from "@flows/styled-system/jsx";
import { token } from "@flows/styled-system/tokens";
import type { JSX } from "react";
import { BlockIcon, Text } from "ui";

export const WorkflowsExample = (): JSX.Element => {
  return (
    <Flex aria-hidden="true" flexDirection="column" alignItems="center">
      <Flex alignItems="flex-start">
        <Flex flexDirection="column" alignItems="center">
          <Block name="Start" type="start" icon="start" />
          <LineArrowDown />
          <Block name="Welcome modal" type="component" icon="modal" />
          <LineArrowDown />
          <Block name="Onboarding tour" type="tour" icon="tour" />
          <LineArrowDown />
          <Block name="Has paid plan?" type="filter" icon="filter" />
          <LineArrowDown />
          <Block name="End" type="end" icon="end" />
        </Flex>
        <Flex mt={187} ml={-5}>
          <Box my={13}>
            <LineArrowRight />
          </Box>
          <Flex flexDirection="column" alignItems="center">
            <Block name="Upsell banner" type="component" icon="banner" />
            <LineArrowDown />
            <Block name="End" type="end" icon="end" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

type BlockProps = {
  name: string;
  type: string;
  icon: string;
};

const Block = ({ name, type, icon }: BlockProps): JSX.Element => {
  return (
    <Flex
      backgroundColor="newBg.neutral"
      shadow="newL1"
      borderRadius="radius8"
      py="10px"
      pr="12px"
      pl="10px"
      gap="space8"
      borderWidth="1px"
      borderColor="newBorder.neutral"
      alignItems="center"
    >
      <BlockIcon blockType={type} blockIcon={icon} />
      <Text weight="600">{name}</Text>
    </Flex>
  );
};

const LineArrowDown = (): JSX.Element => {
  return (
    <svg viewBox="0 0 16 20" width="16" height="20">
      <defs>
        <marker
          id="arrow"
          viewBox="0 0 6 10"
          refX="6"
          refY="5"
          markerUnits="strokeWidth"
          markerWidth="6"
          markerHeight="10"
          orient="auto"
        >
          <path d="M0,0 L0,10 L6,5 z" fill={token.var("colors.newBorder.neutral.strong")} />
        </marker>
        <marker
          id="circle"
          viewBox="0 0 10 10"
          refX="5"
          refY="5"
          markerUnits="strokeWidth"
          markerWidth="10"
          markerHeight="10"
          orient="auto"
        >
          <circle cx="5" cy="5" r="5" fill={token.var("colors.newBorder.neutral.strong")} />
        </marker>
      </defs>
      <line
        stroke={token.var("colors.newBorder.neutral.strong")}
        x1={8}
        y1={0}
        x2={8}
        y2={20}
        markerStart="url(#circle)"
        markerEnd="url(#arrow)"
      />
    </svg>
  );
};

const LineArrowRight = (): JSX.Element => {
  return (
    <svg viewBox="0 0 24 16" width="24" height="16">
      <defs>
        <marker
          id="arrow"
          viewBox="0 0 10 6"
          refX="5"
          refY="3"
          markerUnits="strokeWidth"
          markerWidth="10"
          markerHeight="6"
          orient="auto"
        >
          <path d="M0,0 L10,3 L0,6 z" fill={token.var("colors.newBorder.neutral.strong")} />
        </marker>
        <marker
          id="circle"
          viewBox="0 0 10 10"
          refX="5"
          refY="5"
          markerUnits="strokeWidth"
          markerWidth="10"
          markerHeight="10"
          orient="auto"
        >
          <circle cx="5" cy="5" r="5" fill={token.var("colors.newBorder.neutral.strong")} />
        </marker>
      </defs>
      <line
        stroke={token.var("colors.newBorder.neutral.strong")}
        x1={0}
        y1={8}
        x2={24}
        y2={8}
        markerStart="url(#circle)"
        markerEnd="url(#arrow)"
      />
    </svg>
  );
};
