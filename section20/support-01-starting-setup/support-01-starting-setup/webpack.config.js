/* eslint-disable quotes */
const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'assets', 'scripts'),
    publicPath: 'assets/scripts/'
  },
  devtool: 'cheap-module-eval-source-map',
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

            presets: [ 
              [
                '@babel/preset-env',
                {useBuiltIns: 'usage', corejs: {version: 3}} // We are using core-js version 3.
              ]
            ] 
            // We are using @babel/preset-env to transpile our code to older version of javascript.
            // presets is a collection of plugins.
            // preset-env is a smart preset, it will only transpile code that is not supported by the browsers we want to support.
            // We will tell preset-env which browsers we want to support by using targets option.
            // It will automatically add polyfills to our code.
            // We will give browserslist config file to preset-env in package.json file.
          }
        }
      }
    ]
  }
};

/*
  "browserList": {
    "development": [
      "last 1 chrome version",
      "last 1 firefox version"
    ],
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ]
  }

  This means that we want to support last 1 chrome version and last 1 firefox version in development.
  And we want to support browsers that have more than 0.2% of market share in production.
  And we don't want to support dead browsers.
  And we don't want to support opera mini browser.

  You will see codes that are transpiled to var instead of const and let. (in the production mode)


  Core-js and polyfill and babel

  useBuiltIns: 'usage' option will automatically add polyfills to our code.
  But we need to install core-js to use polyfills.
  We have some other options to useBuiltin option.
  usage: This option will automatically add polyfills to our code.
  entry: This option will add all polyfills to our code.
  false: This option will not add polyfills to our code. We need to import polyfills manually.


  We need regenerator-runtime runtime support for transpiled async/await code. 
  // https://stackoverflow.com/questions/65378542/what-is-regenerator-runtime-npm-package-used-for

  We can install it by using npm install regenerator-runtime --save

  If we use like that, we dont need iport core-js in our code. Babel will automatically import core-js for us.

*/