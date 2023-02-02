const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        // library: '[name]',
        // libraryTarget: 'module',
        globalObject: 'window',
        library: ["window", "[name]"],
        libraryTarget: "var"
    },
    devServer: {
        port: 7107,
        headers: {
        'Access-Control-Allow-Origin': '*',
        },
    },
};