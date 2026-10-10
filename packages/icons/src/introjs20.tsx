import type { JSX } from "react";

type ExtraProps = {
  useCurrentColor?: boolean;
};

export function Introjs20(props: React.SVGProps<SVGSVGElement> & ExtraProps): JSX.Element {
  const { useCurrentColor = false, ...rest } = props;

  // Brand color
  const accentHex = "#386EF5";

  const accentColor = useCurrentColor ? "currentColor" : accentHex;

  return (
    <svg fill="currentColor" height={20} width={20} xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        d="M0 4.01v10.6a2 2 0 0 0 2.01 2.01h.74l1.7 1.7a2 2 0 0 0 1.43.6h.03a2 2 0 0 0 1.43-.63l1.59-1.67h9.06a2 2 0 0 0 2.01-2V4.01A2 2 0 0 0 17.99 2H2a2 2 0 0 0-2 2.01m2.01 0H18v10.6H8.07l-2.19 2.3-2.3-2.3H2.02z"
        fill={accentColor}
      />
      <path
        d="M4.92 10.22h10.16a.9.9 0 1 0 0-1.82H4.92a.9.9 0 0 0 0 1.82m0 3.04h4.95a.9.9 0 0 0 0-1.81H4.92a.9.9 0 1 0 0 1.81m0-6.09h10.16a.9.9 0 1 0 0-1.81H4.92a.9.9 0 0 0 0 1.81"
        fill={accentColor}
      />
    </svg>
  );
}
