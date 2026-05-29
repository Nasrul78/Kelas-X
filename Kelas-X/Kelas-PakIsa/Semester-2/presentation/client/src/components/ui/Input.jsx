import React from "react";

const Input = ({ 
  label, 
  error, 
  icon: Icon, 
  className = "", 
  containerClassName = "",
  ...props 
}) => {
  return (
    <div className={`space-y-2 ${containerClassName}`}>
      {label && (
        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">
          {label}
        </label>
      )}
      <div className="relative group">
        {Icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors pointer-events-none">
            <Icon size={18} />
          </div>
        )}
        <input
          className={`w-full bg-slate-900/50 border border-white/5 rounded-xl ${Icon ? "pl-11" : "px-4"} py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 focus:bg-slate-900 transition-all duration-200 ${className}`}
          {...props}
        />
      </div>
      {error && (
        <p className="text-xs font-medium text-rose-500 ml-1">{error}</p>
      )}
    </div>
  );
};

export default Input;
