import { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function Form() {
  const [cityName, setCityName] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex justify-center items-start overflow-y-auto px-4 py-6">
      <form className="w-full max-w-sm bg-white/10 border border-white/20 backdrop-blur-sm rounded-lg p-5 flex flex-col gap-4 text-white shadow-md">
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
          <input
            id="date"
            type="date"
            className="bg-white/20 border border-white/30 rounded-md px-3 py-1.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
            value={date}
            onChange={(e) => setDate(e.target.value)}
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
