import { Box, Flex } from "@flows/styled-system/jsx";
import { type ReactNode } from "react";

import {
  BlueTooltip,
  GreenTooltip,
  NormalTooltip,
  SaleDialog,
  YellowTooltip,
} from "./custom-ui-components-elements";

const elements = [
  {
    element: <NormalTooltip />,
  },
  {
    element: <GreenTooltip />,
  },
  {
    element: <SaleDialog />,
  },
  {
    element: <BlueTooltip />,
  },
  {
    element: <YellowTooltip />,
  },
];

export const CustomUIComponentsIllustration = ({
  className,
}: {
  className?: string;
}): ReactNode => {
  return (
    <Box
      h="100%"
      className={className}
      py="space24"
      role="img"
      aria-label="Illustration of multiple custom UI components including tooltips and a sale dialog, arranged in a horizontal carousel"
    >
      <Flex
        alignItems="center"
        width="100%"
        height="100%"
        borderRadius={6}
        p="space12"
        gap="space24"
        aria-hidden="true"
      >
        <Flex flexShrink="0" animation="teleprompter 20s linear infinite" alignItems="center">
          {elements.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key -- no better key
            <ElementWrap key={index}>{item.element}</ElementWrap>
          ))}
          {elements.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key -- no better key
            <ElementWrap key={index}>{item.element}</ElementWrap>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

const ElementWrap = ({ children }: { children: ReactNode }): ReactNode => {
  return <Flex px="space12">{children}</Flex>;
};
