import type { JSX } from "react";

export function Solid16(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="currentColor" height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        opacity="0.7"
        d="m4.83 3.72-.4.1c-1.71.5-2.22 2.12-1.31 3.53 1 1.3 3.12 2 4.83 1.5l6.24-2.1S8.86 2.81 4.83 3.71"
      />
      <path
        opacity="0.5"
        d="M6.54.7C10.66-.2 16 3.72 16 3.72l-1.81 3.02c-.05-.03-5.35-3.92-9.36-3.02l-.4.1q-.85.26-1.3.81h-.01L4.62 2l.21-.3c.3-.4.8-.7 1.4-.9z"
      />
      <path
        opacity="0.8"
        d="M11.07 11.77a4.5 4.5 0 0 0-4.83-1.5l-6.24 2s5.33 4.03 9.46 3.02l.3-.1c1.71-.5 2.32-2.1 1.3-3.42"
      />
      <path d="M8.25 6.74a4.5 4.5 0 0 1 4.83 1.51c.5.8.6 1.61.2 2.32l-2 3.62h-.05c.47-.71.45-1.62-.16-2.42a4.5 4.5 0 0 0-4.83-1.5l-6.24 2 2.01-3.52z" />
    </svg>
  );
}
