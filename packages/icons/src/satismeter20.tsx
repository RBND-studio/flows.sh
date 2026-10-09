// cspell:words satismeter

import type { JSX } from "react";

export function Satismeter20(props: React.SVGProps<SVGSVGElement>): JSX.Element {
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
        d="M14.46 0H5.54A5.54 5.54 0 0 0 0 5.54v8.92A5.54 5.54 0 0 0 5.54 20h8.92A5.54 5.54 0 0 0 20 14.46V5.54A5.54 5.54 0 0 0 14.46 0m-8.8 15.32a.9.9 0 0 1-.92.9.9.9 0 0 1-.9-.91l.02-3.47a.9.9 0 0 1 .91-.9.9.9 0 0 1 .91.92zM9.2 6.05v6.89a.91.91 0 1 1-1.83 0V5.66a.92.92 0 0 1 1.83 0zm3.7 8.86a.95.95 0 1 1-1.9 0V8.44a.95.95 0 0 1 1.9 0zm2.7-3.35a.9.9 0 0 1-.91-.9l-.06-6a.91.91 0 1 1 1.83-.01l.06 6a.9.9 0 0 1-.91.91"
        fill="#FF4981"
      />
    </svg>
  );
}
