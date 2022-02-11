import { UnauthorizedError } from '@/app/domain/errors/unauthorized-error';
import { UnexpectedError } from '@/app/domain/errors/unexpected-error';
import { AxiosHttpClient } from '@/app/infra/http/axios-http-client';
import { IGetCurrentWeather } from '../domain/use-cases/get-current-weather-interface';

export class GetCurrentWeatherUseCase implements IGetCurrentWeather {
  constructor(private readonly httpClient: AxiosHttpClient) {}

  async getCurrentWeather(lat: number, lon: number) {
    const endpoint = `/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b88706d5a4d240ea46e5a53314d25aae&&lang=pt_br`;

    const { httpResponse } = await this.httpClient.request({
      url: endpoint,
      method: 'get',
    });

    switch (httpResponse.status) {
      case 200:
        return httpResponse;
      case 401:
        throw new UnauthorizedError(httpResponse.statusText);

      default:
        throw new UnexpectedError(httpResponse.statusText);
    }
  }
}
