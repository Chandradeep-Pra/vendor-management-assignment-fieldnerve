export type NotificationKind = "approval" | "document" | "rating" | "delivery" | "payment";
export type NotificationPriority = "Action needed" | "Upcoming" | "Review" | "Delayed" | "Due soon";

export type VendorNotification = {
  id: string;
  title: string;
  detail: string;
  timeLabel: string;
  kind: NotificationKind;
  priority: NotificationPriority;
};
