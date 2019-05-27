const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js' 
  },
  module: {
    //aquí van los loaders
    rules: [
      {
        // test: que tipo de archivo quiero reconocer
        // use: que loader se va a encargar del archivo
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
