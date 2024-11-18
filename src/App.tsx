import React, { useState } from "react";
import WeatherDisplay from "./components/WeatherDisplay";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const API_KEY = "cb7a83d7625c5cffafe7ef5c678ad082";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    try {
      const response = await fetch(URL);

      if (!response.ok) {
        throw new Error("Defined city was not found");
      }

      const data = await response.json();

      setWeather(data);
    } catch (error) {
      console.log("Error: ${error.message}");
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter your city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={fetchWeather}>Click</button>
      {weather && <WeatherDisplay weather={weather} />}
    </div>
  );
}

export default App;
