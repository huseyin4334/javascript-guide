/* eslint-disable quotes */
const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/app.js',
  output: {
    filename: '[contenthash].js',
    path: path.resolve(__dirname, 'assets', 'scripts'),
    publicPath: 'assets/scripts/'
  },
  devtool: 'cheap-source-map',
  // devServer: {
  //   contentBase: './'
  // }
  plugins: [
    new CleanPlugin.CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/, // m is for module, js is for javascript files.
        exclude: /node_modules/, // We don't want to transpile node_modules folder.
        use: {
          loader: "babel-loader", // We are using babel-loader to transpile our code.
          options: {
            // We can configure babel-loader with options.
            // Options are the same as .babelrc file.

            presets: ['@babel/preset-env'] 
            // We are using @babel/preset-env to transpile our code to older version of javascript.
            // presets is a collection of plugins.
          }
        }
      }
    ]
  }
};