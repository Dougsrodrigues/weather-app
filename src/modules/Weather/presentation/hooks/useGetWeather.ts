/* eslint-disable import/no-duplicates */
import { useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { Alert } from 'react-native';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ILocation } from '@/app/domain/types/expo-location';
import { IGetCurrentWeather } from '../../domain/use-cases/get-current-weather-interface';

const useGetCurrentWeather = (
  lat: number,
  long: number,
  getWeatherUseCase: IGetCurrentWeather,
) => {
  const {
    data,
    isLoading,

    isFetching,
    refetch: handleRefreshAndGetWeather,
  } = useQuery(
    ['get-current-weather'],
    () => getWeatherUseCase.getCurrentWeather(lat, long),
    {
      enabled: lat !== 0 && long !== 0,
    },
  );

  return {
    data,
    isLoading,
    isFetching,
    handleRefreshAndGetWeather,
  };
};

export const useGetWeather = (
  getWeatherUseCase: IGetCurrentWeather,
  remoteLocation: ILocation,
) => {
  const [location, setLocation] = useState({
    coords: {
      latitude: 0,
      longitude: 0,
    },
  });

  const getLocation = async () => {
    const { status } = await remoteLocation.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('Permissões foram negadas.');

      return;
    }
    const resp = await remoteLocation.getCurrentPositionAsync();

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
