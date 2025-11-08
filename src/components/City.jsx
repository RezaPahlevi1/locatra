import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
import { useEffect } from "react";
import Spinner from "./Spinner";
import Button from "./Button";

function City() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getCity, currentCity, isLoading } = useCities();

  useEffect(
    function () {
      getCity(id);
    },
    [id]
  );

  if (isLoading) return <Spinner />;

  const { cityName, country, emoji, date, notes } = currentCity;

  return (
    <div className="w-full h-full flex justify-center items-center px-6 py-10 overflow-y-auto">
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg text-white">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <span>{emoji}</span> {cityName}
          </h1>
          <span className="text-sm text-yellow-300 font-semibold px-3 py-1 rounded-full border border-yellow-300/50">
            {country}
          </span>
        </div>

        {/* Date */}
        <div className="mb-6">
          <p className="text-sm text-gray-300">Visited on:</p>
          <p className="text-lg font-semibold text-yellow-200">
            {new Date(date).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>

        {/* Notes */}
        <div>
          <h2 className="text-lg font-semibold mb-2 text-yellow-300">
            Travel Notes
          </h2>
          <p className="bg-white/5 border border-white/10 rounded-lg p-4 text-sm leading-relaxed">
            {notes || "No notes available for this city."}
          </p>
        </div>

        {/* Back button */}
        <div className="mt-6 text-right">
          <Button
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
            variant="back"
          >
            ← Back
          </Button>
        </div>
      </div>
    </div>
  );
}

export default City;
