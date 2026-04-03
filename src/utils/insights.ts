// src/utils/insights.ts

export function getInsights(transactions: any[], dateFilter: string) {

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

  const filtered = applyDateFilter(transactions);

  const income = filtered
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expenses = filtered.filter((t) => t.type === "expense");

  const totalSpent = expenses.reduce((sum, t) => sum + t.amount, 0);

  const netSavings = income - totalSpent;

  const savingRate = income
    ? ((netSavings / income) * 100).toFixed(1)
    : "0";

  // Category totals
  const categoryMap: Record<string, number> = {};
  expenses.forEach((t) => {
    categoryMap[t.category] =
      (categoryMap[t.category] || 0) + t.amount;
  });

  const sortedCategories = Object.entries(categoryMap).sort(
    (a, b) => b[1] - a[1]
  );

  const highestCategory = sortedCategories[0]?.[0] || "N/A";

  // Most active (by count)
  const countMap: Record<string, number> = {};
  filtered.forEach((t) => {
    countMap[t.category] =
      (countMap[t.category] || 0) + 1;
  });

  const mostActiveCategory = Object.entries(countMap).sort(
    (a, b) => b[1] - a[1]
  )[0]?.[0] || "N/A";

  // Monthly grouped (income vs expense) ✅ FIXED
const monthlyMap: Record<
  string,
  { income: number; expense: number }
> = {};

filtered.forEach((t) => {
  const d = new Date(t.date);
  const key = `${d.getFullYear()}-${d.getMonth()}`;

  if (!monthlyMap[key]) {
    monthlyMap[key] = { income: 0, expense: 0 };
  }

  if (t.type === "income") {
    monthlyMap[key].income += t.amount;
  } else {
    monthlyMap[key].expense += t.amount;
  }
});

// Convert to sorted array (correct order)
const monthlyData = Object.entries(monthlyMap)
  .sort((a, b) => {
    const [ay, am] = a[0].split("-").map(Number);
    const [by, bm] = b[0].split("-").map(Number);
    return ay === by ? am - bm : ay - by;
  })
  .map(([key, val]) => {
    const [year, month] = key.split("-").map(Number);
    const date = new Date(year, month);

    return {
      month: date.toLocaleString("default", { month: "short" }),
      income: val.income,
      expense: val.expense,
    };
  });

// Comparison based on expense (correct)
let comparison = "No data";
if (monthlyData.length >= 2) {
  const last = monthlyData[monthlyData.length - 1].expense;
  const prev = monthlyData[monthlyData.length - 2].expense;

  if (last > prev) comparison = "Spending increased 📈";
  else if (last < prev) comparison = "Spending decreased 📉";
  else comparison = "Spending stable ➖";
}

  // Smart insight
  let insight = "You're managing well 👍";
  if (savingRate < "20")
    insight = "Low savings ⚠️ Try reducing expenses";
  if (highestCategory === "Food")
    insight = "Food is your top expense 🍔";

  return {
    income,
    totalSpent,
    netSavings,
    savingRate,
    highestCategory,
    mostActiveCategory,
    comparison,
    insight,
    categoryData: sortedCategories,
    monthlyData,
  };
}