type Transaction = {
  id: number;
  date: string;
  amount: number;
  category: string;
  type: "income" | "expense";
};

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

let mockData: Transaction[] = JSON.parse(
  localStorage.getItem("finance") || "[]"
);

export const mockApi = {
  async getTransactions() {
    await delay(500); // simulate network
    return mockData;
  },

  async addTransaction(t: Transaction) {
    await delay(300);
    mockData.push(t);
    localStorage.setItem("finance", JSON.stringify(mockData));
    return t;
  },

  async deleteTransaction(id: number) {
    await delay(300);
    mockData = mockData.filter(t => t.id !== id);
    localStorage.setItem("finance", JSON.stringify(mockData));
  }
};