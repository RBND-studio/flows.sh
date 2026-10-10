// cSpell:words Apty
import type { JSX } from "react";

export function Apty20(props: React.SVGProps<SVGSVGElement>): JSX.Element {
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
        d="M10.5 10.15q.72.01 1.74.16v1.53q0 1.83-2.17 1.84h-.03q-2.28 0-2.28-1.95 0-1.58 2.74-1.58"
        fill="#F05029"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20m-.18 3.75q-2.05 0-3.73.62v2.4q1.51-.62 3.56-.62 2.57 0 2.57 2.3-1.14-.15-2.13-.16-1.4 0-2.42.32-1.02.3-1.55.75-.53.44-.83 1.02t-.37.97-.08.75q0 1.72 1.27 2.94 1.28 1.2 3.96 1.21 2.58 0 3.84-1.2a4 4 0 0 0 1.25-2.88V8.9q0-2.5-1.38-3.83-1.37-1.32-3.96-1.32"
        fill="#F05029"
      />
    </svg>
  );
}
