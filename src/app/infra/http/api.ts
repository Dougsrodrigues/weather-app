import axios from 'axios';
import { createSerializedApiErrorInterceptor } from './utils/create-serialized-api-error-interceptor';

export const api = axios.create({
  baseURL: 'http://api.openweathermap.org',
});

api.interceptors.response.use(undefined, createSerializedApiErrorInterceptor);
