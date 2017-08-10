const utils = require('./utils')
utils.createFolder(`${__dirname}/www/dist/`)

module.exports = {
  entry: ['babel-polyfill', `${__dirname}/src/index.js`],
  output: {
    path: `${__dirname}/www/dist/`,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/i,
        exclude: `${__dirname}/node_modules`,
        options: {
          presets: ['es2015', 'react', 'stage-1']
        }
      },
      {
        loader: 'style-loader!css-loader',
        test: /\.css$/i
      }
    ]
  }
}
