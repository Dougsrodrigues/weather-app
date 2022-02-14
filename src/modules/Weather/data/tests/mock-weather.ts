import faker from 'faker';
import { IWeatherResponse } from '../../domain/types';

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
