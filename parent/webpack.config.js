const path = require('path');

module.exports = {
  entry: "./build/index.js",
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/, use: 'css-loader'
      }
    ]
  }
};
