import { cleanup } from '@testing-library/react-native';

jest.mock('axios');

afterEach(cleanup);

beforeEach(() => {
  jest.clearAllMocks();
});
