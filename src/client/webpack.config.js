const path = require('path');

module.exports = {
  entry: './client',
  output: {
    path: path.join(__dirname, '..', '..', 'dist', 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader'
      }
    ]
  },
  devtool: 'inline-source-map',
  externals: {
      'react': 'React',
      'react-dom': 'ReactDOM'
  }
}