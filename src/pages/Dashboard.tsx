// src/pages/Dashboard.tsx
import SummaryCard from "../components/cards/SummaryCard";
import TransactionTable from "../components/transactions/TransactionTable";
import BalanceChart from "../components/charts/BalanceChart";
import PieChartComponent from "../components/charts/PieChartComponent";
import Insights from "../components/Insights";
import { useFinanceStore } from "../store/useFinanceStore";

export default function Dashboard() {
  const { transactions } = useFinanceStore();

  const income = transactions
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expenses = transactions
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expenses;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <SummaryCard title="Balance" value={`₹${balance}`} />
        <SummaryCard title="Income" value={`₹${income}`} />
        <SummaryCard title="Expenses" value={`₹${expenses}`} />
        <SummaryCard title="Savings" value={`₹${balance}`} />
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <BalanceChart />
        <PieChartComponent />
      </div>


      {/* Transactions */}
      <TransactionTable limit={4} />

      {/* Insights */}
      <Insights compact />
    </div>
  );
}