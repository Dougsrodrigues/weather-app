import React from 'react';
import FastImage from 'react-native-fast-image';
import { ActivityIndicator, TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Row } from '../../../../../app/components/Row';
import { useGetCurrentWeather } from '../../../use-cases/get-current-weather';
import { WeatherInfo } from '../weather-info/weather-info';
import {
  Content,
  Degrees,
  IconStyled,
  Loading,
  SmallText,
  Title,
} from './styles';

export const WeatherPanel = () => {
  const {
    data,
    handleRefreshAndGetWeather,
    isLoading,
    isFetching,
    formattedData,
  } = useGetCurrentWeather();

  if (isLoading || isFetching || !data) {
    return (
      <Content>
        <Loading />
      </Content>
    );
  }

  return (
    <Content>
      <View>
        <TouchableOpacity
          disabled={isLoading || isFetching}
          onPress={() => {
            handleRefreshAndGetWeather();
          }}
        >
          <IconStyled name="refresh" size={50} />
        </TouchableOpacity>
      </View>
      <Title>{formattedData.city}</Title>
      <SmallText withMargin>{formattedData.today}</SmallText>

      <FastImage
        style={{ width: RFValue(80), height: RFValue(80) }}
        source={{
          uri: `http://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />

      <Degrees>{formattedData.weather.temperature}</Degrees>

      <Row>
        <WeatherInfo
          type="Temp. min"
          value={formattedData.weather.minTemperature}
        />
        <WeatherInfo type="Umidade" value={formattedData.weather.humidity} />
        <WeatherInfo
          type="Temp. max"
          value={formattedData.weather.maxTemperature}
        />
      </Row>
    </Content>
  );
};
