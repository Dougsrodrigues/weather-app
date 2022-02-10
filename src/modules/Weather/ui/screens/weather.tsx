import React from 'react';

import { WeatherListNames } from '../components/weather-list-names/weather-list-names';
import { WeatherPanel } from '../components/weather-panel/weather-panel';
import { Container } from './styles';

export function WeatherScreen() {
  return (
    <Container>
      <WeatherListNames />

      <WeatherPanel />
    </Container>
  );
}
