"use client";

import { useState } from "react";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnFiltersState,
  type Header,
  type SortingState,
} from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import VendorForm from "../vendor-form/VendorForm";
import { columns } from "./columns";
import { vendors } from "../vendor-mock-data";
import type { Vendor } from "@/types/vendorTypes";
import { ArrowRightFromLine, Plus } from "lucide-react";
import Link from "next/link";

const VendorTable = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [filter, setFilter] = useState("");
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
  const [isAddVendorOpen, setIsAddVendorOpen] = useState(false);

  const tableColumns = columns;

  const table = useReactTable({
    data: vendors,
    columns: tableColumns,
    state: {
      sorting,
      columnFilters,
      globalFilter: filter,
      pagination,
    },
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    globalFilterFn: (row, columnId, filterValue) => {
      const value = row.getValue(columnId);
      return String(value).toLowerCase().includes(String(filterValue).toLowerCase());
    },
  });

  const getHeaderLabel = (header: Header<Vendor, unknown>) => {
    if (typeof header.column.columnDef.header === "function") {
      return header.column.columnDef.header(header.getContext());
    }

    return header.column.columnDef.header;
  };

  return (
    <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className=" flex gap-2 justify-between  w-full ">
        <Input
          placeholder="Search vendors..."
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
          className="max-w-sm"
        />
        <div className="flex gap-4">
          <Link
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 cursor-pointer"
            href="vendors/add-vendor"
          >
            <Plus className="mr-2 h-4 w-4" /> Add Vendor
          </Link>
          <Button variant="outline" className="border border-black">
            <ArrowRightFromLine className="mr-2 h-4 w-4" /> Export
          </Button>
        </div>
      </div>

     

      {/* Vendor Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <div className="min-w-180">
          <Table>
          <TableHeader className="sticky top-0 z-20 bg-white">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    <div className="space-y-2 flex items-center">
                      <div>
                        {header.isPlaceholder ? null : getHeaderLabel(header)}
                      </div>
                      {header.column.id === "city" ? (
                        <Select
                          value={columnFilters.find((filter) => filter.id === "city")?.value?.toString() ?? "all"}
                          onValueChange={(value) => {
                            setColumnFilters((prev) => {
                              const next = prev.filter((filter) => filter.id !== "city");
                              return value === "all" ? next : [...next, { id: "city", value }];
                            });
                          }}
                        >
                          <SelectTrigger className="h-8 w-full text-xs">
                            <SelectValue placeholder="" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All cities</SelectItem>
                            <SelectItem value="Bengaluru">Bengaluru</SelectItem>
                            <SelectItem value="Mumbai">Mumbai</SelectItem>
                            <SelectItem value="Pune">Pune</SelectItem>
                            <SelectItem value="Delhi">Delhi</SelectItem>
                            <SelectItem value="Hyderabad">Hyderabad</SelectItem>
                            <SelectItem value="Chennai">Chennai</SelectItem>
                          </SelectContent>
                        </Select>
                      ) : null}
                      {header.column.id === "status" ? (
                        <Select
                          value={columnFilters.find((filter) => filter.id === "status")?.value?.toString() ?? "all"}
                          onValueChange={(value) => {
                            setColumnFilters((prev) => {
                              const next = prev.filter((filter) => filter.id !== "status");
                              return value === "all" ? next : [...next, { id: "status", value }];
                            });
                          }}
                        >
                          <SelectTrigger className="h-8 w-full text-xs">
                            <SelectValue placeholder="" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All statuses</SelectItem>
                            <SelectItem value="Active">Active</SelectItem>
                            <SelectItem value="Pending">Pending</SelectItem>
                            <SelectItem value="Inactive">Inactive</SelectItem>
                            <SelectItem value="Blacklisted">Blacklisted</SelectItem>
                          </SelectContent>
                        </Select>
                      ) : null}
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {typeof cell.column.columnDef.cell === "function"
                      ? cell.column.columnDef.cell(cell.getContext())
                      : cell.getValue()?.toString()}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
          </Table>
        </div>
      </div>

      <div className="flex items-center justify-end gap-2">
        <Button variant="outline" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
          Previous
        </Button>
        <span className="text-sm text-slate-500">
          Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </span>
        <Button variant="outline" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default VendorTable;