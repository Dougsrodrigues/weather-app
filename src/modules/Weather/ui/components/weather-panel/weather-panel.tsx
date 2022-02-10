import React from 'react';
import { View } from 'react-native';
import { Row } from '../../../../../app/components/Row';
import { WeatherInfo } from '../weather-info/weather-info';
import { Content, Degrees, IconStyled, SmallText, Title } from './styles';

export const WeatherPanel = () => {
  return (
    <Content>
      <View>
        <IconStyled name="refresh" size={50} />
      </View>
      <Title>Lagos Nigeria</Title>
      <SmallText withMargin>22 de julho de 2021</SmallText>

      <IconStyled name="sunny" size={50} />
      <Degrees>26 c</Degrees>

      <Row>
        <WeatherInfo type="Temp" value="26c" />
        <WeatherInfo type="Umidade" value="26c" />
        <WeatherInfo type="Vento" value="26c" />
      </Row>
    </Content>
  );
};
