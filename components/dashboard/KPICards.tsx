import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { StatItem } from "@/types/statTypes";

const KPICards = ({ title, value, change, trend }: StatItem) => {
  const isPositive = trend === "up";

  return (
    <div className="w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="text-sm font-medium text-slate-500">{title}</div>
      <div className="mt-4 flex items-end justify-between gap-3">
        <div className="text-2xl font-semibold text-slate-900">
          {typeof value === "number" && value % 1 !== 0 ? value.toFixed(1) : value}
        </div>
        <div
          className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-sm font-medium ${
            isPositive ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
          }`}
        >
          {isPositive ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
          {change}
        </div>
      </div>
    </div>
  );
};

export default KPICards;