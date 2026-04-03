import { useFinanceStore } from "../store/useFinanceStore";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function Settings() {
  const { role, setRole } = useFinanceStore();
  const [dark, setDark] = useState(false);

  // sync with html class (same as Topbar)
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDark(isDark);
  }, []);

  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
        Settings
      </h1>

      {/* Theme */}
      <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow">
        <h2 className="font-semibold mb-3 text-gray-700 dark:text-gray-200">
          Appearance
        </h2>

        <button
          onClick={toggleDark}
          className="flex items-center gap-3 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:scale-105 transition"
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
          <span className="text-gray-700 dark:text-gray-200">
            {dark ? "Light Mode" : "Dark Mode"}
          </span>
        </button>
      </div>

      {/* Role Switch */}
      <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow">
        <h2 className="font-semibold mb-3 text-gray-700 dark:text-gray-200">
          User Role
        </h2>

        <div className="flex gap-3">
          <button
            onClick={() => setRole("viewer")}
            className={`px-4 py-2 rounded-lg ${
              role === "viewer"
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 dark:bg-gray-700"
            }`}
          >
            Viewer
          </button>

          <button
            onClick={() => setRole("admin")}
            className={`px-4 py-2 rounded-lg ${
              role === "admin"
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 dark:bg-gray-700"
            }`}
          >
            Admin
          </button>
        </div>
      </div>

      {/* Data Controls */}
      <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow">
        <h2 className="font-semibold mb-3 text-gray-700 dark:text-gray-200">
          Data
        </h2>

        <button
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
          className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
        >
          Reset All Data
        </button>
      </div>

    </div>
  );
}