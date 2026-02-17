import type { JSX } from "react";

export function Hopscotch20(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      fill="currentColor"
      height={20}
      width={20}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      {...props}
    >
      <path d="M6.70593 0.117188H0.117676V6.70544H6.70593V0.117188Z" fill="#4A75FF" />
      <path d="M6.70593 6.70605H0.117676V13.2943H6.70593V6.70605Z" fill="#054CC0" />
      <path d="M13.2943 6.70605H6.70605V13.2943H13.2943V6.70605Z" fill="#DAB9F0" />
      <path d="M19.8822 6.70605H13.2939V13.2943H19.8822V6.70605Z" fill="#FEC305" />
      <path d="M19.8822 13.2939H13.2939V19.8822H19.8822V13.2939Z" fill="#FEAAA0" />
      <path d="M19.8822 0.117188H13.2939V6.70544H19.8822V0.117188Z" fill="#FF5635" />
      <path d="M6.70593 13.2939H0.117676V19.8822H6.70593V13.2939Z" fill="#26C467" />
    </svg>
  );
}
