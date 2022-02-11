import React from 'react';
import { makeAxiosHttpClient } from '../../../../app/main/factories/axios-http-client-factory';
import { WeatherScreen } from '../../ui/screens/weather';
import { GetCurrentWeatherUseCase } from '../../use-cases/get-current-weather';

export const MakeWeather: React.FC = () => {
  return (
    <WeatherScreen
      getWeatherUseCase={new GetCurrentWeatherUseCase(makeAxiosHttpClient())}
    />
  );
};
