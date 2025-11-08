import { Form, Link } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";

function CityItem({ city }) {
  const { cityName, date, emoji, id, position } = city;
  const { currentCity } = useCities();
  const linkStyle =
    "flex items-center justify-between bg-white/10 border border-white/20 rounded-xl px-5 py-3 hover:bg-white/20 transition-all duration-200 cursor-pointer";

  return (
    <li>
      <Link
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        className={`${linkStyle} ${
          id === currentCity.id ? "border border-yellow-300" : ""
        }`}
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{emoji}</span>
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-yellow-300 leading-tight">
              {cityName}
            </h3>
            <time className="text-xs text-gray-400 mt-0.5">
              {FormatDate(date)}
            </time>
          </div>
        </div>

        <button
          className="text-red-400 hover:text-red-500 bg-white/10 hover:bg-white/20 px-2 py-1 rounded-lg text-sm transition-colors"
          title="Delete"
        >
          ✕
        </button>
      </Link>
    </li>
  );
}

function FormatDate(date) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export default CityItem;
