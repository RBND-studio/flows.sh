import type { JSX } from "react";

export function VueTour20(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="currentColor" height={20} width={20} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12.3125 1.5625L10 5.53125L7.6875 1.5625H0L10 18.75L20 1.5625H12.3125Z"
        fill="#42B883"
      />
      <path
        d="M12.3125 1.5625L10 5.53125L7.6875 1.5625H4L10 11.875L16 1.5625H12.3125Z"
        fill="#35495E"
      />
    </svg>
  );
}
