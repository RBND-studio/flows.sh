import type { JSX } from "react";

export function WhatFix20(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      fill="currentColor"
      height={20}
      width={20}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        d="M16.2607 2L10.8797 14.4676H10.7892L10.2051 9.33642L7.40137 15.6813L7.60124 17.1731H13.2948L20 2H16.2607Z"
        fill="#F05B22"
      />
      <path
        d="M9.70824 2L4.32557 14.4676H4.23674L3.64933 9.30977H0L1.04766 17.1747H6.7418L7.40083 15.6813L6.55137 9.30922H10.2029L10.2046 9.33698L13.4486 2H9.70824Z"
        fill="#F8A352"
      />
      <path
        d="M10.204 9.30859H6.55246L7.40192 15.6806L10.2057 9.3358L10.204 9.30859Z"
        fill="#C43F27"
      />
    </svg>
  );
}
