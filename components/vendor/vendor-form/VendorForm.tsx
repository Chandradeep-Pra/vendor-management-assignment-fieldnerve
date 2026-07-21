"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import BasicInfo from "./BasicInfo";
import ContactForm from "./ContactForm";
import PaymentAndDocuments from "./PaymentAndDocuments";
import { vendorSchema, type VendorFormValues } from "@/lib/validations/vendor/schema";

type VendorFormProps = {
  onVendorCreated: (values: VendorFormValues) => void;
};

const defaultValues: VendorFormValues = {
  vendorName: "",
  gst: "",
  pan: "",
  vendorCategory: "",
  address: "",
  contactDetails: "",
  bankDetails: "",
  paymentTerms: "",
  certifications: "",
  documentsUpload: undefined,
};

const VendorForm = () => {
  const form = useForm<VendorFormValues>({
    resolver: zodResolver(vendorSchema),
    defaultValues,
  });

  const onSubmit = (values: VendorFormValues) => {
    onVendorCreated(values);
    form.reset(defaultValues);
  };

  return (
    <div className="w-full">
      <Card className="mx-auto w-full">
        <CardHeader>
          <CardTitle>Create Vendor</CardTitle>
          <CardDescription>Fill out the complete vendor profile in one place.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6" noValidate>
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="space-y-6">
                  <BasicInfo form={form} />
                </div>
                <div className="space-y-6">
                  <ContactForm />
                  <PaymentAndDocuments />
                </div>
              </div>

              <div className="flex justify-end border-t border-border pt-4">
                <Button type="submit">Submit Vendor</Button>
              </div>
            </form>
          </FormProvider>
        </CardContent>
      </Card>
    </div>
  );
};

export default VendorForm;
