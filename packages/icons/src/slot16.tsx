import type { JSX } from "react";

export function Slot16(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      height={16}
      viewBox="0 0 16 16"
      width={16}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M3 4.25C3 3.56 3.56 3 4.25 3h2a.75.75 0 0 0 0-1.5h-2A2.75 2.75 0 0 0 1.5 4.25v2a.75.75 0 0 0 1.5 0z" />
      <path d="M11.75 3c.69 0 1.25.56 1.25 1.25v2a.75.75 0 1 0 1.5 0v-2a2.75 2.75 0 0 0-2.75-2.75h-2a.75.75 0 0 0 0 1.5z" />
      <path d="M11.75 13c.69 0 1.25-.56 1.25-1.25v-2a.75.75 0 1 1 1.5 0v2a2.75 2.75 0 0 1-2.75 2.75h-2a.75.75 0 1 1 0-1.5z" />
      <path d="M4.25 13C3.56 13 3 12.44 3 11.75v-2a.75.75 0 0 0-1.5 0v2a2.75 2.75 0 0 0 2.75 2.75h2a.75.75 0 1 0 0-1.5z" />
    </svg>
  );
}
