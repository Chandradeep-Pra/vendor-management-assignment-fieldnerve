"use client";

import { useState } from "react";
import { Check, Clock3, MessageSquare, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

type ApprovalStatus = "Pending" | "Approved" | "Rejected" | "On Hold";

const ApprovalWorkflow = () => {
  const [status, setStatus] = useState<ApprovalStatus>("Pending");
  const [comment, setComment] = useState("");
  const timeline = [{ label: "Vendor profile submitted", detail: "Sterling Manufacturing submitted all required information.", time: "18 Jul, 10:20" }, { label: "Procurement review started", detail: "Assigned to Priya Shah for due diligence.", time: "19 Jul, 09:00" }, { label: "Approval pending", detail: "Awaiting final decision from Procurement Lead.", time: "Today" }];

  return <div className="grid gap-6 lg:grid-cols-3">
    <Card className="lg:col-span-2"><CardHeader><div className="flex items-center justify-between"><div><CardTitle>Sterling Manufacturing</CardTitle><p className="mt-1 text-sm text-muted-foreground">VND-003 · Manufacturing</p></div><Badge variant={status === "Approved" ? "default" : status === "Rejected" ? "destructive" : "secondary"}>{status}</Badge></div></CardHeader><CardContent className="space-y-5"><div><p className="mb-2 text-sm font-medium">Reviewer comments</p><Textarea value={comment} onChange={(event) => setComment(event.target.value)} placeholder="Add context for the decision or request additional details." /></div><div className="flex flex-wrap gap-2"><Button onClick={() => setStatus("Approved")}><Check /> Approve</Button><Button variant="destructive" onClick={() => setStatus("Rejected")}><X /> Reject</Button><Button variant="outline" onClick={() => setStatus("On Hold")}><MessageSquare /> Request changes</Button></div></CardContent></Card><Card><CardHeader><CardTitle>Approval timeline</CardTitle></CardHeader><CardContent className="space-y-5">{timeline.map((item, index) => <div key={item.label} className="relative pl-7"><Clock3 className="absolute left-0 top-0 h-4 w-4 text-muted-foreground" />{index < timeline.length - 1 ? <span className="absolute left-2 top-5 h-8 border-l border-border" /> : null}<p className="font-medium">{item.label}</p><p className="mt-1 text-sm text-muted-foreground">{item.detail}</p><p className="mt-1 text-xs text-muted-foreground">{item.time}</p></div>)}</CardContent></Card></div>;
};

export default ApprovalWorkflow;
