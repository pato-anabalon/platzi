const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js'),
    precios: path.resolve(__dirname, 'src/js/precios.js'),
    contacto: path.resolve(__dirname, 'src/js/contacto.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js' 
  },
  module: {
    //aquí van los loaders
    rules: [
      {
        // test: que tipo de archivo quiero reconocer
        // use: que loader se va a encargar del archivo
        test: /\.css$/,
        // use: ['style-loader', 'css-loader']
        use: ExtractTextPlugin.extract({
          // fallback: 'style-loader',
          use: "css-loader"
        }),
      }
    ]
  },
  plugins: [
    //aquí van los plugin
    new ExtractTextPlugin("css/[name].css"),
  ]
}
