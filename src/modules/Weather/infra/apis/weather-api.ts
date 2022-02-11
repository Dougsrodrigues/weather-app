import { api } from '../../../../app/infra/axios/api';

const getCurrentWeather = async (lat: number, lon: number) => {
  const endpoint = `/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b88706d5a4d240ea46e5a53314d25aae&&lang=pt_br`;

  const { data } = await api.get(endpoint);

  return data;
};

export const weatherApi = {
  getCurrentWeather,
};
