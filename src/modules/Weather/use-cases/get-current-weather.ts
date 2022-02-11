import { UnauthorizedError } from '@/app/domain/errors/unauthorized-error';
import { UnexpectedError } from '@/app/domain/errors/unexpected-error';
import { env } from '@/app/infra/env';
import { AxiosHttpClient } from '@/app/infra/http/axios-http-client';
import { IGetCurrentWeather } from '../domain/use-cases/get-current-weather-interface';

export class GetCurrentWeatherUseCase implements IGetCurrentWeather {
  constructor(private readonly httpClient: AxiosHttpClient) {}

  async getCurrentWeather(lat: number, lon: number) {
    const endpoint = `/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${env.OPEN_WEATHER_API_KEY}&&lang=pt_br`;

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
