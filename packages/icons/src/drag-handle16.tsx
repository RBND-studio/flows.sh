import type { FC, SVGProps } from "react";

export const DragHandle16: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    fill="currentColor"
    height={16}
    viewBox="0 0 8 16"
    width={8}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M1.5 2.5a1 1 0 0 0-1 1V4a1 1 0 0 0 1 1H2a1 1 0 0 0 1-1v-.5a1 1 0 0 0-1-1z" />
    <path d="M1.5 6.75a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1H2a1 1 0 0 0 1-1v-.5a1 1 0 0 0-1-1z" />
    <path d="M.5 12a1 1 0 0 1 1-1H2a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1z" />
    <path d="M6 2.5a1 1 0 0 0-1 1V4a1 1 0 0 0 1 1h.5a1 1 0 0 0 1-1v-.5a1 1 0 0 0-1-1z" />
    <path d="M5 7.75a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" />
    <path d="M6 11a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1h.5a1 1 0 0 0 1-1V12a1 1 0 0 0-1-1z" />
  </svg>
);
