import React, { FC, ReactElement } from 'react';
import { Wrapper } from './styles';

interface BoxShadowProps {
  children: ReactElement;
}
export const BoxShadow: FC<BoxShadowProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
