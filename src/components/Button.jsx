function Button({ onClick, variant = "primary", children }) {
  const baseStyles =
    "px-6 py-2.5 rounded-lg font-semibold text-base transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer";

  const variants = {
    primary:
      "bg-yellow-300 text-white hover:bg-yellow-400 shadow-lg shadow-yellow-500/30 hover:shadow-xl hover:shadow-yellow-500/40",

    secondary:
      "bg-slate-700 text-white hover:bg-slate-600 border border-slate-600",

    back: "flex-1 bg-white/20 text-white font-semibold py-2 rounded-md hover:bg-white/30 transition-all duration-200",

    add: "flex-1 bg-yellow-300 text-slate-900 font-semibold py-2 rounded-md hover:bg-yellow-400 transition-all duration-200",

    nav: "bg-transparent border border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-black hover:shadow-lg hover:shadow-yellow-500/30",
  };
  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </button>
  );
}

export default Button;
