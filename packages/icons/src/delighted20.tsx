import type { JSX } from "react";

export function Delighted20(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      fill="currentColor"
      height={20}
      width={20}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      {...props}
    >
      <path d="M10 .5a9.5 9.5 0 1 0 .02 19.02A9.5 9.5 0 0 0 10 .5" fill="#212121" />
    </svg>
  );
}
