import { Box, Flex } from "@flows/styled-system/jsx";
import { token } from "@flows/styled-system/tokens";
import { Group } from "@visx/group";
import Pie from "@visx/shape/lib/shapes/Pie";
import { type ReactNode } from "react";
import { Logo } from "ui";

import { CarouselWaves } from "./carousel-waves";

const data = [
  { value: 360 / 4, color: "#C2C7CE" },
  { value: 360 / 4, color: "#A6ACB4" },
  { value: 360 / 4, color: "#8B929B" },
  { value: 360 / 4, color: "#DFE3E8" },
];

const size = 180;

export const PLGViz = (): ReactNode => {
  return (
    <Box
      h={240}
      overflow="hidden"
      pt="space24"
      px="space12"
      role="img"
      bg="pane.bg.elevated"
      position="relative"
      borderTopRadius="radius12"
      maskImage="linear-gradient(
            rgb(0, 0, 0) 70%,
            rgba(0, 0, 0, 0.886) 76.6%,
            rgba(0, 0, 0, 0.733) 81.4%, 
            rgba(0, 0, 0, 0.557) 85.3%,
            rgba(0, 0, 0, 0.376) 88.3%,
            rgba(0, 0, 0, 0.21) 91%, 
            rgba(0, 0, 0, 0.082) 94%, 
            rgba(0, 0, 0, 0.01) 97.6%,
            rgba(0, 0, 0, 0) 100%)"
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        position="relative"
        aria-hidden="true"
        mx="auto"
      >
        <svg width={size} height={size}>
          <Group top={size / 2} left={size / 2}>
            <Pie
              data={data}
              outerRadius={size / 2}
              innerRadius={size / 2 - 30}
              pieValue={(d) => d.value}
            >
              {(pie) => {
                const arcs = [...pie.arcs];
                const innerRadius = size / 2 - 30;
                const outerRadius = size / 2;
                const capRadius = 15; // Radius of end caps

                return arcs.map((arc) => {
                  const startAngle = arc.startAngle;
                  const endAngle = arc.endAngle;

                  // Calculate points
                  const innerStartX = innerRadius * Math.cos(startAngle);
                  const innerStartY = innerRadius * Math.sin(startAngle);
                  const outerStartX = outerRadius * Math.cos(startAngle);
                  const outerStartY = outerRadius * Math.sin(startAngle);
                  const innerEndX = innerRadius * Math.cos(endAngle);
                  const innerEndY = innerRadius * Math.sin(endAngle);
                  const outerEndX = outerRadius * Math.cos(endAngle);
                  const outerEndY = outerRadius * Math.sin(endAngle);

                  // Custom path with convex start and concave end
                  const path = [
                    // Move to outer start point
                    `M ${outerStartX} ${outerStartY}`,
                    // Convex cap at start
                    `A ${capRadius} ${capRadius} 0 0 1 ${innerStartX} ${innerStartY}`,
                    // Inner arc
                    `A ${innerRadius} ${innerRadius} 0 0 1 ${innerEndX} ${innerEndY}`,
                    // Concave cap at end
                    `A ${capRadius} ${capRadius} 0 0 0 ${outerEndX} ${outerEndY}`,
                    // Outer arc back to start
                    `A ${outerRadius} ${outerRadius} 0 0 0 ${outerStartX} ${outerStartY}`,
                    // Close path
                    "Z",
                  ].join(" ");

                  return (
                    <path
                      key={arc.index}
                      d={path}
                      fill={arc.data.color}
                      stroke={token("colors.newBg.neutral")}
                      strokeWidth={2}
                    />
                  );
                });
              }}
            </Pie>
          </Group>
        </svg>
        <Flex
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          bg="pane.bg.elevated"
          borderRadius="radius12"
        >
          <Logo type="mark" size={48} />
        </Flex>
      </Flex>
      <CarouselWaves />
    </Box>
  );
};
