import type { VendorNotification } from "@/types/notificationTypes";

export const vendorNotifications: VendorNotification[] = [
  { id: "approval-pending", title: "Approval pending", detail: "Sterling Manufacturing is awaiting your review.", timeLabel: "10 min ago", kind: "approval", priority: "Action needed" },
  { id: "document-expiring", title: "Document expiring", detail: "Nexora Technologies GST certificate expires in 14 days.", timeLabel: "2 hrs ago", kind: "document", priority: "Upcoming" },
  { id: "low-rating", title: "Low vendor rating", detail: "Northstar Supplies dropped below the 4.0 rating threshold.", timeLabel: "Yesterday", kind: "rating", priority: "Review" },
  { id: "delivery-delayed", title: "Delayed delivery", detail: "BluePeak Logistics delivery is delayed by 2 days.", timeLabel: "Yesterday", kind: "delivery", priority: "Delayed" },
  { id: "payment-due", title: "Payment due", detail: "₹54,000 payment to HarborHR Solutions is due tomorrow.", timeLabel: "18 Jul", kind: "payment", priority: "Due soon" },
];
