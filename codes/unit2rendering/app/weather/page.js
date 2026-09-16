"use client";
import { useState } from "react";
export default function Home() {
  const [weather, setWeather] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [windDirection, setWindDirection] = useState(null);
  async function getWeather() {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=30.9&longitude=75.8&current=temperature_2m,wind_speed_10m,wind_direction_10m&timezone=Asia%2FKolkata"
    );
    const data = await response.json();
    setWeather(data.current.temperature_2m);
    setWindSpeed(data.current.wind_speed_10m);
    setWindDirection(data.current.wind_direction_10m);  
  }
  return (
    <div>
      <h1>Weather</h1>
      <button onClick={getWeather}  
      className="bg-blue-500 px-4 py-4 rounded-lg">
        Get Weather
      </button>

      {weather && (
        <h2>
          Temperature: {weather} °C
        </h2>
      )}
      {windSpeed && (
        <h2>
          Wind Speed: {windSpeed} km/h
        </h2>
      )}
      {windDirection && (
        <h2>
          Wind Direction: {windDirection} °
        </h2>
      )}
    </div>
  );
}