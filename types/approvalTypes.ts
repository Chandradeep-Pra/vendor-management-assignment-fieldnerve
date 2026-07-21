export type ApprovalStatus = "Pending" | "Approved" | "Rejected" | "On Hold";

export type ApprovalTimelineEntry = {
  id: string;
  label: string;
  detail: string;
  occurredAt: string;
};

export type ApprovalRequest = {
  id: string;
  vendorName: string;
  vendorCode: string;
  category: string;
  status: ApprovalStatus;
  timeline: ApprovalTimelineEntry[];
};
