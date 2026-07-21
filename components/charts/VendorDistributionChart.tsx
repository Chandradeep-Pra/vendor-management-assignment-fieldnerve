"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, type PieLabelRenderProps } from "recharts";
import { vendorCategoryData } from "@/components/dashboard/mock-data";

const COLORS = ["#2563eb", "#7c3aed", "#14b8a6", "#f59e0b", "#ef4444"];

const VendorDistributionChart = () => {
  const renderLabel = (props: PieLabelRenderProps) => {
    const { cx, cy, midAngle, outerRadius, percent, name } = props;
    const radius = (outerRadius ?? 0) + 24;
    const x = (cx ?? 0) + radius * Math.cos(-(midAngle ?? 0) * (Math.PI / 180));
    const y = (cy ?? 0) + radius * Math.sin(-(midAngle ?? 0) * (Math.PI / 180));

    return (
      <text x={x} y={y} fill="#0f172a" textAnchor="start" dominantBaseline="central" fontSize={12}>
        {`${name ?? ""} (${Math.round((percent ?? 0) * 100)}%)`}
      </text>
    );
  };

  return (
    <div className="h-100 w-full rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={vendorCategoryData}
            dataKey="value"
            nameKey="name"
            outerRadius={110}
            paddingAngle={3}
            label={renderLabel}
            labelLine={true}
          >
            {vendorCategoryData.map((entry, index) => (
              <Cell key={`${entry.name}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, name) => [`${value ?? 0} vendors`, name ?? ""]}
            contentStyle={{
              borderRadius: "12px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 10px 20px rgba(15, 23, 42, 0.08)",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VendorDistributionChart;
