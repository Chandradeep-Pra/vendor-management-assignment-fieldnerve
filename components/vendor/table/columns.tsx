"use client";

import type { ColumnDef } from "@tanstack/react-table";
import type { Vendor } from "@/types/vendorTypes";
import { Badge } from "@/components/ui/badge";

export const columns: ColumnDef<Vendor>[] = [
  {
    accessorKey: "name",
    header: "Vendor Name",
  },
  {
    accessorKey: "code",
    header: "Vendor Code",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "contactPerson",
    header: "Contact Person",
  },
  {
    accessorKey: "city",
    header: "City",
  },
  {
    accessorKey: "rating",
    header: "Rating",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      const variant =
        status === "Active"
          ? "default"
          : status === "Pending"
            ? "secondary"
            : status === "Blacklisted"
              ? "destructive"
              : "outline";

      return <Badge variant={variant}>{status}</Badge>;
    },
  },
  {
    accessorKey: "lastTransaction",
    header: "Last Transaction",
  },
  {
    accessorKey: "totalPurchaseValue",
    header: "Purchase Value",
  },
];