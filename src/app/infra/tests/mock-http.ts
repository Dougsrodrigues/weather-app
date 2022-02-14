import {
  HttpClient,
  HttpRequest,
  HttpResponse,
} from '@/app/domain/types/http-interfaces';

export class HttpClientSpy<R = any> implements HttpClient<R> {
  response: HttpResponse<R>;

  url = '';

  method = '';

  body = null;

  headers = null;

  async request(data: HttpRequest): Promise<HttpResponse<R>> {
    this.url = data.url;
    this.method = data.method;
    this.body = data.body;
    this.headers = data.headers;
    return this.response;
  }
}
