function CountryItem({ country }) {
  return (
    <li className="flex items-center justify-between w-full max-w-2xl mx-auto bg-white/10 border border-white/20 rounded-xl px-6 py-4 hover:bg-white/20 transition-all duration-200 cursor-pointer">
      <div className="flex items-center gap-4">
        <span className="text-3xl">{country.emoji}</span>
        <h3 className="text-lg font-semibold text-yellow-300 leading-tight">
          {country.country}
        </h3>
      </div>
    </li>
  );
}

export default CountryItem;
