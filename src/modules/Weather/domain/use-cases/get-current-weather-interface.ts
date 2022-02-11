import { IWeatherResponse } from '../types';

export interface IGetCurrentWeather {
  getCurrentWeather(lat: number, long: number): Promise<IWeatherResponse>;
}
