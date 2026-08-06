import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./App.css";
import { useEffect, useState } from "react";
import ForecastList from "./components/ForecastList";
import Loading from "./components/Loading";
import { useLocalWeather } from "./hooks/useLocalWeather";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
  const { weather: localWeather, error: localError, loading: localLoading } = useLocalWeather();
  const [searchWeather, setSearchWeather] = useState(null);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState(null);

  async function handleSearch(cityName) {
    setSearchError(null);
    setSearchLoading(true);
    try {
      const res = await fetch(
        `https://api.hgbrasil.com/weather?format=json-cors&key=${API_KEY}&city_name=${encodeURIComponent(
          cityName
        )}`
      );
      const data = await res.json();
      if (data.results) {
        setSearchWeather(data.results);
      } else {
        setSearchError("Não foi possível obter os dados do clima para essa cidade.");
        setSearchWeather(null);
      }
    } catch (err) {
      setSearchError("Erro ao buscar dados do clima. " + err.message);
      setSearchWeather(null);
    } finally {
      setSearchLoading(false);
    }
  }

  const loading = localLoading || searchLoading;
  const error = searchError || localError;
  const weather = searchWeather || localWeather;
  const forecasts = weather?.forecast || [];

  return (
    <div className="app-container">
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <Loading />
      ) : weather ? (
        <>
          <h1>{weather.city}</h1>
          <span>Nascer do sol: {weather.sunrise} | Pôr do sol: {weather.sunset}</span>
          <WeatherCard weather={weather} />
          <h2>Previsão para os próximos dias:</h2>
          <ForecastList forecasts={forecasts} />
        </>
      ) : (
        <p>Digite uma cidade para buscar o clima.</p>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default App;
