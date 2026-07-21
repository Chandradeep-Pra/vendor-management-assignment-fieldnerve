import PerformanceDashboard from "@/components/performance/PerformanceDashboard";

const page = () => {
  return (
    <div className="space-y-6 p-6"><div><p className="text-sm text-muted-foreground">Supplier health at a glance</p><h1 className="text-2xl font-semibold">Vendor Performance</h1></div><PerformanceDashboard /></div>
  );
};

export default page
