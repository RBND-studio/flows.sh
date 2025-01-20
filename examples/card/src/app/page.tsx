import { InvoiceTable } from "@/components/invoice-table";
import { SummaryCards } from "@/components/summary-card";
import { FlowsSlot } from "@flows/react";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-14 md:py-10">
      <h1 className="mb-6 text-2xl font-bold text-foreground">Card Company Ltd.</h1>
      {/* The Card component is rendered in this slot when the user enters the Card block in a workflow */}
      <FlowsSlot id="homepage-slot" />
      <SummaryCards />
      <InvoiceTable />
    </div>
  );
}
