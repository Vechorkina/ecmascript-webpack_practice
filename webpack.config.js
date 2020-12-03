const path = require('path');

module.exports = {
    mode: "development", //production- продакшн сборка//
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.txt$/,
          exclude: /node_modules/,
          use: "babel-loader"
        }
      ]
    }
  };