import DashboardCharts from "@/components/charts/DashboardCharts";
import DashboardStats from "@/components/dashboard/DashboardStats";


const page = () => {
  return (
    <div className="space-y-6 p-6">
      <DashboardStats />
      <DashboardCharts />
    </div>
  );
};

export default page