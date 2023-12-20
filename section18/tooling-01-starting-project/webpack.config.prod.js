/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable max-len */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
// eslint-disable-next-line max-len
const path = require('path'); // path is a core module, no need to install it. It's used to create a path to the file we want to use
const cleanPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        mainPage: './src/app.js' // That's my entry point
    },
    output: {
        filename: '[contenthash].js', // default name is bundle.js. [contenthash] is used to generate a unique hash for the file
        path: path.resolve(__dirname, 'assets', 'scripts'), // __dirname is a global variable that holds the absolute path to the current folder
        publicPath: 'assets/scripts/' // the path where the files are stored in the server
    },
    devtool: 'cheap-source-map', // difference between cheap-source-map and cheap-module-source-map is that the second one shows the original code in the console
    plugins: [
        new cleanPlugin.CleanWebpackPlugin() // CleanWebpackPlugin() is a constructor function, so we need to instantiate it
    ]
};