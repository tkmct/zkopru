const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './dist/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'browser'),
  },
  module: {
    rules: [
      {
        test: /JSONStream\/index\.js$/,
        use: 'shebang-loader',
      },
    ],
  },
  resolve: {
    fallback: {
      stream: require.resolve('stream-browserify'),
      path: require.resolve('path-browserify'),
      crypto: require.resolve('crypto-browserify'),
      url: require.resolve('url/'),
      child_process: false,
      assert: require.resolve('assert/'),
      fs: false,
      npm: false,
      zlib: require.resolve('browserify-zlib'),
      https: require.resolve('https-browserify'),
      http: require.resolve('stream-http'),
      os: require.resolve('os-browserify/browser'),
      constants: require.resolve('constants-browserify'),
      worker_threads: false,
      net: false,
      tls: false,
      'aws-sdk': false,
      dns: false,
      'pg-native': false,
      readline: false,
      'node-gyp': false,
      'node-pre-gyp': false,
      'node-docker-api': false,
      prompts: false,
      buffer: require.resolve('buffer/'),
    },
  },
  externals: {
    sqlite3: {},
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.title': '"browser"',
    }),
    new webpack.DefinePlugin({
      'process.env': {},
      'process.argv': [],
      'process.versions': {},
      'process.versions.node': '"12"',
      process: {},
    }),
    new webpack.ProvidePlugin({
      Buffer: path.resolve(__dirname, 'buffer.js'),
    }),
  ],
}
