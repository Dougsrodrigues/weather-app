export interface SerializedApiError {
  isSerializedApiError: true;
  status: number;
  name?: string;
  message?: string;
  stack?: string;
  code?: string;
}
