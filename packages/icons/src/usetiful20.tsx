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
        d="M2.06662 8.00393L0 10.0889L2.06662 12.1739V8.00393ZM12.239 2.25898L10 0L7.76094 2.25898H12.239ZM17.9334 12.1739L20 10.0889L17.9334 8.00395V12.1739ZM2.93104 6.0522C2.93104 4.43857 4.22787 3.13047 5.8276 3.13047H14.1724C15.7722 3.13047 17.069 4.43857 17.069 6.0522V14.393C17.069 16.0067 15.7722 17.3148 14.1724 17.3148H12.7342L10 20L7.22114 17.3148H5.8276C4.22787 17.3148 2.93104 16.0067 2.93104 14.393V6.0522ZM5.92876 11.6839C5.75569 11.4547 5.43114 11.4103 5.20388 11.585C4.97661 11.7595 4.93268 12.0869 5.10576 12.3161C6.42464 14.063 8.03735 14.9566 9.91168 14.9566C11.7791 14.9566 13.4435 14.0701 14.8798 12.3343C15.0629 12.1132 15.0336 11.7842 14.8142 11.5995C14.595 11.4148 14.2688 11.4444 14.0857 11.6657C12.8355 13.1764 11.4525 13.9131 9.91168 13.9131C8.37778 13.9131 7.06087 13.1834 5.92876 11.6839Z"
      />
    </svg>
  );
}
