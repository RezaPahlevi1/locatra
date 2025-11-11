import { useEffect, useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useUrlPosition } from "../hooks/useUrlPosition";
import Spinner from "./Spinner";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useCities } from "../contexts/CitiesContext";

function Form() {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [emoji, setEmoji] = useState("");
  const [geoCodeError, setGeoCodeError] = useState("");
  const [lat, lng] = useUrlPosition();
  const [isLoadingGeo, setIsLoadingGeo] = useState(false);
  const { createCity, isLoading } = useCities();
  const navigate = useNavigate();

  const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

  useEffect(
    function () {
      if (!lat && !lng) return;

      async function fetchCityData() {
        try {
          setIsLoadingGeo(true);
          setGeoCodeError("");

          const res = await fetch(
            `${BASE_URL}?latitude=${lat}&longitude=${lng}`
          );
          const data = await res.json();
          console.log(data);
          setCityName(data.city);
          setCountry(data.countryName);

          if (!data.countryCode)
            throw new Error(
              "That doesn't seem to be a country! Click somewhere else please."
            );
        } catch (err) {
          setGeoCodeError(err.message);
        } finally {
          setIsLoadingGeo(false);
        }
      }
      fetchCityData();
    },
    [lat, lng]
  );

  async function handleSubmit(e) {
    e.preventDefault();

    if (!cityName || !date) return;

    const newCity = {
      cityName,
      country,
      emoji,
      date,
      notes,
      position: { lat, lng },
    };

    await createCity(newCity);
    navigate("/app/cities");
  }

  if (isLoadingGeo) return <Spinner />;
  if (!lat && !lng) return <p>Start by clicking somewhere in the map.</p>;
  if (geoCodeError) return <p>{geoCodeError}</p>;

  return (
    <div className="w-full h-full flex justify-center items-start overflow-y-auto px-4 py-6">
      <form
        onSubmit={handleSubmit}
        className={`w-full max-w-sm bg-white/10 border border-white/20 backdrop-blur-sm rounded-lg p-5 flex flex-col gap-4 text-white shadow-md transition-all ${
          isLoading ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        {/* City Name */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="cityName"
            className="text-sm font-semibold text-yellow-300"
          >
            City name
          </label>
          <input
            id="cityName"
            type="text"
            placeholder="Enter city name..."
            className="bg-white/20 border border-white/30 rounded-md px-3 py-1.5 text-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            disabled={isLoading}
          />
        </div>

        {/* Date */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="date"
            className="text-sm font-semibold text-yellow-300"
          >
            When did you go to {cityName || "this city"}?
          </label>
          {/* <input
            id="date"
            type="date"
            className="bg-white/20 border border-white/30 rounded-md px-3 py-1.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          /> */}
          <DatePicker
            id="date"
            onChange={(date) => setDate(date)}
            selected={date}
            dateFormat="dd/MM/yyyy"
            className="bg-white/20 border border-white/30 rounded-md px-3 py-1.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>

        {/* Notes */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="notes"
            className="text-sm font-semibold text-yellow-300"
          >
            Notes about your trip
          </label>
          <textarea
            id="notes"
            rows="3"
            placeholder="Write something memorable..."
            className="bg-white/20 border border-white/30 rounded-md px-3 py-1.5 text-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 resize-none"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-1.5">
          <Button variant="add">Add</Button>
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
      </form>
    </div>
  );
}

export default Form;
