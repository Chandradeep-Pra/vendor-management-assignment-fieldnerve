"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Vendor } from "@/types/vendorTypes";
import VendorTabs from "./VendorTabs";

const VendorDetails = ({ vendor }: { vendor: Vendor }) => {
  const variant = vendor.status === "Active" ? "default" : vendor.status === "Blacklisted" ? "destructive" : "secondary";

  return (
    <div className="space-y-6 p-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div>
          <p className="text-sm text-muted-foreground">Vendor profile</p>
          <h1 className="text-2xl font-semibold">{vendor.name}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{vendor.code} · {vendor.category} · {vendor.city}</p>
        </div>
        <Badge variant={variant}>{vendor.status}</Badge>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <Card><CardHeader><CardTitle>Vendor rating</CardTitle></CardHeader><CardContent className="text-2xl font-semibold">{vendor.rating} / 5</CardContent></Card>
        <Card><CardHeader><CardTitle>Purchase value</CardTitle></CardHeader><CardContent className="text-2xl font-semibold">₹{vendor.totalPurchaseValue.toLocaleString("en-IN")}</CardContent></Card>
        <Card><CardHeader><CardTitle>Last transaction</CardTitle></CardHeader><CardContent className="text-2xl font-semibold">{vendor.lastTransaction}</CardContent></Card>
      </div>
      <VendorTabs vendor={vendor} />
    </div>
  );
};

export default VendorDetails;
