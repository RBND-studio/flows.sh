import type { JSX } from "react";

export function Delay16(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="currentColor" height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0m7-3.25v3l2.03.8a.75.75 0 0 1-.56 1.4l-2.5-1a.8.8 0 0 1-.47-.7v-3.5a.75.75 0 0 1 1.5 0" />
    </svg>
  );
}
