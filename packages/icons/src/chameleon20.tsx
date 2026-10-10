import type { JSX } from "react";

type ExtraProps = {
  useCurrentColor?: boolean;
};

export function Chameleon20(props: React.SVGProps<SVGSVGElement> & ExtraProps): JSX.Element {
  const { useCurrentColor = false, ...rest } = props;

  // Brand color
  const accentHex = "#23C55E";

  const accentColor = useCurrentColor ? "currentColor" : accentHex;

  return (
    <svg fill="currentColor" height={20} width={20} xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M12.02 11.81C18.9 8.56 15.7.33 15.7.33 1.76.33 3.79 12.38 3.79 12.38h7.57c1.27.66 2.68 2.9 1.14 4.89-.81 1.04-2.37 1.11-3.36.24-.4-.35-1.22-1.58-.3-2.85.73-.98 2.06-.58 2.47-.16.16.18.2.44.04.62a.43.43 0 0 1-.61.05c-.17-.15-.72-.38-1.14.08-.21.22-.53.95.1 1.6.6.6 1.6.5 2.14-.16 1-1.21.2-2.5-.2-2.84-1.09-.95-2.68-.78-3.68.26-.88.92-.73 2.26-.64 2.65.5 2.1 2.64 3.4 4.66 2.73 3.6-1.21 4.94-6.01 3.6-9.54a4.8 4.8 0 0 1-3.56 1.86M7.45 9.27a3.54 3.54 0 0 1 .76-4.86 3.35 3.35 0 0 1 4.75.77 3.54 3.54 0 0 1-.76 4.87 3.35 3.35 0 0 1-4.75-.78m1.5-.62a.85.85 0 0 0 1.19.2.85.85 0 0 0-1-1.39.86.86 0 0 0-.19 1.2"
        fill={accentColor}
      />
    </svg>
  );
}
