module.exports = {
  entry: './client.js',

  output: {
    path: 'public',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ["react", "es2015", "stage-2"],
        plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
      {
        test: /\.scss$/,
        loader: ['style', 'css', 'sass'],
      }
    ],
  },
  watch: true
};
