// Everything that has been commented out I think is not needed
// and can be removed later. I will leave it here for now just in case I need it later

// type Station = {
//   distance: number;
//   latitude: number;
//   longitude: number;
//   useCount: number;
//   id: string;
//   name: string;
//   quality: number;
//   contribution: number;
// };

// type HourlyData = {
//   datetime: string;
//   datetimeEpoch: number;
//   tzoffset?: number;
//   temp: number;
//   feelslike: number;
//   humidity: number;
//   dew: number;
//   precip: number;
//   precipprob: number;
//   snow: number;
//   snowdepth: number;
//   preciptype: string | null;
//   windgust: number;
//   windspeed: number;
//   winddir: number;
//   pressure: number;
//   visibility: number;
//   cloudcover: number;
//   solarradiation: number;
//   solarenergy: number;
//   uvindex: number;
//   severerisk: number;
//   conditions: string;
//   icon: string;
//   stations: string[] | null;
//   source: string;
// };

type DailyData = {
  datetime: string;
  // datetimeEpoch: number;
  // tzoffset?: number;
  tempmax: number;
  tempmin: number;
  temp: number;
  // feelslikemax: number;
  // feelslikemin: number;
  feelslike: number;
  // dew: number;
  // humidity: number;
  precip: number;
  precipprob: number;
  // precipcover: number;
  // preciptype: string | null;
  snow: number;
  snowdepth: number;
  // windgust: number;
  windspeed: number;
  // winddir: number;
  // pressure: number;
  // cloudcover: number;
  // visibility: number;
  // solarradiation: number;
  // solarenergy: number;
  uvindex: number;
  // severerisk: number;
  sunrise: string;
  // sunriseEpoch: number;
  sunset: string;
  // sunsetEpoch: number;
  // moonphase: number;
  conditions: string;
  description: string;
  icon: string;
  // stations: string[] | null;
  // source: string;
  // hours: HourlyData[];
};

// type CurrentConditions = {
//   datetime: string;
//   datetimeEpoch: number;
//   tzoffset: number;
//   temp: number;
//   feelslike: number;
//   humidity: number;
//   dew: number;
//   precip: number;
//   precipprob: number;
//   snow: number;
//   snowdepth: number;
//   preciptype: string | null;
//   windgust: number;
//   windspeed: number;
//   winddir: number;
//   pressure: number;
//   visibility: number;
//   cloudcover: number;
//   solarradiation: number;
//   solarenergy: number;
//   uvindex: number;
//   conditions: string;
//   icon: string;
//   stations: string[];
//   source: string;
//   sunrise: string;
//   sunriseEpoch: number;
//   sunset: string;
//   sunsetEpoch: number;
//   moonphase: number;
// };

type WeatherData = {
  latitude: number;
  longitude: number;
  resolvedAddress: string;
  // address: string;
  // timezone: string;
  // tzoffset: number;
  // description: string;
  days: DailyData[];
  // alerts: any[];
  // stations: Record<string, Station>;
  // currentConditions: CurrentConditions;
};

export default WeatherData;
