import { SerializedApiError } from '@/app/domain/types';
import { AxiosError } from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isAxiosError(e: any): e is AxiosError {
  return e.isAxiosError;
}

export function createSerializedApiError(
  error: AxiosError,
): SerializedApiError {
  if (isAxiosError(error)) {
    const isNetworkError = !!error.isAxiosError && !error.response;

    if (isNetworkError)
      return {
        isSerializedApiError: true,
        status: 500,
        name: 'NetworkError',
        code: 'NETWORK_ERROR',
      };

    const { response } = error;

    return {
      isSerializedApiError: true,
      status: response?.status ?? 500,

      message: response?.data?.message,
    };
  }

  return { isSerializedApiError: true, status: 500, message: String(error) };
}
