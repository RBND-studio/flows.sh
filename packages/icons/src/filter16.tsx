import type { JSX } from "react";

export function Filter16(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="currentColor" height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1 4a.75.75 0 0 1 .75-.75h12.5a.75.75 0 1 1 0 1.5H1.75A.75.75 0 0 1 1 4" />
      <path d="M4.75 12a.75.75 0 0 1 .75-.75h5a.75.75 0 1 1 0 1.5h-5a.75.75 0 0 1-.75-.75" />
      <path d="M3.5 7.25a.75.75 0 0 0 0 1.5h9a.75.75 0 1 0 0-1.5z" />
    </svg>
  );
}
