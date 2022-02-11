import { StyledText } from '@/app/components';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const ContentInfo = styled.View`
  margin-top: ${RFValue(32)}px;
  flex: 1;

  justify-content: center;
  align-items: center;
`;

export const ContentInfoText = styled(StyledText).attrs(({ theme }) => ({
  size: 'small',
  color: theme.colors.ice,
  family: 'light',
}))`
  margin-bottom: ${RFValue(8)}px;
`;
export const SmallText = styled(StyledText).attrs(({ theme }) => ({
  size: 'small',

  color: theme.colors.text_primary,
}))<{ withMargin?: boolean }>`
  ${({ withMargin }) =>
    withMargin &&
    css`
      margin: ${RFValue(32)}px 0 ${RFValue(32)}px;
    `}
`;
