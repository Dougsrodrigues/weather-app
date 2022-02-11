import { AxiosError } from 'axios';
import { SerializedApiError } from '../../../domain/types';

export interface BaseErrorResponse {
  error: {
    statusCode: number;
    name?: string;
    message: string;
    status: number;
    code?: string;
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isAxiosError(e: any): e is AxiosError<BaseErrorResponse> {
  return e.isAxiosError;
}

export function createSerializedApiError(
  error: AxiosError<BaseErrorResponse>,
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

    const response = error.response?.data.error;

    return {
      isSerializedApiError: true,
      status: response?.status ?? 500,
      name: response?.name,
      message: response?.message,
      code: response?.code,
    };
  }

  return { isSerializedApiError: true, status: 500, message: String(error) };
}
