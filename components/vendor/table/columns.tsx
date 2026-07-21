"use client";

import type { ColumnDef } from "@tanstack/react-table";
import type { Vendor } from "@/types/vendorTypes";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const columns: ColumnDef<Vendor>[] = [
  {
    accessorKey: "name",
    header: "Vendor Name",
    sortingFn: "alphanumeric",
    cell: ({ row }) => (
      <Link href={`/vendors/${row.original.id}`} className="font-medium text-slate-900 hover:underline">
        {row.original.name}
      </Link>
    ),
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
    cell: ({ row }) => row.original.city,
  },
  {
    accessorKey: "rating",
    header: "Rating",
    sortingFn: "alphanumeric",
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
    sortingFn: "alphanumeric",
  },
];
