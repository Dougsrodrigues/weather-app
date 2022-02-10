import React, { FC } from 'react';
import { Content } from './styles';

interface RowProps {
  children: React.ReactNode;
}
export const Row: FC<RowProps> = ({ children }) => {
  return <Content>{children}</Content>;
};
