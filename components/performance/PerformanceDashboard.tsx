"use client";

import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const scores = [{ label: "Quality score", value: "92%" }, { label: "Delivery score", value: "89%" }, { label: "Response time", value: "3.2 hrs" }, { label: "Risk score", value: "Low" }, { label: "Vendor rating", value: "4.6 / 5" }];
const trend = [{ month: "Feb", score: 82 }, { month: "Mar", score: 85 }, { month: "Apr", score: 84 }, { month: "May", score: 88 }, { month: "Jun", score: 90 }, { month: "Jul", score: 92 }];

const PerformanceDashboard = () => (
  <div className="space-y-6">
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
      {scores.map((score) => <Card key={score.label}><CardHeader><CardTitle>{score.label}</CardTitle></CardHeader><CardContent className="text-2xl font-semibold">{score.value}</CardContent></Card>)}
    </div>
    <div className="grid gap-6 lg:grid-cols-3">
      <Card className="lg:col-span-2"><CardHeader><CardTitle>Performance trend</CardTitle></CardHeader><CardContent className="h-72"><ResponsiveContainer width="100%" height="100%"><LineChart data={trend}><CartesianGrid strokeDasharray="3 3" vertical={false} /><XAxis dataKey="month" /><YAxis domain={[70, 100]} /><Tooltip /><Line type="monotone" dataKey="score" stroke="currentColor" strokeWidth={2} dot={{ r: 4 }} /></LineChart></ResponsiveContainer></CardContent></Card>
      <Card><CardHeader><CardTitle>Payment history</CardTitle></CardHeader><CardContent className="space-y-4"><Metric label="On-time payments" value="96%" /><Metric label="Average payment cycle" value="28 days" /><Metric label="Overdue invoices" value="1" /></CardContent></Card>
    </div>
    <Card><CardHeader><CardTitle>Recent issues</CardTitle></CardHeader><CardContent className="space-y-3"><div className="rounded-lg bg-muted p-3"><p className="font-medium">Delivery delay · BluePeak Logistics</p><p className="mt-1 text-sm text-muted-foreground">Shipment was delayed by two days. Owner has been notified.</p></div><div className="rounded-lg bg-muted p-3"><p className="font-medium">Quality review · Northstar Supplies</p><p className="mt-1 text-sm text-muted-foreground">Quality score needs a follow-up before the next purchase order.</p></div></CardContent></Card>
  </div>
);

const Metric = ({ label, value }: { label: string; value: string }) => <div className="flex items-center justify-between border-b border-border pb-3 last:border-0"><span className="text-sm text-muted-foreground">{label}</span><span className="font-medium">{value}</span></div>;

export default PerformanceDashboard;
