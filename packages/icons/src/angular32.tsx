import type { JSX } from "react";

type ExtraProps = {
  useCurrentColor?: boolean;
};

export function Angular32(props: React.SVGProps<SVGSVGElement> & ExtraProps): JSX.Element {
  const { useCurrentColor = true, ...rest } = props;

  const gradientColor1 = useCurrentColor ? "currentColor" : "url(#paint0_linear_3940_5085)";
  const gradientColor2 = useCurrentColor ? "currentColor" : "url(#paint1_linear_3940_5085)";

  return (
    <svg fill="currentColor" height={32} width={32} xmlns="http://www.w3.org/2000/svg" {...rest}>
      <mask
        id="mask0_3940_5085"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="1"
        y="0"
        width="31"
        height="32"
      >
        <path d="M1.03999 0H31.12V32H1.03999V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_3940_5085)">
        <mask
          id="mask1_3940_5085"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="1"
          y="0"
          width="31"
          height="32"
        >
          <path d="M1.03999 0H31.12V32H1.03999V0Z" fill="white" />
        </mask>
        <g mask="url(#mask1_3940_5085)">
          <path
            d="M30.9955 5.31418L29.9138 22.3885L19.5718 0L30.9955 5.31418ZM23.8323 27.3922L16.0178 31.8742L8.20321 27.3922L9.7926 23.5202H22.2429L23.8323 27.3922ZM16.0178 8.4983L20.1126 18.5054H11.9229L16.0178 8.4983ZM2.1106 22.3885L1.03999 5.31418L12.4637 0L2.1106 22.3885Z"
            fill={gradientColor1}
          />
          <path
            d="M30.9955 5.31418L29.9138 22.3885L19.5718 0L30.9955 5.31418ZM23.8323 27.3922L16.0178 31.8742L8.20321 27.3922L9.7926 23.5202H22.2429L23.8323 27.3922ZM16.0178 8.4983L20.1126 18.5054H11.9229L16.0178 8.4983ZM2.1106 22.3885L1.03999 5.31418L12.4637 0L2.1106 22.3885Z"
            fill={gradientColor2}
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_3940_5085"
          x1="7.65071"
          y1="28.983"
          x2="31.5472"
          y2="17.6861"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E40035" />
          <stop offset="0.24" stopColor="#F60A48" />
          <stop offset="0.352" stopColor="#F20755" />
          <stop offset="0.494" stopColor="#DC087D" />
          <stop offset="0.745" stopColor="#9717E7" />
          <stop offset="1" stopColor="#6C00F5" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_3940_5085"
          x1="6.57377"
          y1="3.84325"
          x2="22.2746"
          y2="21.6603"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF31D9" />
          <stop offset="1" stopColor="#FF5BE1" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
