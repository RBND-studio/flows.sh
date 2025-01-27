import { AnalyticsChart } from "./analytics-chart";
import { FlowsSlot } from "@flows/react";

export default function Analytics() {
  return (
    <>
      {/* FlowsSlot is a component that renders blocks with the specified ID */}
      <FlowsSlot id="analytics-tip" />
      <AnalyticsChart />
    </>
  );
}
