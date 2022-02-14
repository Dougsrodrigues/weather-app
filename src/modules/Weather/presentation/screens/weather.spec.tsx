import { ILocation } from '@/app/domain/types/expo-location';
import { render } from '@/app/infra/tests';
import { IWeatherResponse } from '../../domain/types';
import { GetCurrentWeatherUseCase } from '../../use-cases/get-current-weather';
import {
  HttpClientSpy,
  mockAxios,
} from '../../use-cases/get-current-weather.spec';

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

const makeSut = () => {
  const api = mockAxios();
  const httpClientSpy = new HttpClientSpy<IWeatherResponse>(api);
  const getWeatherUseCase = new GetCurrentWeatherUseCase(httpClientSpy);

  return render(
    <WeatherScreen
      getWeatherUseCase={getWeatherUseCase}
      location={new LocationSpy()}
    />,
  );
};

describe('WeatherScreen', () => {
  it.only('Should render empty text if doesnt have data', async () => {
    const { findByTestId } = makeSut();

    const empty = await findByTestId('empty-state-text');

    // console.log({ empty });
  });
});
