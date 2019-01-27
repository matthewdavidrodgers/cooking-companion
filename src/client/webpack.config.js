const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
  new HtmlWebpackPlugin({
    title: 'Cooking Companion',
    template: './index.html',
    inject: 'body'
  })
];

module.exports = {
  entry: './client.tsx',
  output: {
    path: path.join(__dirname, '..', '..', 'dist', 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  module: {
    rules: [{
      test: /\.(ts|js)x?$/,
      use: 'babel-loader'
    }]
  },
  devtool: 'source-map',
  plugins
}