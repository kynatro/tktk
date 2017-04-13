/* global __dirname */
var path = require('path');

module.exports = {
  entry: "./source/tktk.js",
  output: {
    filename: "tktk.js",
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                'env',
                {
                  "targets": {
                    "browsers": ["last 2 versions", "safari >= 7"]
                  }
                }
              ]
            ]
          }
        }
      }
    ]
  }
};
