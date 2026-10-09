import type { JSX } from "react";

export function Alert16(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="currentColor" height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M8 4.75a.75.75 0 0 1 .75.75V9a.75.75 0 0 1-1.5 0V5.5A.75.75 0 0 1 8 4.75" />
      <path d="M9 11.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 1.5c-1.04 0-1.78.7-2.15 1.45l-2 3.84-.03.06L1.8 10.7a2.6 2.6 0 0 0 .09 2.62c.57.86 1.54 1.18 2.46 1.18h7.28c.92 0 1.9-.32 2.46-1.18a2.6 2.6 0 0 0 .1-2.62l-2.01-3.84-.03-.07q-1.02-1.91-2-3.84A2.4 2.4 0 0 0 8 1.5m-.8 2.11c.4-.81 1.2-.81 1.6 0l2.03 3.88 2.02 3.88c.4.81 0 1.63-1.21 1.63H4.36c-1.2 0-1.61-.82-1.2-1.63.2-.41 1.1-2.15 2.02-3.89q1.01-1.92 2.01-3.87"
      />
    </svg>
  );
}
