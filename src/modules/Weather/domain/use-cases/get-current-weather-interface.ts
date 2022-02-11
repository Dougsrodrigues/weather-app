export interface IGetCurrentWeather {
  getCurrentWeather(lat: number, long: number): Promise<any>;
}
