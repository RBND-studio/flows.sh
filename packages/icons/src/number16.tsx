import type { JSX } from "react";

export function Number16(props: React.SVGProps<SVGSVGElement>): JSX.Element {
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
        d="M12.24 2.38a.75.75 0 1 0-1.48-.26l-.46 2.63H6.83l.4-2.37a.75.75 0 1 0-1.47-.26L5.3 4.75H2.5a.75.75 0 0 0 0 1.5h2.54l-.6 3.5H2a.75.75 0 0 0 0 1.5h2.17l-.4 2.37a.75.75 0 0 0 1.47.26l.46-2.63h3.47l-.4 2.37a.75.75 0 1 0 1.47.26l.46-2.63h2.8a.75.75 0 1 0 0-1.5h-2.54l.6-3.5H14a.75.75 0 1 0 0-1.5h-2.17zM5.96 9.75h3.47l.61-3.5H6.57z"
      />
    </svg>
  );
}
