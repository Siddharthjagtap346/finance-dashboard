// layout/Sidebar.tsx
import { Home, CreditCard, BarChart2, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white dark:bg-gray-800 border-r dark:border-gray-700 hidden md:flex flex-col p-4">
      
      <h1 className="text-xl font-bold mb-8 text-indigo-600">
        Zorvyn
      </h1>

      <nav className="space-y-4">
        <SidebarItem to="/" icon={<Home size={18} />} label="Dashboard" />
        <SidebarItem to="/transactions" icon={<CreditCard size={18} />} label="Transactions" />
        <SidebarItem to="/insights" icon={<BarChart2 size={18} />} label="Insights" />
        <SidebarItem to="/settings" icon={<Settings size={18} />} label="Settings" />
      </nav>
    </div>
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
        `flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition
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