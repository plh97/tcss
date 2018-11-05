const path = require('path');

module.exports = {
  entry: './t.css',
  output: {
    filename: 'main.css',
    path: path.resolve(__dirname, 'dist')
  }
};