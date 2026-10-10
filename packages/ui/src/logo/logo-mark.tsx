import { type JSX, type SVGProps } from "react";

export const LogoMarkSvg = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 40 40" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 0A10 10 0 0 0 0 10v20a10 10 0 0 0 10 10h20a10 10 0 0 0 10-10V10A10 10 0 0 0 30 0zm19.21 23.53 3.67-3.67a4.2 4.2 0 0 0 1.23-2.98v-.2a5.63 5.63 0 0 0-9.37-4.07l-1.16 1.04A4.8 4.8 0 0 1 20.1 15h-5.79c-1.31 0-2.58.61-3.51 1.54L7.14 20.2a4.2 4.2 0 0 0-1.24 3 5.63 5.63 0 0 0 9.25 4.31l1.3-1.09a5 5 0 0 1 3.49-1.4h5.79c1.3 0 2.56-.56 3.48-1.48"
    />
  </svg>
);
