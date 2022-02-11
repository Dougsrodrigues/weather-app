export type HttpRequest = {
  url: string;
  method: HttpMethod;
  body?: any;
  headers?: any;
};

export type HttpMethod = 'post' | 'get' | 'put' | 'delete';
