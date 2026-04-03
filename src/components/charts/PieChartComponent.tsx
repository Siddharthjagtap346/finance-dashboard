// src/components/charts/PieChartComponent.tsx
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useFinanceStore } from "../../store/useFinanceStore";

const COLORS = ["#6366f1", "#22c55e", "#ef4444", "#f59e0b", "#06b6d4", "#a855f7"];

// ✅ ₹ formatter
const formatCurrency = (value: number) => {
  if (value >= 100000) return `₹${(value / 100000).toFixed(1)}L`;
  if (value >= 1000) return `₹${(value / 1000).toFixed(1)}k`;
  return `₹${value}`;
};

export default function PieChartComponent() {
  const { transactions } = useFinanceStore();

  const data = Object.values(
    transactions
      .filter((t) => t.type === "expense")
      .reduce((acc: any, curr) => {
        acc[curr.category] = acc[curr.category] || {
          name: curr.category,
          value: 0,
        };
        acc[curr.category].value += curr.amount;
        return acc;
      }, {})
  );

  if (!data.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow text-center py-10 text-gray-500">
        No expense data to display 📊
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-4 sm:p-5 rounded-xl shadow w-full">
      
      {/* ✅ Title + Subtitle */}
      <h3 className="text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-200">
        Spending Overview
      </h3>
      <p className="text-xs text-gray-400 mb-4">
        By category
      </p>

      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          
          {/* ✅ Pie */}
          <Pie
            data={data}
            dataKey="value"
            outerRadius={90}
            innerRadius={40} // 🔥 donut style (modern look)
            paddingAngle={3}
          >
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>

          {/* ✅ Tooltip with ₹ */}
          <Tooltip
            formatter={(value: any) => [
              typeof value === "number" ? formatCurrency(value) : value,
            ]}
            contentStyle={{
              backgroundColor: "#1f2937",
              border: "none",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "#e5e7eb" }}
          />

          {/* ✅ Legend (color mapping) */}
          <Legend
            verticalAlign="bottom"
            iconType="circle"
            wrapperStyle={{
              fontSize: "12px",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}