"use client";

import { token } from "@flows/styled-system/tokens";
import { Group } from "@visx/group";
import { useParentSize } from "@visx/responsive";
import { scaleLinear } from "@visx/scale";
import { Bar } from "@visx/shape";
import { type JSX, useId, useMemo } from "react";

import { formatPercent } from "./format";
import type { GroupResult } from "./types";
import { css } from "@flows/styled-system/css";

const HEIGHT = 40;
const RADIUS = 8;
const MIN_LABEL_WIDTH = 52;

type Props = {
  groups: GroupResult[];
};

export const StackedShareBar = ({ groups }: Props): JSX.Element => {
  const { parentRef, width } = useParentSize();
  const clipId = useId();

  const scaleX = useMemo(
    () => scaleLinear<number>({ domain: [0, 100], range: [0, width] }),
    [width],
  );

  const segments = useMemo(
    () =>
      groups.map((group, index) => {
        const start = groups.slice(0, index).reduce((sum, item) => sum + item.share, 0);
        return { group, x: scaleX(start), width: scaleX(group.share) };
      }),
    [groups, scaleX],
  );

  return (
    <div ref={parentRef}>
      <svg
        className={css({ fontVariantNumeric: "tabular-nums" })}
        width={width}
        height={HEIGHT}
        role="img"
        aria-label={`Share of responses: ${groups.map((group) => `${group.label} ${formatPercent(group.share)}`).join(", ")}`}
      >
        <defs>
          <clipPath id={clipId}>
            <rect x={0} y={0} width={width} height={HEIGHT} rx={RADIUS} />
          </clipPath>
        </defs>
        <Group clipPath={`url(#${clipId})`}>
          <Bar x={0} y={0} width={width} height={HEIGHT} fill={token("colors.bg.neutral.subtle")} />
          {segments.map(({ group, x, width: segmentWidth }) => (
            <g key={group.key}>
              <Bar x={x} y={0} width={segmentWidth} height={HEIGHT} fill={group.color} />
              {segmentWidth >= MIN_LABEL_WIDTH ? (
                <text
                  x={x + segmentWidth / 2}
                  y={HEIGHT / 2 + 4}
                  textAnchor="middle"
                  fontSize={12}
                  fontWeight={600}
                  fill={group.onColor}
                >
                  {formatPercent(group.share)}
                </text>
              ) : null}
            </g>
          ))}
        </Group>
      </svg>
    </div>
  );
};
