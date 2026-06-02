import { css } from "@flows/styled-system/css";
import { type ReactElement, type ReactNode } from "react";

export type Subprocessor = {
  name: string;
  purpose: string;
  location: string;
};

export const SubprocessorsTable = ({
  subprocessors,
}: {
  subprocessors: Subprocessor[];
}): ReactNode => {
  return (
    <table
      className={css({
        borderCollapse: "separate",
        borderSpacing: "0",
        overflow: "auto",
        display: "block",
      })}
    >
      <thead
        className={css({
          backgroundColor: "bg.neutral.muted",
        })}
      >
        <tr>
          <th
            className={css({
              textStyle: "titleS",
              textAlign: "left",
              px: "space12",
              py: "space8",
              borderTopLeftRadius: "radius6",
              borderBottomLeftRadius: "radius6",
              borderTopWidth: "1px",
              borderTopColor: "border.neutral",
              borderLeftWidth: "1px",
              borderLeftColor: "border.neutral",
              borderBottomWidth: "1px",
              borderBottomColor: "border.neutral",
            })}
          >
            Name
          </th>
          <th
            className={css({
              textStyle: "titleS",
              textAlign: "left",
              px: "space12",
              py: "space8",
              borderTopWidth: "1px",
              borderTopColor: "border.neutral",
              borderBottomWidth: "1px",
              borderBottomColor: "border.neutral",
            })}
          >
            Purpose of Processing
          </th>
          <th
            className={css({
              textStyle: "titleS",
              textAlign: "left",
              px: "space12",
              py: "space8",
              borderTopRightRadius: "radius6",
              borderBottomRightRadius: "radius6",
              borderTopWidth: "1px",
              borderTopColor: "border.neutral",
              borderRightWidth: "1px",
              borderRightColor: "border.neutral",
              borderBottomWidth: "1px",
              borderBottomColor: "border.neutral",
            })}
          >
            Location of Processing
          </th>
        </tr>
      </thead>
      <tbody>
        {subprocessors.map((subprocessor) => (
          <TableLine key={subprocessor.name} {...subprocessor} />
        ))}
      </tbody>
    </table>
  );
};

const TableLine = ({ name, purpose, location }: Subprocessor): ReactElement => {
  return (
    <tr>
      <td
        className={css({
          fontSize: "14px",
          lineHeight: "20px",
          p: "space12",
          verticalAlign: "baseline",
          borderBottomWidth: "1px",
          borderBottomColor: "border.neutral",
        })}
      >
        {name}
      </td>
      <td
        className={css({
          fontSize: "14px",
          lineHeight: "20px",
          p: "space12",
          verticalAlign: "baseline",
          borderBottomWidth: "1px",
          borderBottomColor: "border.neutral",
        })}
      >
        {purpose}
      </td>
      <td
        className={css({
          fontSize: "14px",
          lineHeight: "20px",
          p: "space12",
          verticalAlign: "baseline",
          borderBottomWidth: "1px",
          borderBottomColor: "border.neutral",
        })}
      >
        {location}
      </td>
    </tr>
  );
};
