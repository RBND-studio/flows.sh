"use client";

import { token } from "@flows/styled-system/tokens";
import { AxisBottom } from "@visx/axis";
import { Group } from "@visx/group";
import { useParentSize } from "@visx/responsive";
import { scaleBand, scaleLinear } from "@visx/scale";
import { Bar } from "@visx/shape";
import { type JSX, useMemo } from "react";
import { formatNumberToK } from "shared";

import type { OptionResult } from "./types";
import { css } from "@flows/styled-system/css";

const HEIGHT = 220;
const MARGIN = { top: 24, bottom: 28 };
const EMPTY_BAR_HEIGHT = 2;
const BAR_RADIUS = 4;

const tickLabelProps = {
  fill: token("colors.fg.neutral.subtle"),
  fontSize: 12,
  textAnchor: "middle" as const,
};

type Props = {
  options: OptionResult[];
};

export const DistributionChart = ({ options }: Props): JSX.Element => {
  const { parentRef, width } = useParentSize();

  const innerHeight = HEIGHT - MARGIN.top - MARGIN.bottom;
  const maxCount = useMemo(() => Math.max(...options.map((item) => item.count), 0), [options]);

  const scaleX = useMemo(
    () =>
      scaleBand<number>({
        domain: options.map((item) => item.value),
        range: [0, width],
        padding: 0.24,
      }),
    [width, options],
  );

  const scaleY = useMemo(
    () => scaleLinear<number>({ domain: [0, maxCount || 1], range: [innerHeight, 0] }),
    [innerHeight, maxCount],
  );

  const barWidth = scaleX.bandwidth();
  const labelByValue = useMemo(
    () => new Map(options.map((item) => [item.value, item.label])),
    [options],
  );

  return (
    <div ref={parentRef}>
      <svg
        className={css({ fontVariantNumeric: "tabular-nums" })}
        width={width}
        height={HEIGHT}
        role="img"
        aria-label="Number of responses per answer"
      >
        <Group top={MARGIN.top}>
          {options.map((item) => {
            const x = scaleX(item.value) ?? 0;
            const barY = scaleY(item.count);

            if (item.count === 0)
              return (
                <Bar
                  key={item.value}
                  x={x}
                  y={innerHeight - EMPTY_BAR_HEIGHT}
                  width={barWidth}
                  height={EMPTY_BAR_HEIGHT}
                  fill={token("colors.border.neutral")}
                  rx={1}
                />
              );

            return (
              <g key={item.value}>
                <Bar
                  x={x}
                  y={barY}
                  width={barWidth}
                  height={Math.max(innerHeight - barY, BAR_RADIUS)}
                  fill={item.group.color}
                  rx={BAR_RADIUS}
                />
                <text
                  x={x + barWidth / 2}
                  y={barY - 8}
                  textAnchor="middle"
                  fontSize={12}
                  fontWeight={550}
                  fill={token("colors.fg.neutral")}
                >
                  {formatNumberToK(item.count)}
                </text>
              </g>
            );
          })}

          <AxisBottom
            scale={scaleX}
            top={innerHeight}
            hideAxisLine
            hideTicks
            tickFormat={(value) => labelByValue.get(value) ?? `${value}`}
            tickLabelProps={tickLabelProps}
          />
        </Group>
      </svg>
    </div>
  );
};
