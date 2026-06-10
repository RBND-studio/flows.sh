// cspell:words wootric

import type { JSX } from "react";

export function Wootric20(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      fill="currentColor"
      height={20}
      width={20}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        d="M10 0.5C4.76 0.5 0.5 4.76 0.5 10C0.5 15.24 4.76 19.5 10 19.5C15.24 19.5 19.5 15.24 19.5 10C19.5 4.76 15.24 0.5 10 0.5Z"
        fill="#0058ff"
      />
    </svg>
  );
}
