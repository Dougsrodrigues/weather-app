import React, { FC } from 'react';
import { ContentInfo, ContentInfoText, SmallText } from './styles';

interface WeatherInfoProps {
  type: string;
  value: string;
}

export const WeatherInfo: FC<WeatherInfoProps> = ({ type, value }) => {
  return (
    <ContentInfo>
      <ContentInfoText>{type}</ContentInfoText>
      <SmallText>{value}</SmallText>
    </ContentInfo>
  );
};
