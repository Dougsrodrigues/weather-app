import React from 'react';
import {
  useFonts,
  RobotoSlab_300Light,
  RobotoSlab_500Medium,
  RobotoSlab_400Regular,
  RobotoSlab_600SemiBold,
} from '@expo-google-fonts/roboto-slab';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native';
import { useColorScheme } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { QueryClient, QueryClientProvider } from 'react-query';
import themes from './themes';

import weather from './assets/fonts/weather.ttf';
import { WeatherScreen } from '../modules/Weather/ui/screens/weather';

const queryClient = new QueryClient();

export default function App() {
  const deviceTheme = useColorScheme();
  const { typography } = themes;
  const theme = themes[deviceTheme] || themes.dark;

  const [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_500Medium,
    RobotoSlab_300Light,
    RobotoSlab_600SemiBold,
    weather,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={{ ...typography, ...theme }}>
        <SafeAreaProvider>
          <WeatherScreen />
        </SafeAreaProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
