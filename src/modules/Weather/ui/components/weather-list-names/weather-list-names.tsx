import React from 'react';
import { BoxShadow } from '../../../../../app/components/BoxShadow';
import { IWeather } from '../../../domain/types';
import { WeatherTypes } from '../weather-types/weather-types';

import { WeatherHeaderInfoList } from './styles';

export const WeatherListNames = () => {
  const arrayWeather: IWeather[] = [
    {
      id: 1,
      weather: 'Dia Ensolarado',
      icon: 'sunny',
    },
    {
      id: 2,
      weather: 'Noite Sem Nuvens',
      icon: 'night',
    },
    {
      id: 3,
      weather: 'Noite com nuvens',
      icon: 'cloud-night',
    },
    {
      id: 4,
      weather: 'Dia com chuvas',
      icon: 'sun-rain',
    },
    {
      id: 5,
      weather: 'Noite com chuvas',
      icon: 'night-rain',
    },
    {
      id: 6,
      weather: 'Chuvas fortes',
      icon: 'rain-thunder',
    },
  ];

  const keyExtractor = ({ id }: IWeather): string => id.toString();

  return (
    <BoxShadow>
      <WeatherHeaderInfoList<IWeather>
        horizontal
        showsHorizontalScrollIndicator={false}
        data={arrayWeather}
        keyExtractor={keyExtractor}
        renderItem={({ item }) => <WeatherTypes item={item} />}
      />
    </BoxShadow>
  );
};
