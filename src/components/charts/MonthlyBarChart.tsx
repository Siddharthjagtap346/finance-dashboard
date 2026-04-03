import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";
import { useEffect, useState } from "react";

// ₹ formatter
const formatCurrency = (value: number) => {
  if (value >= 100000) return `₹${(value / 100000).toFixed(1)}L`;
  if (value >= 1000) return `₹${(value / 1000).toFixed(0)}k`;
  return `₹${value}`;
};

export default function MonthlyBarChart({ data }: any) {
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className="card">
      <p className="text-sm text-gray-500 mb-2">
        Monthly Income vs Expense
      </p>

      <ResponsiveContainer width="100%" height={isMobile ? 300 : 360}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: isMobile ? 10 : 20,
            left: isMobile ? 10 : 20,
            bottom: isMobile ? 60 : 40, 
          }}
        >
          {/* Gradients */}
          <defs>
            <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4ade80" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>

            <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f87171" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
          </defs>

          {/* Grid */}
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />

          {/* X Axis FIXED */}
          <XAxis
            dataKey="month"
            stroke="#9ca3af"
            tick={{
              fontSize: isMobile ? 10 : 12,
              angle: isMobile ? -30 : 0, // rotate on mobile
              textAnchor: isMobile ? "end" : "middle",
            }}
            interval={0} // show all labels properly
            height={isMobile ? 50 : 30} // give space
          />

          {/* Y Axis */}
          <YAxis
            stroke="#9ca3af"
            tick={{ fontSize: isMobile ? 10 : 12 }}
            tickFormatter={formatCurrency}
            width={isMobile ? 50 : 60}
          />

          {/* Tooltip */}
          <Tooltip
            formatter={(value: any) =>
              `₹${Number(value).toLocaleString("en-IN")}`
            }
            contentStyle={{
              backgroundColor: "#1f2937",
              border: "none",
              borderRadius: "8px",
              color: "#fff",
            }}
          />

          {/* Legend */}
          <Legend wrapperStyle={{ fontSize: isMobile ? "12px" : "14px" }} />

          {/* Bars */}
          <Bar
            dataKey="income"
            fill="url(#incomeGradient)"
            radius={[8, 8, 0, 0]}
            animationDuration={800}
          />

          <Bar
            dataKey="expense"
            fill="url(#expenseGradient)"
            radius={[8, 8, 0, 0]}
            animationDuration={800}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}