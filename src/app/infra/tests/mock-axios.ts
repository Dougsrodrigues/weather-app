import axios from 'axios';
import faker from 'faker';

export const mockHttpResponse = (status = faker.random.number()) => ({
  ...faker.random.objectElement(),
  status,
});

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  mockedAxios.request.mockClear().mockResolvedValue(mockHttpResponse());

  return mockedAxios;
};
