import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Icon } from '../../../../../app/components/Icon';
import { StyledText } from '../../../../../app/components/typography/StyledText';

export const WeatherTypesContent = styled.View`
  padding: ${RFValue(8)}px;
  height: ${RFValue(96)}px;
  width: ${RFValue(88)}px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled(StyledText)`
  margin-top: ${RFValue(8)}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text_primary};
`;

export const IconStyled = styled(Icon)`
  color: ${({ theme }) => theme.colors.text_primary};
`;
