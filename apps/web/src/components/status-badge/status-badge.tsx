import { cva, css } from "@flows/styled-system/css";
import { links } from "lib/links";
import { type ReactNode } from "react";
import { Text } from "ui";

import type { IncidentStatusResponse } from "./incident-types";
import { Check16, Close16, Exclamation16 } from "icons";
import { Flex } from "@flows/styled-system/jsx";

type StatusLevel = "operational" | "degraded" | "partial_outage" | "outage" | "maintenance";

function getStatusLevel(data: IncidentStatusResponse | null): StatusLevel {
  if (!data) return "operational";
  const impacts = data.ongoing_incidents.map((i) => i.current_worst_impact);
  if (impacts.includes("full_outage")) return "outage";
  if (impacts.includes("partial_outage")) return "partial_outage";
  if (impacts.includes("degraded_performance")) return "degraded";
  if (data.in_progress_maintenances.length > 0) return "maintenance";
  return "operational";
}

const statusLabel: Record<StatusLevel, string> = {
  operational: "All systems operational",
  degraded: "Degraded performance",
  partial_outage: "Partial outage",
  outage: "Full outage",
  maintenance: "Maintenance in progress",
};

export const StatusBadge = async (): Promise<ReactNode> => {
  const data = await fetch("https://statuspage.incident.io/flows/api/v1/summary", {
    next: { revalidate: 60 },
  })
    .then((res) => {
      if (!res.ok) throw new Error();
      return res.json() as Promise<IncidentStatusResponse>;
    })
    .catch(() => null);

  const level = getStatusLevel(data);

  return (
    <a
      href={links.status}
      target="_blank"
      rel="noopener noreferrer"
      className={css({
        display: "inline-flex",
        alignItems: "center",
        gap: "space8",
        mb: "space20",
        ml: "-space6",
        p: "space6",
        pr: "space8",
        borderRadius: "radius6",
        fastEaseInOut: "background",
        _hover: { bg: "newBg.neutral.subtle" },
      })}
    >
      <Flex className={dotStyle({ level })}>
        <DotIcon level={level} />
      </Flex>
      <Text variant="bodyS" color="newFg.neutral.muted">
        {statusLabel[level]}
      </Text>
    </a>
  );
};

const dotStyle = cva({
  base: {
    borderRadius: "50%",
    flexShrink: 0,
    color: "newFg.neutral.onBlack",
    position: "relative",
    _after: {
      content: '""',
      position: "absolute",
      top: "-3px",
      left: "-3px",
      width: "22px",
      height: "22px",
      borderRadius: "50%",
      opacity: 0.2,
    },
    "& svg": {
      zIndex: 1,
    },
  },
  variants: {
    level: {
      operational: { bg: "newFg.success", _after: { bg: "newFg.success" } },
      degraded: { bg: "newFg.warning.light", _after: { bg: "newFg.warning.light" } },
      partial_outage: { bg: "newFg.danger", _after: { bg: "newFg.danger" } },
      outage: { bg: "newFg.danger", _after: { bg: "newFg.danger" } },
      maintenance: { bg: "newFg.primary", _after: { bg: "newFg.primary" } },
      unknown: { bg: "newFg.neutral.muted", _after: { bg: "newFg.neutral.muted" } },
    },
  },
});

const DotIcon = ({ level }: { level: StatusLevel }) => {
  if (level === "operational") return <Check16 />;
  if (level === "degraded" || level === "maintenance") return <Exclamation16 />;
  return <Close16 />;
};
