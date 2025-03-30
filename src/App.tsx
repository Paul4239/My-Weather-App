import React, { useEffect, useState } from "react";
import WeatherDisplay from "./components/WeatherDisplay";

const App: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  // warning: this will display your api key in the network tab in the browser.

  useEffect(() => {
    fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK/next1days?key=${apiKey}`
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
