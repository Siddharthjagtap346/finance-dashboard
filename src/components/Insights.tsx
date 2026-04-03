// src/utils/Insights.tsx

import { useFinanceStore } from "../store/useFinanceStore";
import { getInsights } from "../utils/insights";
import MonthlyBarChart from "./charts/MonthlyBarChart";

type Props = {
  compact?: boolean;
};

export default function Insights({ compact = false }: Props) {
  const { transactions, dateFilter } = useFinanceStore();

  if (!transactions.length) {
    return (
      <div className="card text-center py-12">
        <p>No data yet</p>
      </div>
    );
  }

  const insights = getInsights(transactions, dateFilter);
  if (compact) {
  return (
    <div className="mt-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 shadow-sm">

      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          Insights
        </h3>

        <a
          href="/insights"
          className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          View All →
        </a>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {/* Income */}
        <div className="rounded-xl bg-green-50 dark:bg-green-900/20 p-3">
          <p className="text-xs text-green-600 dark:text-green-400">
            Income
          </p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            ₹{insights.income}
          </p>
        </div>

        {/* Expense */}
        <div className="rounded-xl bg-red-50 dark:bg-red-900/20 p-3">
          <p className="text-xs text-red-600 dark:text-red-400">
            Spent
          </p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            ₹{insights.totalSpent}
          </p>
        </div>

        {/* Savings */}
        <div className="rounded-xl bg-blue-50 dark:bg-blue-900/20 p-3">
          <p className="text-xs text-blue-600 dark:text-blue-400">
            Savings
          </p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            ₹{insights.netSavings}
          </p>
        </div>

        {/* Rate */}
        <div className="rounded-xl bg-indigo-50 dark:bg-indigo-900/20 p-3">
          <p className="text-xs text-indigo-600 dark:text-indigo-400">
            Rate
          </p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            {insights.savingRate}%
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="my-4 h-px bg-gray-200 dark:bg-gray-800" />

      {/* Insight + Top Category */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">

        <p className="text-sm text-gray-600 dark:text-gray-300">
          {insights.insight}
        </p>

        <div className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 w-fit">
          Top: <span className="font-medium">{insights.highestCategory}</span>
        </div>

      </div>
    </div>
  );
}

  return (
    <div className="space-y-6 mt-6">

      {/* 🔥 TOP METRICS */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="card">
          <p className="text-sm text-gray-500">Income</p>
          <h2 className="text-xl font-bold">₹{insights.income}</h2>
        </div>

        <div className="card">
          <p className="text-sm text-gray-500">Spent</p>
          <h2 className="text-xl font-bold">₹{insights.totalSpent}</h2>
        </div>

        <div className="card">
          <p className="text-sm text-gray-500">Savings</p>
          <h2 className="text-xl font-bold">₹{insights.netSavings}</h2>
        </div>

        <div className="card">
          <p className="text-sm text-gray-500">Saving Rate</p>
          <h2 className="text-xl font-bold">
            {insights.savingRate}%
          </h2>
        </div>
      </div>

      {/* 📊 CHART */}
      <MonthlyBarChart data={insights.monthlyData} />

      {/* 🧠 SMART INSIGHT */}
      <div className="card">
        <p className="text-sm text-gray-500">Insight</p>
        <p className="mt-2 text-lg font-medium">
          {insights.insight}
        </p>
      </div>

      {/* 📊 CATEGORY RANKING */}
      <div className="card">
        <p className="text-sm text-gray-500 mb-3">
          Category Ranking
        </p>

        <div className="space-y-3">
          {insights.categoryData.map(([cat, amt]: any, i: number) => (
            <div key={cat}>
              <div className="flex justify-between text-sm">
                <span>#{i + 1} {cat}</span>
                <span>₹{amt}</span>
              </div>

              <div className="w-full bg-gray-200 h-2 rounded mt-1">
                <div
                  className="bg-blue-500 h-2 rounded"
                  style={{
                    width: `${(amt / insights.totalSpent) * 100}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 EXTRA STATS */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="card">
          <p className="text-sm text-gray-500">Top Category</p>
          <h2 className="text-lg font-bold">
            {insights.highestCategory}
          </h2>
        </div>

        <div className="card">
          <p className="text-sm text-gray-500">Most Active</p>
          <h2 className="text-lg font-bold">
            {insights.mostActiveCategory}
          </h2>
        </div>
      </div>

      {/* 📈 TREND */}
      <div className="card">
        <p className="text-sm text-gray-500">Trend</p>
        <p className="text-lg font-medium mt-2">
          {insights.comparison}
        </p>
      </div>

    </div>
  );
}