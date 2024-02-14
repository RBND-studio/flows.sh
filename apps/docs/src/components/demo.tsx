import { endFlow, startFlow } from "@flows/js";
import { Box, Flex } from "@flows/styled-system/jsx";
import { type FC, useEffect } from "react";

import { useFirstRender } from "../hooks/use-first-render";

type Props = {
  variant: "tooltip" | "modal";
};

export const Demo: FC<Props> = ({ variant }) => {
  const firstRender = useFirstRender();

  useEffect(() => {
    if (firstRender) return;

    startFlow(variant);

    return () => {
      endFlow(variant);
    };
  }, [firstRender, variant]);

  if (variant === "tooltip")
    return (
      <Flex
        alignItems="center"
        bor="1px"
        className="tooltip-root"
        h="200px"
        overflow="hidden"
        p="space32"
        rounded="radius8"
        transform="translate3d(0,0,0)"
      >
        <Box bg="bg.primary" className="tooltip-target" h="16px" rounded="radius100" w="16px" />
      </Flex>
    );

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- ignore
  if (variant === "modal")
    return <Box className="modal-root" height="240px" transform="translate3d(0,0,0)" />;

  return null;
};
