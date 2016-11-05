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
        presets: ["react", "es2015"]
      }
    }
  ],
  },
  watch: true
};
