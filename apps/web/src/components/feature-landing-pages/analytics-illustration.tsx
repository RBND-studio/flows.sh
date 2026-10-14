import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { token } from "@flows/styled-system/tokens";
import { type JSX } from "react";

export const AnalyticsIllustration = (): JSX.Element => {
  return (
    <Flex position="relative" h={240} w="100%">
      <Box left={-80} right={-80} bottom={-24} position="absolute">
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
            d="m925.92 161.52-31.21 3.61-31.21 4.08-31.21 18.4-31.21-11.09-31.21-36.03-31.2 4.61-31.22-70.6-31.2-68.54-31.22 73.23-15.6 103.14-15.6 59.49-31.22-21.78-31.2-21.95-31.22 9.31-31.2-19.24-31.22-2.62-31.2 16.25-31.21.92-31.22-36.58-31.2 12.47-31.21-5.07-31.21-12.63-31.21 13.09-31.21 25.72-31.21-4.16-31.21 5.7-31.21 2-31.21-5.7-31.21 7.23L1 196.49v117.09h992V204.33h-35.87z"
            stroke={token.var("colors.dataViz.green.fg.muted")}
            strokeLinecap="round"
          />
          <path
            d="m925.92 161.52-31.21-2.62-31.21-10.48-31.21 28.8-31.21-23.56-31.21-23.56-31.2-7.86-31.22-60.22-31.2-60.22-31.22 62.84-31.2 133.53-31.22 5.24-31.2-15.71-31.22-5.24-31.2-2.62-31.22-2.61-31.2 18.32-31.21-15.7-31.22-26.19h-31.2l-31.21 15.71-31.21-20.95-31.21 13.1-31.21 34.03h-31.21l-31.21-2.61-31.21-10.48-31.21 2.62-31.21-5.24H1v117.1h992V187.7h-35.87z"
            fill="url(#paint0_linear_4807_4693)"
            fillOpacity="0.2"
            stroke={token.var("colors.dataViz.green.fg")}
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
              <stop stopColor={token.var("colors.dataViz.green.fg")} />
              <stop offset="1" stopColor={token.var("colors.dataViz.green.fg")} stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </Box>
    </Flex>
  );
};
