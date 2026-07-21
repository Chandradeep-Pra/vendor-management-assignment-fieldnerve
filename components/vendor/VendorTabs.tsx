"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Vendor } from "@/types/vendorTypes";

const VendorTabs = ({ vendor }: { vendor: Vendor }) => (
  <Tabs defaultValue="overview">
    <TabsList variant="line" className="w-full justify-start overflow-x-auto">
      {['overview', 'contacts', 'performance', 'purchase-history', 'documents', 'payments', 'projects', 'issues', 'audit'].map((tab) => (
        <TabsTrigger key={tab} value={tab} className="capitalize">{tab.replaceAll('-', ' ')}</TabsTrigger>
      ))}
    </TabsList>
    <TabsContent value="overview"><Card><CardContent className="grid gap-4 pt-4 sm:grid-cols-2"><Detail label="Primary contact" value={vendor.contactPerson} /><Detail label="Category" value={vendor.category} /><Detail label="City" value={vendor.city} /><Detail label="Vendor code" value={vendor.code} /></CardContent></Card></TabsContent>
    <TabsContent value="contacts"><Card><CardContent className="pt-4"><Detail label="Primary contact" value={`${vendor.contactPerson} · vendor@${vendor.code.toLowerCase()}.com`} /></CardContent></Card></TabsContent>
    <TabsContent value="performance"><Card><CardContent className="grid gap-4 pt-4 sm:grid-cols-3"><Detail label="Quality score" value="92%" /><Detail label="Delivery score" value="89%" /><Detail label="Response time" value="3.2 hrs" /></CardContent></Card></TabsContent>
    <TabsContent value="purchase-history"><Card><CardContent className="pt-4"><Detail label="Latest purchase" value={`₹${vendor.totalPurchaseValue.toLocaleString("en-IN")} · ${vendor.lastTransaction}`} /></CardContent></Card></TabsContent>
    <TabsContent value="documents"><Card><CardContent className="flex items-center justify-between pt-4"><Detail label="GST certificate" value="Verified · expires Dec 2026" /><Badge>Verified</Badge></CardContent></Card></TabsContent>
    <TabsContent value="payments"><Card><CardContent className="pt-4"><Detail label="Payment terms" value="Net 30 · No overdue invoices" /></CardContent></Card></TabsContent>
    <TabsContent value="projects"><Card><CardContent className="pt-4"><Detail label="Associated project" value="Procurement transformation · Active" /></CardContent></Card></TabsContent>
    <TabsContent value="issues"><Card><CardContent className="pt-4"><Detail label="Recent issues" value="No open issues" /></CardContent></Card></TabsContent>
    <TabsContent value="audit"><Card><CardContent className="pt-4"><Detail label="Latest audit event" value="Profile reviewed by Procurement · 15 Jul 2026" /></CardContent></Card></TabsContent>
  </Tabs>
);

const Detail = ({ label, value }: { label: string; value: string }) => <div><p className="text-sm text-muted-foreground">{label}</p><p className="mt-1 font-medium">{value}</p></div>;

export default VendorTabs;
