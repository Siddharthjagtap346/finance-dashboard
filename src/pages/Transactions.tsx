import TransactionTable from "../components/transactions/TransactionTable";

export default function Transactions() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Transactions</h2>
          <p className="text-sm text-gray-500">
            Track and manage your financial activity
          </p>
        </div>
      </div>

      {/* Table */}
      <TransactionTable />
    </div>
  );
}