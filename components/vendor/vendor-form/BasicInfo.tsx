import { Controller, type UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { VendorFormValues } from "@/lib/validations/vendor/schema";
import type { VendorCategoryName } from "@/types/statTypes";

const categories: VendorCategoryName[] = ["IT", "Logistics", "Manufacturing", "HR", "Marketing"];

const BasicInfo = ({ form }: { form: UseFormReturn<VendorFormValues> }) => {
  return (
    <div className="grid gap-6 ">
      <div className="space-y-2">
        <Label htmlFor="vendorName">Vendor Name</Label>
        <Input
          id="vendorName"
          placeholder="Enter vendor name"
          {...form.register("vendorName")}
        />
        {form.formState.errors.vendorName ? (
          <p className="text-sm text-red-500">{form.formState.errors.vendorName.message}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="vendorCategory">Category</Label>
        <Controller
          control={form.control}
          name="vendorCategory"
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger id="vendorCategory" className="w-full">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {form.formState.errors.vendorCategory ? (
          <p className="text-sm text-red-500">{form.formState.errors.vendorCategory.message}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="gst">GST</Label>
        <Input id="gst" placeholder="Enter GST number" {...form.register("gst")} />
        {form.formState.errors.gst ? (
          <p className="text-sm text-red-500">{form.formState.errors.gst.message}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="pan">PAN</Label>
        <Input
          id="pan"
          placeholder="Enter PAN number"
          {...form.register("pan")}
          autoCapitalize="characters"
          style={{ textTransform: "uppercase" }}
        />
        {form.formState.errors.pan ? (
          <p className="text-sm text-red-500">{form.formState.errors.pan.message}</p>
        ) : null}
      </div>
    </div>
  );
};

export default BasicInfo;