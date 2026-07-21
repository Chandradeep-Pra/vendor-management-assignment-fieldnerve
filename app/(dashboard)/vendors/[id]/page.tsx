import { notFound } from "next/navigation";
import VendorDetails from "@/components/vendor/VendorDetails";
import { vendors } from "@/components/vendor/vendor-mock-data";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const vendor = vendors.find((item) => item.id === Number(id));

  if (!vendor) notFound();

  return <VendorDetails vendor={vendor} />;
};

export default page;
