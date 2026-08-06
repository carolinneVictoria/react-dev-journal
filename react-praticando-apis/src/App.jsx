import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./App.css";
import { useEffect, useState } from "react";
import ForecastList from "./components/ForecastList";
import Loading from "./components/Loading";
import { useLocalWeather } from "./hooks/useLocalWeather";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
  const { weather, error, loading } = useLocalWeather();

  return (
    <div className="app-container">
      <SearchBar onSearch={setCity} />
      {loading ? (
        <Loading />
      ) : weather ? (
        <>
          <h1>{weather.city}</h1>
          <span>Nascer do sol: {weather.sunrise} | Pôr do sol: {weather.sunset}</span>
          <WeatherCard weather={weather}/>
          <h2>Previsão para os próximos dias:</h2>
          <ForecastList forecasts={forecast} />
        </>
      ) : (
        <p>Digite uma cidade para buscar o clima.</p>
      )}
    </div>
  );
}

export default App;
