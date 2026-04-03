// components/charts/BalanceChart.tsx

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useFinanceStore } from "../../store/useFinanceStore";

// ✅ ₹ formatter (clean + compact)
const formatCurrency = (value: number) => {
  if (value >= 100000) return `₹${(value / 100000).toFixed(1)}L`;
  if (value >= 1000) return `₹${(value / 1000).toFixed(1)}k`;
  return `₹${value}`;
};

export default function BalanceChart() {
  const { transactions } = useFinanceStore();

  const chartData = (() => {
    const monthlyMap: Record<string, number> = {};

    transactions.forEach((t) => {
      const date = new Date(t.date);

      const month = date.toLocaleString("default", {
        month: "short",
      });

      const value = t.type === "income" ? t.amount : -t.amount;

      monthlyMap[month] = (monthlyMap[month] || 0) + value;
    });

    const months = Object.entries(monthlyMap);

    let running = 0;

    return months.map(([month, value]) => {
      running += value;
      return {
        name: month,
        balance: running,
      };
    });
  })();

  return (
    <div className="bg-white dark:bg-gray-800 p-4 sm:p-5 rounded-xl shadow w-full">
      <h3 className="mb-4 text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-200">
        Balance Trend
      </h3>

      {!chartData.length ? (
        <div className="text-center text-gray-500 py-10">
          Not enough data to show chart 📊
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={260}>
          <LineChart
            data={chartData}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            {/* ✅ Grid for better readability */}
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#374151"
              opacity={0.2}
            />

            {/* ✅ X Axis (no overlap on mobile) */}
            <XAxis
              dataKey="name"
              stroke="#9ca3af"
              tick={{ fontSize: 12 }}
              interval="preserveStartEnd"
            />

            {/* ✅ Y Axis (₹ formatting + spacing fix) */}
            <YAxis
              stroke="#9ca3af"
              tickFormatter={formatCurrency}
              width={60} // prevents cut-off
              tick={{ fontSize: 12 }}
            />

            {/* ✅ Tooltip with ₹ */}
            <Tooltip
              formatter={(value) => (value !== undefined ? `₹${value}` : "")}
              contentStyle={{
                backgroundColor: "#1f2937",
                border: "none",
                borderRadius: "8px",
              }}
              labelStyle={{ color: "#e5e7eb" }}
            />

            {/* ✅ Line */}
            <Line
              type="monotone"
              dataKey="balance"
              stroke="#6366f1"
              strokeWidth={2}
              dot={false} // cleaner look
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}