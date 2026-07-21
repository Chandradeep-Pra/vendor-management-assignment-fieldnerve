
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { VendorFormValues } from "@/lib/validations/vendor/schema";

const ContactForm = () => {
  const form = useFormContext<VendorFormValues>();

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-2 md:col-span-2">
        <Label htmlFor="address">Address</Label>
        <Textarea
          id="address"
          placeholder="Enter vendor address"
          {...form.register("address")}
          className="min-h-24"
        />
        {form.formState.errors.address ? (
          <p className="text-sm text-red-500">{form.formState.errors.address.message}</p>
        ) : null}
      </div>

      <div className="space-y-2 md:col-span-2">
        <Label htmlFor="contactDetails">Contact Details</Label>
        <Input
          id="contactDetails"
          placeholder="Enter phone, email, or contact information"
          {...form.register("contactDetails")}
        />
        {form.formState.errors.contactDetails ? (
          <p className="text-sm text-red-500">{form.formState.errors.contactDetails.message}</p>
        ) : null}
      </div>
    </div>
  );
};

export default ContactForm;