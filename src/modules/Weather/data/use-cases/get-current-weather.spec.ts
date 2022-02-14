import faker from 'faker';
import { UnauthorizedError } from '@/app/domain/errors/unauthorized-error';
import { UnexpectedError } from '@/app/domain/errors/unexpected-error';

import { mockHttpResponse } from '@/app/infra/tests/mock-axios';
import { HttpClientSpy } from '@/app/infra/tests/mock-http';
import { GetCurrentWeatherUseCase } from './get-current-weather';
import { IWeatherResponse } from '../../domain/types';
import { mockWeather } from '../tests/mock-weather';

const makeSut = () => {
  const httpClientSpy = new HttpClientSpy<IWeatherResponse>();

  const sut = new GetCurrentWeatherUseCase(httpClientSpy);

  return { sut, httpClientSpy };
};

describe('GetCurrentWeather', () => {
  it('Should return an IWeatherResponse if status 200', async () => {
    const { sut, httpClientSpy } = makeSut();

    const httpResult = mockWeather();

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
