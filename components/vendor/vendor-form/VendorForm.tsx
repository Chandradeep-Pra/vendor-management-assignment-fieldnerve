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
  { title: "Business details", description: "Vendor identity and compliance" },
  { title: "Contact details", description: "Address and primary contact" },
  { title: "Payment & documents", description: "Banking and supporting documents" },
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
  const [activeStep, setActiveStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm<VendorFormValues>({
    resolver: zodResolver(vendorSchema),
    defaultValues,
  });

  const onSubmit = () => {
    setIsSubmitted(true);
    form.reset(defaultValues);
    setActiveStep(0);
  };

  const goToNextStep = async () => {
    const fields = activeStep === 0
      ? ["vendorName", "vendorCategory", "gst", "pan"] as const
      : ["address", "contactDetails"] as const;
    const isValid = await form.trigger(fields);

    if (isValid) setActiveStep((step) => step + 1);
  };

  return (
    <div className="w-full">
      <Card className="mx-auto w-full">
        <CardHeader>
          <CardTitle>Create Vendor</CardTitle>
          <CardDescription>Fill out the complete vendor profile in one place.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <ol className="grid gap-3 sm:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className={`rounded-lg border p-3 ${index === activeStep ? "border-primary bg-muted/50" : "border-border"}`}>
                <div className="flex items-center gap-2"><span className={`flex size-6 items-center justify-center rounded-full text-xs font-semibold ${index <= activeStep ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>{index + 1}</span><p className="text-sm font-medium">{step.title}</p></div>
                <p className="mt-1 text-xs text-muted-foreground">{step.description}</p>
              </li>
            ))}
          </ol>
          {isSubmitted ? <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">Vendor submitted successfully.</div> : null}
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6" noValidate>
              {activeStep === 0 ? <BasicInfo form={form} /> : null}
              {activeStep === 1 ? <ContactForm /> : null}
              {activeStep === 2 ? <PaymentAndDocuments /> : null}

              <div className="flex items-center justify-between border-t border-border pt-4">
                <Button type="button" variant="outline" onClick={() => setActiveStep((step) => step - 1)} disabled={activeStep === 0}>Back</Button>
                {activeStep < steps.length - 1 ? <Button type="button" onClick={goToNextStep}>Continue</Button> : <Button type="submit">Submit Vendor</Button>}
              </div>
            </form>
          </FormProvider>
        </CardContent>
      </Card>
    </div>
  );
};

export default VendorForm;
