import KPICards from "./KPICards";
import { stats } from "./mock-data";

const DashboardStats = () => {
  const firstGroup = stats.slice(0, 3);
  const secondGroup = stats.slice(3);

  const renderGroup = (items: typeof stats) => (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <div key={item.title} className="flex items-center gap-3">
          <KPICards {...item} />
        </div>
      ))}
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-3 sm:p-4">
        {renderGroup(firstGroup)}
      </div>

      <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-3 sm:p-4">
        {renderGroup(secondGroup)}
      </div>
    </div>
  );
};

export default DashboardStats;
