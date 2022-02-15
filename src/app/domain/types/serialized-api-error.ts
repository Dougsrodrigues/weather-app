export interface SerializedApiError {
  isSerializedApiError: true;
  status: number;
  name?: string;
  statusText?: string;
  stack?: string;
  code?: string;
}
