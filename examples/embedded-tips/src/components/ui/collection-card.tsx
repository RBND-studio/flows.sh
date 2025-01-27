import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  icon: ReactNode;
};

export const CollectionCard: React.FC<Props> = ({ title, description, icon }) => {
  return (
    <div className="bg-card border rounded-lg p-4">
      <div className="flex items-center gap-2 mb-2">
        <div className="flex items-center justify-center w-8 h-8 bg-muted border  text-primary rounded-lg">
          {icon}
        </div>
        <p className="text-sm font-semibold">{title}</p>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
      <div className="flex items-center gap-2 mt-5 ">
        <p className="text-sm font-semibold">Launch App</p>
        <ArrowRight size={12} />
      </div>
    </div>
  );
};
