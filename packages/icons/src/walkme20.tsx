import type { JSX } from "react";

type ExtraProps = {
  useCurrentColor?: boolean;
};

export function WalkMe20(props: React.SVGProps<SVGSVGElement> & ExtraProps): JSX.Element {
  const { useCurrentColor = false, ...rest } = props;

  // WalkMe's brand color
  const accentHex = "#0072F5";

  const color = useCurrentColor ? "currentColor" : accentHex;

  return (
    <svg
      fill={color}
      height={20}
      width={20}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.98 3C18.2 3 20 4.8 20 7.02v3.89c0 2.22-1.8 4.02-4.02 4.02h-3.19l-2.83 2.02-2.84-2.02h-3.1A4 4 0 0 1 0 10.91V7.02C0 4.8 1.8 3 4.02 3zM14.3 5.96a3 3 0 0 0-2.12.9 3.2 3.2 0 0 0-.88 2.16A3.1 3.1 0 0 0 13.51 12q.39.1.78.1 1.14 0 1.95-.73.8-.74 1.02-2l-1.08-.16a2.3 2.3 0 0 1-.64 1.36q-.48.5-1.26.5-.79 0-1.33-.6-.55-.6-.55-1.46 0-.87.55-1.46.54-.6 1.33-.6a1.7 1.7 0 0 1 1.32.6l-2.87 1.6.45.8 3.87-2.14q-.45-.9-1.15-1.38t-1.6-.47m-5.6.01a2.2 2.2 0 0 0-1.81.91q-.35-.45-.8-.67-.47-.24-1.01-.24-1.08 0-1.7.7-.64.7-.64 1.9v3.41H3.8v-3.6q0-.63.36-1 .35-.39.93-.38.57 0 .93.38.36.37.36 1v3.6h1.05v-3.6q0-.63.35-1 .36-.39.93-.38.57 0 .92.38.36.37.36 1v3.6h1.05v-3.4q0-1.2-.64-1.9-.63-.7-1.7-.7"
      />
    </svg>
  );
}
