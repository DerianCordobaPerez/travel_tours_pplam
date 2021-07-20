module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx',
          ],
          root: ['./'],
          alias: {
            '~': './src',
            '@components': './src/components',
            '@screens': './src/screens',
            '@assets': './src/assets',
            '@screens': './src/screens',
            '@constants': './src/constants',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  }
}
