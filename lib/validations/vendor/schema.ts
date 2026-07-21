import { z } from "zod";

export const vendorSchema = z.object({
  vendorName: z.string().min(3, "Vendor name must be at least 3 characters"),
  gst: z.string().regex(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/, "Enter a valid GST number"),
  pan: z.string().regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/i, "Enter a valid PAN number"),
  vendorCategory: z.string().min(1, "Vendor category is required"),
  address: z.string().min(10, "Address must be at least 10 characters"),
  contactDetails: z.string().min(5, "Contact details are required"),
  bankDetails: z.string().min(5, "Bank details are required"),
  paymentTerms: z.string().min(3, "Payment terms are required"),
  certifications: z.string().optional(),
  documentsUpload: z.any().optional(),
});

export type VendorFormValues = z.infer<typeof vendorSchema>;
