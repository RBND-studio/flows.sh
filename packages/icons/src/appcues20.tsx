import type { JSX } from "react";

type ExtraProps = {
  useCurrentColor?: boolean;
};

export function Appcues20(props: React.SVGProps<SVGSVGElement> & ExtraProps): JSX.Element {
  const { useCurrentColor = false, ...rest } = props;

  // Brand color
  const accentHex = "#5C45FF";

  const accentColor = useCurrentColor ? "currentColor" : accentHex;

  return (
    <svg fill="currentColor" height={20} width={20} xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        d="m9 10.92 5.6 8.77a.7.7 0 0 0 .6.3h2.08a.7.7 0 0 0 .71-.7V.7c0-.67-.83-.97-1.28-.44L9 10.07c-.17.22-.17.58 0 .85"
        fill={accentColor}
      />
      <path
        d="M2.7 20h3.7a.7.7 0 0 0 .7-.71v-4.72a.71.71 0 0 0-1.27-.44l-3.7 4.72A.72.72 0 0 0 2.7 20"
        fill={accentColor}
      />
    </svg>
  );
}
