import CountryItem from "./CountryItem";
import Spinner from "./Spinner";

function CountryList({ isLoading, cities }) {
  if (isLoading)
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Spinner />
      </div>
    );

  if (!cities.length) return <p>Add your city first by clicking on the map.</p>;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className="flex flex-col gap-4 max-w-2xl mx-auto text-white">
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
