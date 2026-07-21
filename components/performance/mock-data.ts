import type { PerformanceIssue, PerformanceMetric, PerformanceTrendPoint } from "@/types/performanceTypes";

export const performanceMetrics: PerformanceMetric[] = [
  { label: "Quality score", value: "92%" },
  { label: "Delivery score", value: "89%" },
  { label: "Response time", value: "3.2 hrs" },
  { label: "Risk score", value: "Low" },
  { label: "Vendor rating", value: "4.6 / 5" },
];

export const performanceTrend: PerformanceTrendPoint[] = [
  { month: "Feb", score: 82 },
  { month: "Mar", score: 85 },
  { month: "Apr", score: 84 },
  { month: "May", score: 88 },
  { month: "Jun", score: 90 },
  { month: "Jul", score: 92 },
];

export const paymentHistoryMetrics: PerformanceMetric[] = [
  { label: "On-time payments", value: "96%" },
  { label: "Average payment cycle", value: "28 days" },
  { label: "Overdue invoices", value: "1" },
];

export const recentPerformanceIssues: PerformanceIssue[] = [
  { id: "delivery-delay", title: "Delivery delay · BluePeak Logistics", detail: "Shipment was delayed by two days. Owner has been notified." },
  { id: "quality-review", title: "Quality review · Northstar Supplies", detail: "Quality score needs a follow-up before the next purchase order." },
];
