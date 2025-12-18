import { Cards } from "@/components/cards";
import { FlowsSlot } from "@flows/react";

export const Home = () => {
  return (
    <div>
      <h1 className="mb-1 text-xl font-semibold">Repository access</h1>
      <p className="mb-4 text-sm text-muted-foreground">
        Only those with access to this repository can view it.
      </p>
      <Cards />
      {/* The enterprise upsell will be rendered in this slot */}
      <FlowsSlot id="upsell-slot" />
    </div>
  );
};
