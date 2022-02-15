import { ILocation } from '@/app/domain/types';
import React, { FC } from 'react';
import { IGetCurrentWeather } from '../../domain/use-cases/get-current-weather-interface';

import { WeatherListNames } from '../components/weather-list-names/weather-list-names';
import { WeatherPanel } from '../components/weather-panel/weather-panel';
import { useGetWeather } from '../hooks/useGetWeather';
import { Container } from './styles';

interface WeatherScreenProps {
  getWeatherUseCase: IGetCurrentWeather;
  location: ILocation;
}

export const WeatherScreen: FC<WeatherScreenProps> = ({
  getWeatherUseCase,
  location,
}) => {
  const { isLoading, isFetching, handleRefreshAndGetWeather, formattedData } =
    useGetWeather(getWeatherUseCase, location);

  return (
    <Container>
      <WeatherListNames />

      <WeatherPanel
        formattedData={formattedData}
        isFetching={isFetching}
        isLoading={isLoading}
        handleRefreshAndGetWeather={handleRefreshAndGetWeather}
      />
    </Container>
  );
};
