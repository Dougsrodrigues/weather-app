import axios, { AxiosInstance } from 'axios';
import faker from 'faker';
import {
  HttpClient,
  HttpRequest,
  HttpResponse,
} from '@/app/domain/types/http-interfaces';
import { UnauthorizedError } from '@/app/domain/errors/unauthorized-error';
import { UnexpectedError } from '@/app/domain/errors/unexpected-error';
import { IWeatherResponse } from '../domain/types';
import { GetCurrentWeatherUseCase } from './get-current-weather';

jest.mock('axios');

export const mockHttpResponse = (
  status = faker.random.number(),
): IWeatherResponse => ({
  ...faker.random.objectElement(),
  status,
});

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  mockedAxios.request.mockClear().mockResolvedValue(mockHttpResponse());

  return mockedAxios;
};

class HttpClientSpy<R = any> implements HttpClient<R> {
  response: HttpResponse<R>;

  constructor(private api: AxiosInstance) {}

  async request(data: HttpRequest): Promise<HttpResponse<R>> {
    return this.response;
  }
}

const makeSut = () => {
  const api = mockAxios();

  const httpClientSpy = new HttpClientSpy<IWeatherResponse>(api);

  const sut = new GetCurrentWeatherUseCase(httpClientSpy);

  return { sut, httpClientSpy };
};

export const mockWeatherModel = (): IWeatherResponse => ({
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

describe('GetCurrentWeather', () => {
  it('Should return an IWeatherResponse if status 200', async () => {
    const { sut, httpClientSpy } = makeSut();

    const httpResult = mockWeatherModel();

    httpClientSpy.response = {
      httpResponse: httpResult,
    };

    const lat = faker.random.number();
    const lon = faker.random.number();

    const weather = await sut.getCurrentWeather(lat, lon);

    expect(weather).toEqual(httpResult);
  });

  it('Should throw an UnauthorizedError if status 401', async () => {
    const { sut, httpClientSpy } = makeSut();

    httpClientSpy.response = {
      httpResponse: mockHttpResponse(401),
    };

    const lat = faker.random.number();
    const lon = faker.random.number();

    const promise = sut.getCurrentWeather(lat, lon);

    await expect(promise).rejects.toThrow(new UnauthorizedError());
  });

  it('Should throw an UnexpectedError if status 500', async () => {
    const { sut, httpClientSpy } = makeSut();

    httpClientSpy.response = {
      httpResponse: mockHttpResponse(500),
    };

    const lat = faker.random.number();
    const lon = faker.random.number();

    const promise = sut.getCurrentWeather(lat, lon);

    await expect(promise).rejects.toThrow(new UnexpectedError());
  });
});
