import React from "react";

interface Weather {
  name: string;
  sys: { country: string };
  coord: { lon: number; lat: number };
  main: { temp: number; humidity: number };
  weather: [{ description: string }];
  wind: { speed: number };
  timezone: number;
}

function WeatherDisplay({ weather }: { weather: Weather }) {
  return (
    <>
      <h2>
        {weather.name}, {weather.sys.country}
      </h2>
      <p>
        Location: {weather.coord.lon}, {weather.coord.lat}
      </p>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Condition: {weather.weather[0].description}</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
      <p>Timezone: {weather.timezone}</p>
    </>
  );
}

export default WeatherDisplay;
