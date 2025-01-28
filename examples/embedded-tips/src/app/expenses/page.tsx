import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/date-picker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FlowsSlot } from "@flows/react";

export default function Analytics() {
  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="mb-4 flex flex-col gap-2">
        <Label htmlFor="date">Date</Label>
        <DatePicker id="date" />
      </div>
      <div className="mb-4">
        <Label htmlFor="amount">Amount</Label>
        <Input id="amount" type="number" />
      </div>
      <div className="mb-4">
        <Label htmlFor="description">Description</Label>
        {/* FlowsSlot is a component that renders blocks with the specified ID. Here we pass it into the textarea component with absolute positioning */}
        <Textarea slot={<FlowsSlot id="expenses-tip" />} id="description" />
      </div>
      <Button>Record Expense</Button>
    </div>
  );
}
