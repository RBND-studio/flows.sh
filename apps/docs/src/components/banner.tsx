import { css } from "@flows/styled-system/css";
import { Box } from "@flows/styled-system/jsx";
import { Close16 } from "icons";
import { type ReactNode } from "react";
import { Icon } from "ui";

type Props = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonLink: string;
  hideCloseButton?: boolean;
  complete?: () => void;
  close?: () => void;
};

export const Banner = (props: Props): ReactNode => {
  return (
    <Box
      mt="space16"
      p="space32"
      borderRadius="radius8"
      borderWidth="1px!"
      borderColor="newBorder.neutral!"
      layerStyle="dotBackground"
    >
      <div className={wrap}>
        <div className={flex}>
          <h2>{props.title}</h2>
          {!props.hideCloseButton && (
            <button type="button" onClick={props.close}>
              <Icon icon={Close16} />
            </button>
          )}
        </div>
        <div className={flex}>
          <p>{props.description}</p>
          <a onClick={props.complete} className={buttonClassName} href={props.buttonLink}>
            {props.buttonLabel}
          </a>
        </div>
      </div>
    </Box>
  );
};

const wrap = css({
  color: "newFg.neutral",
  backgroundColor: "pane.bg.elevated",
  borderWidth: "1px!",
  borderColor: "pane.border.elevated!",
  borderRadius: "6px!",

  p: "space12",

  shadow: "newL1",
  textStyle: "bodyS!",

  "& h2": {
    textStyle: "titleS!",
  },

  "& p": {
    maxWidth: "400px",
  },
});

const buttonClassName = css({
  padding: "space4!",
  backgroundColor: "button.black.bg.rest",
  color: "button.black.fg.rest!",
  fontWeight: "600",
  borderRadius: "6px",
  cursor: "pointer",
  fastEaseInOut: "all",

  _hover: {
    backgroundColor: "button.black.bg.hover",
    borderColor: "button.black.border.hover",
    shadow: "newL1",
  },
});

const flex = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "space12",
});
