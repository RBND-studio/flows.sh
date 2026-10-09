import type { JSX } from "react";

type ExtraProps = {
  useCurrentColor?: boolean;
};

export function Userflow20(props: React.SVGProps<SVGSVGElement> & ExtraProps): JSX.Element {
  const { useCurrentColor = false, ...rest } = props;

  // Brand colors
  const accentOneHex = "#23D777";
  const accentTwoHex = "#1A57E6";

  const accentOneColor = useCurrentColor ? "currentColor" : accentOneHex;
  const accentTwoColor = useCurrentColor ? "currentColor" : accentTwoHex;

  return (
    <svg fill="currentColor" height={20} width={20} xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        d="m12.3 6.07-.33 1.88c-.35 2-2.26 3.6-4.25 3.6H6.09c-2 0-3.33-1.62-2.98-3.6l.66-3.76h1.89L5 7.95a1.4 1.4 0 0 0 1.42 1.72h1.63a2.15 2.15 0 0 0 2.03-1.72l.5-2.82a1.2 1.2 0 0 1 1.1-.94h3.5l.2-1.23c.3-1.63-.8-2.96-2.43-2.96H4.94a3.7 3.7 0 0 0-3.5 2.96l-1.4 8c-.28 1.64.8 2.97 2.45 2.97h8a3.7 3.7 0 0 0 3.5-2.97l.86-4.89z"
        fill={accentOneColor}
      />
      <path
        d="M17.52 6.07h-.8L15.5 13a3.7 3.7 0 0 1-3.49 2.96H4.8l-.2 1.09C4.32 18.67 5.4 20 7.06 20h8a3.7 3.7 0 0 0 3.5-2.96l1.4-8c.3-1.64-.79-2.97-2.43-2.97"
        fill={accentTwoColor}
      />
    </svg>
  );
}
