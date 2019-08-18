const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/js/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: './dist/',
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
        test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
              limit: 200000,
              fallback: 'file-loader',
              name: 'images/[name].[hash].[ext]'
          }
        },
      },
      {
        // test: que tipo de archivo quiero reconocer
        // use: que loader se va a encargar del archivo
        test: /\.(mp4|webm)$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
          options: {
              limit: 1000000,
              name: 'videos/[name].[hash].[ext]'
          }
        },
      },
      {
        // test: que tipo de archivo quiero reconocer
        // use: que loader se va a encargar del archivo
        type: 'javascript/auto',
        test: /\.json$/,
        exclude: /node_modules/,
        use: {
          loader: 'json-loader',
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
