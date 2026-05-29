import React from "react";

const Card = ({ children, className = "", noPadding = false }) => {
  return (
    <div className={`bg-slate-900/40 border border-white/5 rounded-3xl backdrop-blur-md shadow-xl ${noPadding ? "" : "p-6"} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
