function PricingCard({ title, price, features, highlighted }) {
  return (
    <div
      className={`${
        highlighted ? "bg-yellow-400 text-slate-900" : "bg-[#0C2B4E] text-white"
      } shadow-2xl rounded-xl border-2 border-white/20 p-8 flex flex-col justify-between transform hover:scale-105 transition-all duration-300`}
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-4xl font-extrabold">
          {price}
          <span className="text-base font-normal"> / bulan</span>
        </p>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <span>✅</span> {f}
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 rounded-lg font-semibold transition-all ${
          highlighted
            ? "bg-slate-900 text-yellow-300 hover:bg-slate-800"
            : "bg-yellow-300 text-slate-900 hover:bg-yellow-400"
        }`}
      >
        Pilih Paket
      </button>
    </div>
  );
}

export default PricingCard;
