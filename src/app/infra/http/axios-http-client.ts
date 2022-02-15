import { AxiosInstance, AxiosResponse } from 'axios';
import { HttpClient, HttpRequest, HttpResponse } from '@/app/domain/types';

export class AxiosHttpClient implements HttpClient {
  constructor(private readonly api: AxiosInstance) {}

  async request(params: HttpRequest): Promise<HttpResponse> {
    let httpResponse: AxiosResponse;
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
