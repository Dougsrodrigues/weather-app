import React from 'react';
import { WeatherScreen } from '../../presentation/screens/weather';
import { makeGetWeatherUseCase } from './get-weather-use-case-factory';

export const MakeWeather: React.FC = () => {
  return <WeatherScreen getWeatherUseCase={makeGetWeatherUseCase()} />;
};
