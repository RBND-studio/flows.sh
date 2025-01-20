type Props = {
  title: string;
  value: string;
  description: string;
};

const SummaryCard = ({ title, value, description }: Props) => {
  return (
    <div className="w-full rounded-md border border-border bg-card p-4">
      <h2 className="pb-1 text-sm font-semibold text-card-foreground">{title}</h2>
      <p className="text-lg font-bold text-card-foreground">{value}</p>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  );
};

const values = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    description: "+20.1% from last month",
  },
  {
    title: "New Customers",
    value: "+2350",
    description: "+180.1% from last month",
  },
  {
    title: "Sales",
    value: "+12,234",
    description: "+19% from last month",
  },
  {
    title: "Active Now",
    value: "+573",
    description: "+201 since last hour",
  },
];

export const SummaryCards = () => {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
      {values.map((value) => (
        <SummaryCard key={value.title} {...value} />
      ))}
    </div>
  );
};
