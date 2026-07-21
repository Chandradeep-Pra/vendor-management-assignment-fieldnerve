import { BellRing, CalendarClock, CircleAlert, CreditCard, Truck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const notifications = [
  { title: "Approval pending", detail: "Sterling Manufacturing is awaiting your review.", time: "10 min ago", icon: BellRing, priority: "Action needed" },
  { title: "Document expiring", detail: "Nexora Technologies GST certificate expires in 14 days.", time: "2 hrs ago", icon: CalendarClock, priority: "Upcoming" },
  { title: "Low vendor rating", detail: "Northstar Supplies dropped below the 4.0 rating threshold.", time: "Yesterday", icon: CircleAlert, priority: "Review" },
  { title: "Delayed delivery", detail: "BluePeak Logistics delivery is delayed by 2 days.", time: "Yesterday", icon: Truck, priority: "Delayed" },
  { title: "Payment due", detail: "₹54,000 payment to HarborHR Solutions is due tomorrow.", time: "18 Jul", icon: CreditCard, priority: "Due soon" },
];

const Notifications = () => (
  <div className="space-y-3">
    {notifications.map(({ title, detail, time, icon: Icon, priority }) => (
      <Card key={title}>
        <CardContent className="flex gap-4 pt-4">
          <div className="rounded-lg bg-muted p-2"><Icon className="h-5 w-5" /></div>
          <div className="min-w-0 flex-1"><div className="flex flex-wrap items-center justify-between gap-2"><p className="font-medium">{title}</p><span className="text-xs text-muted-foreground">{time}</span></div><p className="mt-1 text-sm text-muted-foreground">{detail}</p></div>
          <Badge variant="secondary" className="h-fit">{priority}</Badge>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default Notifications;
