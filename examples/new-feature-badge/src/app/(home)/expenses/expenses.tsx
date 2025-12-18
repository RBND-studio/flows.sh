import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/date-picker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Expenses = () => {
  return (
    <>
      <div className="rounded-lg border bg-card p-4">
        <div className="mb-4 flex flex-col items-start gap-2">
          <Label id="date-label" htmlFor="date">
            Date
          </Label>
          <DatePicker id="date" />
        </div>
        <div className="mb-4">
          <Label htmlFor="amount">Amount</Label>
          <Input id="amount" type="number" />
        </div>
        <div className="mb-4">
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" />
        </div>
        <Button>Record Expense</Button>
      </div>
    </>
  );
};
