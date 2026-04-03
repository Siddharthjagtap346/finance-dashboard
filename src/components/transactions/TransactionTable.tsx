// src/components/transactions/TransactionTable.tsx
import { useFinanceStore } from "../../store/useFinanceStore";
import AddTransactionModal from "../ui/AddTransactionModal";
import { exportToCSV, exportToJSON } from "../../utils/export";
import { Download } from "lucide-react";

type Props = {
  limit?: number;
};

export default function TransactionTable({ limit }: Props) {
  const {
    transactions,
    deleteTransaction,
    role,
    search,
    filter,
    dateFilter,
    setSearch,
    setFilter,
    setDateFilter,
  } = useFinanceStore();

  // ✅ Date filter
  const applyDateFilter = (transactions: any[]) => {
    if (dateFilter === "all") return transactions;

    const now = new Date();
    now.setHours(0, 0, 0, 0);

    const days = dateFilter === "7d" ? 7 : 30;

    return transactions.filter((t) => {
      const tDate = new Date(t.date);
      tDate.setHours(0, 0, 0, 0);

      const diffDays =
        (now.getTime() - tDate.getTime()) / (1000 * 60 * 60 * 24);

      return diffDays >= 0 && diffDays < days;
    });
  };

  // ✅ Filter + search
  const filtered = applyDateFilter(
    transactions.filter((t) => {
      return (
        (filter === "all" || t.type === filter) &&
        t.category.toLowerCase().includes(search.toLowerCase())
      );
    })
  );

  // ✅ Limit for dashboard
  const displayed = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div className="card mt-4">

      {/* ✅ Dashboard Header */}
      {limit && (
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            Showing recent {limit} transactions
          </h3>
          <a
            href="/transactions"
            className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            View All →
          </a>
        </div>
      )}

        <>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            
            {/* Search + Filter */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                placeholder="Search category..."
                className="input w-full sm:w-64"
                onChange={(e) => setSearch(e.target.value)}
              />

              <select
                className="input w-full sm:w-40"
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </div>

            {/* Date Filter */}
            <div className="flex flex-col">
              <select
                className="input w-full sm:w-40"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value as any)}
              >
                <option value="all">All Time</option>
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
              </select>

              <p className="text-xs text-gray-400 mt-1">
                Showing:{" "}
                <span className="font-medium text-gray-600 dark:text-gray-300">
                  {dateFilter === "all"
                    ? "All Time"
                    : dateFilter === "7d"
                    ? "Last 7 Days"
                    : "Last 30 Days"}
                </span>
              </p>
            </div>

            {/* Add Button */}
            {role === "admin" && (
              <AddTransactionModal
                trigger={
                  <button className="btn-primary whitespace-nowrap">
                    + Add Transaction
                  </button>
                }
              />
            )}
          </div>

          {/* Export Buttons */}
          <div className="flex gap-3 flex-wrap mb-4">
            <button
              onClick={() => exportToCSV(filtered)}
              className="btn-secondary flex items-center gap-2"
            >
              <Download size={16} />
              Export CSV
            </button>

            <button
              onClick={() => exportToJSON(filtered)}
              className="btn-secondary flex items-center gap-2"
            >
              <Download size={16} />
              Export JSON
            </button>
          </div>
        </>
      

      {/* TABLE */}
      {displayed.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          No transactions found.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-y-2">
            <thead className="sticky top-0 bg-white dark:bg-gray-800 z-10">
              <tr>
                <th className="text-left px-4 py-2">Date</th>
                <th className="text-left px-4 py-2">Category</th>
                <th className="text-left px-4 py-2">Amount</th>
                <th className="text-left px-4 py-2">Type</th>
                {role === "admin" && (
                  <th className="text-left px-4 py-2">Actions</th>
                )}
              </tr>
            </thead>

            <tbody>
              {displayed.map((t) => (
                <tr
                  key={t.id}
                  className="bg-gray-50 dark:bg-gray-700 hover:scale-[1.01] transition rounded-xl shadow-sm"
                >
                  <td className="px-4 py-3 rounded-l-xl">
                    {new Date(t.date).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>

                  <td className="px-4 py-3">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300">
                      {t.category}
                    </span>
                  </td>

                  <td
                    className={`px-4 py-3 font-semibold ${
                      t.type === "income"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    ₹{t.amount}
                  </td>

                  <td className="px-4 py-3 capitalize">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        t.type === "income"
                          ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300"
                          : "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300"
                      }`}
                    >
                      {t.type}
                    </span>
                  </td>

                  {role === "admin" && (
                    <td className="px-4 py-3 rounded-r-xl">
                      <button
                        className="text-red-500 hover:text-red-600 text-sm font-medium"
                        onClick={() => deleteTransaction(t.id)}
                      >
                        Delete
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}