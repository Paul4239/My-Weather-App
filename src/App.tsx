import React, { useEffect, useState } from "react";
import WeatherDisplay from "./components/WeatherDispaly";

const App: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    fetch(
      `https://api.weatherstack.com/current?access_key=${apiKey}&query=London`
    )
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error("Error fetching weather data:", error));
  }, [apiKey]);

  return (
    <div>
      <h1>Header goes here</h1>
      <WeatherDisplay weatherData={weatherData} />
    </div>
  );
};

export default App;
