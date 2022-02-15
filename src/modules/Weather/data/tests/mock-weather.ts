import faker from 'faker';
import { IWeatherResponse } from '../../domain/types';
import { IGetCurrentWeather } from '../../domain/use-cases/get-current-weather-interface';

export const mockWeather = (): IWeatherResponse => ({
  status: 200,
  statusText: faker.random.word(),
  name: faker.random.word(),
  main: {
    temp: faker.random.number(),
    temp_max: faker.random.number(),
    temp_min: faker.random.number(),
    humidity: faker.random.number(),
  },
  weather: [
    {
      icon: faker.random.word(),
    },
  ],
});

export class GetCurrentWeatherUseCaseSpy implements IGetCurrentWeather {
  response = mockWeather();

  lat = 0;

  long = 0;

  async getCurrentWeather(
    lat: number,
    long: number,
  ): Promise<IWeatherResponse> {
    this.lat = lat;
    this.long = long;

    return this.response;
  }
}
