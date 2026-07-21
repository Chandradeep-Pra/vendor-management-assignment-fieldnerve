import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { VendorFormValues } from "@/lib/validations/vendor/schema";

const PaymentAndDocuments = () => {
  const form = useFormContext<VendorFormValues>();
  const [bankFields, setBankFields] = useState({
    accountNumber: "",
    accountHolderName: "",
    ifscCode: "",
  });

  useEffect(() => {
    const combinedBankDetails = [
      bankFields.accountNumber,
      bankFields.accountHolderName,
      bankFields.ifscCode,
    ]
      .filter(Boolean)
      .join(" | ");

    form.setValue("bankDetails", combinedBankDetails, {
      shouldDirty: true,
      shouldValidate: true,
    });
  }, [bankFields, form]);

  return (
    <div className="grid gap-6">
      <div className="rounded-xl border border-border bg-muted/30 p-4">
        <h3 className="mb-4 text-sm font-semibold">Payment Details</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="accountNumber">Account Number</Label>
            <Input
              id="accountNumber"
              placeholder="Enter account number"
              value={bankFields.accountNumber}
              onChange={(event) =>
                setBankFields((prev) => ({ ...prev, accountNumber: event.target.value }))
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="accountHolderName">Account Holder Name</Label>
            <Input
              id="accountHolderName"
              placeholder="Enter account holder name"
              value={bankFields.accountHolderName}
              onChange={(event) =>
                setBankFields((prev) => ({ ...prev, accountHolderName: event.target.value }))
              }
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="ifscCode">IFSC Code</Label>
            <Input
              id="ifscCode"
              placeholder="Enter IFSC code"
              value={bankFields.ifscCode}
              onChange={(event) => setBankFields((prev) => ({ ...prev, ifscCode: event.target.value }))}
            />
          </div>
        </div>
        {form.formState.errors.bankDetails ? (
          <p className="mt-3 text-sm text-red-500">Please complete the bank details.</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="paymentTerms">Payment Terms</Label>
        <Input id="paymentTerms" placeholder="e.g. Net 30" {...form.register("paymentTerms")} />
        {form.formState.errors.paymentTerms ? (
          <p className="text-sm text-red-500">{form.formState.errors.paymentTerms.message}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="certifications">Certifications</Label>
        <Textarea
          id="certifications"
          placeholder="List vendor certifications"
          {...form.register("certifications")}
          className="min-h-24"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="documentsUpload">Documents Upload</Label>
        <Input
          id="documentsUpload"
          type="file"
          multiple
          onChange={(event) => {
            const files = event.target.files;
            form.setValue("documentsUpload", files, {
              shouldDirty: true,
              shouldValidate: true,
            });
          }}
        />
        {form.formState.errors.documentsUpload ? (
          <p className="text-sm text-red-500">
            {typeof form.formState.errors.documentsUpload.message === "string"
              ? form.formState.errors.documentsUpload.message
              : "Please upload a valid document"}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default PaymentAndDocuments;
