import { AxiosInstance, AxiosResponse } from 'axios';
import { HttpRequest } from '@/app/domain/types/http-interfaces';

export class AxiosHttpClient {
  constructor(private readonly api: AxiosInstance) {}

  async request(params: HttpRequest) {
    let httpResponse: AxiosResponse<any>;
    try {
      const { data, status } = await this.api.request({
        url: params.url,
        method: params.method,
        data: params.body,
        headers: params.headers,
      });
      httpResponse = { ...data, status };
    } catch (error) {
      httpResponse = error;
    }

    return {
      httpResponse,
    };
  }
}
