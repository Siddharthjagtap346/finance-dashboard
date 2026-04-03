# 💰 Finance Dashboard UI

A modern, responsive **Finance Dashboard** built as part of the **Frontend Developer Intern assignment for Zorvyn FinTech**.

This project demonstrates strong frontend fundamentals including **UI design, state management, data visualization, and user experience** — all implemented without backend dependency using clean architecture and scalable patterns.

---

## 🚀 Live Demo

🔗 **Deployed App:**
https://finance-dashboard-beryl-iota.vercel.app

🔗 **GitHub Repository:**
(Add your repo link here)

---

## 📌 Assignment Coverage

This project fully satisfies **all core and most optional requirements** of the assignment:

### ✅ 1. Dashboard Overview

* Summary Cards → Balance, Income, Expenses, Savings
* 📈 **Balance Trend Chart** (time-based visualization)
* 🥧 **Spending Breakdown Pie Chart** (category-based)
* Recent transactions preview
* Compact insights section

---

### ✅ 2. Transactions Section

* Full transaction table with:

  * Date
  * Category
  * Amount
  * Type (Income/Expense)
* Features:

  * 🔍 Search (category-based)
  * 🎯 Filter (income/expense)
  * 📅 Date filter (7d / 30d / all)
  * 📤 Export to CSV / JSON
  * 📊 Responsive table UI

---

### ✅ 3. Role-Based UI (Frontend Simulation)

* **Viewer**

  * Read-only access
* **Admin**

  * Add transactions
  * Delete transactions

👉 Role switching implemented via Settings panel

---

### ✅ 4. Insights Section

* Smart analytics generated from transaction data:

  * Highest spending category
  * Most active category
  * Monthly income vs expense comparison
  * Saving rate (%)
  * Smart insights (dynamic observations)

---

### ✅ 5. State Management

* Centralized state using **Zustand**
* Managed states:

  * Transactions
  * Filters
  * Search
  * Role
  * Date filters
* Persistent storage via **localStorage**

---

### ✅ 6. UI & UX

* Clean and modern design using **Tailwind CSS**
* Fully responsive (mobile + desktop)
* Smooth animations using **Framer Motion**
* Dark mode support 🌙
* Handles empty states gracefully

---

## ✨ Optional Enhancements Implemented

✔ Dark Mode Toggle
✔ Local Storage Persistence
✔ Export Functionality (CSV + JSON)
✔ Animations (page transitions + hover effects)
✔ Advanced Filtering (date-based + category search)
✔ Responsive Charts
✔ Modular Component Architecture

---

## 🧠 Key Features

### 📊 Data Visualization

* Line Chart → Balance trend over time
* Pie Chart → Category spending distribution
* Bar Chart → Monthly income vs expenses

### ⚡ Performance & UX

* Optimized rendering using computed data
* Smooth UI transitions
* Mobile-first responsive layouts

### 🧩 Scalable Architecture

* Modular components
* Reusable UI elements
* Clean separation of logic and UI

---

## 🛠 Tech Stack

### Frontend

* React 19
* TypeScript
* Vite

### Styling

* Tailwind CSS

### State Management

* Zustand

### Charts & Visualization

* Recharts

### Animations

* Framer Motion

### Icons

* Lucide React

---

## 📁 Project Structure

```
src/
├── components/
│   ├── cards/
│   ├── charts/
│   ├── transactions/
│   ├── ui/
│   └── layout/
├── pages/
│   ├── Dashboard.tsx
│   ├── Transactions.tsx
│   ├── InsightsPage.tsx
│   └── Settings.tsx
├── store/
│   └── useFinanceStore.ts
├── utils/
│   ├── insights.ts
│   └── export.ts
├── App.tsx
├── AnimatedRoutes.tsx
```

---

## ⚙️ Setup Instructions

```bash
# Clone the repo
git clone <your-repo-url>

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview build
npm run preview
```

---

## 🧪 Design Decisions & Approach

### 1. Simplicity First

The UI is intentionally clean and minimal to ensure clarity and usability.

### 2. Local-First Architecture

* No backend required
* Data persists via localStorage
* Easy to extend with APIs later

### 3. Component Reusability

* Cards, charts, tables are modular
* Easy to scale and maintain

### 4. UX-Focused Enhancements

* Smooth animations
* Empty state handling
* Role-based UI feedback
* Responsive design across devices

---

## 🔮 Future Improvements

* API integration (mock/real backend)
* Authentication system
* Advanced analytics (AI insights)
* Multi-user support
* Data sync across devices

---

## 👨‍💻 Author

**Siddharth Jagtap**
📧 [siddharthjagtap5091@gmail.com](mailto:siddharthjagtap5091@gmail.com)

---

## 💡 Final Note

This project reflects my approach to frontend development — focusing on:

* Clean UI/UX
* Scalable architecture
* Practical feature implementation
* Attention to detail

I aimed to go beyond the basic requirements and build something **realistic, interactive, and production-inspired**.

---

⭐ If you like this project, feel free to explore and give feedback!
