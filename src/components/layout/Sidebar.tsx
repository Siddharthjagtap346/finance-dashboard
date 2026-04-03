// layout/Sidebar.tsx
import { Home, CreditCard, BarChart2, Settings, X } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}) {
  return (
    <>
      {/* Overlay (mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:relative z-50 top-0 left-0 h-screen w-64 bg-white dark:bg-gray-800 border-r dark:border-gray-700 p-4 transform transition-transform duration-300
${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-xl font-bold text-indigo-600">Zorvyn</h1>

          {/* Close btn (mobile) */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <nav className="space-y-4">
          <SidebarItem to="/" label="Dashboard" icon={<Home size={18} />} />
          <SidebarItem to="/transactions" label="Transactions" icon={<CreditCard size={18} />} />
          <SidebarItem to="/insights" label="Insights" icon={<BarChart2 size={18} />} />
          <SidebarItem to="/settings" label="Settings" icon={<Settings size={18} />} />
        </nav>
      </div>
    </>
  );
}

function SidebarItem({
  icon,
  label,
  to,
}: {
  icon: React.ReactNode;
  label: string;
  to: string;
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2 rounded-lg transition
        ${
          isActive
            ? "bg-indigo-100 text-indigo-600 dark:bg-indigo-900"
            : "hover:bg-gray-100 dark:hover:bg-gray-700"
        }`
      }
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
}