const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
              presets:[['@babel/preset-env', {
                "targets": {"node": "current"}
              }]]
          }
        },
      },
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
