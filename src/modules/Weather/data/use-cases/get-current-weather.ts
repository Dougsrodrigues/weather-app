import { UnauthorizedError } from '@/app/domain/errors/unauthorized-error';
import { UnexpectedError } from '@/app/domain/errors/unexpected-error';
import { HttpClient, HttpStatusCode } from '@/app/domain/types';
import { env } from '@/app/infra/env';
import { IWeatherResponse } from '../../domain/types';
import { IGetCurrentWeather } from '../../domain/use-cases/get-current-weather-interface';

export class GetCurrentWeatherUseCase implements IGetCurrentWeather {
  constructor(private readonly httpClient: HttpClient<IWeatherResponse>) {}

  async getCurrentWeather(lat: number, lon: number): Promise<IWeatherResponse> {
    const endpoint = `/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${env.OPEN_WEATHER_API_KEY}&&lang=pt_br`;

    const { httpResponse } = await this.httpClient.request({
      url: endpoint,
      method: 'get',
    });

    switch (httpResponse.status) {
      case HttpStatusCode.ok:
        return httpResponse;
      case HttpStatusCode.unauthorized:
        throw new UnauthorizedError();

      default:
        throw new UnexpectedError();
    }
  }
}
