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
        d="M8.99484 10.9153L14.5962 19.6862C14.7379 19.8994 14.9511 19.9988 15.2068 19.9988H17.2823C17.6809 19.9988 17.9935 19.6862 17.9935 19.2875V0.71003C17.9935 0.0424808 17.1551 -0.256857 16.7141 0.268971L8.99484 10.0637C8.82398 10.2915 8.82398 10.6465 8.99484 10.9167V10.9153Z"
        fill={accentColor}
      />
      <path
        d="M2.69847 19.9984H6.39383C6.79251 19.9984 7.10509 19.6858 7.10509 19.2871V14.5679C7.10509 13.9004 6.26668 13.6011 5.82562 14.1269L2.12893 18.8474C1.77397 19.3309 2.12893 19.9984 2.69714 19.9984H2.69847Z"
        fill={accentColor}
      />
    </svg>
  );
}
