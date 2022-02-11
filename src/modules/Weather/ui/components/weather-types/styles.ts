import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import { Icon, StyledText } from '@/app/components';

export const WeatherTypesContent = styled.View`
  padding: ${RFValue(8)}px;
  height: ${RFValue(96)}px;
  width: ${RFValue(90)}px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled(StyledText)`
  margin-top: ${RFValue(8)}px;
  width: ${RFValue(90)}px;
  height: ${RFValue(30)}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text_primary};
`;

export const IconStyled = styled(Icon)`
  color: ${({ theme }) => theme.colors.text_primary};
`;

export const ImageStyled = styled(FastImage)`
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
`;
