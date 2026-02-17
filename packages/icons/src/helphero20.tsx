import type { JSX } from "react";

export function HelpHero20(props: React.SVGProps<SVGSVGElement>): JSX.Element {
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
        d="M17.4274 -0.313477C18.178 -0.313417 18.7868 0.295298 18.7868 1.04594V18.3271C18.7868 19.0777 18.178 19.6865 17.4274 19.6865C16.6767 19.6865 16.068 19.0778 16.068 18.3271V12.1132H1L6.28141 6.87113L1 1.62783H16.068V1.04594C16.068 0.295261 16.6767 -0.313477 17.4274 -0.313477Z"
        fill="#1976D2"
      />
    </svg>
  );
}
