import axios from 'axios';
import { createSerializedApiErrorInterceptor } from './utils/createSerializedApiErrorInterceptor';

export const api = axios.create({
  baseURL: 'http://api.openweathermap.org',
});

api.interceptors.response.use(undefined, createSerializedApiErrorInterceptor);
