"use client";

import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import BasicInfo from "./BasicInfo";
import ContactForm from "./ContactForm";
import PaymentAndDocuments from "./PaymentAndDocuments";
import { vendorSchema, type VendorFormValues } from "@/lib/validations/vendor/schema";

const steps = [
  { title: "Basic Information", description: "Core vendor details" },
  { title: "Contact Details", description: "Address and contact info" },
  { title: "Payment & Documents", description: "Bank, terms, and uploads" },
];

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
  const [currentStep, setCurrentStep] = useState(0);
  const form = useForm<VendorFormValues>({
    resolver: zodResolver(vendorSchema),
    defaultValues,
  });

  const goNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const goBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const onSubmit = (values: VendorFormValues) => {
    console.log("Vendor form submitted", values);
  };

  return (
    <div className="w-full">
      <Card className="mx-auto w-full">
        <CardHeader>
          <CardTitle>Create Vendor</CardTitle>
          <CardDescription>Complete the vendor profile in three simple steps.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col gap-3 rounded-lg border border-border bg-muted/30 p-4 md:flex-row md:items-center md:justify-between">
            {steps.map((step, index) => {
              const isActive = index === currentStep;
              const isDone = index < currentStep;

              return (
                <div key={step.title} className="flex items-center gap-3">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : isDone
                          ? "bg-emerald-500 text-white"
                          : "bg-background text-muted-foreground"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{step.title}</p>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6" noValidate>
              {currentStep === 0 ? (
                <BasicInfo form={form} />
              ) : currentStep === 1 ? (
                <ContactForm />
              ) : (
                <PaymentAndDocuments />
              )}

              <div className="flex flex-col-reverse gap-3 border-t border-border pt-4 sm:flex-row sm:justify-between">
                <Button type="button" variant="outline" onClick={goBack} disabled={currentStep === 0}>
                  Back
                </Button>

                {currentStep < steps.length - 1 ? (
                  <Button type="button" onClick={goNext}>
                    Next
                  </Button>
                ) : (
                  <Button type="submit">Submit Vendor</Button>
                )}
              </div>
            </form>
          </FormProvider>
        </CardContent>
      </Card>
    </div>
  );
};

export default VendorForm;