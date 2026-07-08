import { TrendingUpIcon } from "lucide-react";

interface IStatCard {
    label: string;
    value: number;
    icon: any;
    trend: string;
}

const StatCard = ({ card }: { card: IStatCard}) => {
  return (
    <div
      key={card.label}
      className="bg-white hover:bg-red-50 relative border border-slate-200 rounded-2xl p-5 hover:border-red-200 transition-all"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="text-3xl font-medium text-slate-800 tabular-nums">
          {" "}
          {card.value}{" "}
        </div>
        <div className="text-xs absolute right-4 top-4 text-red-500 flex items-center gap-1">
          <TrendingUpIcon className="size-3" />
          {card.trend}
        </div>
      </div>
      <p className="text-sm text-slate-500 mt-1">  {card.label}  </p>
    </div>
  );
};

export default StatCard;
