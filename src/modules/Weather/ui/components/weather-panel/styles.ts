import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { ActivityIndicator } from 'react-native';
import { Icon } from '../../../../../app/components/Icon';
import { StyledText } from '../../../../../app/components/typography/StyledText';

export const Content = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: ${RFValue(16)}px;
  padding: ${RFValue(16)}px;
`;

export const IconStyled = styled(Icon)`
  color: ${({ theme }) => theme.colors.text_primary};
`;

export const Title = styled(StyledText).attrs(({ theme }) => ({
  size: 'extraMedium',
  color: theme.colors.text_primary,
}))`
  margin-top: ${RFValue(30)}px;
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

export const EmptyText = styled(StyledText).attrs(({ theme }) => ({
  color: theme.colors.text_primary,
}))<{ withMargin?: boolean }>`
  margin-top: ${RFValue(32)}px;
`;

export const Degrees = styled(StyledText).attrs(({ theme }) => ({
  size: 'extraMedium',
  color: theme.colors.text_primary,
}))`
  margin-top: ${RFValue(32)}px;
`;

export const Loading = styled(ActivityIndicator).attrs(({ theme }) => ({
  size: 'large',
  color: theme.colors.text_primary,
}))``;
