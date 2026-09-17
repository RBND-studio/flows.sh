const deals = [
  { name: "Acme Corp", stage: "Negotiation", value: "$24,000" },
  { name: "Globex", stage: "Proposal sent", value: "$8,400" },
  { name: "Initech", stage: "Discovery", value: "$15,600" },
  { name: "Umbrella Inc", stage: "Negotiation", value: "$41,200" },
];

export const PipelineApp = () => {
  return (
    <div className="flex h-full w-full">
      <aside className="hidden w-48 shrink-0 flex-col border-r bg-muted/30 p-3 sm:flex">
        <p className="mb-4 px-2 text-sm font-semibold">Pipeline</p>
        <nav className="flex flex-col gap-1 text-sm text-muted-foreground">
          <span className="rounded-md bg-muted px-2 py-1.5 text-foreground">Deals</span>
          <span className="px-2 py-1.5">Contacts</span>
          <span className="px-2 py-1.5">Reports</span>
          <span className="px-2 py-1.5">Settings</span>
        </nav>
      </aside>
      <main className="flex-1 overflow-auto p-6">
        <p className="mb-1 text-lg font-semibold">Deals</p>
        <p className="mb-4 text-sm text-muted-foreground">4 open deals in your pipeline.</p>
        <div className="overflow-hidden rounded-lg border">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted/50 text-xs uppercase text-muted-foreground">
              <tr>
                <th className="px-4 py-2 font-medium">Deal</th>
                <th className="px-4 py-2 font-medium">Stage</th>
                <th className="px-4 py-2 font-medium">Value</th>
              </tr>
            </thead>
            <tbody>
              {deals.map((deal) => (
                <tr key={deal.name} className="border-t">
                  <td className="px-4 py-2 font-medium">{deal.name}</td>
                  <td className="px-4 py-2 text-muted-foreground">{deal.stage}</td>
                  <td className="px-4 py-2">{deal.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};
