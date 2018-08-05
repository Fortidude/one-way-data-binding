const path = require('path');

module.exports = {
    entry: {
        app: [
            'babel-polyfill',
            './src/app.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: 'app.js'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2017', 'stage-0']
                }
            }
        ]
    }
}