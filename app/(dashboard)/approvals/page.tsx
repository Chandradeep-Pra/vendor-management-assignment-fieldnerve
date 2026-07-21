import ApprovalWorkflow from "@/components/approvals/ApprovalWorkflow";

const page = () => {
  return (
    <div className="space-y-6 p-6"><div><p className="text-sm text-muted-foreground">Review and decide vendor requests</p><h1 className="text-2xl font-semibold">Approval workflow</h1></div><ApprovalWorkflow /></div>
  );
};

export default page
