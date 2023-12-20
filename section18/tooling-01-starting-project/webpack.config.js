/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable max-len */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
// eslint-disable-next-line max-len
const path = require('path'); // path is a core module, no need to install it. It's used to create a path to the file we want to use
const cleanPlugin = require('clean-webpack-plugin'); // clean-webpack-plugin is used to clean the dist folder before creating a new bundle.js file

module.exports = {
    mode: 'development', // development or production, default is production. In development mode, the code is not minified
    entry: {
        mainPage: './src/app.js' // That's my entry point
    },
    output: {
        filename: 'app.js', // default name is bundle.js
        path: path.resolve(__dirname, 'assets', 'scripts'), // __dirname is a global variable that holds the absolute path to the current folder
        publicPath: 'assets/scripts/' // the path where the files are stored in the server
    },
    devtool: 'cheap-module-eval-source-map', // this is the default value, it's used to map the code to the original code. We can use it to debug the code
    // We can use other values like: eval, cheap-eval-source-map, cheap-module-source-map, eval-source-map, etc.
    pulgins: [
        new cleanPlugin.CleanWebpackPlugin() // CleanWebpackPlugin() is a constructor function, so we need to instantiate it
    ]
};