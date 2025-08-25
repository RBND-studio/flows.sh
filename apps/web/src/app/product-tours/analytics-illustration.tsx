import { css } from "@flows/styled-system/css";
import { Box } from "@flows/styled-system/jsx";
import { type JSX } from "react";

export const AnalyticsIllustration = (): JSX.Element => {
  return (
    <Box left={-24} right={-24} mt="-space40" bottom={-24} position="absolute">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="994"
        height="315"
        viewBox="0 0 994 315"
        fill="none"
        className={css({
          width: "100%",
          height: "100%",
        })}
      >
        <path
          d="M925.918 161.516L894.709 165.133L863.499 169.209L832.289 187.618L801.08 176.524L769.87 140.488L738.661 145.104L707.451 74.4906L676.241 5.95557L645.032 79.1873L629.427 182.327L613.822 241.82L582.612 220.036L551.403 198.091L520.193 207.404L488.984 188.158L457.774 185.539L426.564 201.789L395.355 202.707L364.145 166.131L332.935 178.602L301.726 173.528L270.516 160.895L239.306 173.986L208.097 199.711L176.887 195.554L145.678 201.249L114.468 203.247L83.2583 197.551L52.0487 204.785L1 196.471V313.567H993V204.326H957.128L925.918 161.516Z"
          stroke="var(--colors-data-viz-green-fg-muted)"
          strokeLinecap="round"
        />
        <path
          d="M925.918 161.516L894.709 158.898L863.499 148.424L832.289 177.226L801.08 153.661L769.87 130.096L738.661 122.241L707.451 62.02L676.241 1.79883L645.032 64.6383L613.822 198.172L582.612 203.409L551.403 187.699L520.193 182.462L488.984 179.844L457.774 177.226L426.564 195.554L395.355 179.844L364.145 153.661H332.935L301.726 169.371L270.516 148.424L239.306 161.516L208.097 195.554H176.887L145.678 192.936L114.468 182.462L83.2583 185.081L52.0487 179.844H1V296.939H993V187.699H957.128L925.918 161.516Z"
          fill="url(#paint0_linear_4807_4693)"
          fillOpacity="0.2"
          stroke="var(--colors-data-viz-green-fg)"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_4807_4693"
            x1="497"
            y1="1.79883"
            x2="497"
            y2="254.331"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--colors-data-viz-green-fg)" />
            <stop offset="1" stopColor="var(--colors-data-viz-green-fg)" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </Box>
  );
};
