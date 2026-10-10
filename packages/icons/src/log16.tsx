import type { JSX } from "react";

export function Log16(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="currentColor" height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M2 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
      <path d="M2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
      <path d="M3 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
      <path d="M5.25 2.25a.75.75 0 0 0 0 1.5h9a.75.75 0 1 0 0-1.5z" />
      <path d="M4.5 8a.75.75 0 0 1 .75-.75h9a.75.75 0 1 1 0 1.5h-9A.75.75 0 0 1 4.5 8" />
      <path d="M5.25 12.25a.75.75 0 1 0 0 1.5h9a.75.75 0 1 0 0-1.5z" />
    </svg>
  );
}
