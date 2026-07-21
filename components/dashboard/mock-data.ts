import { StatItem, VendorCategoryStats } from "@/types/statTypes";


export const stats: StatItem[] = [
  {
    title: "Total Vendors",
    value: 248,
    change: "+12%",
    trend: "up",
  },
  {
    title: "Active Vendors",
    value: 186,
    change: "+8%",
    trend: "up",
  },
  {
    title: "Blacklisted Vendors",
    value: 14,
    change: "-2%",
    trend: "down",
  },
  {
    title: "Pending Approvals",
    value: 31,
    change: "+5%",
    trend: "up",
  },
  {
    title: "Average Vendor Rating",
    value: 4.7,
    change: "+0.2",
    trend: "up",
  },
  {
    title: "Active Purchase Orders",
    value: 94,
    change: "+11%",
    trend: "up",
  },
];

export const vendorCategoryData: VendorCategoryStats = [
  { name: "IT", value: 84 },
  { name: "Logistics", value: 62 },
  { name: "Manufacturing", value: 48 },
  { name: "HR", value: 29 },
  { name: "Marketing", value: 25 },
];

export const monthlyPurchaseData = [
  { month: "Jan", amount: 42000 },
  { month: "Feb", amount: 38500 },
  { month: "Mar", amount: 47000 },
  { month: "Apr", amount: 51000 },
  { month: "May", amount: 49500 },
  { month: "Jun", amount: 56000 },
  { month: "Jul", amount: 59000 },
  { month: "Aug", amount: 61000 },
  { month: "Sep", amount: 58000 },
  { month: "Oct", amount: 64000 },
  { month: "Nov", amount: 67000 },
  { month: "Dec", amount: 71000 },
];

