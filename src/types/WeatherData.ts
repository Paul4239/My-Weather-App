type WeatherData = {
  location: {
    name: string;
    country: string;
    localtime: string;
  };
  current: {
    observation_time: string;
    temperature: number;
    weather_icons: string[];
    weather_descriptions: string[];
    astro: {
      sunrise: string;
      sunset: string;
      moonrise: string;
      moonset: string;
    };
    wind_speed: number;
    precip: number;
    humidity: number;
    cloudcover: number;
    feelslike: number;
    visibility: number;
    is_day: string;
  };
};

export default WeatherData;
