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
        d="M0 6.80019C0 4.67349 0.837887 3.57129 2.25005 3.57129C3.66199 3.57129 4.50011 4.67349 4.50011 6.80019V13.2427C4.50011 15.3694 3.66221 16.4716 2.25005 16.4716C0.837887 16.4716 0 15.3694 0 13.2427V6.80019ZM15.1573 3.57129H10.5067C6.33446 3.57129 6.0056 5.37308 6.0056 7.77546L6.00012 12.2612C6.00012 14.7659 6.31441 16.4716 10.5229 16.4716H15.1573C19.3429 16.4716 19.6505 14.6761 19.6505 12.2737V7.78172C19.6505 5.37307 19.3295 3.57129 15.1573 3.57129Z"
      />
    </svg>
  );
}
