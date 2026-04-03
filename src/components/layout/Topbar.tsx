// layout/Topbar.tsx
import { useFinanceStore } from "../../store/useFinanceStore";
import { Sun, Moon, User } from "lucide-react";
import { useEffect, useState } from "react";

export default function Topbar() {
  const { role, setRole, search, setSearch } = useFinanceStore();
  const [dark, setDark] = useState(false);

  // dark mode toggle with localStorage persistence

useEffect(() => {
  const saved = localStorage.getItem("theme");
  if (saved === "dark") {
    setDark(true);
    document.documentElement.classList.add("dark");
  }
}, []);

useEffect(() => {
  if (dark) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}, [dark]);

  return (
    <div className="flex items-center justify-between bg-white dark:bg-gray-800 px-6 py-3 border-b dark:border-gray-700">
      
      {/* Search */}
      <input
        placeholder="Search..."
        className="border px-3 py-2 rounded-lg w-1/3 dark:bg-gray-700"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Right Controls */}
      <div className="flex items-center gap-4">
        
        {/* Role Toggle */}
        <div className="flex bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
          <button
            onClick={() => setRole("viewer")}
            className={`px-3 py-1 text-sm ${
              role === "viewer" ? "bg-indigo-500 text-white" : ""
            }`}
          >
            Viewer
          </button>
          <button
            onClick={() => setRole("admin")}
            className={`px-3 py-1 text-sm ${
              role === "admin" ? "bg-indigo-500 text-white" : ""
            }`}
          >
            Admin
          </button>
        </div>

        {/* Dark Mode */}
        <button onClick={() => setDark(!dark)}>
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Profile */}
        <User size={20} />
      </div>
    </div>
  );
}