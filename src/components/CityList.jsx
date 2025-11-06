import CityItem from "./CityItem";
import Spinner from "./Spinner";

function CityList({ isLoading, cities }) {
  if (isLoading)
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Spinner />
      </div>
    );

  if (!cities.length) return <p>Add your city first by clicking on the map.</p>;

  return (
    <ul className="flex flex-col gap-4 max-w-2xl mx-auto text-white">
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
