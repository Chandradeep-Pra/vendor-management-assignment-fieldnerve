import type { ApprovalRequest } from "@/types/approvalTypes";

export const approvalRequest: ApprovalRequest = {
  id: "APR-2026-003",
  vendorName: "Sterling Manufacturing",
  vendorCode: "VND-003",
  category: "Manufacturing",
  status: "Pending",
  timeline: [
    { id: "submitted", label: "Vendor profile submitted", detail: "Sterling Manufacturing submitted all required information.", occurredAt: "18 Jul, 10:20" },
    { id: "review", label: "Procurement review started", detail: "Assigned to Priya Shah for due diligence.", occurredAt: "19 Jul, 09:00" },
    { id: "pending", label: "Approval pending", detail: "Awaiting final decision from Procurement Lead.", occurredAt: "Today" },
  ],
};
