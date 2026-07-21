import { VendorCategoryName } from "./statTypes";

export type Vendor = {
    id: number;
    name: string;
    code: string;
    category: VendorCategoryName
    contactPerson: string;
    city: string;
    rating: number;
    status: "Active" | "Pending" | "Blacklisted" | "Inactive";
    lastTransaction: string;
    totalPurchaseValue: number;
}