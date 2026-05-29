import { useState } from "react";
import { useNavigate } from "react-router";
import { Bell, Search, TrendingUp, TrendingDown, MoreHorizontal, UserPlus } from "lucide-react";
import Sidebar from "../components/Dashboard/Sidebar";
import StatCard from "../components/Dashboard/StatCard";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

const stats = [
  { label: "Total Users", value: "24,521", change: "+12%", up: true },
  { label: "Monthly Revenue", value: "$84,200", change: "+8.3%", up: true },
  { label: "Active Sessions", value: "1,340", change: "-2%", up: false },
  { label: "Churn Rate", value: "1.4%", change: "-0.2%", up: true },
];

const transactions = [
  { name: "Stripe payment", date: "May 21, 2026", amount: "+$340.00", up: true },
  { name: "AWS billing", date: "May 20, 2026", amount: "-$92.50", up: false },
  { name: "Subscription fee", date: "May 19, 2026", amount: "+$120.00", up: true },
  { name: "Maintenance", date: "May 18, 2026", amount: "-$45.00", up: false },
  { name: "Stripe payment", date: "May 17, 2026", amount: "+$210.00", up: true },
];

const usersData = [
  { initials: "JD", name: "John Doe", role: "Admin", status: "Active" },
  { initials: "SR", name: "Sara Reyes", role: "Editor", status: "Active" },
  { initials: "MK", name: "Mike Kim", role: "Viewer", status: "Pending" },
  { initials: "AL", name: "Aisha Lim", role: "Editor", status: "Active" },
  { initials: "TP", name: "Tom Park", role: "Viewer", status: "Inactive" },
];

const statusStyle = {
  Active: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  Pending: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
  Inactive: "bg-slate-800 text-slate-500 border border-slate-700",
};

const avatarColor = {
  JD: "bg-indigo-500/20 text-indigo-400",
  SR: "bg-emerald-500/20 text-emerald-400",
  MK: "bg-amber-500/20 text-amber-400",
  AL: "bg-rose-500/20 text-rose-400",
  TP: "bg-violet-500/20 text-violet-400",
};

export default function Dashboard() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("ACCESS_TOKEN");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex bg-bg-base">
      <Sidebar 
        isOpen={sidebarOpen} 
        onToggle={() => setSidebarOpen(!sidebarOpen)} 
        onLogout={handleLogout} 
      />

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0 pr-4 py-4 h-screen overflow-hidden">
        {/* Topbar */}
        <header className="flex items-center justify-between px-8 py-5 bg-slate-900/40 border border-white/5 rounded-3xl mb-6 backdrop-blur-md">
          <div className="flex items-center gap-6">
            <h1 className="text-xl font-black tracking-tight text-white">
              Overview
            </h1>
            <div className="hidden md:flex items-center bg-slate-950/50 border border-white/5 rounded-xl px-4 py-2 gap-3 focus-within:border-primary/50 transition-all">
              <Search size={16} className="text-slate-500" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-transparent text-sm text-white focus:outline-none placeholder-slate-600 w-64"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-all">
              <Bell size={20} />
              <span className="absolute top-3 right-3 w-2 h-2 bg-rose-500 rounded-full border-2 border-slate-900"></span>
            </button>
            <div className="h-11 pl-4 pr-1 py-1 glass rounded-xl flex items-center gap-3">
               <span className="text-sm font-bold text-slate-300">Alex Thompson</span>
               <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-white text-xs font-black">
                AT
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto custom-scrollbar pr-2">
          {/* Welcome */}
          <div className="mb-8 ml-2">
            <h2 className="text-3xl font-black tracking-tight text-white text-gradient">Welcome back, Alex.</h2>
            <p className="text-slate-500 font-medium mt-1">Here's what happening with your projects today.</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>

          {/* Bottom two columns */}
          <div className="grid lg:grid-cols-3 gap-6 mb-6">
            {/* Recent Activity */}
            <Card className="lg:col-span-2">
              <div className="flex justify-between items-center mb-8">
                <p className="text-lg font-black tracking-tight text-white">Recent Activity</p>
                <Button variant="ghost" size="sm">View All</Button>
              </div>
              <div className="flex flex-col gap-2">
                {transactions.map((t, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all group"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${t.up ? "bg-emerald-500/10 text-emerald-400" : "bg-rose-500/10 text-rose-400"}`}
                    >
                      {t.up ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-base font-bold text-white truncate">{t.name}</p>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{t.date}</p>
                    </div>
                    <p
                      className={`text-lg font-black tracking-tight ${t.up ? "text-emerald-400" : "text-rose-400"}`}
                    >
                      {t.amount}
                    </p>
                    <button className="p-2 text-slate-600 hover:text-white transition-colors">
                      <MoreHorizontal size={20} />
                    </button>
                  </div>
                ))}
              </div>
            </Card>

            {/* Team Members */}
            <Card>
              <div className="flex justify-between items-center mb-8">
                <p className="text-lg font-black tracking-tight text-white">Team Members</p>
                <button className="text-primary hover:text-primary-hover transition-colors">
                  <UserPlus size={20} />
                </button>
              </div>
              <div className="flex flex-col gap-6">
                {usersData.map((u, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black shrink-0 ${avatarColor[u.initials] || "bg-slate-800 text-slate-400"}`}
                      >
                        {u.initials}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-white truncate">{u.name}</p>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{u.role}</p>
                      </div>
                    </div>
                    <span
                      className={`text-[9px] px-2 py-0.5 rounded-full font-black uppercase tracking-tighter ${statusStyle[u.status]}`}
                    >
                      {u.status}
                    </span>
                  </div>
                ))}
              </div>
              <Button variant="secondary" className="w-full mt-10" size="lg">
                 Manage Team
              </Button>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
