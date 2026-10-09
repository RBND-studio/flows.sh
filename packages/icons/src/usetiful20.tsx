import type { JSX } from "react";

type ExtraProps = {
  useCurrentColor?: boolean;
};

export function Usetiful20(props: React.SVGProps<SVGSVGElement> & ExtraProps): JSX.Element {
  const { useCurrentColor = false, ...rest } = props;

  // Usetiful brand color
  const accentHex = "#387DFF";

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
        d="M2.07 8 0 10.1l2.07 2.08zm10.17-5.74L10 0 7.76 2.26zm5.7 9.91L20 10.1 17.93 8zm-15-6.12a2.9 2.9 0 0 1 2.89-2.92h8.34c1.6 0 2.9 1.3 2.9 2.92v8.34a2.9 2.9 0 0 1-2.9 2.92h-1.44L10 20l-2.78-2.69h-1.4a2.9 2.9 0 0 1-2.89-2.92zm2.99 5.63a.5.5 0 0 0-.73-.1.5.5 0 0 0-.1.74q2 2.63 4.81 2.64 2.8-.01 4.97-2.63a.5.5 0 0 0-.07-.73.5.5 0 0 0-.72.07Q12.22 13.9 9.9 13.9q-2.29.01-3.98-2.23"
      />
    </svg>
  );
}
