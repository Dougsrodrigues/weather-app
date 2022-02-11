import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const WeatherHeaderInfoList = styled.FlatList`
  background-color: ${({ theme }) => theme.colors.secondary};
` as unknown as typeof FlatList;
