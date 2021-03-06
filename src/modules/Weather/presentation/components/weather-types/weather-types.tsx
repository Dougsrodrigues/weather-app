import React, { FC } from 'react';
import FastImage from 'react-native-fast-image';
import { IWeather } from '@/modules/weather/domain/types';

import { ImageStyled, Text, WeatherTypesContent } from './styles';

interface WeatherTypesProps {
  item: IWeather;
}

export const WeatherTypes: FC<WeatherTypesProps> = ({ item }) => {
  return (
    <WeatherTypesContent>
      <ImageStyled
        source={{
          uri: `http://openweathermap.org/img/wn/${item.id}@2x.png`,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text>{item.weather}</Text>
    </WeatherTypesContent>
  );
};
