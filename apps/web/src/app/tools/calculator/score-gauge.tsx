"use client";

import { token } from "@flows/styled-system/tokens";
import { Group } from "@visx/group";
import { useParentSize } from "@visx/responsive";
import { scaleLinear } from "@visx/scale";
import { Bar } from "@visx/shape";
import { type JSX, useId, useMemo } from "react";

import type { CalculatorBand } from "./types";
import { css } from "@flows/styled-system/css";

const HEIGHT = 56;
const TRACK_Y = 14;
const TRACK_HEIGHT = 14;
const MARKER_SIZE = 6;

type Props = {
  /** In ascending order. The first band's start and the last band's end define the scale. */
  bands: CalculatorBand[];
  ticks: number[];
  formatValue: (value: number) => string;
  score: number | null;
  label: string;
};

export const ScoreGauge = ({ bands, ticks, formatValue, score, label }: Props): JSX.Element => {
  const { parentRef, width } = useParentSize();
  const clipId = useId();

  const scaleX = useMemo(() => {
    const min = bands[0].from;
    const max = bands[bands.length - 1].to;
    return scaleLinear<number>({ domain: [min, max], range: [0, width] });
  }, [bands, width]);

  const markerX =
    score === null ? 0 : Math.min(Math.max(scaleX(score), MARKER_SIZE), width - MARKER_SIZE);

  return (
    <div ref={parentRef}>
      <svg
        className={css({ fontVariantNumeric: "tabular-nums" })}
        width={width}
        height={HEIGHT}
        role="img"
        aria-label={label}
      >
        <defs>
          <clipPath id={clipId}>
            <rect x={0} y={TRACK_Y} width={width} height={TRACK_HEIGHT} rx={TRACK_HEIGHT / 2} />
          </clipPath>
        </defs>

        <Group clipPath={`url(#${clipId})`}>
          {bands.map((band) => {
            const start = scaleX(band.from);
            return (
              <Bar
                key={band.label}
                x={start}
                y={TRACK_Y}
                width={scaleX(band.to) - start}
                height={TRACK_HEIGHT}
                fill={band.color}
                opacity={score === null ? 0.25 : 0.9}
              />
            );
          })}
        </Group>

        {score !== null && (
          <path
            d={`M ${markerX - MARKER_SIZE} 0 L ${markerX + MARKER_SIZE} 0 L ${markerX} ${MARKER_SIZE * 2} Z`}
            fill={token("colors.fg.neutral")}
          />
        )}

        {ticks.map((tick, index) => (
          <text
            key={tick}
            x={scaleX(tick)}
            y={HEIGHT - 4}
            textAnchor={index === 0 ? "start" : index === ticks.length - 1 ? "end" : "middle"}
            fontSize={11}
            fill={token("colors.fg.neutral.subtle")}
          >
            {formatValue(tick)}
          </text>
        ))}
      </svg>
    </div>
  );
};
