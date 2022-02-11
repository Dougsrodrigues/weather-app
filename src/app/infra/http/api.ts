import axios from 'axios';
import { env } from '../env';
import { createSerializedApiErrorInterceptor } from './utils/create-serialized-api-error-interceptor';

export const api = axios.create({
  baseURL: env.BASE_URL,
});

api.interceptors.response.use(undefined, createSerializedApiErrorInterceptor);
