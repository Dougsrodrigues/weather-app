import { createSerializedApiError } from './create-serialized-api-error';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createSerializedApiErrorInterceptor(error: any) {
  return Promise.reject(createSerializedApiError(error));
}
