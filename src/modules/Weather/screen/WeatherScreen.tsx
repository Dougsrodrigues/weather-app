import React from 'react';
import { Icon } from '../../../app/components/Icon';
import { StyledText } from '../../../app/components/typography/StyledText';
import { Container, WeatherHeaderInfo, WeatherTypesContent } from './styles';

export function WeatherScreen() {
  return (
    <Container>
      <WeatherHeaderInfo>
        <WeatherTypesContent>
          <Icon name="location" />
          <StyledText>Chuva</StyledText>
        </WeatherTypesContent>
      </WeatherHeaderInfo>
    </Container>
  );
}
