import { Box, Flex } from "@flows/styled-system/jsx";
import { type ReactNode } from "react";

import {
  BlueTooltip,
  GreenTooltip,
  NormalTooltip,
  SaleDialog,
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
];

const WIDTH = (180 + 24) * (elements.length * 2);

export const CustomUIComponentsIllustration = (): ReactNode => {
  return (
    <Box
      h="100%"
      overflow="hidden"
      py="space24"
      role="img"
      layerStyle="dotBackground"
      maskImage="linear-gradient(
                rgb(0, 0, 0) 70%,
                rgba(0, 0, 0, 0.886) 76.6%,
                rgba(0, 0, 0, 0.733) 81.4%, 
                rgba(0, 0, 0, 0.557) 85.3%,
                rgba(0, 0, 0, 0.376) 88.3%,
                rgba(0, 0, 0, 0.21) 91%, 
                rgba(0, 0, 0, 0.082) 94%, 
                rgba(0, 0, 0, 0.01) 97.6%,
                rgba(0, 0, 0, 0) 100%)"
    >
      <Flex
        alignItems="center"
        width="100%"
        height="100%"
        borderRadius={6}
        p="space12"
        gap="space24"
        overflow="hidden"
        aria-hidden="true"
      >
        <Flex
          style={{
            width: `${WIDTH}px`,
          }}
          flexShrink="0"
          animation="teleprompter 20s linear infinite"
          alignItems="center"
        >
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
