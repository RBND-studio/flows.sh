// cspell:words typeform

import type { JSX } from "react";

export function Typeform20(props: React.SVGProps<SVGSVGElement>): JSX.Element {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 6.8c0-2.13.84-3.23 2.25-3.23S4.5 4.67 4.5 6.8v6.44c0 2.13-.84 3.23-2.25 3.23S0 15.37 0 13.24zm15.16-3.23H10.5c-4.18 0-4.5 1.8-4.5 4.2v4.51c0 2.5.31 4.2 4.52 4.2h4.64c4.18 0 4.5-1.8 4.5-4.2v-4.5c0-2.4-.33-4.2-4.5-4.2"
      />
    </svg>
  );
}
