import { Box } from "@flows/styled-system/jsx";
import { token } from "@flows/styled-system/tokens";

export type DecoratorType =
  | "horizontal"
  | "corner"
  | "split"
  | "horizontal-flipped"
  | "horizontal-no-line"
  | "horizontal-flipped-no-line"
  | "vertical";

type Props = {
  className?: string;
  type: DecoratorType;
};

export const Decorator = ({ className, type }: Props) => {
  const decoratorElement = {
    horizontal: Horizontal,
    corner: Corner,
    split: Split,
    "horizontal-flipped": HorizontalFlipped,
    "horizontal-no-line": HorizontalNoLine,
    "horizontal-flipped-no-line": HorizontalFlippedNoLine,
    vertical: Vertical,
  }[type];

  return <Box className={className}>{decoratorElement()}</Box>;
};

const Corner = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect
        y="17"
        width="3"
        height="32"
        transform="rotate(-90 0 17)"
        fill={token("colors.pane.bg.web")}
      />
      <rect x="14" width="3" height="32" fill={token("colors.pane.bg.web")} />
      <rect
        x="15.5"
        y="15.5"
        width="163"
        height="82"
        rx="11.5"
        transform="rotate(-90 15.5 15.5)"
        stroke={token("colors.border.neutral.dark")}
      />
      <rect x="14" width="3" height="4" fill={token("colors.pane.bg.web")} />
      <rect
        x="27"
        y="17"
        width="3"
        height="5"
        transform="rotate(-90 27 17)"
        fill={token("colors.pane.bg.web")}
      />
      <rect
        y="17"
        width="3"
        height="4"
        transform="rotate(-90 0 17)"
        fill={token("colors.pane.bg.web")}
      />
    </svg>
  );
};

const Split = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="15" width="3" height="32" fill={token("colors.pane.bg.web")} />
      <rect
        x="32"
        y="14"
        width="3"
        height="32"
        transform="rotate(90 32 14)"
        fill={token("colors.pane.bg.web")}
      />
      <rect
        x="16.5"
        y="-66.5"
        width="163"
        height="82"
        rx="11.5"
        stroke={token("colors.border.neutral.dark")}
      />
      <rect
        x="-0.5"
        y="0.5"
        width="79"
        height="82"
        rx="11.5"
        transform="matrix(-1 0 0 1 16 15)"
        stroke={token("colors.border.neutral.dark")}
      />
      <rect
        x="32"
        y="14"
        width="3"
        height="4"
        transform="rotate(90 32 14)"
        fill={token("colors.pane.bg.web")}
      />
      <rect
        x="4"
        y="14"
        width="3"
        height="4"
        transform="rotate(90 4 14)"
        fill={token("colors.pane.bg.web")}
      />
      <rect x="15" y="27" width="3" height="5" fill={token("colors.pane.bg.web")} />
      <rect x="15" width="3" height="4" fill={token("colors.pane.bg.web")} />
    </svg>
  );
};

const Horizontal = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect
        y="17"
        width="3"
        height="32"
        transform="rotate(-90 0 17)"
        fill={token("colors.pane.bg.web")}
      />
      <rect x="14" width="3" height="32" fill={token("colors.pane.bg.web")} />
      <rect
        x="-66.5"
        y="15.5"
        width="163"
        height="82"
        rx="11.5"
        transform="rotate(-90 -66.5 15.5)"
        stroke={token("colors.border.neutral.dark")}
      />
      <rect
        x="15.5"
        y="15.5"
        width="163"
        height="82"
        rx="11.5"
        transform="rotate(-90 15.5 15.5)"
        stroke={token("colors.border.neutral.dark")}
      />
      <rect x="14" width="3" height="4" fill={token("colors.pane.bg.web")} />
      <rect
        x="27"
        y="17"
        width="3"
        height="5"
        transform="rotate(-90 27 17)"
        fill={token("colors.pane.bg.web")}
      />
      <rect
        y="17"
        width="3"
        height="4"
        transform="rotate(-90 0 17)"
        fill={token("colors.pane.bg.web")}
      />
    </svg>
  );
};

