import React from "react";
import WeatherData from "../types/WeatherData";

interface WeatherDisplayProps {
  weatherData: WeatherData | null;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weatherData }) => {
  console.log(weatherData);

  return (
    <div>
      <h1>Weather Data</h1>
      {weatherData ? (
        <div>
          <h2>Location</h2>
          {/* test to see if the API works */}
          <p>{weatherData.days[0].conditions}</p>
        </div>
      ) : (
        <p>Weather data not available</p>
      )}
    </div>
  );
};

export default WeatherDisplay;
