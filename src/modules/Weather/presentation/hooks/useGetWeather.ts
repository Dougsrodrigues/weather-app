/* eslint-disable import/no-duplicates */
import { useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { IGetCurrentWeather } from '../../domain/use-cases/get-current-weather-interface';

const useGetCurrentWeather = (
  lat: number,
  long: number,
  getWeatherUseCase: IGetCurrentWeather,
) => {
  const {
    data,
    isLoading,
    isError,
    status,
    isFetching,
    refetch: handleRefreshAndGetWeather,
  } = useQuery(
    ['get-current-weather'],
    () => getWeatherUseCase.getCurrentWeather(lat, long),
    {
      enabled: lat !== 0 && long !== 0,
    },
  );

  console.log({ isError, status });

  return {
    data,
    isLoading,
    isFetching,
    handleRefreshAndGetWeather,
  };
};

export const useGetWeather = (getWeatherUseCase: IGetCurrentWeather) => {
  const [location, setLocation] = useState({
    coords: {
      latitude: 0,
      longitude: 0,
    },
  });

  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissões foram negadas.');

      return;
    }
    const resp = await Location.getCurrentPositionAsync();

    setLocation(resp);
  };

  const { data, isLoading, handleRefreshAndGetWeather, isFetching } =
    useGetCurrentWeather(
      location.coords.latitude,
      location.coords.longitude,
      getWeatherUseCase,
    );

  const formattedData = useMemo(() => {
    if (data?.status !== 200) return null;

    return {
      city: data?.name,
      today: format(new Date(), `EEEE, dd 'de ' MMMM`, {
        locale: ptBR,
      }),
      weather: {
        temperature: `${String(data?.main.temp).slice(0, 2)} c`,
        maxTemperature: `${String(data?.main.temp_max).slice(0, 2)} c`,
        minTemperature: `${String(data?.main.temp_min).slice(0, 2)} c`,
        humidity: `${data?.main?.humidity}%`,
        icon: data?.weather[0].icon,
      },
    };
  }, [data]);

  useEffect(() => {
    getLocation();
  }, []);

  return {
    data,
    isLoading,
    isFetching,
    handleRefreshAndGetWeather,
    formattedData,
  };
};