const HorizontalFlipped = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect
        x="32"
        y="15"
        width="3"
        height="32"
        transform="rotate(90 32 15)"
        fill={token("colors.pane.bg.web")}
      />
      <rect
        x="18"
        y="32"
        width="3"
        height="32"
        transform="rotate(-180 18 32)"
        fill={token("colors.pane.bg.web")}
      />
      <rect
        x="98.5"
        y="16.5"
        width="163"
        height="82"
        rx="11.5"
        transform="rotate(90 98.5 16.5)"
        stroke={token("colors.border.neutral.dark")}
      />
      <rect
        x="16.5"
        y="16.5"
        width="163"
        height="82"
        rx="11.5"
        transform="rotate(90 16.5 16.5)"
        stroke={token("colors.border.neutral.dark")}
      />
      <rect
        x="18"
        y="32"
        width="3"
        height="4"
        transform="rotate(-180 18 32)"
        fill={token("colors.pane.bg.web")}
      />
      <rect
        x="5"
        y="15"
        width="3"
        height="5"
        transform="rotate(90 5 15)"
        fill={token("colors.pane.bg.web")}
      />
      <rect
        x="32"
        y="15"
        width="3"
        height="4"
        transform="rotate(90 32 15)"
        fill={token("colors.pane.bg.web")}
      />
    </svg>
  );
};

const HorizontalNoLine = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect
        y="17"
        width="3"
        height="32"
        transform="rotate(-90 0 17)"
        fill={token("colors.pane.bg.web")}
      />
      <rect x="14" width="3" height="17" fill={token("colors.pane.bg.web")} />
      <rect
        x="-66.5"
        y="15.5"
        width="163"
        height="82"
        rx="11.5"
        transform="rotate(-90 -66.5 15.5)"
        stroke={token("colors.border.neutral.dark")}
      />
      <rect
        x="15.5"
        y="15.5"
        width="163"
        height="82"
        rx="11.5"
        transform="rotate(-90 15.5 15.5)"
        stroke={token("colors.border.neutral.dark")}
      />
      <rect x="14" width="3" height="4" fill={token("colors.pane.bg.web")} />
      <rect
        x="27"
        y="17"
        width="3"
        height="5"
        transform="rotate(-90 27 17)"
        fill={token("colors.pane.bg.web")}
      />
      <rect
        y="17"
        width="3"
        height="4"
        transform="rotate(-90 0 17)"
        fill={token("colors.pane.bg.web")}
      />
    </svg>
  );
};

const HorizontalFlippedNoLine = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect
        x="32"
        y="15"
        width="3"
        height="32"
        transform="rotate(90 32 15)"
        fill={token("colors.pane.bg.web")}
      />
      <rect
        x="18"
        y="32"
        width="3"
        height="17"
        transform="rotate(-180 18 32)"
        fill={token("colors.pane.bg.web")}
      />
      <rect
        x="98.5"
        y="16.5"
        width="163"
        height="82"
        rx="11.5"
        transform="rotate(90 98.5 16.5)"
        stroke={token("colors.border.neutral.dark")}
      />
      <rect
        x="16.5"
        y="16.5"
        width="163"
        height="82"
        rx="11.5"
        transform="rotate(90 16.5 16.5)"
        stroke={token("colors.border.neutral.dark")}
      />
      <rect
        x="18"
        y="32"
        width="3"
        height="4"
        transform="rotate(-180 18 32)"
        fill={token("colors.pane.bg.web")}
      />
      <rect
        x="5"
        y="15"
        width="3"
        height="5"
        transform="rotate(90 5 15)"
        fill={token("colors.pane.bg.web")}
      />
      <rect
        x="32"
        y="15"
        width="3"
        height="4"
        transform="rotate(90 32 15)"
        fill={token("colors.pane.bg.web")}
      />
    </svg>
  );
};

const Vertical = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="15" width="3" height="32" fill={token("colors.pane.bg.web")} />
      <rect
        x="32"
        y="14"
        width="3"
        height="17"
        transform="rotate(90 32 14)"
        fill={token("colors.pane.bg.web")}
      />
      <rect
        x="16.5"
        y="-66.5"
        width="163"
        height="82"
        rx="11.5"
        stroke={token("colors.border.neutral.dark")}
      />
      <rect
        x="16.5"
        y="15.5"
        width="163"
        height="82"
        rx="11.5"
        stroke={token("colors.border.neutral.dark")}
      />
      <rect
        x="32"
        y="14"
        width="3"
        height="4"
        transform="rotate(90 32 14)"
        fill={token("colors.pane.bg.web")}
      />
      <rect x="15" y="27" width="3" height="5" fill={token("colors.pane.bg.web")} />
      <rect x="15" width="3" height="4" fill={token("colors.pane.bg.web")} />
    </svg>
  );
};
