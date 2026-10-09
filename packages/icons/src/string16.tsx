import type { JSX } from "react";

export function String16(props: React.SVGProps<SVGSVGElement>): JSX.Element {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.73 3.88a.8.8 0 0 1 .76.5l3 7.37a.82.82 0 1 1-1.52.62l-.69-1.7-.19.02H3.17l-.68 1.68a.82.82 0 1 1-1.52-.62l3-7.37a.8.8 0 0 1 .76-.5m.9 5.18-.9-2.2-.9 2.2z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.53 6.81a3.27 3.27 0 1 0 0 5.58.82.82 0 0 0 1.56-.33V7.15a.82.82 0 0 0-1.56-.34m-1.71 4.43a1.64 1.64 0 1 0 0-3.27 1.64 1.64 0 0 0 0 3.27"
      />
    </svg>
  );
}
