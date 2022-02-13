import { render } from '@/app/tests';
import { IWeatherResponse } from '../../domain/types';
import { GetCurrentWeatherUseCase } from '../../use-cases/get-current-weather';
import {
  HttpClientSpy,
  mockAxios,
} from '../../use-cases/get-current-weather.spec';

import { WeatherScreen } from './weather';

const renderComponent = () => {
  const api = mockAxios();
  const httpClientSpy = new HttpClientSpy<IWeatherResponse>(api);
  const getWeatherUseCase = new GetCurrentWeatherUseCase(httpClientSpy);

  return render(<WeatherScreen getWeatherUseCase={getWeatherUseCase} />);
};

describe('WeatherScreen', () => {
  it.only('Should render empty text if doesnt have data', async () => {
    const { findByTestId } = renderComponent();

    const empty = await findByTestId('empty-state-text');

    console.log({ empty });
  });
});
