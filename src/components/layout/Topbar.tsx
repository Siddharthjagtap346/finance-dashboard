// layout/Topbar.tsx
import { useFinanceStore } from "../../store/useFinanceStore";
import { Sun, Moon, User, Menu } from "lucide-react";
import { useEffect, useState } from "react";

export default function Topbar({
  setIsOpen,
}: {
  setIsOpen: (val: boolean) => void;
}) {
  const { role, setRole, search, setSearch } = useFinanceStore();
  const [dark, setDark] = useState(false);

  // Load theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Apply theme
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
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 bg-white dark:bg-gray-800 px-4 md:px-6 py-3 border-b dark:border-gray-700">
      
      {/* TOP ROW */}
      <div className="flex items-center justify-between w-full">
        
        {/* LEFT: Hamburger + Title */}
        <div className="flex items-center gap-3">
          <button
            className="md:hidden"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={22} />
          </button>

          <h2 className="font-semibold text-lg">Dashboard</h2>
        </div>

        {/* RIGHT (mobile only icons) */}
        <div className="flex items-center gap-3 md:hidden">
          <button onClick={() => setDark(!dark)}>
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <User size={20} />
        </div>
      </div>

      {/* SECOND ROW */}
      <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 w-full">
        
        {/* Search */}
        <input
          placeholder="Search..."
          className="border px-3 py-2 rounded-lg w-full md:w-1/3 dark:bg-gray-700"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          
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
    </div>
  );
}