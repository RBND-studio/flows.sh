import type { JSX } from "react";

export function UserTour20(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      fill="currentColor"
      height={20}
      width={20}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      {...props}
    >
      <path d="M0 4.58 5.57 18.8 6.2 3.2z" fill="#5533FF" />
      <path d="M7.6 2.93 5.77 18.82 20 0z" fill="#5533FF" />
    </svg>
  );
}
