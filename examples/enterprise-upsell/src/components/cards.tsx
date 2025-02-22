const cardContent = [
  {
    title: "Private repository",
    description: "Only those with access to this repository can view it.",
  },
  {
    title: "Base role",
    description: "All 4 members can read and write to this repository.",
  },
  {
    title: "Direct access",
    description: "0 teams or members have direct access to this repository.",
  },
  {
    title: "Organization access",
    description: "0 users and 0 teams can access this repository.",
  },
];

export const Cards = () => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {cardContent.map((content) => (
        <Card title={content.title} description={content.description} key={content.title} />
      ))}
    </div>
  );
};

type CardProps = {
  title: string;
  description: string;
};

const Card = ({ title, description }: CardProps) => {
  return (
    <div className="w-full rounded-md bg-muted p-4">
      <p className="text-sm font-semibold">{title}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
};
