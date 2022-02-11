import { createSerializedApiError } from './createSerializedApiError';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createSerializedApiErrorInterceptor(error: any) {
  return Promise.reject(createSerializedApiError(error));
}
