const path = require('path');
const PragmaLibraryPlugin = require('./plugins/PragmaLibraryPlugin');

const env = process.env.NODE_ENV;

module.exports = {
    mode: env || 'development',
    devtool: false,
    entry: {
        bundle: path.resolve(__dirname, 'libs/index.js'),
    },
    output: {
        path: __dirname,
        filename: '[name].js',
        library: 'modules'
    },
    plugins: [
        new PragmaLibraryPlugin()
    ]
};
