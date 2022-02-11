export interface IWeather {
  id: string;
  weather: string;
}

export interface IWeatherResponse {
  status: number;
  statusText?: string;
  name: string;
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
    humidity: number;
  };
  weather: {
    icon: string;
  }[];
}
