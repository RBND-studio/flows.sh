import type { JSX } from "react";

export function CreditCard16(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      height={16}
      viewBox="0 0 16 16"
      width={16}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M4.25 9.25a.75.75 0 0 0 0 1.5H7a.75.75 0 1 0 0-1.5z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.5 5.25A2.75 2.75 0 0 1 3.25 2.5h9.5a2.75 2.75 0 0 1 2.75 2.75v5.5a2.75 2.75 0 0 1-2.75 2.75h-9.5A2.75 2.75 0 0 1 .5 10.75zM12.75 4c.69 0 1.25.56 1.25 1.25H2C2 4.56 2.56 4 3.25 4zM14 7.25H2v3.5c0 .69.56 1.25 1.25 1.25h9.5c.69 0 1.25-.56 1.25-1.25z"
      />
    </svg>
  );
}
