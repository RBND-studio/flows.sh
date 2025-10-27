import { Columns } from "@/components/columns";
import { FlowsSlot } from "@flows/react";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <FlowsSlot id="getting-started-slot" />
      <Columns />
    </div>
  );
}
