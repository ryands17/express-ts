const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = ['./src/index.ts']

    config.resolve = {
      extensions: ['.ts', '.js', '.json'],
      plugins: [new TsconfigPathsPlugin()],
    }

    config.module.rules.push({
      test: /\.ts$/,
      use: [
        {
          loader: 'ts-loader',
        },
      ],
    })

    return config
  },
}
