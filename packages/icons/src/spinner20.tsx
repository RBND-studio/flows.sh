import type { JSX } from "react";

export const Spinner20 = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    color="black"
    fill="currentColor"
    height={20}
    viewBox="0 0 20 20"
    width={20}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M9 1a1 1 0 0 1 1-1 10 10 0 0 1 5.88 18.09 1 1 0 0 1-1.18-1.62A8 8 0 0 0 10 2a1 1 0 0 1-1-1"
      fillRule="evenodd"
    />
  </svg>
);
