import type { JSX } from "react";

export function BlockPlus16(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="currentColor" height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 3.75A2.25 2.25 0 0 1 3.75 1.5H6.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zM3.75 3a.75.75 0 0 0-.75.75V6h3V3z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 12.25a2.25 2.25 0 0 0 2.25 2.25H6.5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1zm2.25.75a.75.75 0 0 1-.75-.75V10h3v3z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.25 14.5a2.25 2.25 0 0 0 2.25-2.25V9.5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1zm.75-2.25a.75.75 0 0 1-.75.75H10v-3h3z"
      />
      <path d="M11.5 1.5a.75.75 0 0 1 .75.75v1.5h1.5a.75.75 0 1 1 0 1.5h-1.5v1.5a.75.75 0 1 1-1.5 0v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5v-1.5a.75.75 0 0 1 .75-.75" />
    </svg>
  );
}
