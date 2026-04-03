// src/store/useFinanceStore.ts

import { create } from "zustand";

type Transaction = {
  id: number;
  date: string;
  amount: number;
  category: string;
  type: "income" | "expense";
};

type State = {
  transactions: Transaction[];
  role: "viewer" | "admin";
  search: string;
  filter: string;
  dateFilter: "7d" | "30d" | "all"; // ✅ ADD THIS

  addTransaction: (t: Transaction) => void;
  deleteTransaction: (id: number) => void;
  setRole: (role: "viewer" | "admin") => void;
  setSearch: (search: string) => void;
  setFilter: (filter: string) => void;
  setDateFilter: (filter: "7d" | "30d" | "all") => void;
};

const saved = localStorage.getItem("finance");
const mockData = [
  // 💰 Income
  {
    id: 1,
    date: "2026-01-10",
    amount: 50000,
    category: "Salary",
    type: "income",
  },
  {
    id: 2,
    date: "2026-02-10",
    amount: 52000,
    category: "Salary",
    type: "income",
  },
  {
    id: 3,
    date: "2026-03-10",
    amount: 30000,
    category: "Salary",
    type: "income",
  },
  {
    id: 4,
    date: "2026-03-20",
    amount: 8000,
    category: "Freelance",
    type: "income",
  },
  {
    id: 5,
    date: "2026-04-01",
    amount: 3000,
    category: "Investments",
    type: "income",
  },

  // 🍔 Expenses
  {
    id: 6,
    date: "2026-01-15",
    amount: 8000,
    category: "Food",
    type: "expense",
  },
  {
    id: 7,
    date: "2026-01-18",
    amount: 9200,
    category: "Transport",
    type: "expense",
  },
  {
    id: 8,
    date: "2026-02-05",
    amount: 5700,
    category: "Shopping",
    type: "expense",
  },
  {
    id: 9,
    date: "2026-02-14",
    amount: 6000,
    category: "Food",
    type: "expense",
  },
  {
    id: 10,
    date: "2026-02-20",
    amount: 10000,
    category: "Bills",
    type: "expense",
  },
  {
    id: 11,
    date: "2026-03-08",
    amount: 2200,
    category: "Food",
    type: "expense",
  },
  {
    id: 12,
    date: "2026-03-15",
    amount: 4000,
    category: "Shopping",
    type: "expense",
  },
  {
    id: 13,
    date: "2026-03-22",
    amount: 1500,
    category: "Transport",
    type: "expense",
  },
  {
    id: 14,
    date: "2026-04-02",
    amount: 2800,
    category: "Bills",
    type: "expense",
  },
  {
    id: 15,
    date: "2026-04-10",
    amount: 5000,
    category: "Entertainment",
    type: "expense",
  },
];

export const useFinanceStore = create<State>((set) => ({
  role: "viewer",
  transactions: (() => {
  if (!saved) return mockData;

  const parsed = JSON.parse(saved);
  return parsed.length ? parsed : mockData;
})(),
  search: "",
  filter: "all",
  dateFilter: "all", 

  setSearch: (search) => set({ search }),
  setFilter: (filter) => set({ filter }),
  setDateFilter: (dateFilter) => set({ dateFilter }),

  addTransaction: (t) =>
    set((state) => {
      const updated = [...state.transactions, t];
      localStorage.setItem("finance", JSON.stringify(updated));
      return { transactions: updated };
    }),

  deleteTransaction: (id) =>
    set((state) => {
      const updated = state.transactions.filter((t) => t.id !== id);
      localStorage.setItem("finance", JSON.stringify(updated));
      return { transactions: updated };
    }),

  setRole: (role) => set({ role }),
}));