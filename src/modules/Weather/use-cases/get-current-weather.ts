/* eslint-disable import/no-duplicates */
import { useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { weatherApi } from '../infra/apis/weather-api';

const useGetWeather = (lat: number, long: number) => {
  const {
    data,
    isLoading,
    isFetching,
    refetch: handleRefreshAndGetWeather,
  } = useQuery(
    ['get-current-weather'],
    () => weatherApi.getCurrentWeather(lat, long),
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

export const useGetCurrentWeather = () => {
  const [location, setLocation] = useState({
    coords: {
      latitude: 0,
      longitude: 0,
    },
  });

  const { data, isLoading, handleRefreshAndGetWeather, isFetching } =
    useGetWeather(location.coords.latitude, location.coords.longitude);

  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissões foram negadas.');

      return;
    }
    const resp = await Location.getCurrentPositionAsync();

    setLocation(resp);
  };

  const formattedData = useMemo(() => {
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
      },
    };
  }, [data]);

  useEffect(() => {
    getLocation();
  }, []);

  return {
    location,
    data,
    isLoading,
    isFetching,
    handleRefreshAndGetWeather,
    formattedData,
  };
};
