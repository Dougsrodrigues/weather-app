import { AxiosInstance } from 'axios';
import { HttpRequest } from '@/app/domain/types/http-interfaces';

export class AxiosHttpClient {
  constructor(private readonly api: AxiosInstance) {}

  async request(params: HttpRequest) {
    const { data } = await this.api.request({
      url: params.url,
      method: params.method,
      data: params.body,
      headers: params.headers,
    });

    return {
      data,
    };
  }
}
