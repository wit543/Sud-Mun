const webpack = require("webpack");
const path = require("path");
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'eval-cheap-module-source-map',
  entry: [
    './src/index.js'
  ],
  output: {
    publicPath: "/static/",
    path: path.join(__dirname, "static"),
    filename: "bundle.js"
  },
  module: {
    loaders:[

      { test: /\.js$/, loader: 'babel', query: {compact: false} },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
      { test: /\.json$/, loader: 'json-loader'},
      {test: /\.scss$/,loaders: ['style', 'css', 'sass','postcss']}
    ]
  },
  plugins: [
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
  })
],
  postcss:function () {
    return [autoprefixer];
  },
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api/*': {
        target: 'http://localhost:5000'
      }
    }
  },
};
// {test: /\.js$/,loaders: ['babel?cacheDirectory'],exclude: /(node_modules|bower_components)/,},
