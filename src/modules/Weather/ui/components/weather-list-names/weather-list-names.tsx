import React from 'react';
import { BoxShadow } from '../../../../../app/components/BoxShadow';
import { IWeather } from '../../../domain/types';
import { WeatherTypes } from '../weather-types/weather-types';

import { WeatherHeaderInfoList } from './styles';

export const WeatherListNames = () => {
  const arrayWeather: IWeather[] = [
    {
      id: '01d',
      weather: 'Dia com céu limpo',
    },
    {
      id: '01n',
      weather: 'Noite com céu limpo',
    },
    {
      id: '02d',
      weather: 'Dia com nuvens',
    },
    {
      id: '02n',
      weather: 'Noite com nuvens',
    },
    {
      id: '03n',
      weather: 'Muitas nuvens',
    },
    {
      id: '04n',
      weather: 'Nublado',
    },
    {
      id: '09n',
      weather: 'Chuva Fraca',
    },
    {
      id: '10d',
      weather: 'Dia de chuva',
    },
    {
      id: '10n',
      weather: 'Noite de chuva',
    },
    {
      id: '11d',
      weather: 'Tempestade',
    },

    {
      id: '13n',
      weather: 'Nevando',
    },
    {
      id: '50d',
      weather: 'Misto',
    },
  ];

  const keyExtractor = ({ id }: IWeather): string => id.toString();

  return (
    <BoxShadow>
      <WeatherHeaderInfoList<IWeather>
        horizontal
        removeClippedSubviews
        showsHorizontalScrollIndicator={false}
        data={arrayWeather}
        keyExtractor={keyExtractor}
        renderItem={({ item }) => <WeatherTypes item={item} />}
      />
    </BoxShadow>
  );
};
