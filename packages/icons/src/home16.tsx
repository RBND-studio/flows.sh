import type { JSX } from "react";

export function Home16(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="currentColor" height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.34 1.7a2.25 2.25 0 0 1 3.32 0l3.85 4.18c.64.7.99 1.6.99 2.54v3.33a2.75 2.75 0 0 1-2.75 2.75H10A1.5 1.5 0 0 1 8.5 13v-2h-1v2A1.5 1.5 0 0 1 6 14.5H4.25a2.75 2.75 0 0 1-2.75-2.75V8.42c0-.94.35-1.85.99-2.54zm2.21 1a.75.75 0 0 0-1.1 0L3.59 6.9c-.38.4-.59.96-.59 1.52v3.33c0 .69.56 1.25 1.25 1.25H6v-2a1.5 1.5 0 0 1 1.5-1.5h1A1.5 1.5 0 0 1 10 11v2h1.75c.69 0 1.25-.56 1.25-1.25V8.42c0-.56-.21-1.1-.6-1.52z"
      />
    </svg>
  );
}
