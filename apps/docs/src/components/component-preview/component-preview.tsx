"use client";

import "@flows/react-components/index.css";

import { Flex } from "@flows/styled-system/jsx";
import { type ReactNode } from "react";

import { CardDemo } from "./card-demo";
import { HintDemo } from "./hint-demo";
import { ModalDemo } from "./modal-demo";
import { TooltipDemo } from "./tooltip-demo";

type Props = {
  component?:
    | "tooltip"
    | "modal"
    | "hint"
    | "tourTooltip"
    | "tourModal"
    | "tourHint"
    | "card"
    | "tourCard";
};

const components = {
  tooltip: <TooltipDemo />,
  modal: <ModalDemo />,
  hint: <HintDemo />,
  tourTooltip: <TooltipDemo tour />,
  tourModal: <ModalDemo tour />,
  tourHint: <HintDemo tour />,
  card: <CardDemo />,
  tourCard: <CardDemo tour />,
};

export const ComponentPreview = ({ component = "tooltip" }: Props): ReactNode => {
  return (
    <Flex
      py="space80"
      px="space32"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      position="relative"
      layerStyle="dotBackground"
      borderRadius="radius8"
      borderWidth="1px"
      borderColor="newBorder.neutral"
      mb="space24"
    >
      {components[component]}
    </Flex>
  );
};
