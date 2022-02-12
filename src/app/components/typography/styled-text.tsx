import React, { ComponentProps } from 'react';
import { StyleSheet, Text } from 'react-native';
import { useTheme } from 'styled-components/native';

interface StyledTextProps {
  family?: 'regular' | 'medium' | 'light' | 'semiBold';
  size?: 'extraLarge' | 'extraMedium' | 'extra' | 'large' | 'medium' | 'small';
  lineHeight?: 'small' | 'medium' | 'large';
  color?: string | undefined;
}

type Props = ComponentProps<typeof Text> & StyledTextProps;

function StyledText({
  family = 'regular',
  size = 'medium',
  lineHeight,
  color,
  style,
  ...rest
}: Props) {
  const theme = useTheme();

  const fontFamily = theme.fonts.families[family];
  const fontSize = theme.fonts.sizes[size];

  const height = lineHeight ? theme.fonts.lineHeight?.[lineHeight] : fontSize;

  const flattenedStyles = StyleSheet.flatten(style);

  return (
    <Text
      {...rest}
      style={[
        { fontFamily, fontSize, lineHeight: height, color },
        flattenedStyles,
      ]}
    />
  );
}

export { StyledText };
