import type { JSX } from "react";

export function Mcp16(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      height={16}
      viewBox="0 0 16 16"
      width={16}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M7.27 2.1a2.47 2.47 0 0 1 4.19 2.1c.66-.1 1.35.07 1.9.52l.19.17.02.03c.97.96.97 2.53 0 3.5l-5.03 5.03a.16.16 0 0 0 0 .22l1.03 1.03a.5.5 0 0 1-.7.71l-1.04-1.03a1.16 1.16 0 0 1 0-1.64l5.04-5.04c.57-.57.57-1.5 0-2.07l-.03-.03-.11-.1a1.47 1.47 0 0 0-1.97.1l-4.2 4.2a.5.5 0 0 1-.71-.7l4.2-4.21a1.47 1.47 0 1 0-2.08-2.08L2.4 8.38a.5.5 0 1 1-.7-.7z"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M8.66 3.5a.5.5 0 0 1 .7.7l-4.1 4.12a1.47 1.47 0 0 0 2.08 2.08l4.12-4.12a.5.5 0 0 1 .7.71l-4.12 4.12a2.47 2.47 0 1 1-3.49-3.5z"
      />
    </svg>
  );
}
