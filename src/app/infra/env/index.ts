import Config from 'react-native-config';

function getEnv(name: string, isRequired = true) {
  const value = Config[name];

  if (isRequired && value === undefined)
    console.error(
      `Required environment variable ${name} not defined. Set it on .env to run the app.`,
    );

  return value;
}

export const env = {
  BASE_URL: getEnv('BASE_URL'),
  OPEN_WEATHER_API_KEY: getEnv('OPEN_WEATHER_API_KEY'),
};
