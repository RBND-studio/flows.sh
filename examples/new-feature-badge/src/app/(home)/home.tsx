import { CollectionCard } from "@/components/ui/collection-card";
import { CoinsIcon, MinusCircle, PiggyBankIcon, Wallet, WalletCards } from "lucide-react";

const collections = [
  {
    title: "Budget Planning",
    description: "Create and manage your monthly budget to keep track of your income and expenses.",
    icon: <Wallet size={16} />,
  },
  {
    title: "Expense Tracking",
    description:
      "Record your daily expenses to monitor your spending habits and identify areas to save.",
    icon: <MinusCircle size={16} />,
  },
  {
    title: "Investment Portfolio",
    description: "Manage your investments and track the performance of your portfolio over time.",
    icon: <CoinsIcon size={16} />,
  },
  {
    title: "Savings Goals",
    description: "Set and track your savings goals to ensure you are on track to meet your goals.",
    icon: <PiggyBankIcon size={16} />,
  },
  {
    title: "Debt Management",
    description: "Keep track of your debts and create a plan to pay them off efficiently.",
    icon: <WalletCards size={16} />,
  },
];

export const Home = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {collections.map((collection, index) => (
        <CollectionCard key={index} {...collection} />
      ))}
    </div>
  );
};
