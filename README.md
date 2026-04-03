<h1 align="center">💰 Finance Dashboard UI</h1>

<p align="center">
  A modern, production-ready finance dashboard built for the Zorvyn FinTech Internship 🚀
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-blue?logo=react" />
  <img src="https://img.shields.io/badge/TypeScript-Strict-blue?logo=typescript" />
  <img src="https://img.shields.io/badge/Vite-Fast-purple?logo=vite" />
  <img src="https://img.shields.io/badge/TailwindCSS-Modern-38bdf8?logo=tailwindcss" />
  <img src="https://img.shields.io/badge/Zustand-State%20Management-000" />
  <img src="https://img.shields.io/badge/Framer%20Motion-Animations-pink" />
  <img src="https://img.shields.io/badge/Recharts-Data%20Viz-orange" />
</p>

<p align="center">
  🔗 <a href="https://finance-dashboard-beryl-iota.vercel.app">Live Demo</a> •
  💻 <a href="https://github.com/Siddharthjagtap346/finance-dashboard">GitHub</a>
</p>

---
# 💰 Finance Dashboard UI

A modern, responsive **Finance Dashboard** built as part of the **Frontend Developer Intern assignment for Zorvyn FinTech**.

This project demonstrates strong frontend fundamentals including **UI design, state management, data visualization, and user experience** — all implemented without backend dependency using clean architecture and scalable patterns.

---

## 🚀 Live Demo

🔗 **Deployed App:**
https://finance-dashboard-beryl-iota.vercel.app

🔗 **GitHub Repository:**
https://github.com/Siddharthjagtap346/finance-dashboard

---
## 📸 Screenshots

### 🏠 Dashboard
![Dashboard](./screenshots/dashboard.png)

### 📊 Insights
![Insights](./screenshots/insights.png)

### 💳 Transactions
![Transactions](./screenshots/transactions.png)

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

- ![Dark Mode](https://img.shields.io/badge/Dark%20Mode-Enabled-111827?style=flat&logo=moon&logoColor=white)
- ![Local Storage](https://img.shields.io/badge/Storage-LocalStorage-6366f1?style=flat)
- ![Export](https://img.shields.io/badge/Export-CSV%20%7C%20JSON-22c55e?style=flat)
- ![Animations](https://img.shields.io/badge/Animations-Framer%20Motion-f472b6?style=flat)
- ![Filtering](https://img.shields.io/badge/Filtering-Advanced-f59e0b?style=flat)
- ![Responsive](https://img.shields.io/badge/Responsive-Mobile%20%2B%20Desktop-0ea5e9?style=flat)
- ![Architecture](https://img.shields.io/badge/Architecture-Modular-8b5cf6?style=flat)
  
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

### 🚀 Frontend
![React](https://img.shields.io/badge/React-19-61dafb?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178c6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-Build%20Tool-646cff?logo=vite)

### 🎨 Styling
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Utility%20First-38bdf8?logo=tailwindcss)

### 🧠 State Management
![Zustand](https://img.shields.io/badge/Zustand-Lightweight-black)

### 📊 Charts
![Recharts](https://img.shields.io/badge/Recharts-Visualization-orange)

### 🎞 Animations
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-Smooth-pink)

### 🎯 Icons
![Lucide](https://img.shields.io/badge/Lucide-Icons-gray)

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
## 🧪 Edge Case Handling

- Empty transaction states handled gracefully
- No data scenarios for charts
- Large dataset rendering handled efficiently
- Invalid filters safely managed

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
## ⚡ Performance & Optimization

- Efficient state updates using Zustand
- Memoized computed data for charts
- Minimal re-renders
- Lightweight and fast build using Vite

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

This project is not just an assignment — it reflects how I approach building real-world applications:

- Thinking beyond requirements
- Designing for users, not just visuals
- Writing scalable and maintainable code
- Focusing on performance and experience

I aimed to build something that feels **production-ready, intuitive, and impactful**.

---

⭐ If you like this project, feel free to explore and give feedback!
