import Notifications from "@/components/dashboard/Notifications";

const page = () => {
  return (
    <div className="space-y-6 p-6"><div><p className="text-sm text-muted-foreground">Stay ahead of vendor activity</p><h1 className="text-2xl font-semibold">Notifications</h1></div><Notifications /></div>
  );
};

export default page
