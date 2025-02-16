import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  icon: ReactNode;
};

export const CollectionCard: React.FC<Props> = ({ title, description, icon }) => {
  const id = title.replace(/\s+/g, "-").toLowerCase();
  return (
    <div className="rounded-lg border bg-card p-4" id={`collection-card-${id}`}>
      <div className="mb-2 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg border bg-muted text-primary">
          {icon}
        </div>
        <p className="text-sm font-semibold">{title}</p>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
      <div className="mt-5 flex items-center gap-2">
        <p className="text-sm font-semibold">Launch App</p>
        <ArrowRight size={12} />
      </div>
    </div>
  );
};
