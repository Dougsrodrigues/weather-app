module.exports = function (api) {

  const babelEnv = api.env()

  const baseConfig = {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ts',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
          alias: {
            "@": "./src",
          }
        }
      ]
    ]
  }

  const isInTesting = babelEnv === 'test'

  if (isInTesting)
    return {
      ...baseConfig,
      plugins: [
        ...baseConfig.plugins,
        // Mock .env during testing
        'react-native-config-node/transform',
      ],
    }

  return {
    ...baseConfig,
    plugins: [...baseConfig.plugins,]
  };
};
