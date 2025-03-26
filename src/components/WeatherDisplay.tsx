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
          <p>Name: {weatherData.location.name}</p>
          <p>Country: {weatherData.location.country}</p>
          <p>Local Time: {weatherData.location.localtime}</p>

          <h2>Current Weather</h2>
          <p>Observation Time: {weatherData.current.observation_time}</p>
          <p>Temperature: {weatherData.current.temperature}°C</p>
          <p>Weather Icons: {weatherData.current.weather_icons}</p>
          <p>
            Weather Descriptions:
            {weatherData.current.weather_descriptions}
          </p>
          <img
            src={`${weatherData.current.weather_icons}`}
            alt={`${weatherData.current.weather_descriptions}`}
          />

          <h3>Astro</h3>
          <p>Sunrise: {weatherData.current.astro.sunrise}</p>
          <p>Sunset: {weatherData.current.astro.sunset}</p>
          <p>Moonrise: {weatherData.current.astro.moonrise}</p>
          <p>Moonset: {weatherData.current.astro.moonset}</p>

          <p>Wind Speed: {weatherData.current.wind_speed} km/h</p>
          <p>Precipitation: {weatherData.current.precip} mm</p>
          <p>Humidity: {weatherData.current.humidity}%</p>
          <p>Cloud Cover: {weatherData.current.cloudcover}%</p>
          <p>Feels Like: {weatherData.current.feelslike}°C</p>
          <p>Visibility: {weatherData.current.visibility} km</p>
          <p>Is Day: {weatherData.current.is_day}</p>
        </div>
      ) : (
        <p>Weather data not available</p>
      )}
    </div>
  );
};

export default WeatherDisplay;
