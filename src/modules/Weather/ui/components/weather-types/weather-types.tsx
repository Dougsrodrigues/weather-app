import React, { FC } from 'react';
import { IWeather } from '../../../domain/types';
import { IconStyled, Text, WeatherTypesContent } from './styles';

interface WeatherTypesProps {
  item: IWeather;
}
export const WeatherTypes: FC<WeatherTypesProps> = ({ item }) => {
  return (
    <WeatherTypesContent>
      <IconStyled name={item.icon} size={30} />
      <Text>{item.weather}</Text>
    </WeatherTypesContent>
  );
};
