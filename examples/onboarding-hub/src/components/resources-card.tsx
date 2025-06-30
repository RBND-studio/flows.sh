import { ComponentProps } from "@flows/react";
import { BookOpen, Calendar, Code, Slack } from "lucide-react";

type Props = ComponentProps<{
  title: string;
  items: {
    icon: keyof typeof availableIcons;
    title: string;
    link: string;
  }[];
}>;

const availableIcons = {
  book: BookOpen,
  slack: Slack,
  calendar: Calendar,
  code: Code,
  // Add more icons as needed
};

export const ResourcesCard = ({ title, items }: Props) => {
  return (
    <div className="flex flex-col gap-4 rounded-md border bg-background p-4 shadow-sm">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <ul className="flex flex-col gap-2">
        {items.map((item, index) => {
          const Icon = availableIcons[item.icon];
          return (
            <li key={index} className="flex items-center gap-2">
              {Icon && <Icon size={16} className="text-muted-foreground" />}
              <a
                href={item.link}
                className="text-sm text-blue-600 hover:underline dark:text-blue-400"
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
