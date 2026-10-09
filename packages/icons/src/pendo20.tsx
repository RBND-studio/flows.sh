import type { JSX } from "react";

export function Pendo20(props: React.SVGProps<SVGSVGElement>): JSX.Element {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 9.78h10v9.78l10-9.78V0H10z"
        fill="#FF4876"
      />
    </svg>
  );
}
