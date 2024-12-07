import { Flex } from "@flows/styled-system/jsx";
import React, { type JSX } from "react";

import { PlaceholderSidebar } from "./placeholder-sidebar";

type Props = {
  children?: React.ReactNode;
};

export const PlaceholderApplication = ({ children }: Props): JSX.Element => {
  return (
    <Flex
      gap="space12"
      p="space12"
      background="pane.bg.secondary"
      maxWidth={1000}
      width="100%"
      height="100%"
      mdDown={{ flexDirection: "column" }}
      role="img"
      layerStyle="card"
    >
      <PlaceholderSidebar />
      {children}
    </Flex>
  );
};
