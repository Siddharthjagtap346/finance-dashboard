// src/components/ui/AddTransactionModal.tsx
import { useState } from "react";
import { useFinanceStore } from "../../store/useFinanceStore";

export default function AddTransactionModal({ trigger }: { trigger?: React.ReactNode }) {
  const { addTransaction, role } = useFinanceStore();
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    amount: "",
    category: "",
    type: "expense",
  });

  if (role !== "admin") return null;

  return (
    <>
      {/* Trigger Button (reusable) */}
      <div onClick={() => setOpen(true)}>
        {trigger || (
          <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg">
            + Add Transaction
          </button>
        )}
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 flex justify-center items-center">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl w-[95%] max-w-md shadow-xl max-h-[90vh] overflow-y-auto">
            <h2 className="mb-4 text-xl font-bold">Add Transaction</h2>

            <input
              placeholder="Amount"
              className="w-full border p-2 mb-3 rounded"
              onChange={(e) =>
                setForm({ ...form, amount: e.target.value })
              }
            />

            <input
              placeholder="Category"
              className="w-full border p-2 mb-3 rounded"
              onChange={(e) =>
                setForm({ ...form, category: e.target.value })
              }
            />

            <select
              className="w-full border p-2 mb-4 rounded"
              onChange={(e) =>
                setForm({ ...form, type: e.target.value })
              }
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>

            <div className="flex justify-between">
              <button
                className="bg-gray-300 px-4 py-2 rounded"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>

              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={() => {
                  addTransaction({
                    id: Date.now(),
                    date: new Date().toISOString(),
                    amount: Number(form.amount),
                    category: form.category,
                    type: form.type as any,
                  });
                  setOpen(false);
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}