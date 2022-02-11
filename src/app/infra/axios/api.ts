import Axios from 'axios';
import { createSerializedApiErrorInterceptor } from './utils/createSerializedApiErrorInterceptor';

export const api = Axios.create({
  baseURL: 'http://api.openweathermap.org',
});

api.interceptors.response.use(undefined, createSerializedApiErrorInterceptor);
