import React from "react";
import Card from "../ui/Card";

const StatCard = ({ label, value, change, up }) => {
  return (
    <Card className="hover:border-primary/20 transition-all group">
      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 group-hover:text-primary transition-colors">
        {label}
      </p>
      <p className="text-4xl font-black tracking-tighter text-white mb-2">
        {value}
      </p>
      <div className="flex items-center gap-2">
        <span
          className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
            up ? "bg-emerald-500/10 text-emerald-400" : "bg-rose-500/10 text-rose-400"
          }`}
        >
          {change}
        </span>
        <span className="text-[10px] text-slate-600 font-bold uppercase tracking-tighter">
          vs last month
        </span>
      </div>
    </Card>
  );
};

export default StatCard;
