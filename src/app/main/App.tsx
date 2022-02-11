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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MakeWeather } from '@/modules/weather/main/factories/weather-factory';
import themes from '../themes';

import weather from '../assets/fonts/weather.ttf';

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
  const Stack = createNativeStackNavigator();
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={{ ...typography, ...theme }}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={MakeWeather}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
