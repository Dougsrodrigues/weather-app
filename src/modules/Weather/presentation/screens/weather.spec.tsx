/* eslint-disable max-classes-per-file */
import { UnexpectedError } from '@/app/domain/errors/unexpected-error';
import { ILocation } from '@/app/domain/types/expo-location';
import { render } from '@/app/infra/tests';
import { mockWeatherModel } from '../../data/use-cases/get-current-weather.spec';
import { IWeatherResponse } from '../../domain/types';
import { IGetCurrentWeather } from '../../domain/use-cases/get-current-weather-interface';

import { WeatherScreen } from './weather';

class LocationSpy implements ILocation {
  async requestForegroundPermissionsAsync(): Promise<{ status: string }> {
    return { status: 'granted' };
  }

  async getCurrentPositionAsync(): Promise<{
    coords: { latitude: number; longitude: number };
  }> {
    return {
      coords: {
        latitude: 12,
        longitude: 12,
      },
    };
  }
}

class GetCurrentWeatherUseCaseSpy implements IGetCurrentWeather {
  response = mockWeatherModel();

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

const makeSut = () => {
  const getWeatherUseCase = new GetCurrentWeatherUseCaseSpy();

  const sut = render(
    <WeatherScreen
      getWeatherUseCase={getWeatherUseCase}
      location={new LocationSpy()}
    />,
  );

  return { sut, getWeatherUseCase };
};

describe('WeatherScreen', () => {
  it('Should render empty text if doesnt have data', async () => {
    const { sut, getWeatherUseCase } = makeSut();
    const error = new UnexpectedError();

    jest
      .spyOn(getWeatherUseCase, 'getCurrentWeather')
      .mockReturnValueOnce(Promise.reject(error));

    const empty = await sut.findByText('Conteúdo Vazio');

    expect(empty).toBeTruthy();
  });

  it('Should render weather if have data', async () => {
    const { sut } = makeSut();

    const cityNameComponent = await sut.findByTestId('city-name');

    expect(cityNameComponent).toBeTruthy();
  });
});
