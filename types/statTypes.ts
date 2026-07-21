export type VendorCategoryName = "IT" | "Logistics" | "Manufacturing" | "HR" | "Marketing";

export type VendorCategoryStat = {
  name: VendorCategoryName;
  value: number;
};

export type StatItem = {
  title: string;
  value: number;
  change?: string;
  trend: "up" | "down";
};

export type MonthName =
  | "Jan"
  | "Feb"
  | "Mar"
  | "Apr"
  | "May"
  | "Jun"
  | "Jul"
  | "Aug"
  | "Sep"
  | "Oct"
  | "Nov"
  | "Dec";

export type MonthlyPurchase = {
  month: MonthName;
  amount: number;
};

export type VendorCategoryStats = VendorCategoryStat[];
