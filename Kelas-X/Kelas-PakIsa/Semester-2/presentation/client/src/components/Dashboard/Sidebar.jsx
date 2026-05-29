import React from "react";
import { LayoutGrid, Users, CreditCard, BarChart3, Settings, LogOut, ChevronLeft, ChevronRight } from "lucide-react";

const navItems = [
  { icon: LayoutGrid, label: "Dashboard", active: true },
  { icon: Users, label: "Users", active: false },
  { icon: CreditCard, label: "Billing", active: false },
  { icon: BarChart3, label: "Reports", active: false },
  { icon: Settings, label: "Settings", active: false },
];

const Sidebar = ({ isOpen, onToggle, onLogout }) => {
  return (
    <aside
      className={`${isOpen ? "w-64" : "w-20"} transition-all duration-300 shrink-0 bg-slate-900/50 border-r border-white/5 flex flex-col m-4 rounded-3xl overflow-hidden`}
    >
      {/* Logo */}
      <div className={`flex items-center py-8 ${isOpen ? "px-6 gap-4" : "justify-center"}`}>
        <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center text-white font-black text-xl shrink-0 shadow-lg shadow-primary/20">
          C
        </div>
        {isOpen && (
          <span className="font-black text-xl tracking-tighter text-white">
            CORE.
          </span>
        )}
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-1.5 p-3 flex-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`flex items-center rounded-xl text-sm font-bold transition-all w-full ${
              isOpen ? "px-4 py-3 gap-4 text-left" : "justify-center py-3"
            } ${
              item.active
                ? "bg-primary text-white shadow-lg shadow-primary/10"
                : "text-slate-500 hover:bg-white/5 hover:text-slate-200"
            }`}
          >
            <item.icon size={20} className="shrink-0" />
            {isOpen && <span>{item.label}</span>}
          </button>
        ))}
      </nav>

      {/* Footer / Toggle & Logout */}
      <div className="p-3 border-t border-white/5 space-y-1.5">
        <button
          onClick={onToggle}
          className={`flex items-center rounded-xl text-sm font-bold text-slate-500 hover:bg-white/5 hover:text-slate-200 transition-all w-full ${
            isOpen ? "px-4 py-3 gap-4" : "justify-center py-3"
          }`}
        >
          {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          {isOpen && <span>Collapse</span>}
        </button>
        
        <button
          onClick={onLogout}
          className={`flex items-center rounded-xl text-sm font-bold text-slate-500 hover:bg-rose-500/10 hover:text-rose-400 transition-all w-full ${
            isOpen ? "px-4 py-3 gap-4" : "justify-center py-3"
          }`}
        >
          <LogOut size={20} className="shrink-0" />
          {isOpen && <span>Log out</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
