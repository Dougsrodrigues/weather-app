/* eslint-disable max-classes-per-file */
import { UnexpectedError } from '@/app/domain/errors/unexpected-error';
import { render, fireEvent } from '@/app/infra/tests';
import { LocationSpy } from '@/app/infra/tests/mock-location';
import { GetCurrentWeatherUseCaseSpy } from '../../data/tests/mock-weather';

import { WeatherScreen } from './weather';

const makeSut = () => {
  const getWeatherUseCase = new GetCurrentWeatherUseCaseSpy();
  const location = new LocationSpy();

  const sut = render(
    <WeatherScreen getWeatherUseCase={getWeatherUseCase} location={location} />,
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

  it.only('Should render loading and att data if button was click', async () => {
    const { sut } = makeSut();

    const buttonRefresh = sut.getByTestId('refresh');

    fireEvent(buttonRefresh, 'onPress');

    const refreshIcon = sut.findByTestId('loading');

    expect(refreshIcon).toBeTruthy();
  });
});
